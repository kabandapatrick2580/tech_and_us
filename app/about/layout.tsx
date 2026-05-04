import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Systems Builders & Solutions Architects",
  description:
    "Tech & Us is a solutions architecture firm focused on business process digitization, helping companies move from manual workflows to automated digital systems.",
  keywords: [
    "systems builders", "solutions architects", "digital ecosystems", 
    "IT automation", "Rwanda tech company", "software engineering"
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}