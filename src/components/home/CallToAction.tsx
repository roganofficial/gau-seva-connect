import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return <section className="py-16 bg-gaushala-green-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Make a Difference Today</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Your support enables us to provide shelter, food, and medical care to hundreds of cows. Join us in this sacred mission of cow protection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/donate">
            <Button size="lg" className="text-white text-lg px-8 py-6 transform transition-all duration-300 hover:scale-105 animate-none bg-orange-600 hover:bg-orange-500">
              Donate Now
            </Button>
          </Link>
          <Link to="/volunteer">
            <Button size="lg" variant="outline" className="border-white hover:bg-white text-lg px-8 text-gray-950">
              Become a Volunteer
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default CallToAction;