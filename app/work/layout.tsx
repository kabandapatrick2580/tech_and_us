import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Digital Systems & Automation Projects",
  description:
    "Explore our portfolio of custom software, business process automations, and system integration solutions built for scalability and efficiency.",
  keywords: [
    "custom software portfolio", "business automation projects", 
    "digital systems case studies", "system integration", "fintech apps"
  ],
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}