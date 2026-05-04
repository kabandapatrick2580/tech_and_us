import Link from "next/link";
import { Zap, Mail, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About",   href: "/about" },
    { label: "Work",    href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development",  href: "/services#web" },
    { label: "Mobile Apps",      href: "/services#mobile" },
    { label: "Business Systems", href: "/services#systems" },
    { label: "AI Integration",   href: "/services#ai" },
  ],
};

export default function Footer() {
  return (
    <>
      <div
        aria-hidden="true"
        role="presentation"
        className="w-full h-10 md:h-14 imigongo-divider-blue"
        style={{
          backgroundImage: "url('/imigongo_1920.svg')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <footer className="relative border-t border-edge bg-page">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_icon.png"
                alt="Tech & Us logo"
                className="h-10 w-auto"
              />
              <span className="text-ink font-semibold text-lg tracking-tight">
                Tech<span className="text-blue-400">&</span>Us
              </span>
            </Link>
            <p className="text-dim text-sm leading-relaxed max-w-xs mb-6">
              Technology that moves your business forward. Building scalable web and mobile
              applications, business systems, and smart solutions — locally and globally.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@techandus.rw"
                className="inline-flex items-center gap-2 text-sm text-dim hover:text-ink transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                support@techandus.com
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-dim">
                <MapPin className="w-4 h-4 text-blue-400" />
                Kigali, Rwanda
              </span>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold text-ghost uppercase tracking-widest mb-4">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-dim hover:text-ink transition-colors inline-flex items-center gap-1 group"
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
        <div className="mt-14 pt-6 border-t border-edge flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ghost">
            © {new Date().getFullYear()} Tech & Us. All rights reserved.
          </p>
          <p className="text-xs text-ghost">
            Built in Rwanda. Ready for the World.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
