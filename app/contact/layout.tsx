import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project with Tech & Us",
  description:
    "Get in touch with Tech & Us to scope your web app, mobile app, business system, or AI integration. Based in Kigali, Rwanda — working with clients worldwide. We respond within 24 hours.",
  keywords: [
    "contact Tech & Us", "hire software developers Rwanda", "custom software quote",
    "Kigali software company", "start a project", "app development inquiry"
  ],
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
