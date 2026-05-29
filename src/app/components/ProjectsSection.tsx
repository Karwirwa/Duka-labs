import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { sanityFetch, imageUrl } from "../../lib/sanity";
import { ProjectDetailsModal } from "./ProjectDetailsModal";

interface SanityProject {
  _id: string;
  title: string;
  category: string;
  description: string;
  mainImage?: { asset: { _ref: string } };
  technologies?: string[];
  features?: string[];
  projectUrl?: string;
  caseStudyUrl?: string;
  slug?: { current: string };
  featured?: boolean;
  clientName?: string;
  duration?: string;
  images?: { asset: { _ref: string } }[];
  videos?: { url: string; title?: string }[];
  fullDescription?: string;
  results?: string[];
  challenges?: string[];
  problemStatement?: string;
  technicalApproach?: string;
  timeline?: { phase: string; description: string; duration?: string }[];
  metrics?: { label: string; value: string; description?: string }[];
  testimonial?: { quote: string; author: string; role: string; avatar?: { asset: { _ref: string } } };
}

const CATEGORY_LABELS: Record<string, string> = {
  ecommerce: "Ecommerce",
  management: "Management System",
  mobile: "Mobile Platform",
  saas: "SaaS Solution",
  enterprise: "Enterprise System",
  automation: "Automation",
  network: "Network Management",
};

const FALLBACK_PROJECTS: DisplayProject[] = [
  {
    _id: "1",
    title: "Retail Operations Platform",
    category: "management",
    description: "Comprehensive business management system with inventory, analytics, and multi-location support for retail chain.",
    resolvedImage: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    technologies: ["React", "Node.js", "PostgreSQL", "Analytics"],
    features: ["Real-time analytics", "Multi-location", "Staff management"],
    projectUrl: undefined,
    caseStudyUrl: undefined,
    clientName: undefined,
    duration: undefined,
    images: [],
    videos: [],
    fullDescription: undefined,
    results: [],
    challenges: [],
    problemStatement: undefined,
    technicalApproach: undefined,
    timeline: [],
    metrics: [],
    testimonial: undefined,
  },
  {
    _id: "2",
    title: "Fashion Commerce Platform",
    category: "ecommerce",
    description: "Enterprise ecommerce platform with advanced inventory, customer management, and integrated payment systems.",
    resolvedImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    technologies: ["Next.js", "Stripe", "M-Pesa", "API"],
    features: ["Payment gateway", "Order management", "Customer portal"],
    projectUrl: undefined,
    caseStudyUrl: undefined,
    clientName: undefined,
    duration: undefined,
    images: [],
    videos: [],
    fullDescription: undefined,
    results: [],
    challenges: [],
    problemStatement: undefined,
    technicalApproach: undefined,
    timeline: [],
    metrics: [],
    testimonial: undefined,
  },
  {
    _id: "3",
    title: "Hospitality Connectivity Suite",
    category: "network",
    description: "WiFi management platform with billing automation, user analytics, and customer engagement tools.",
    resolvedImage: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    technologies: ["Laravel", "MySQL", "M-Pesa"],
    features: ["Billing automation", "Analytics dashboard", "User portal"],
    projectUrl: undefined,
    caseStudyUrl: undefined,
    clientName: undefined,
    duration: undefined,
    images: [],
    videos: [],
    fullDescription: undefined,
    results: [],
    challenges: [],
    problemStatement: undefined,
    technicalApproach: undefined,
    timeline: [],
    metrics: [],
    testimonial: undefined,
  },
];

const PROJECT_QUERY = `*[_type == "project"] | order(sortOrder asc, _createdAt desc) {
  _id,
  title,
  category,
  description,
  mainImage { asset { _ref } },
  technologies,
  features,
  projectUrl,
  caseStudyUrl,
  slug,
  featured,
  clientName,
  duration,
  images[] { asset { _ref } },
  videos[] { url, title },
  fullDescription,
  results,
  challenges,
  problemStatement,
  technicalApproach,
  timeline[] { phase, description, duration },
  metrics[] { label, value, description },
  testimonial { quote, author, role, avatar { asset { _ref } } }
}`;

type DisplayProject = {
  _id: string;
  title: string;
  category: string;
  description: string;
  resolvedImage: string;
  technologies?: string[];
  features?: string[];
  projectUrl?: string;
  caseStudyUrl?: string;
  clientName?: string;
  duration?: string;
  images?: string[];
  videos?: { url: string; title?: string }[];
  fullDescription?: string;
  results?: string[];
  challenges?: string[];
  problemStatement?: string;
  technicalApproach?: string;
  timeline?: { phase: string; description: string; duration?: string }[];
  metrics?: { label: string; value: string; description?: string }[];
  testimonial?: { quote: string; author: string; role: string; avatar?: string };
};

export function ProjectsSection() {
  const [projects, setProjects] = useState<DisplayProject[]>(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);
  const [usingCms, setUsingCms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<DisplayProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("[ProjectsSection] Fetching from Sanity CMS...");
    sanityFetch<SanityProject[]>(PROJECT_QUERY)
      .then((data) => {
        console.log("[ProjectsSection] Sanity response:", data);
        if (data && data.length > 0) {
          const mapped: DisplayProject[] = data.map((p) => ({
            _id: p._id,
            title: p.title,
            category: p.category,
            description: p.description,
            resolvedImage: p.mainImage?.asset?._ref
              ? imageUrl(p.mainImage.asset._ref)
              : FALLBACK_PROJECTS[0].resolvedImage,
            technologies: p.technologies ?? [],
            features: p.features ?? [],
            projectUrl: p.projectUrl,
            caseStudyUrl: p.caseStudyUrl,
            clientName: p.clientName,
            duration: p.duration,
            images: p.images?.map((img) => imageUrl(img.asset._ref)) ?? [],
            videos: p.videos ?? [],
            fullDescription: p.fullDescription,
            results: p.results ?? [],
            challenges: p.challenges ?? [],
            problemStatement: p.problemStatement,
            technicalApproach: p.technicalApproach,
            timeline: p.timeline ?? [],
            metrics: p.metrics ?? [],
            testimonial: p.testimonial ? {
              quote: p.testimonial.quote,
              author: p.testimonial.author,
              role: p.testimonial.role,
              avatar: p.testimonial.avatar?.asset?._ref ? imageUrl(p.testimonial.avatar.asset._ref) : undefined,
            } : undefined,
          }));
          console.log(`[ProjectsSection] Successfully loaded ${mapped.length} projects from CMS`);
          setProjects(mapped);
          setUsingCms(true);
          setError(null);
        } else {
          console.log("[ProjectsSection] No projects returned, using fallback");
          setError("No projects found in CMS");
        }
      })
      .catch((error) => {
        console.error("[ProjectsSection] Sanity fetch error:", error);
        setError(error.message || "Failed to load from CMS");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-28 md:py-40 bg-gradient-to-br from-[#D4E1F5] to-[#E8EEF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 px-5 py-2.5 rounded-full text-sm font-medium">
            Featured Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 !font-semibold text-[#1a2332]">
            Powering <span className="text-[#6B8BC3]">Business Growth</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#5A6A7F] max-w-3xl mx-auto leading-relaxed">
            Enterprise systems built for African businesses across industries
          </p>
          {loading && (
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-[#5A6A7F]">
              <Loader2 className="w-4 h-4 animate-spin" />
              Connecting to Sanity CMS...
            </div>
          )}
          {!loading && usingCms && (
            <p className="mt-4 text-sm text-green-600 font-medium">
              ✓ Live data from Sanity CMS ({projects.length} projects)
            </p>
          )}
          {!loading && !usingCms && error && (
            <p className="mt-4 text-sm text-orange-600">
              Using fallback data - {error}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-[0_35px_110px_-20px_rgba(26,35,50,0.4)] transition-all duration-500 bg-white/85 backdrop-blur-3xl border-2 border-white/90 rounded-3xl shadow-[0_20px_60px_-20px_rgba(26,35,50,0.25)]">
                <div className="relative overflow-hidden aspect-video rounded-t-3xl">
                  <img
                    src={project.resolvedImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332]/70 via-[#1a2332]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Badge className="absolute top-6 left-6 bg-white/85 backdrop-blur-3xl text-[#1a2332] shadow-[0_8px_32px_-8px_rgba(26,35,50,0.25)] px-4 py-2 rounded-full font-medium border-2 border-white/90">
                    {CATEGORY_LABELS[project.category] ?? project.category}
                  </Badge>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="mb-3 text-xl !font-semibold text-[#1a2332]">{project.title}</h3>
                  <p className="text-sm text-[#5A6A7F] mb-5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-white/85 backdrop-blur-3xl text-[#1a2332] text-xs rounded-full font-medium border-2 border-white/90 shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {project.features?.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#5A6A7F]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6B8BC3]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-full py-5 border-2 border-[#1a2332]/20 bg-white/90 backdrop-blur-3xl hover:bg-white hover:border-[#1a2332]/30 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.2)] transition-all text-[#1a2332] !font-medium"
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 rounded-full py-5 bg-[#1a2332] hover:bg-[#2a3444] shadow-[0_12px_40px_-8px_rgba(26,35,50,0.35)] hover:shadow-[0_16px_48px_-8px_rgba(26,35,50,0.45)] transition-all text-white !font-medium"
                      onClick={() => {
                        if (project.caseStudyUrl) {
                          window.open(project.caseStudyUrl, "_blank");
                        } else {
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="group rounded-full px-8 py-6 text-base border-2 border-white/90 bg-white/80 backdrop-blur-3xl hover:bg-white/95 transition-all shadow-[0_8px_32px_-8px_rgba(26,35,50,0.2)]"
          >
            Explore Our Portfolio
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
          project={selectedProject}
        />
      )}
    </section>
  );
}
