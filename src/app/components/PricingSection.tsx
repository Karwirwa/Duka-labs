import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export function PricingSection() {
  const plans = [
    {
      name: "Essential",
      price: "35,000",
      description: "Professional foundation for businesses starting their digital journey",
      popular: false,
      features: [
        "Business website or platform",
        "Professional design system",
        "Mobile-first responsive",
        "Payment integration",
        "Basic analytics dashboard",
        "2 months support & updates",
        "Cloud hosting setup",
        "SSL & security",
      ],
    },
    {
      name: "Professional",
      price: "75,000",
      description: "Complete business systems for growing companies",
      popular: true,
      features: [
        "Full business platform",
        "Custom features & workflows",
        "Advanced integrations",
        "Inventory & operations tools",
        "Multi-user management",
        "Real-time analytics",
        "6 months support & updates",
        "Priority deployment",
        "Cloud infrastructure",
        "Data backup systems",
        "Performance optimization",
      ],
    },
    {
      name: "Enterprise",
      price: "150,000+",
      description: "Enterprise-grade systems with dedicated support",
      popular: false,
      features: [
        "Complete digital infrastructure",
        "Custom business automation",
        "Mobile apps (iOS & Android)",
        "Advanced API integrations",
        "Dedicated account team",
        "12 months support & updates",
        "Staff training program",
        "24/7 monitoring",
        "Scalable cloud hosting",
        "Advanced security & compliance",
        "Custom reporting systems",
        "Quarterly strategy reviews",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-28 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 px-5 py-2.5 rounded-full text-sm font-medium">
            Investment Plans
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 !font-semibold text-[#1a2332]">
            Built For <span className="text-[#6B8BC3]">Business Growth</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#5A6A7F] max-w-3xl mx-auto leading-relaxed">
            Professional technology investments designed to scale with your business. All prices in Kenyan Shillings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.popular ? "md:-mt-4" : ""}
            >
              <Card
                className={`p-10 h-full flex flex-col relative bg-white/85 backdrop-blur-3xl border-2 border-white/90 rounded-3xl ${
                  plan.popular
                    ? "shadow-[0_35px_110px_-20px_rgba(26,35,50,0.4)] ring-2 ring-[#6B8BC3]/60 scale-105"
                    : "hover:shadow-[0_30px_90px_-15px_rgba(26,35,50,0.35)] transition-shadow shadow-[0_16px_50px_-15px_rgba(26,35,50,0.2)]"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1a2332] to-[#2a3444] shadow-lg px-5 py-2 rounded-full border-0">
                    Recommended
                  </Badge>
                )}

                <div className="mb-8">
                  <h3 className="mb-3 text-2xl !font-semibold text-[#1a2332]">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-sm text-[#5A6A7F]">KSh</span>
                    <span className="text-5xl !font-semibold text-[#1a2332]">{plan.price}</span>
                  </div>
                  <p className="text-base text-[#5A6A7F] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#6B8BC3] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#5A6A7F]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-full py-6 ${plan.popular ? "bg-[#1a2332] hover:bg-[#2a3444] shadow-lg shadow-[#1a2332]/20" : "border-2 border-white/90 bg-white/80 backdrop-blur-3xl hover:bg-white/95 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.2)]"}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => {
                    const subject = encodeURIComponent(`Consultation Request: ${plan.name} Plan`);
                    const body = encodeURIComponent(
                      `Hi, I'm interested in the ${plan.name} plan (${plan.price}).\n\n` +
                      `Plan Details:\n${plan.description}\n\n` +
                      `Please contact me to discuss this package.`
                    );
                    window.location.href = `mailto:majaukarwirwa@gmail.com?subject=${subject}&body=${body}`;
                  }}
                >
                  {plan.popular ? "Book Consultation" : "Discuss This Plan"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-[#D4E1F5] to-[#E8EEF7] border-2 border-white/90 rounded-3xl backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(26,35,50,0.25)]">
            <h3 className="mb-4 text-3xl !font-semibold text-[#1a2332]">Custom Enterprise Solutions</h3>
            <p className="text-[#5A6A7F] mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Need specialized business automation, multi-platform systems, or digital transformation consulting?
              We design custom solutions tailored to your operational needs.
            </p>
            <Button size="lg" className="rounded-full px-8 py-6 text-base bg-[#1a2332] hover:bg-[#2a3444] shadow-lg shadow-[#1a2332]/20 hover:shadow-xl hover:shadow-[#1a2332]/30 transition-all" asChild>
              <a href="#contact">Schedule Strategy Call</a>
            </Button>
          </Card>
        </motion.div>

        <div className="mt-12 text-center text-base text-[#5A6A7F]">
          <p>
            Flexible payment terms • M-Pesa & bank transfers • No hidden fees • 14-day satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
