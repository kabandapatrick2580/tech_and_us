import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ValueSection from "@/components/sections/ValueSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LocalGlobalSection from "@/components/sections/LocalGlobalSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Tech & Us — Technology That Moves Your Business Forward",
  description:
    "Tech & Us builds scalable web and mobile applications, business systems, and smart solutions that help companies operate better — locally and globally.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ValueSection />
      <SolutionsSection />
      <ProcessSection />
      <TestimonialsSection />
      <LocalGlobalSection />
      <CtaSection />
    </>
  );
}
