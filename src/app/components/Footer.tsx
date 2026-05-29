import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Solutions: [
      { name: "Business Websites", href: "#services" },
      { name: "Management Systems", href: "#services" },
      { name: "SaaS Platforms", href: "#services" },
      { name: "Mobile Applications", href: "#services" },
      { name: "Business Automation", href: "#services" },
      { name: "Strategy Consulting", href: "#services" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Portfolio", href: "#projects" },
      { name: "Investment Plans", href: "#pricing" },
      { name: "Case Studies", href: "#projects" },
      { name: "Contact Sales", href: "#contact" },
    ],
    Resources: [
      { name: "Client Portal", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#1a2332] text-[#E8EEF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-[#6B8BC3] to-[#8BA3C7] rounded-2xl flex items-center justify-center shadow-md">
                <span className="text-[#1a2332] text-xl font-bold">D</span>
              </div>
              <span className="text-xl tracking-tight font-semibold">
                Duka<span className="text-[#8BA3C7]">Labs</span>
              </span>
            </div>
            <p className="text-[#8BA3C7] mb-8 max-w-sm leading-relaxed">
              Professional business technology solutions powering digital transformation for African enterprises.
            </p>
            <div className="flex items-center gap-3 text-[#8BA3C7]">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:majaukarwirwa@gmail.com"
                className="hover:text-[#6B8BC3] transition-colors"
              >
                majaukarwirwa@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-5 text-[#E8EEF7] font-semibold">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#8BA3C7] hover:text-[#6B8BC3] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#2a3444]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[#8BA3C7] text-sm text-center md:text-left">
              © {currentYear} DukaLabs. All rights reserved. Enterprise solutions for African businesses.
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 bg-[#2a3444] rounded-2xl flex items-center justify-center text-[#8BA3C7] hover:bg-[#6B8BC3] hover:text-[#1a2332] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
