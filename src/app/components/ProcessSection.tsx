import { Card } from "./ui/card";
import {
  MessageSquare,
  FileText,
  Palette,
  Code,
  Rocket,
  HeadphonesIcon,
} from "lucide-react";
import { motion } from "motion/react";

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery",
      description:
        "Deep dive into your business operations, goals, and technology requirements to craft the right solution.",
    },
    {
      icon: FileText,
      title: "Strategy",
      description:
        "Comprehensive project roadmap with technical architecture, milestones, and success metrics.",
    },
    {
      icon: Palette,
      title: "Design",
      description:
        "Professional UI/UX design aligned with your brand identity and user experience best practices.",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Agile development process using enterprise-grade frameworks and development standards.",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description:
        "Seamless launch with thorough testing, training, and performance optimization.",
    },
    {
      icon: HeadphonesIcon,
      title: "Growth",
      description:
        "Continuous support, updates, and strategic enhancements to scale with your business.",
    },
  ];

  return (
    <section id="process" className="py-28 md:py-40 bg-gradient-to-br from-[#D4E1F5] to-[#E8EEF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 !font-semibold text-[#1a2332]">
            Proven <span className="text-[#6B8BC3]">Delivery Process</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#5A6A7F] max-w-3xl mx-auto leading-relaxed">
            Strategic, transparent approach from discovery to deployment and beyond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className="p-10 h-full hover:shadow-[0_30px_90px_-15px_rgba(26,35,50,0.4)] transition-all duration-500 bg-white/85 backdrop-blur-3xl border-2 border-white/90 rounded-3xl shadow-[0_16px_50px_-15px_rgba(26,35,50,0.25)]">
                <div className="flex items-start gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8BA3C7]/20 to-[#6B8BC3]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-[#1a2332]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-9 h-9 bg-gradient-to-br from-[#1a2332] to-[#2a3444] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl !font-semibold text-[#1a2332]">{step.title}</h3>
                    <p className="text-[#5A6A7F] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20 z-0" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-[#D4E1F5] to-[#E8EEF7] border-2 border-white/90 rounded-3xl backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(26,35,50,0.25)]">
            <h3 className="mb-4 text-3xl !font-semibold text-[#1a2332]">Start Your Digital Transformation</h3>
            <p className="text-[#5A6A7F] mb-8 text-lg leading-relaxed">
              Schedule a strategic consultation to discuss your business technology needs
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-[#1a2332] to-[#2a3444] text-white rounded-full hover:shadow-lg hover:shadow-[#1a2332]/30 transition-all shadow-md font-medium"
              >
                Schedule Consultation
              </a>
              <a
                href="https://wa.me/254797040512"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/90 bg-white/80 backdrop-blur-3xl rounded-full hover:bg-white/95 transition-all text-[#1a2332] font-medium shadow-[0_8px_32px_-8px_rgba(26,35,50,0.2)]"
              >
                WhatsApp Business
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
