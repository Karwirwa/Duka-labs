import { Card } from "./ui/card";
import {
  Shield,
  Zap,
  Smartphone,
  Globe,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";

export function TrustSection() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade protection",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "2-4 weeks average",
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Responsive across devices",
    },
    {
      icon: MapPin,
      title: "African Markets",
      description: "Built for local context",
    },
    {
      icon: Globe,
      title: "Modern Stack",
      description: "Latest technologies",
    },
    {
      icon: CheckCircle2,
      title: "Dedicated Support",
      description: "Expert assistance",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#D4E1F5] to-[#E8EEF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 !font-semibold text-[#1a2332]">
            Built For <span className="text-[#6B8BC3]">Business Excellence</span>
          </h2>
          <p className="text-xl text-[#5A6A7F] max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade systems with the reliability and support your business deserves
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 text-center hover:shadow-[0_30px_90px_-15px_rgba(26,35,50,0.4)] transition-all duration-500 h-full bg-white/85 backdrop-blur-3xl border-2 border-white/90 rounded-3xl shadow-[0_16px_50px_-15px_rgba(26,35,50,0.25)]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#8BA3C7]/20 to-[#6B8BC3]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-[#1a2332]" />
                </div>
                <h4 className="mb-2 text-base !font-semibold text-[#1a2332]">{feature.title}</h4>
                <p className="text-sm text-[#5A6A7F] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
