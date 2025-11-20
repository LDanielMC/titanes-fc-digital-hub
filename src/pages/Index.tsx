import Hero from "@/components/Hero";
import About from "@/components/About";
import TrainingProcess from "@/components/TrainingProcess";
import Staff from "@/components/Staff";
import Mission from "@/components/Mission";
import TargetAudience from "@/components/TargetAudience";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <TrainingProcess />
      <Staff />
      <Mission />
      <TargetAudience />
      <Features />
      <Pricing />
      <Schedule />
      <Contact />
      <FinalCTA />
    </div>
  );
};

export default Index;
