import { Card } from "./ui/card";
import { Star } from "lucide-react";
import { motion } from "motion/react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jane Wanjiku",
      business: "CEO, Fashion Retail Group",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      quote:
        "DukaLabs delivered a robust ecommerce platform that scaled with our business. Their technical expertise and business understanding made all the difference.",
      rating: 5,
    },
    {
      name: "David Omondi",
      business: "Operations Director, Restaurant Chain",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      quote:
        "The operations platform they built streamlined our entire order-to-delivery workflow. Professional team that truly understands business needs.",
      rating: 5,
    },
    {
      name: "Grace Njeri",
      business: "Founder, Connectivity Solutions Ltd",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
      quote:
        "Enterprise-grade WiFi management system that handles our commercial clients flawlessly. DukaLabs delivers production-ready solutions.",
      rating: 5,
    },
    {
      name: "Peter Kamau",
      business: "Managing Director, Retail Holdings",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter",
      quote:
        "Their business management platform gave us real-time visibility across all locations. Data-driven insights that transformed our operations.",
      rating: 5,
    },
    {
      name: "Sarah Akinyi",
      business: "Co-Founder, Beauty Services Platform",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      quote:
        "Built a scalable SaaS platform that supports multiple businesses. Technical excellence combined with strategic business thinking.",
      rating: 5,
    },
    {
      name: "Michael Otieno",
      business: "CTO, Logistics Startup",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      quote:
        "Professional development process and enterprise-quality deliverables. They understand what it takes to build scalable business systems.",
      rating: 5,
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 !font-semibold text-[#1a2332]">
            Trusted By <span className="text-[#6B8BC3]">Business Leaders</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#5A6A7F] max-w-3xl mx-auto leading-relaxed">
            What business executives say about partnering with DukaLabs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-10 h-full hover:shadow-[0_30px_90px_-15px_rgba(26,35,50,0.4)] transition-all duration-500 bg-white/85 backdrop-blur-3xl border-2 border-white/90 rounded-3xl shadow-[0_16px_50px_-15px_rgba(26,35,50,0.25)]">
                <div className="flex gap-1.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#6B8BC3] text-[#6B8BC3]"
                    />
                  ))}
                </div>

                <p className="text-[#5A6A7F] mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8BA3C7]/20 to-[#6B8BC3]/20 overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a2332]">{testimonial.name}</div>
                    <div className="text-sm text-[#5A6A7F]">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
