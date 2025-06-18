import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Heart, Users } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const Volunteer = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);

      // Send email to volunteer
      await emailjs.send(
        "service_6ifznc9",
        "template_3antwo1",
        {
          to_name: `${formData.get("first-name")} ${formData.get("last-name")}`,
          to_email: formData.get("email"),
          volunteer_name: `${formData.get("first-name")} ${formData.get(
            "last-name"
          )}`,
          volunteer_email: formData.get("email"),
          volunteer_phone: formData.get("phone"),
          interest: formData.get("interest"),
          availability: formData.get("availability"),
          experience: formData.get("experience") || "Not provided",
          motivation: formData.get("motivation") || "Not provided",
        },
        "iVqnhd_KpCeNRqRN1"
      );

      // Send notification to admin
      await emailjs.send(
        "service_6ifznc9",
        "template_vebzjso",
        {
          volunteer_name: `${formData.get("first-name")} ${formData.get(
            "last-name"
          )}`,
          volunteer_email: formData.get("email"),
          volunteer_phone: formData.get("phone"),
          interest: formData.get("interest"),
          availability: formData.get("availability"),
          experience: formData.get("experience") || "Not provided",
          motivation: formData.get("motivation") || "Not provided",
        },
        "iVqnhd_KpCeNRqRN1"
      );

      toast({
        title: "Application Submitted!",
        description: "Thank you for volunteering. We'll be in touch soon!",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description:
          "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gaushala-cream py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Volunteer With Us
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Join our team of dedicated volunteers and make a direct impact
                on the lives of our cows.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
              Volunteer Opportunities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-gaushala-green-100 flex items-center justify-center mb-6 mx-auto">
                    <Heart className="h-8 w-8 text-gaushala-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                    Cow Care Assistant
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Help with feeding and grooming cows</li>
                    <li>Assist in cleaning cow shelters</li>
                    <li>Support staff with daily care routines</li>
                    <li>Help with exercise activities for cows</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span>4-8 hours/week</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-gaushala-green-100 flex items-center justify-center mb-6 mx-auto">
                    <Calendar className="h-8 w-8 text-gaushala-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                    Event Volunteer
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Help organize and manage festivals</li>
                    <li>Support visitor education programs</li>
                    <li>Assist with donation collection</li>
                    <li>Aid in event setup and cleanup</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span>As needed, varies</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-gaushala-green-100 flex items-center justify-center mb-6 mx-auto">
                    <Users className="h-8 w-8 text-gaushala-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                    Administration Support
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Assist with office administration</li>
                    <li>Help with donor correspondence</li>
                    <li>Support digital content creation</li>
                    <li>Aid in record keeping and documentation</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-2 text-gray-600">
                    <Clock size={16} />
                    <span>4-10 hours/week</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gaushala-cream p-6 rounded-lg mb-16">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
                Why Volunteer With Us?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-gaushala-saffron-100 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-gaushala-saffron-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Make a Direct Impact</h4>
                  <p className="text-gray-700">
                    Your time directly contributes to the welfare and happiness
                    of our cows.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-gaushala-saffron-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-gaushala-saffron-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Join a Community</h4>
                  <p className="text-gray-700">
                    Connect with like-minded individuals who share your passion
                    for animal welfare.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-gaushala-saffron-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gaushala-saffron-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2 C7 2 3 6 3 11 C3 16 7 20 12 20 C17 20 21 16 21 11 C21 6 17 2 12 2 Z"></path>
                      <path d="M12 6 L12 12 L16 14"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Flexible Hours</h4>
                  <p className="text-gray-700">
                    We work with your schedule to find volunteer opportunities
                    that fit your availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Volunteer Registration Form */}
            <div id="volunteer-form" className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">
                Become a Volunteer
              </h2>

              <Card>
                <CardContent className="pt-6">
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    ref={formRef}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          name="first-name"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          name="last-name"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <select
                        id="interest"
                        name="interest"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select your area of interest</option>
                        <option value="cow-care">Cow Care Assistant</option>
                        <option value="event">Event Volunteer</option>
                        <option value="admin">Administration Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <select
                        id="availability"
                        name="availability"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select your availability</option>
                        <option value="weekday-morning">
                          Weekday Mornings
                        </option>
                        <option value="weekday-afternoon">
                          Weekday Afternoons
                        </option>
                        <option value="weekday-evening">
                          Weekday Evenings
                        </option>
                        <option value="weekend">Weekends</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">
                        Relevant Experience (Optional)
                      </Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        placeholder="Briefly describe any relevant experience you have"
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">
                        Why do you want to volunteer with us? (Optional)
                      </Label>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        placeholder="Tell us why you're interested in volunteering"
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gaushala-green-600 hover:bg-gaushala-green-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
              Volunteer Experiences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Volunteer"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Volunteering at गौ सेवा Connect has been a transformative
                    experience. The connection I've formed with the cows and the
                    sense of purpose I feel is incredible."
                  </p>
                  <div className="text-center">
                    <h4 className="font-semibold">Rahul Singh</h4>
                    <p className="text-gray-600 text-sm">
                      Volunteer since 2022
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Volunteer"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "I started volunteering during weekends, and it's become the
                    highlight of my week. The staff is supportive, and the work
                    we do makes a real difference in the lives of these sacred
                    animals."
                  </p>
                  <div className="text-center">
                    <h4 className="font-semibold">Priya Verma</h4>
                    <p className="text-gray-600 text-sm">
                      Volunteer since 2023
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    <img
                      src="https://randomuser.me/api/portraits/men/62.jpg"
                      alt="Volunteer"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "After retirement, I was looking for meaningful ways to
                    spend my time. Helping at the Gaushala has given me purpose
                    and joy. I've learned so much about these gentle creatures."
                  </p>
                  <div className="text-center">
                    <h4 className="font-semibold">Mohan Patel</h4>
                    <p className="text-gray-600 text-sm">
                      Volunteer since 2021
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
