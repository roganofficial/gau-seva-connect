
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart } from "lucide-react";

interface DonorProps {
  name: string;
  amount: string;
  date: string;
  message?: string;
  image?: string;
}

const DonorCard = ({ name, amount, date, message, image }: DonorProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-gaushala-green-600 font-semibold text-lg">
                  {name.charAt(0)}
                </span>
              )}
            </div>
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-900">{name}</h3>
              <span className="text-gaushala-saffron-500 font-medium">{amount}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{date}</p>
            {message && <p className="mt-3 text-gray-700 italic">"{message}"</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Donors = () => {
  const [showAnonymous, setShowAnonymous] = useState(true);

  const platinumDonors: DonorProps[] = [
    {
      name: "Rajesh & Sunita Agarwal",
      amount: "₹5,00,000",
      date: "March 15, 2024",
      message: "In memory of our parents who taught us the value of cow protection.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sharma Family Foundation",
      amount: "₹3,50,000",
      date: "February 10, 2024",
      message: "We are honored to support such a noble cause.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: showAnonymous ? "Anonymous Donor" : "[Hidden]",
      amount: "₹2,75,000",
      date: "January 22, 2024"
    },
  ];

  const goldDonors: DonorProps[] = [
    {
      name: "Dr. Mohan Patel",
      amount: "₹1,25,000",
      date: "March 05, 2024",
      message: "Happy to support the healthcare of these sacred animals.",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
      name: "Priya Verma",
      amount: "₹1,00,000",
      date: "February 18, 2024",
      image: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      name: showAnonymous ? "Anonymous Donor" : "[Hidden]",
      amount: "₹1,00,000",
      date: "February 12, 2024"
    },
    {
      name: "Gupta Brothers & Co.",
      amount: "₹85,000",
      date: "January 30, 2024"
    },
  ];

  const silverDonors: DonorProps[] = [
    {
      name: "Anand & Family",
      amount: "₹50,000",
      date: "March 10, 2024",
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: showAnonymous ? "Anonymous Donor" : "[Hidden]",
      amount: "₹45,000",
      date: "March 01, 2024"
    },
    {
      name: "Kavita Sharma",
      amount: "₹40,000",
      date: "February 25, 2024",
      message: "For the welfare of our mother cows.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Suresh Kumar",
      amount: "₹35,000",
      date: "February 15, 2024"
    },
    {
      name: "Neha & Rahul",
      amount: "₹30,000",
      date: "February 08, 2024"
    },
    {
      name: showAnonymous ? "Anonymous Donor" : "[Hidden]",
      amount: "₹25,000",
      date: "January 20, 2024"
    },
  ];

  const impactStories = [
    {
      id: 1,
      title: "Ganga's Recovery",
      donor: "Rajesh & Sunita Agarwal",
      description: "Ganga, a severely injured cow rescued from the roadside, received specialized medical treatment funded by the Agarwal family. Their donation covered surgery and six months of rehabilitation, and today Ganga is healthy and thriving in our sanctuary.",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "New Medical Facility",
      donor: "Sharma Family Foundation",
      description: "The Sharma Foundation's generous contribution enabled us to build a modern veterinary facility equipped with diagnostic tools and treatment areas. This facility now serves all 1,000+ cows in our care, providing timely medical intervention and preventive healthcare.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Winter Shelter Construction",
      donor: "Dr. Mohan Patel",
      description: "Dr. Patel's donation funded the construction of three new shelters with insulated walls and heated floors, protecting over 200 cows from harsh winter conditions. These structures have dramatically improved the comfort and health of our elderly cows.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gaushala-cream py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Generous Supporters</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Honoring those whose contributions make our work possible. Each donation directly impacts the lives of our cows.
              </p>
            </div>
          </div>
        </section>

        {/* Donor Wall */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">Donor Recognition Wall</h2>
              <div className="flex items-center">
                <label htmlFor="show-anonymous" className="mr-3 text-gray-700">
                  Show Anonymous Donors
                </label>
                <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200">
                  <input
                    type="checkbox"
                    id="show-anonymous"
                    className="sr-only"
                    checked={showAnonymous}
                    onChange={() => setShowAnonymous(!showAnonymous)}
                  />
                  <span
                    className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
                      showAnonymous ? 'transform translate-x-6 bg-gaushala-green-500' : 'bg-gray-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            <Tabs defaultValue="platinum">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="platinum">Platinum Donors (₹2,00,000+)</TabsTrigger>
                <TabsTrigger value="gold">Gold Donors (₹75,000+)</TabsTrigger>
                <TabsTrigger value="silver">Silver Donors (₹25,000+)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="platinum">
                <div className="grid grid-cols-1 gap-6">
                  {platinumDonors.map((donor, index) => (
                    <DonorCard key={index} {...donor} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="gold">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {goldDonors.map((donor, index) => (
                    <DonorCard key={index} {...donor} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="silver">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {silverDonors.map((donor, index) => (
                    <DonorCard key={index} {...donor} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4 text-gray-900">Impact Stories</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                See how your donations are making a tangible difference in the lives of our cows and the sustainability of our Gaushala.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStories.map((story) => (
                <Card key={story.id} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{story.title}</h3>
                    <p className="text-gaushala-green-600 mb-3">Supported by: {story.donor}</p>
                    <p className="text-gray-700">{story.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Donor */}
        <section className="py-12 bg-gaushala-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Heart size={36} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Join Our Community of Supporters</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your contribution can make a significant impact in the lives of our cows. Every donation, big or small, helps us provide better care.
            </p>
            <a 
              href="/donate" 
              className="inline-block bg-white text-gaushala-green-700 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg transition-colors"
            >
              Become a Donor
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donors;
