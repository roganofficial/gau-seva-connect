import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const About = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        

        {/* Founding Story */}
        <section className="py-16 bg-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Founding Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2003 by Shri Ramesh Gupta, गौ सेवा Connect began as a small shelter for abandoned cows in rural India. Witnessing the plight of these sacred animals left on the streets, Shri Gupta dedicated his life to their protection and care.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Starting with just 5 cows in a small shed, our Gaushala has grown into a sanctuary for over 1,000 cows, providing them with food, shelter, and medical care.
                </p>
                <p className="text-lg text-gray-700">
                  Our foundation is built on the principle of "गौ सेवा परमो धर्मः" - "Service to cows is the highest duty", recognizing the sacred place cows hold in Indian culture and spirituality.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg bg-neutral-50">
                <img src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80" alt="Founding Story" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Major Developments Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">Major Developments (2020-Present)</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gaushala-green-600">2023</h3>
                <p className="text-gray-700">Completed construction of state-of-the-art medical facility capable of treating 100+ cows simultaneously</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gaushala-green-600">2022</h3>
                <p className="text-gray-700">Launched mobile veterinary unit for emergency rescues and treatment</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gaushala-green-600">2021</h3>
                <p className="text-gray-700">Established dedicated geriatric care facility for elderly cows</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-gaushala-green-600">2020</h3>
                <p className="text-gray-700">Expanded shelter capacity to accommodate 1,000+ cows</p>
              </div>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gaushala-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gaushala-green-700">Best Animal Shelter 2023</h3>
                <p className="text-gray-700">Awarded by the State Animal Welfare Board</p>
              </div>
              <div className="bg-gaushala-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gaushala-green-700">Excellence in Animal Care</h3>
                <p className="text-gray-700">Recognition by the National Veterinary Association</p>
              </div>
              <div className="bg-gaushala-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gaushala-green-700">Community Impact Award</h3>
                <p className="text-gray-700">For outstanding contribution to animal welfare</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gaushala-cream p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gaushala-green-700">Our Mission</h3>
                <p className="text-lg text-gray-700 mb-4">
                  To provide shelter, food, and medical care to abandoned and rescued cows, ensuring they live with dignity and comfort.
                </p>
                <p className="text-lg text-gray-700">
                  We strive to create awareness about the importance of cow protection in Indian culture and promote sustainable practices that benefit both cows and the environment.
                </p>
              </div>
              <div className="bg-gaushala-cream p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gaushala-green-700">Our Vision</h3>
                <p className="text-lg text-gray-700 mb-4">
                  To become a model Gaushala that sets standards for cow protection and welfare across India, integrating traditional values with modern practices.
                </p>
                <p className="text-lg text-gray-700">
                  We envision a world where every cow is treated with respect and care, recognized for their spiritual significance and contribution to sustainable agriculture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ramesh Gupta" className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Shri Ramesh Gupta</h3>
                  <p className="text-gaushala-green-600 mb-4">Founder & Chairman</p>
                  <p className="text-gray-700">
                    Dedicated his life to cow protection for over 20 years, bringing extensive experience in animal welfare and non-profit management.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Sunita Sharma" className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Dr. Sunita Sharma</h3>
                  <p className="text-gaushala-green-600 mb-4">Chief Veterinarian</p>
                  <p className="text-gray-700">
                    Veterinary specialist with 15 years of experience in bovine medicine, ensuring the highest standard of medical care for our cows.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Mohan Patel" className="w-full h-64 object-cover object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">Shri Mohan Patel</h3>
                  <p className="text-gaushala-green-600 mb-4">Operations Director</p>
                  <p className="text-gray-700">
                    Manages the day-to-day operations of the Gaushala, coordinating staff, volunteers, and resources to ensure optimal care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-gaushala-green-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Join Our Mission</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Become a part of our journey in protecting and caring for these divine creatures. Your support makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" className="bg-white text-gaushala-green-700 hover:bg-gray-100 text-lg px-8">
                  Support Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white hover:bg-white text-lg px-8 text-lime-800">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;