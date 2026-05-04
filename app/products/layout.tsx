import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Internal Systems & Solutions",
  description:
    "Explore the internal products, SaaS platforms, and data tools built and maintained by Tech & Us.",
  keywords: [
    "SaaS products", "internal tools", "Tech & Us products", 
    "Goalifai", "SyncFlow", "fintech", "data migration"
  ],
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}