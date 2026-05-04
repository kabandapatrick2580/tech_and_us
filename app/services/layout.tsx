import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Business Process Digitization & Digital Systems",
  description:
    "We architect and build custom software, automate workflows, and integrate payment systems to scale your business efficiently.",
  keywords: [
    "business automation", "custom software development", "digital systems", 
    "workflow automation", "business process digitization", "system integration"
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}