import type { Metadata } from "next";
import { HeroSection, VideoSection } from "@/components/sections/HeroSection";
import {
  ProgramsSection,
  TestimonialsSection,
  MembershipSection,
} from "@/components/sections/ProgramsSection";

export const metadata: Metadata = {
  title: "Lumira Circle — Women's Transformation & Education Platform",
  description:
    "A sacred space for women ready to step into their fullest expression through holistic coaching, mindset mastery, and transformational community.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <ProgramsSection />
      <TestimonialsSection />
      <MembershipSection />
    </>
  );
}
