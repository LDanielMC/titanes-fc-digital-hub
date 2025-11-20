import Hero from "@/components/Hero";
import About from "@/components/About";
import Staff from "@/components/Staff";
import Mission from "@/components/Mission";
import TargetAudience from "@/components/TargetAudience";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Staff />
      <Mission />
      <TargetAudience />
      <Features />
      <Pricing />
      <Schedule />
      <Contact />
    </div>
  );
};

export default Index;
