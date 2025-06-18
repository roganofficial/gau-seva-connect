import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const initiatives = [
  {
    id: 1,
    title: "Daily Care",
    description:
      "Providing nutritious meals, clean water, and regular health check-ups to ensure the wellbeing of our cows.",
    image:
      "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/initiatives#daily-care",
  },
  {
    id: 2,
    title: "Medical Support",
    description:
      "Regular veterinary visits, vaccination drives, and emergency medical treatments for injured or sick cows.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/initiatives#medical-support",
  },
  //  {
  //   id: 3,
  //   title: "Festival Celebrations",
  //   description: "Honoring traditional festivals like Gopashtami with special ceremonies celebrating the divine nature of cows.",
  //   image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   link: "/initiatives#festivals"
  // }
];
const Initiatives = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            Our Initiatives
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the various programs and activities we conduct to ensure
            the welfare of our cows and promote traditional values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <div
              key={initiative.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {initiative.title}
                </h3>
                <p className="text-gray-700 mb-4">{initiative.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/initiatives"
            className="inline-flex items-center justify-center bg-gaushala-green-500 hover:bg-gaushala-green-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Initiatives <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Initiatives;
