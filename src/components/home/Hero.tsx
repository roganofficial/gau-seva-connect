
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          filter: "brightness(0.6)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
      
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
          Save a Life Today: Support Our Gaushala
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Join our mission to protect, nurture, and celebrate cows - India's sacred animals
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/donate">
            <Button size="lg" className="bg-gaushala-saffron-500 hover:bg-gaushala-saffron-600 text-white text-lg px-8 py-6">
              Donate Now
            </Button>
          </Link>
          <Link to="/volunteer">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
              Volunteer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
