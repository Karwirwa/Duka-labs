import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  ArrowRight,
  TrendingUp,
  Users,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-gradient-to-br from-[#C8D6ED] via-[#E8EEF7] to-[#E0E7F3]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8BA3C7]/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(107,139,195,0.15),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-5 py-2.5 bg-white/85 text-[#1a2332] rounded-full text-sm font-medium backdrop-blur-3xl border-2 border-white/90 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.2)]">
                  Trusted by 300+ Growing Businesses
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl !leading-[1.1] !font-semibold text-[#1a2332]"
              >
                Modern Digital Systems{" "}
                <span className="text-[#6B8BC3]">For African Businesses</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-[#5A6A7F] leading-relaxed max-w-xl"
              >
                Professional business technology that drives growth. From management dashboards to customer platforms, we build the digital infrastructure modern businesses need.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button
                size="lg"
                className="group rounded-full px-8 py-6 text-base bg-[#1a2332] hover:bg-[#2a3444] shadow-lg shadow-[#1a2332]/20 hover:shadow-xl hover:shadow-[#1a2332]/30 transition-all"
                onClick={() => {
                  const subject = encodeURIComponent("Consultation Request - DukaLabs");
                  const body = encodeURIComponent(
                    "Hi, I'm interested in booking a consultation to discuss my project.\n\n" +
                    "Please contact me to schedule a meeting."
                  );
                  window.location.href = `mailto:majaukarwirwa@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                Book Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-2 border-white/90 bg-white/80 backdrop-blur-3xl hover:bg-white/95 shadow-[0_8px_32px_-8px_rgba(26,35,50,0.2)]" asChild>
                <a href="#services">Explore Solutions</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-12 pt-8"
            >
              <div>
                <div className="text-4xl !font-semibold text-[#1a2332]">300+</div>
                <div className="text-sm text-[#5A6A7F] mt-1">Active Business Clients</div>
              </div>
              <div>
                <div className="text-4xl !font-semibold text-[#1a2332]">95%</div>
                <div className="text-sm text-[#5A6A7F] mt-1">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl !font-semibold text-[#1a2332]">2-4 Weeks</div>
                <div className="text-sm text-[#5A6A7F] mt-1">Average Delivery</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 right-0"
            >
              <Card className="p-8 bg-white/85 backdrop-blur-3xl shadow-[0_30px_100px_-15px_rgba(26,35,50,0.3)] border-2 border-white/90 rounded-3xl">
                <div className="aspect-video bg-gradient-to-br from-[#D4E1F5] to-[#8BA3C7]/30 rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc5MDQ2MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Business Dashboard"
                    className="w-full h-full object-cover opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8BA3C7]/20 to-transparent" />
                </div>
              </Card>
            </motion.div>

            {/* Floating Analytics Card */}
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-32 -right-8"
            >
              <Card className="p-5 bg-white/85 backdrop-blur-3xl shadow-[0_20px_60px_-10px_rgba(26,35,50,0.3)] w-52 border-2 border-white/90 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8BA3C7]/20 to-[#6B8BC3]/20 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#1a2332]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5A6A7F]">Monthly Revenue</div>
                    <div className="text-lg !font-semibold text-[#1a2332]">KSh 2.4M</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Floating Users Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-80 -left-8"
            >
              <Card className="p-5 bg-white/85 backdrop-blur-3xl shadow-[0_20px_60px_-10px_rgba(26,35,50,0.3)] w-52 border-2 border-white/90 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B8BC3]/20 to-[#8BA3C7]/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#1a2332]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5A6A7F]">Business Users</div>
                    <div className="text-lg !font-semibold text-[#1a2332]">8.2K+</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Floating Orders Card */}
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 right-8"
            >
              <Card className="p-5 bg-white/85 backdrop-blur-3xl shadow-[0_20px_60px_-10px_rgba(26,35,50,0.3)] w-44 border-2 border-white/90 rounded-2xl">
                <div className="flex flex-col gap-2">
                  <ShoppingBag className="w-7 h-7 text-[#6B8BC3]" />
                  <div className="text-xs text-[#5A6A7F]">Today's Orders</div>
                  <div className="text-2xl !font-semibold text-[#1a2332]">847</div>
                </div>
              </Card>
            </motion.div>

            {/* Floating Speed Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-32 left-12"
            >
              <Card className="p-4 bg-gradient-to-br from-[#1a2332] to-[#2a3444] text-white shadow-[0_20px_60px_-10px_rgba(26,35,50,0.5)] border-0 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-medium">Enterprise Grade</span>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
