import { X, ExternalLink, Calendar, User, TrendingUp, Code, Quote, CheckCircle2, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "motion/react";

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
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

export function ProjectDetailsModal({ isOpen, onClose, project }: ProjectDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1a2332]/60 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl my-8 bg-white/90 backdrop-blur-3xl rounded-3xl shadow-[0_40px_120px_-20px_rgba(26,35,50,0.4)] border-2 border-white/90 max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-3xl border-b-2 border-white/90 px-8 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Badge className="mb-3 bg-[#6B8BC3]/10 text-[#6B8BC3] border-2 border-[#6B8BC3]/20 px-4 py-1.5 rounded-full !font-medium">
                      {CATEGORY_LABELS[project.category] ?? project.category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl !font-semibold text-[#1a2332] mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#5A6A7F]">
                      {project.clientName && (
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{project.clientName}</span>
                        </div>
                      )}
                      {project.duration && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="rounded-full hover:bg-[#1a2332]/10 flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto px-8 py-8 space-y-8">
                {/* Hero Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-video shadow-[0_20px_60px_-20px_rgba(26,35,50,0.25)]">
                  <img
                    src={project.resolvedImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Problem Statement */}
                {project.problemStatement && (
                  <div className="bg-gradient-to-br from-[#FEF3F2] to-[#FEE4E2] border-2 border-orange-200/50 rounded-2xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl !font-semibold text-[#1a2332] mt-1">The Challenge</h3>
                    </div>
                    <p className="text-[#5A6A7F] leading-relaxed pl-13">
                      {project.problemStatement}
                    </p>
                  </div>
                )}

                {/* Key Metrics */}
                {Array.isArray(project.metrics) && project.metrics.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl !font-semibold text-[#1a2332]">Key Metrics & Impact</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="bg-white/90 backdrop-blur-3xl border-2 border-white/90 rounded-2xl p-6 shadow-[0_12px_40px_-12px_rgba(26,35,50,0.2)] hover:shadow-[0_16px_48px_-12px_rgba(26,35,50,0.3)] transition-shadow"
                        >
                          <div className="text-3xl !font-bold text-[#1a2332] mb-2">
                            {metric.value}
                          </div>
                          <div className="text-sm !font-semibold text-[#6B8BC3] mb-1">
                            {metric.label}
                          </div>
                          {metric.description && (
                            <div className="text-xs text-[#5A6A7F] leading-relaxed">
                              {metric.description}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                <div>
                  <h3 className="text-xl !font-semibold text-[#1a2332] mb-3">Overview</h3>
                  <p className="text-[#5A6A7F] leading-relaxed">
                    {project.fullDescription || project.description}
                  </p>
                </div>

                {/* Technical Approach */}
                {project.technicalApproach && (
                  <div className="bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] border-2 border-indigo-200/50 rounded-2xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl !font-semibold text-[#1a2332] mt-1">Technical Approach</h3>
                    </div>
                    <p className="text-[#5A6A7F] leading-relaxed pl-13">
                      {project.technicalApproach}
                    </p>
                  </div>
                )}

                {/* Project Timeline */}
                {Array.isArray(project.timeline) && project.timeline.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl !font-semibold text-[#1a2332]">Project Timeline</h3>
                    </div>
                    <div className="relative space-y-6">
                      {/* Timeline line */}
                      <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-purple-500 to-violet-600" />

                      {project.timeline.map((phase, index) => (
                        <div key={index} className="relative flex gap-6">
                          {/* Timeline dot */}
                          <div className="relative flex-shrink-0">
                            <div className="w-10 h-10 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center shadow-lg">
                              <CheckCircle2 className="w-5 h-5 text-purple-600" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 bg-white/90 backdrop-blur-3xl border-2 border-white/90 rounded-2xl p-5 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.15)]">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="!font-semibold text-[#1a2332]">{phase.phase}</h4>
                              {phase.duration && (
                                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                                  {phase.duration}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-[#5A6A7F] leading-relaxed">
                              {phase.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                  <div>
                    <h3 className="text-xl !font-semibold text-[#1a2332] mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/85 backdrop-blur-3xl text-[#1a2332] text-sm rounded-full !font-medium border-2 border-white/90 shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {Array.isArray(project.features) && project.features.length > 0 && (
                  <div>
                    <h3 className="text-xl !font-semibold text-[#1a2332] mb-4">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-[#5A6A7F]">
                          <div className="w-2 h-2 rounded-full bg-[#6B8BC3] mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Additional Images */}
                {Array.isArray(project.images) && project.images.length > 0 && (
                  <div>
                    <h3 className="text-xl !font-semibold text-[#1a2332] mb-4">Gallery</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-2xl aspect-video shadow-[0_12px_40px_-12px_rgba(26,35,50,0.2)]"
                        >
                          <img
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Videos */}
                {Array.isArray(project.videos) && project.videos.length > 0 && (
                  <div>
                    <h3 className="text-xl !font-semibold text-[#1a2332] mb-4">Videos</h3>
                    <div className="space-y-4">
                      {project.videos.map((video, index) => (
                        <div key={index}>
                          {video.title && (
                            <p className="text-sm !font-medium text-[#1a2332] mb-2">{video.title}</p>
                          )}
                          <div className="relative overflow-hidden rounded-2xl aspect-video shadow-[0_12px_40px_-12px_rgba(26,35,50,0.2)]">
                            <video
                              src={video.url}
                              controls
                              className="w-full h-full"
                              poster={project.resolvedImage}
                            >
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges */}
                {Array.isArray(project.challenges) && project.challenges.length > 0 && (
                  <div>
                    <h3 className="text-xl !font-semibold text-[#1a2332] mb-4">Challenges & Solutions</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3 text-[#5A6A7F]">
                          <div className="w-2 h-2 rounded-full bg-[#6B8BC3] mt-2 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Results */}
                {Array.isArray(project.results) && project.results.length > 0 && (
                  <div>
                    <h3 className="text-xl !font-semibold text-[#1a2332] mb-4">Results & Impact</h3>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3 text-[#5A6A7F]">
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Client Testimonial */}
                {project.testimonial && (
                  <div className="bg-gradient-to-br from-[#6B8BC3]/5 via-white to-[#8BA3C7]/5 border-2 border-[#6B8BC3]/20 rounded-3xl p-8 relative overflow-hidden">
                    {/* Quote decoration */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="w-24 h-24 text-[#6B8BC3]" />
                    </div>

                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#6B8BC3] to-[#8BA3C7] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          {project.testimonial.avatar ? (
                            <img
                              src={project.testimonial.avatar}
                              alt={project.testimonial.author}
                              className="w-full h-full object-cover rounded-2xl"
                            />
                          ) : (
                            <User className="w-8 h-8 text-white" />
                          )}
                        </div>
                        <div>
                          <div className="!font-semibold text-[#1a2332] text-lg">
                            {project.testimonial.author}
                          </div>
                          <div className="text-sm text-[#5A6A7F]">
                            {project.testimonial.role}
                            {project.clientName && ` • ${project.clientName}`}
                          </div>
                        </div>
                      </div>

                      <blockquote className="relative">
                        <Quote className="w-8 h-8 text-[#6B8BC3] mb-3 opacity-50" />
                        <p className="text-lg text-[#1a2332] leading-relaxed italic pl-2">
                          "{project.testimonial.quote}"
                        </p>
                      </blockquote>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="sticky bottom-0 bg-white/95 backdrop-blur-3xl border-t-2 border-white/90 px-8 py-6">
                <div className="flex flex-wrap gap-3">
                  {project.projectUrl && (
                    <Button
                      size="lg"
                      className="flex-1 rounded-full py-6 bg-[#1a2332] hover:bg-[#2a3444] shadow-[0_12px_40px_-8px_rgba(26,35,50,0.35)] hover:shadow-[0_16px_48px_-8px_rgba(26,35,50,0.45)] transition-all text-white !font-medium"
                      onClick={() => window.open(project.projectUrl, "_blank")}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Visit Live Project
                    </Button>
                  )}
                  {project.caseStudyUrl && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1 rounded-full py-6 border-2 border-[#1a2332]/20 bg-white/90 backdrop-blur-3xl hover:bg-white hover:border-[#1a2332]/30 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.2)] transition-all text-[#1a2332] !font-medium"
                      onClick={() => window.open(project.caseStudyUrl, "_blank")}
                    >
                      Read Case Study
                    </Button>
                  )}
                  {!project.projectUrl && !project.caseStudyUrl && (
                    <Button
                      size="lg"
                      className="flex-1 rounded-full py-6 bg-[#1a2332] hover:bg-[#2a3444] shadow-[0_12px_40px_-8px_rgba(26,35,50,0.35)] transition-all text-white !font-medium"
                      onClick={() => {
                        onClose();
                        setTimeout(() => {
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      }}
                    >
                      Get in Touch
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
