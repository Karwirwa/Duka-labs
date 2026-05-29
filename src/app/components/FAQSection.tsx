import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "motion/react";

export function FAQSection() {
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. Essential systems typically deploy in 2-3 weeks, Professional platforms in 4-6 weeks, and Enterprise solutions in 6-12 weeks. We provide detailed project roadmaps during our discovery phase.",
    },
    {
      question: "Do you integrate with existing business systems?",
      answer:
        "Yes. We specialize in system integrations including M-Pesa, payment gateways, accounting software, CRM platforms, and third-party APIs. Our technical team ensures seamless integration with your existing infrastructure.",
    },
    {
      question: "Can you scale solutions as our business grows?",
      answer:
        "Absolutely. We architect all systems with scalability in mind, using modern cloud infrastructure and microservices where appropriate. Your platform grows with your business needs.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "All packages include dedicated support periods: Essential (2 months), Professional (6 months), Enterprise (12 months with priority SLA). We offer extended support contracts and 24/7 monitoring for mission-critical systems.",
    },
    {
      question: "Do you provide training for our team?",
      answer:
        "Yes. Professional and Enterprise packages include comprehensive staff training, documentation, and onboarding support. We ensure your team is fully equipped to manage and operate your new systems.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use enterprise-grade technologies including React, Node.js, Python, PostgreSQL, AWS/Azure cloud infrastructure, and modern DevOps practices. Technology choices are tailored to your specific business requirements.",
    },
    {
      question: "Can you handle complex business requirements?",
      answer:
        "Yes. Our team has experience building complex multi-tenant platforms, custom workflows, advanced analytics, and enterprise integrations. We specialize in translating complex business needs into robust technical solutions.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We offer flexible payment structures: typically 40% to begin development, 40% at key milestones, and 20% upon completion. Enterprise clients can discuss customized payment terms aligned with project phases.",
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 !font-semibold text-[#1a2332]">
            Common <span className="text-[#6B8BC3]">Questions</span>
          </h2>
          <p className="text-xl text-[#5A6A7F] leading-relaxed">
            Answers to frequently asked questions about our business technology solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/85 backdrop-blur-3xl rounded-2xl px-8 py-2 border-2 border-white/90 shadow-[0_10px_35px_-10px_rgba(26,35,50,0.2)] hover:shadow-[0_20px_60px_-10px_rgba(26,35,50,0.35)] transition-all"
              >
                <AccordionTrigger className="hover:no-underline text-[#1F3A52] font-semibold">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#5F7A8A] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#5A6A7F] mb-6 text-lg">
            Need more information? Our business consultants are ready to help.
          </p>
          <a
            href="#contact"
            className="text-[#6B8BC3] hover:text-[#1a2332] font-semibold text-lg transition-colors"
          >
            Schedule a consultation →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
