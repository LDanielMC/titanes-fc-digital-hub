import Hero from "@/components/Hero";
import About from "@/components/About";
import TrainingProcess from "@/components/TrainingProcess";
import Staff from "@/components/Staff";
import Uniform from "@/components/Uniform";
import Mission from "@/components/Mission";
import TargetAudience from "@/components/TargetAudience";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ValuesAndCommitments from "@/components/ValuesAndCommitments"; 

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrainingProcess />
      <Staff />
      <About />
      <Uniform />
      <Mission />
      {/* <TargetAudience /> */}
      <Features />
      <ValuesAndCommitments />
      <Pricing />
      <Schedule />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
