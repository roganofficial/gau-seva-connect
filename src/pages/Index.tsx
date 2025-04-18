
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import MissionStatement from "@/components/home/MissionStatement";
import Initiatives from "@/components/home/Initiatives";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <MissionStatement />
        <Initiatives />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
