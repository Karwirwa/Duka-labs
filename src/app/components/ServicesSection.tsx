import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ShoppingCart,
  BarChart3,
  Wifi,
  Smartphone,
  Cloud,
  Code,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ServiceDetailsModal } from "./ServiceDetailsModal";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      icon: ShoppingCart,
      title: "Business Websites",
      description:
        "Professional ecommerce platforms, company sites, and customer portals built for conversion and growth.",
      features: [
        "Ecommerce platforms",
        "Company websites",
        "Customer portals",
        "Booking systems",
        "Payment integration",
      ],
      pricing: "From KSh 25,000",
      gradient: "from-[#6B8BC3] to-[#8BA3C7]",
      detailedDescription:
        "We build modern, fast, and conversion-optimized websites that help you establish a strong online presence and drive business growth. Every website is mobile-responsive, SEO-friendly, and designed to convert visitors into customers.",
      packages: [
        {
          name: "Starter",
          price: "KSh 25,000",
          description: "Perfect for small businesses",
          features: [
            "Up to 5 pages",
            "Mobile responsive design",
            "Contact form",
            "Social media integration",
            "Basic SEO setup",
            "1 month support",
          ],
        },
        {
          name: "Professional",
          price: "KSh 50,000",
          description: "For growing businesses",
          recommended: true,
          features: [
            "Up to 15 pages",
            "Custom design",
            "Blog/News section",
            "Advanced SEO",
            "Email integration",
            "Analytics dashboard",
            "3 months support",
            "Content management system",
          ],
        },
        {
          name: "Ecommerce",
          price: "KSh 85,000",
          description: "Complete online store",
          features: [
            "Unlimited products",
            "Shopping cart & checkout",
            "M-Pesa & Stripe integration",
            "Inventory management",
            "Order tracking",
            "Customer accounts",
            "6 months support",
            "Marketing tools",
          ],
        },
      ],
      useCases: [
        {
          title: "Retail & Ecommerce",
          description: "Online stores with payment integration, inventory management, and order fulfillment.",
        },
        {
          title: "Service Businesses",
          description: "Portfolio websites, booking systems, and customer portals for consultants and agencies.",
        },
        {
          title: "Restaurants & Hospitality",
          description: "Menu displays, online ordering, table reservations, and delivery integration.",
        },
        {
          title: "Professional Services",
          description: "Law firms, accounting, medical practices with appointment scheduling and client portals.",
        },
      ],
      benefits: [
        "Professional brand presence online",
        "24/7 accessibility for customers",
        "Automated lead generation",
        "Reduced operational costs",
        "Better customer experience",
        "Scalable as your business grows",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "WordPress", "WooCommerce", "M-Pesa API"],
      process: [
        {
          step: "Discovery & Planning",
          description: "We meet to understand your business goals, target audience, and design preferences. Define sitemap and features.",
        },
        {
          step: "Design & Mockups",
          description: "Create visual designs and get your approval before development begins.",
        },
        {
          step: "Development",
          description: "Build your website with clean code, optimize for speed, and ensure mobile responsiveness.",
        },
        {
          step: "Testing & Launch",
          description: "Thorough testing across devices, final revisions, domain setup, and go live.",
        },
      ],
      deliveryTime: "2-4 Weeks",
      faq: [
        {
          question: "Do you provide hosting?",
          answer: "Yes, we can set up reliable hosting for you, or work with your preferred provider. Hosting costs are separate from development.",
        },
        {
          question: "Can I update the website myself?",
          answer: "Absolutely! We build websites with user-friendly content management systems and provide training so you can make updates easily.",
        },
        {
          question: "Will my website work on mobile phones?",
          answer: "Yes, all our websites are fully responsive and optimized for mobile devices, tablets, and desktops.",
        },
      ],
    },
    {
      icon: BarChart3,
      title: "Business Management Systems",
      description:
        "Comprehensive operations platforms with inventory, analytics, POS, and real-time business intelligence.",
      features: [
        "Inventory management",
        "Sales & profit tracking",
        "POS systems",
        "Staff management",
        "Business analytics",
      ],
      pricing: "From KSh 35,000",
      gradient: "from-[#5A6A7F] to-[#6B8BC3]",
      detailedDescription:
        "Streamline your entire business operation with our custom management systems. From inventory and sales to staff and analytics, get complete visibility and control over your business in real-time.",
      packages: [
        {
          name: "Essentials",
          price: "KSh 35,000",
          description: "Core business features",
          features: [
            "Product/inventory tracking",
            "Sales recording",
            "Basic reporting",
            "User management",
            "Mobile access",
            "2 months support",
          ],
        },
        {
          name: "Professional",
          price: "KSh 75,000",
          description: "Complete operations suite",
          recommended: true,
          features: [
            "Advanced inventory management",
            "POS system",
            "Supplier management",
            "Staff & payroll tracking",
            "Real-time analytics",
            "Multi-location support",
            "Customer management",
            "6 months support",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom Quote",
          description: "Full-scale solution",
          features: [
            "Everything in Professional",
            "Custom integrations",
            "Advanced analytics & reporting",
            "Accounting system integration",
            "API access",
            "Dedicated support",
            "On-premise deployment option",
          ],
        },
      ],
      useCases: [
        {
          title: "Retail Chains",
          description: "Multi-store inventory sync, centralized reporting, and unified customer data across all locations.",
        },
        {
          title: "Wholesale Distributors",
          description: "Supplier management, bulk order processing, delivery tracking, and B2B portals.",
        },
        {
          title: "Manufacturing",
          description: "Production tracking, raw material inventory, quality control, and supply chain management.",
        },
        {
          title: "Hospitality",
          description: "Table management, kitchen orders, inventory, staff scheduling, and guest management.",
        },
      ],
      benefits: [
        "Real-time visibility into operations",
        "Reduce shrinkage and waste",
        "Faster, more accurate transactions",
        "Data-driven decision making",
        "Improved staff productivity",
        "Scalable multi-location support",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "React Native", "Cloud Infrastructure"],
      process: [
        {
          step: "Business Analysis",
          description: "Deep dive into your workflows, pain points, and requirements. Map out all features needed.",
        },
        {
          step: "System Design",
          description: "Create database schema, user flows, and system architecture. Define integrations and APIs.",
        },
        {
          step: "Development & Testing",
          description: "Build modules iteratively with regular demos. Rigorous testing to ensure reliability.",
        },
        {
          step: "Training & Deployment",
          description: "Staff training, data migration, phased rollout, and ongoing support.",
        },
      ],
      deliveryTime: "6-12 Weeks",
      faq: [
        {
          question: "Can it integrate with my existing accounting software?",
          answer: "Yes, we can integrate with most popular accounting systems like QuickBooks, Sage, and others through APIs or custom connectors.",
        },
        {
          question: "What happens to my data if I'm offline?",
          answer: "Our systems support offline mode. Transactions are saved locally and automatically sync when internet is restored.",
        },
        {
          question: "Can I access it from my phone?",
          answer: "Yes, our systems are mobile-responsive and we can also build dedicated mobile apps for iOS and Android.",
        },
      ],
    },
    {
      icon: Cloud,
      title: "Business SaaS Platforms",
      description:
        "Cloud-based subscription tools with multi-user access, automation, and advanced reporting capabilities.",
      features: [
        "Multi-tenant platforms",
        "Workflow automation",
        "Cloud dashboards",
        "Advanced reporting",
        "API integrations",
      ],
      pricing: "From KSh 50,000",
      gradient: "from-[#8BA3C7] to-[#6B8BC3]",
      detailedDescription:
        "Build scalable SaaS platforms that serve multiple clients from a single codebase. Perfect for entrepreneurs looking to launch their own software business or companies wanting to digitize and monetize their processes.",
      packages: [
        {
          name: "MVP Launch",
          price: "KSh 150,000",
          description: "Validate your idea",
          features: [
            "Core features development",
            "User authentication & billing",
            "Admin dashboard",
            "Subscription management",
            "Basic analytics",
            "3 months support",
          ],
        },
        {
          name: "Growth",
          price: "KSh 350,000",
          description: "Scale your platform",
          recommended: true,
          features: [
            "Everything in MVP",
            "Advanced features",
            "API development",
            "Mobile-responsive design",
            "Payment integration (M-Pesa, Stripe)",
            "Email & notifications",
            "6 months support",
            "Performance optimization",
          ],
        },
        {
          name: "Enterprise",
          price: "Custom Quote",
          description: "Full-scale SaaS",
          features: [
            "Everything in Growth",
            "White-label options",
            "Advanced integrations",
            "Custom workflows",
            "Enterprise security",
            "Dedicated infrastructure",
            "12 months support",
            "Priority updates",
          ],
        },
      ],
      useCases: [
        {
          title: "Industry-Specific Tools",
          description: "Build specialized software for niche markets like logistics, healthcare, education, or real estate.",
        },
        {
          title: "Marketplace Platforms",
          description: "Connect buyers and sellers with booking, payments, reviews, and commission management.",
        },
        {
          title: "Workflow Automation",
          description: "Create tools that automate repetitive business processes for multiple clients.",
        },
      ],
      benefits: [
        "Recurring revenue model",
        "Scalable multi-tenant architecture",
        "Automatic updates for all users",
        "Centralized data management",
        "Lower customer acquisition costs",
        "Global accessibility",
      ],
      technologies: ["React", "Node.js", "AWS/Azure", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      deliveryTime: "12-20 Weeks",
    },
    {
      icon: Smartphone,
      title: "Business Mobile Apps",
      description:
        "Native mobile applications for customer engagement, operations management, and service delivery.",
      features: [
        "Customer apps",
        "Delivery management",
        "Booking platforms",
        "Internal tools",
        "Real-time sync",
      ],
      pricing: "From KSh 60,000",
      gradient: "from-[#1a2332] to-[#5A6A7F]",
      detailedDescription:
        "Reach your customers where they are with custom mobile apps for iOS and Android. From customer-facing apps to internal operations tools, we build native and cross-platform solutions.",
      packages: [
        {
          name: "Single Platform",
          price: "KSh 60,000",
          description: "iOS or Android",
          features: [
            "One platform (iOS or Android)",
            "Up to 8 screens",
            "User authentication",
            "Push notifications",
            "Backend API",
            "3 months support",
          ],
        },
        {
          name: "Cross-Platform",
          price: "KSh 95,000",
          description: "iOS + Android",
          recommended: true,
          features: [
            "iOS and Android apps",
            "Shared codebase",
            "Real-time sync",
            "Payment integration",
            "Location services",
            "Analytics",
            "6 months support",
          ],
        },
      ],
      useCases: [
        {
          title: "Customer Engagement",
          description: "Loyalty programs, mobile ordering, appointment booking, and customer support apps.",
        },
        {
          title: "Field Operations",
          description: "Sales rep tools, delivery tracking, field service management, and data collection.",
        },
      ],
      benefits: [
        "Direct customer channel",
        "Offline functionality",
        "Push notifications",
        "Better user experience",
        "Device hardware access",
        "Brand visibility",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
      deliveryTime: "8-14 Weeks",
    },
    {
      icon: Wifi,
      title: "Connectivity Solutions",
      description:
        "WiFi billing systems and network management platforms for hospitality and service businesses.",
      features: [
        "Hotspot management",
        "Billing automation",
        "User analytics",
        "Voucher systems",
        "Payment integration",
      ],
      pricing: "From KSh 30,000",
      gradient: "from-[#6B8BC3] to-[#5A6A7F]",
      detailedDescription:
        "Monetize your WiFi infrastructure with smart billing and management systems. Perfect for hotels, restaurants, co-working spaces, and service businesses.",
      packages: [
        {
          name: "Basic",
          price: "KSh 30,000",
          description: "Simple WiFi billing",
          features: [
            "Hotspot setup",
            "Voucher generation",
            "M-Pesa integration",
            "Basic analytics",
            "User portal",
            "3 months support",
          ],
        },
        {
          name: "Advanced",
          price: "KSh 55,000",
          description: "Complete management",
          recommended: true,
          features: [
            "Everything in Basic",
            "Bandwidth management",
            "User profiling",
            "SMS integration",
            "Social media login",
            "Advanced reporting",
            "6 months support",
          ],
        },
      ],
      useCases: [
        {
          title: "Hotels & Resorts",
          description: "Guest WiFi with room billing, premium packages, and bandwidth control per room.",
        },
        {
          title: "Restaurants & Cafes",
          description: "Free WiFi with social login for marketing, or time-based paid access.",
        },
        {
          title: "Shopping Malls",
          description: "Multi-tenant WiFi management with analytics on foot traffic and engagement.",
        },
      ],
      benefits: [
        "Additional revenue stream",
        "Customer data collection",
        "Improved customer experience",
        "Bandwidth optimization",
        "Marketing opportunities",
        "Usage analytics",
      ],
      technologies: ["MikroTik", "Hotspot Management", "M-Pesa API", "SMS Gateway"],
      deliveryTime: "2-4 Weeks",
    },
    {
      icon: Code,
      title: "Business Automation",
      description:
        "Custom workflow automation, system integrations, and digital transformation solutions for enterprises.",
      features: [
        "Process automation",
        "System integration",
        "Custom dashboards",
        "Data analytics",
        "Digital transformation",
      ],
      pricing: "Custom Quote",
      gradient: "from-[#1a2332] to-[#2a3444]",
      detailedDescription:
        "Eliminate manual processes and connect your systems seamlessly. We build custom automations and integrations that save time, reduce errors, and scale your operations.",
      packages: [
        {
          name: "Process Automation",
          price: "From KSh 45,000",
          description: "Automate workflows",
          features: [
            "Workflow analysis",
            "Automation design",
            "Implementation",
            "Testing & deployment",
            "Documentation",
            "3 months support",
          ],
        },
        {
          name: "System Integration",
          price: "From KSh 75,000",
          description: "Connect your tools",
          recommended: true,
          features: [
            "API development",
            "Data synchronization",
            "Real-time integrations",
            "Error handling",
            "Monitoring dashboard",
            "6 months support",
          ],
        },
        {
          name: "Digital Transformation",
          price: "Custom Quote",
          description: "Complete overhaul",
          features: [
            "Process re-engineering",
            "Technology roadmap",
            "System architecture",
            "Phased implementation",
            "Change management",
            "12 months support",
          ],
        },
      ],
      useCases: [
        {
          title: "Marketing Automation",
          description: "Automate email campaigns, lead nurturing, social media posting, and reporting.",
        },
        {
          title: "Operations Integration",
          description: "Connect CRM, accounting, inventory, and shipping systems for seamless data flow.",
        },
        {
          title: "Reporting & Analytics",
          description: "Automated data collection, processing, and visualization from multiple sources.",
        },
      ],
      benefits: [
        "Eliminate manual data entry",
        "Reduce human errors",
        "Save time and costs",
        "Better data accuracy",
        "Scale without hiring",
        "Real-time insights",
      ],
      technologies: ["APIs", "Zapier", "Make.com", "Python", "Node.js", "Power Automate"],
      deliveryTime: "Varies by scope",
    },
  ];

  return (
    <section id="services" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 px-5 py-2.5 rounded-full text-sm font-medium">
            Business Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 !font-semibold text-[#1a2332]">
            Professional Technology <span className="text-[#6B8BC3]">For Growing Businesses</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#5A6A7F] max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade systems designed for African businesses. From websites to complete digital infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-10 h-full flex flex-col hover:shadow-[0_30px_100px_-15px_rgba(26,35,50,0.4)] transition-all duration-500 group border-2 border-white/90 bg-white/85 backdrop-blur-3xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(26,35,50,0.25)]">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform shadow-[0_10px_30px_-10px_rgba(26,35,50,0.2)]`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="mb-4 text-2xl !font-semibold text-[#1a2332]">{service.title}</h3>
                <p className="text-[#5A6A7F] mb-8 leading-relaxed text-base">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#5A6A7F]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6B8BC3] mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/60 pt-8 mt-auto">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-lg !font-semibold text-[#1a2332]">
                      {service.pricing}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group/btn rounded-full py-5 border-2 border-white/90 bg-white/80 backdrop-blur-3xl hover:bg-white/95 transition-all shadow-[0_8px_32px_-8px_rgba(26,35,50,0.2)]"
                    onClick={() => {
                      setSelectedService(service);
                      setIsModalOpen(true);
                    }}
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
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
          <Button size="lg" className="rounded-full px-8 py-6 text-base bg-[#1a2332] hover:bg-[#2a3444] shadow-lg shadow-[#1a2332]/20 hover:shadow-xl hover:shadow-[#1a2332]/30 transition-all" asChild>
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </motion.div>
      </div>

      {selectedService && (
        <ServiceDetailsModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedService(null);
          }}
          service={selectedService}
        />
      )}
    </section>
  );
}
