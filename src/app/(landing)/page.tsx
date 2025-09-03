import Hero from '@/components/landing/Hero';
import Includes from '@/components/landing/Includes';
import Instructor from "@/components/landing/Instructor";
import CourseDetails from "@/components/landing/CourseDetails";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Includes />
      <Instructor />
      <CourseDetails />
      <Testimonials />
      <FinalCTA />
      <FAQ />
    </>
  );
} 