import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-3xl shadow-[0_10px_40px_-4px_rgba(26,35,50,0.2)] border-b-2 border-white/90"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-[#1a2332] to-[#2a3444] rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white text-xl font-bold">D</span>
            </div>
            <span className="text-xl md:text-2xl tracking-tight font-semibold text-[#1a2332]">
              Duka<span className="text-[#6B8BC3]">Labs</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-[#5A6A7F] hover:text-[#1a2332] transition-colors font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-[#5A6A7F] hover:text-[#1a2332] hover:bg-white/85 backdrop-blur-3xl" asChild>
              <a href="#contact">Contact Sales</a>
            </Button>
            <Button className="rounded-full px-6 bg-[#1a2332] hover:bg-[#2a3444] shadow-lg shadow-[#1a2332]/20 hover:shadow-xl hover:shadow-[#1a2332]/30 transition-all" asChild>
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#D6E5E5]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full rounded-full py-5 border-2 border-[#2B4A5F]/20" asChild>
                  <a href="#contact">Contact Sales</a>
                </Button>
                <Button className="w-full rounded-full py-5 shadow-md" asChild>
                  <a href="#contact">Book Consultation</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
