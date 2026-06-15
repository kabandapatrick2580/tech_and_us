import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

// Brand logos aren't included in this lucide-react version, so we inline the
// official marks. `fill="currentColor"` lets them inherit the link text color.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// Keep these URLs in sync with `sameAs` in lib/structured-data.ts.
const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/121954356",            Icon: LinkedinIcon },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589913176462", Icon: FacebookIcon },
];

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-blue-500/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_dark_mode.svg"
                alt="Tech & Us logo"
                className="logo-dark h-30 w-auto"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo_light_mode.svg"
                alt="Tech & Us logo"
                className="logo-light h-30 w-auto"
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
                href="mailto:support@techandus.com"
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
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-edge text-dim hover:text-ink hover:border-blue-500/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
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
