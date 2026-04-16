import Link from "next/link";
import { Zap, Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "Business Systems", href: "/services#systems" },
    { label: "AI Integration", href: "/services#ai" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030712]">
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-white font-semibold text-lg">
                Tech<span className="text-blue-400">&</span>Us
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Technology that moves your business forward. Building scalable web and mobile applications, business systems, and smart solutions — locally and globally.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@techandus.rw"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                hello@techandus.rw
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                Kigali, Rwanda
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Tech & Us. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built in Rwanda. Ready for the World.
          </p>
        </div>
      </div>
    </footer>
  );
}
