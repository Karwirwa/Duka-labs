import { X, Check, Clock, Package, Zap, ShieldCheck, Users, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "motion/react";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    features: string[];
    pricing: string;
    gradient: string;
    detailedDescription?: string;
    included?: string[];
    packages?: {
      name: string;
      price: string;
      description: string;
      features: string[];
      recommended?: boolean;
    }[];
    process?: { step: string; description: string }[];
    technologies?: string[];
    useCases?: { title: string; description: string }[];
    benefits?: string[];
    deliveryTime?: string;
    faq?: { question: string; answer: string }[];
  };
}

export function ServiceDetailsModal({ isOpen, onClose, service }: ServiceDetailsModalProps) {
  if (!isOpen) return null;

  const whatsappNumber = "254797040512";
  const whatsappMessage = `Hi! I'm interested in learning more about ${service.title}.`;

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
              className="relative w-full max-w-6xl my-8 bg-white/90 backdrop-blur-3xl rounded-3xl shadow-[0_40px_120px_-20px_rgba(26,35,50,0.4)] border-2 border-white/90 max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-3xl border-b-2 border-white/90 px-8 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 flex items-start gap-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-3 bg-[#6B8BC3]/10 text-[#6B8BC3] border-2 border-[#6B8BC3]/20 px-4 py-1.5 rounded-full !font-medium">
                        Business Solution
                      </Badge>
                      <h2 className="text-3xl md:text-4xl !font-semibold text-[#1a2332] mb-2">
                        {service.title}
                      </h2>
                      <p className="text-lg text-[#5A6A7F] leading-relaxed">
                        {service.description}
                      </p>
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
                {/* Detailed Description */}
                {service.detailedDescription && (
                  <div>
                    <h3 className="text-xl !font-semibold text-[#1a2332] mb-3">What We Deliver</h3>
                    <p className="text-[#5A6A7F] leading-relaxed text-lg">
                      {service.detailedDescription}
                    </p>
                  </div>
                )}

                {/* Pricing Packages */}
                {service.packages && service.packages.length > 0 && (
                  <div>
                    <h3 className="text-xl !font-semibold text-[#1a2332] mb-6">Service Packages</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {service.packages.map((pkg, index) => (
                        <div
                          key={index}
                          className={`relative bg-white/90 backdrop-blur-3xl border-2 rounded-2xl p-6 shadow-[0_12px_40px_-12px_rgba(26,35,50,0.2)] hover:shadow-[0_16px_48px_-12px_rgba(26,35,50,0.3)] transition-all ${
                            pkg.recommended
                              ? "border-[#6B8BC3] ring-2 ring-[#6B8BC3]/20"
                              : "border-white/90"
                          }`}
                        >
                          {pkg.recommended && (
                            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6B8BC3] text-white">
                              Recommended
                            </Badge>
                          )}
                          <div className="text-center mb-6">
                            <h4 className="text-lg !font-semibold text-[#1a2332] mb-2">
                              {pkg.name}
                            </h4>
                            <div className="text-3xl !font-bold text-[#1a2332] mb-2">
                              {pkg.price}
                            </div>
                            <p className="text-sm text-[#5A6A7F]">{pkg.description}</p>
                          </div>
                          <ul className="space-y-3 mb-6">
                            {pkg.features.map((feature, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-sm text-[#5A6A7F]">
                                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            className="w-full rounded-full py-5 bg-[#1a2332] hover:bg-[#2a3444] text-white !font-medium"
                            onClick={() => {
                              window.open(
                                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                  `Hi! I'm interested in the ${pkg.name} package for ${service.title}.`
                                )}`,
                                "_blank"
                              );
                            }}
                          >
                            Get Started
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* What's Included */}
                {service.included && service.included.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#6B8BC3] to-[#8BA3C7] rounded-xl flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl !font-semibold text-[#1a2332]">What's Included</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.included.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 bg-white/90 backdrop-blur-3xl border-2 border-white/90 rounded-xl p-4 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.15)]"
                        >
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-[#5A6A7F]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Use Cases */}
                {service.useCases && service.useCases.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl !font-semibold text-[#1a2332]">Perfect For</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.useCases.map((useCase, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-[#EEF2FF] to-[#E0E7FF] border-2 border-indigo-200/50 rounded-2xl p-6"
                        >
                          <h4 className="!font-semibold text-[#1a2332] mb-2">{useCase.title}</h4>
                          <p className="text-sm text-[#5A6A7F] leading-relaxed">
                            {useCase.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Benefits */}
                {service.benefits && service.benefits.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl !font-semibold text-[#1a2332]">Key Benefits</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 text-[#5A6A7F]"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technology Stack */}
                {service.technologies && service.technologies.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl !font-semibold text-[#1a2332]">Technology Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech) => (
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

                {/* Delivery Process */}
                {service.process && service.process.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl !font-semibold text-[#1a2332]">Our Process</h3>
                    </div>
                    <div className="relative space-y-6">
                      {/* Process line */}
                      <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#6B8BC3] to-[#8BA3C7]" />

                      {service.process.map((step, index) => (
                        <div key={index} className="relative flex gap-6">
                          {/* Step number */}
                          <div className="relative flex-shrink-0">
                            <div className="w-10 h-10 bg-white border-4 border-[#6B8BC3] rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-sm font-bold text-[#6B8BC3]">{index + 1}</span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 bg-white/90 backdrop-blur-3xl border-2 border-white/90 rounded-2xl p-5 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.15)]">
                            <h4 className="!font-semibold text-[#1a2332] mb-2">{step.step}</h4>
                            <p className="text-sm text-[#5A6A7F] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FAQ */}
                {service.faq && service.faq.length > 0 && (
                  <div>
                    <h3 className="text-xl !font-semibold text-[#1a2332] mb-6">
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      {service.faq.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white/90 backdrop-blur-3xl border-2 border-white/90 rounded-2xl p-6 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.15)]"
                        >
                          <h4 className="!font-semibold text-[#1a2332] mb-2">
                            {item.question}
                          </h4>
                          <p className="text-sm text-[#5A6A7F] leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Delivery Time */}
                {service.deliveryTime && (
                  <div className="bg-gradient-to-br from-[#D4E1F5] to-[#E8EEF7] border-2 border-[#6B8BC3]/20 rounded-2xl p-6 text-center">
                    <Clock className="w-8 h-8 text-[#6B8BC3] mx-auto mb-3" />
                    <h4 className="!font-semibold text-[#1a2332] mb-2">Typical Delivery</h4>
                    <p className="text-2xl !font-bold text-[#6B8BC3]">{service.deliveryTime}</p>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="sticky bottom-0 bg-white/95 backdrop-blur-3xl border-t-2 border-white/90 px-8 py-6">
                <div className="flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    className="flex-1 rounded-full py-6 bg-green-500 hover:bg-green-600 shadow-[0_12px_40px_-8px_rgba(34,197,94,0.35)] hover:shadow-[0_16px_48px_-8px_rgba(34,197,94,0.45)] transition-all text-white !font-medium"
                    onClick={() => {
                      window.open(
                        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
                        "_blank"
                      );
                    }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 rounded-full py-6 border-2 border-[#1a2332]/20 bg-white/90 backdrop-blur-3xl hover:bg-white hover:border-[#1a2332]/30 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.2)] transition-all text-[#1a2332] !font-medium"
                    onClick={() => {
                      const subject = encodeURIComponent(`Consultation Request: ${service.title}`);
                      const body = encodeURIComponent(
                        `Hi, I'm interested in learning more about ${service.title}.\n\n` +
                        `Service Description: ${service.description}\n\n` +
                        `Please contact me to discuss my requirements.`
                      );
                      window.open(`mailto:majaukarwirwa@gmail.com?subject=${subject}&body=${body}`, "_blank");
                    }}
                  >
                    Request Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
