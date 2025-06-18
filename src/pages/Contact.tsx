import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);

      await emailjs.send(
        "service_6ifznc9",
        "template_vebzjso",
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        },
        "iVqnhd_KpCeNRqRN1"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
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

        {/* Contact Information & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h2 className="text-2xl font-semibold mb-6">
                    Send Us a Message
                  </h2>
                  <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    ref={formRef}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Enter subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here..."
                        rows={5}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-gaushala-green-600 hover:bg-gaushala-green-700 text-white px-6 py-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </Button>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">
                            Location
                          </h3>
                          <p className="text-gray-700 mt-1">
                            123 Gaushala Road, Village Name,
                            <br />
                            District, State - PIN Code
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">Phone</h3>
                          <p className="text-gray-700 mt-1">
                            <a
                              href="tel:+911234567890"
                              className="hover:text-gaushala-green-600"
                            >
                              +91 12345 67890
                            </a>{" "}
                            (General Inquiries)
                            <br />
                            <a
                              href="tel:+911234567891"
                              className="hover:text-gaushala-green-600"
                            >
                              +91 12345 67891
                            </a>{" "}
                            (Cow Rescue Helpline)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">Email</h3>
                          <p className="text-gray-700 mt-1">
                            <a
                              href="mailto:info@gauseva-connect.org"
                              className="hover:text-gaushala-green-600"
                            >
                              info@gauseva-connect.org
                            </a>
                            <br />
                            <a
                              href="mailto:donations@gauseva-connect.org"
                              className="hover:text-gaushala-green-600"
                            >
                              donations@gauseva-connect.org
                            </a>{" "}
                            (For donation inquiries)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">
                            Visiting Hours
                          </h3>
                          <p className="text-gray-700 mt-1">
                            Monday - Saturday: 8:00 AM to 6:00 PM
                            <br />
                            Sunday: 9:00 AM to 1:00 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Connect with us on WhatsApp
                    </h3>
                    <p className="text-gray-700 mb-4">
                      For quick inquiries or to coordinate a visit, reach out to
                      us on WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/911234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#25D366] text-white px-4 py-2 rounded-md font-medium"
                    >
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.79.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.148.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                        />
                        <path d="M5.004 21.042l.854-3.126-.824-.497C3.484 15.983 2.44 14.070 2.44 12c0-4.015 3.267-7.286 7.286-7.286S17.01 7.985 17.01 12s-3.267 7.286-7.286 7.286c-1.34 0-2.626-.366-3.732-1.073l-.57-.331-2.96 1.41.542-1.251zM2.011 22.931l1.686-6.16C2.65 15.152 1.99 13.608 1.99 12c0-4.262 3.465-7.724 7.724-7.724S17.439 7.738 17.439 12s-3.465 7.724-7.724 7.724c-1.536 0-3.025-.454-4.291-1.312l-3.413 4.519z" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">Find Us</h2>
            <div className="rounded-lg overflow-hidden shadow-md h-96">
              {/* Placeholder for Google Maps embed */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <p className="text-gray-600">
                  Google Maps will be embedded here
                </p>
                {/* In a real implementation, you would use:
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=..." 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                 </iframe> 
                 */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Contact;
