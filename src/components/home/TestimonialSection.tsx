
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Supporting Gau Seva Connect has been one of the most fulfilling experiences of my life. Seeing how much care they provide to these sacred animals brings joy to my heart.",
    name: "Raj Sharma",
    role: "Regular Donor",
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    id: 2,
    quote: "The transparency and dedication shown by the team is remarkable. I know exactly how my donations are utilized, which gives me great confidence in their work.",
    name: "Priya Patel",
    role: "Monthly Contributor",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "Volunteering at the Gaushala was an eye-opening experience. The connection between the caretakers and the cows is something truly spiritual and moving.",
    name: "Anand Verma",
    role: "Volunteer",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">What Our Supporters Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from those who have experienced the impact of our work firsthand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gaushala-cream rounded-lg p-8 relative">
              <Quote size={32} className="text-gaushala-saffron-300 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-gray-900 font-medium">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
