import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compose email with form data
    const subject = encodeURIComponent(`Consultation Request: ${formData.service || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open email client with pre-filled data
    window.location.href = `mailto:majaukarwirwa@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+254 797 040 512",
      link: "https://wa.me/254797040512",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: "majaukarwirwa@gmail.com",
      link: "mailto:majaukarwirwa@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 797 040 512",
      link: "tel:+254797040512",
      color: "text-purple-600",
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-40 bg-gradient-to-br from-[#D4E1F5] to-[#E8EEF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 !font-semibold text-[#1a2332]">
            Let's Discuss <span className="text-[#6B8BC3]">Your Business Needs</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#5A6A7F] max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation to explore how we can support your digital transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="mb-4 text-3xl !font-semibold text-[#1a2332]">Contact Our Team</h3>
              <p className="text-[#5A6A7F] mb-8 text-lg leading-relaxed">
                Reach out through your preferred channel. Our business consultants typically respond within 2 hours during business hours.
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-[0_25px_75px_-10px_rgba(26,35,50,0.35)] transition-all duration-500 hover:border-[#6B8BC3]/70 cursor-pointer bg-white/85 backdrop-blur-3xl border-2 border-white/90 rounded-2xl shadow-[0_12px_40px_-10px_rgba(26,35,50,0.2)]">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br from-[#D4E1F5] to-[#8BA3C7]/20 rounded-2xl flex items-center justify-center ${method.color}`}
                    >
                      <method.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1 text-[#1a2332]">{method.title}</div>
                      <div className="text-sm text-[#5A6A7F]">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}

            <Card className="p-6 bg-gradient-to-br from-[#D4E1F5] to-[#E8EEF7] border-2 border-white/90 rounded-2xl backdrop-blur-3xl shadow-[0_12px_40px_-10px_rgba(26,35,50,0.2)]">
              <h4 className="mb-3 text-lg !font-semibold text-[#1a2332]">Business Hours</h4>
              <p className="text-sm text-[#5A6A7F] leading-relaxed">
                Monday - Friday: 8:00 AM - 6:00 PM EAT
                <br />
                Saturday: 9:00 AM - 3:00 PM EAT
                <br />
                Emergency support available 24/7
              </p>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="p-10 bg-white/85 backdrop-blur-3xl border-2 border-white/90 rounded-3xl shadow-[0_20px_60px_-15px_rgba(26,35,50,0.25)]">
              <h3 className="mb-8 text-3xl !font-semibold text-[#1a2332]">Request a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+254 797 040 512"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      className="w-full h-10 px-3 rounded-md border border-border bg-input-background"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      required
                    >
                      <option value="">Select a solution</option>
                      <option value="business-website">Business Website</option>
                      <option value="management-system">
                        Business Management System
                      </option>
                      <option value="saas-platform">SaaS Platform</option>
                      <option value="mobile-app">Business Mobile App</option>
                      <option value="connectivity">Connectivity Solutions</option>
                      <option value="automation">Business Automation</option>
                      <option value="consulting">Strategy Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button type="submit" className="w-full rounded-full py-6 text-base bg-[#1a2332] hover:bg-[#2a3444] shadow-lg shadow-[#1a2332]/20 hover:shadow-xl hover:shadow-[#1a2332]/30 transition-all" size="lg">
                  <Send className="mr-2 w-5 h-5" />
                  Request Consultation
                </Button>

                <p className="text-sm text-[#5A6A7F] text-center">
                  Our team will review your request and respond within 24 hours with a strategic proposal
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
