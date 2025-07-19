import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Calendar, Heart, ImageIcon } from "lucide-react";
import { Play } from "lucide-react";

const Initiatives = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    "https://images.unsplash.com/photo-1516467508483-a7212febe31a",
    "https://images.unsplash.com/photo-1526045478516-99145907023c",
  ];

  // Update the youtubeVideos array to use video IDs
  const youtubeVideos = [
    {
      id: "etTe2i4GkWo",
      title: "Cow Care at Our Gaushala",
    },
    {
      id: "etTe2i4GkWo",
      title: "Festival Celebrations",
    },
    {
      id: "etTe2i4GkWo",
      title: "Daily Activities",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}

        {/* Initiatives Content */}
        <section className="pb-16 pt-8 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="daily-operations" id="initiatives-tabs">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 border border-[#e0e0e0] rounded-lg p-0 p-1 gap-1 min-h-[140px] md:min-h-fit">
                <TabsTrigger
                  value="daily-operations"
                  className="h-full flex items-center justify-center py-1 md:p-2 data-[state=active]:bg-gaushala-green-50  data-[state=active]:border data-[state=active]:border-[#e0e0e0]"
                >
                  Daily Operations
                </TabsTrigger>
                <TabsTrigger
                  value="photo-gallery"
                  className="h-full flex items-center justify-center py-1 md:p-2 data-[state=active]:bg-gaushala-green-50  data-[state=active]:border data-[state=active]:border-[#e0e0e0]"
                >
                  Photo Gallery
                </TabsTrigger>
                <TabsTrigger
                  value="video-gallery"
                  className="h-full flex items-center justify-center py-1 md:p-2 data-[state=active]:bg-gaushala-green-50  data-[state=active]:border data-[state=active]:border-[#e0e0e0]"
                >
                  Video Gallery
                </TabsTrigger>
              </TabsList>

              <TabsContent value="daily-operations">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-semibold mb-6 text-gaushala-green-600">
                        Feeding Routines
                      </h2>
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/2">
                            <img
                              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              alt="Cow Feeding"
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:w-1/2">
                            <p className="text-gray-700 mb-4">
                              Our cows receive carefully balanced meals three
                              times a day, consisting of nutritious fodder,
                              fresh greens, and specially prepared feed
                              supplements.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              <li>
                                <strong>Morning (6 AM):</strong> Fresh green
                                fodder and hay
                              </li>
                              <li>
                                <strong>Afternoon (12 PM):</strong> Mixed feed
                                with proteins and minerals
                              </li>
                              <li>
                                <strong>Evening (6 PM):</strong> Dry fodder and
                                special supplements
                              </li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                              Each cow's diet is monitored by our nutritionist
                              to ensure optimal health and wellbeing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-semibold mb-6 text-gaushala-green-600">
                        Medical Care Protocols
                      </h2>
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="md:w-1/2">
                            <img
                              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              alt="Veterinary Care"
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </div>
                          <div className="md:w-1/2">
                            <p className="text-gray-700 mb-4">
                              Our comprehensive healthcare program ensures each
                              cow receives regular check-ups and prompt
                              treatment when needed.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              <li>
                                <strong>Weekly Check-ups:</strong> General
                                health assessment by our staff
                              </li>
                              <li>
                                <strong>Monthly Visits:</strong> Thorough
                                examination by veterinarians
                              </li>
                              <li>
                                <strong>Bi-annual Vaccination:</strong>{" "}
                                Protection against common bovine diseases
                              </li>
                              <li>
                                <strong>24/7 Emergency Care:</strong> On-call
                                veterinary support
                              </li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                              Our medical facility is equipped with modern
                              diagnostic tools and treatments.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="lg:col-span-2">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-semibold mb-6 text-gaushala-green-600">
                        Shelter Management
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-xl font-medium mb-3 text-gray-900">
                            Modern Sheds
                          </h3>
                          <img
                            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Cow Shed"
                            className="w-full h-48 object-cover rounded-lg mb-3"
                          />
                          <p className="text-gray-700">
                            Spacious, well-ventilated sheds designed for cow
                            comfort in all seasons, with proper drainage and
                            natural lighting.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-3 text-gray-900">
                            Waste Management
                          </h3>
                          <img
                            src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Biogas Plant"
                            className="w-full h-48 object-cover rounded-lg mb-3"
                          />
                          <p className="text-gray-700">
                            Sustainable biogas production and composting systems
                            that convert cow dung into energy and organic
                            fertilizer.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-3 text-gray-900">
                            Grazing Areas
                          </h3>
                          <img
                            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Grazing Area"
                            className="w-full h-48 object-cover rounded-lg mb-3"
                          />
                          <p className="text-gray-700">
                            Open pastures where cows can roam freely, exercise,
                            and engage in natural behaviors essential for their
                            mental wellbeing.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="festivals">
                <div className="space-y-12">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                      Festival Celebrations at Our Gaushala
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                      We celebrate traditional festivals that honor cows and
                      their sacred place in Indian culture, inviting the
                      community to participate in these joyous occasions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 rounded-full bg-gaushala-saffron-100 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-gaushala-saffron-600" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                              Gopashtami
                            </h3>
                            <p className="text-gray-600 text-sm">
                              November (Kartik month)
                            </p>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Gopashtami Celebration"
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700">
                          Gopashtami celebrates Lord Krishna's role as a
                          cowherd. Our Gaushala hosts a special pooja where cows
                          are adorned with colorful ornaments, garlands, and
                          their horns painted with turmeric. Community members
                          participate in the ritual bathing and decoration of
                          cows.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 rounded-full bg-gaushala-saffron-100 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-gaushala-saffron-600" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                              Govardhan Puja
                            </h3>
                            <p className="text-gray-600 text-sm">
                              October/November (after Diwali)
                            </p>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Govardhan Puja"
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700">
                          This festival commemorates Lord Krishna's lifting of
                          Govardhan Hill. At our Gaushala, we prepare a symbolic
                          Govardhan Hill made from cow dung and decorate it with
                          flowers. Cows are worshipped and fed special treats
                          while devotees perform parikrama (circumambulation).
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 rounded-full bg-gaushala-saffron-100 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-gaushala-saffron-600" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                              Makara Sankranti
                            </h3>
                            <p className="text-gray-600 text-sm">
                              January 14/15
                            </p>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Makara Sankranti"
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700">
                          During this harvest festival, we honor cows with
                          special decorations and feed them freshly harvested
                          grains and jaggery. Visitors bring donations of fodder
                          and participate in community meals where traditional
                          sweets made from cow ghee are served.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start mb-4">
                          <div className="w-12 h-12 rounded-full bg-gaushala-saffron-100 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-gaushala-saffron-600" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                              Pongal
                            </h3>
                            <p className="text-gray-600 text-sm">
                              January (Tamil month of Thai)
                            </p>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Pongal Celebration"
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700">
                          The third day of Pongal, known as Mattu Pongal, is
                          dedicated to cows. We decorate our cows with bells,
                          beads, and flowers, and prepare special Pongal (a
                          sweet rice dish) which is first offered to the cows
                          before being distributed among visitors.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gaushala-cream p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="text-gaushala-saffron-500 h-6 w-6" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Join Our Celebrations
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      We welcome visitors to participate in these sacred
                      celebrations. These events not only honor our cultural
                      traditions but also help raise awareness about cow
                      protection. To join an upcoming festival celebration,
                      please contact us for dates and details.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="photo-gallery">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                    Photo Gallery
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Explore images of our Gaushala, the cows in our care, and
                    the various events and activities we conduct throughout the
                    year.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryImages.map((image, i) => (
                      <div
                        key={`image-${i}`}
                        className="overflow-hidden rounded-lg shadow-md"
                      >
                        <img
                          src={`${image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                          alt={`Gallery Image ${i + 1}`}
                          className="w-full h-64 object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      Awards & Recognition
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                              <Award className="h-8 w-8 text-gaushala-green-600" />
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-center mb-2">
                            Best Animal Shelter 2023
                          </h4>
                          <p className="text-gray-600 text-center">
                            Awarded by Rural Welfare Association for excellence
                            in animal care and welfare practices.
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                              <Award className="h-8 w-8 text-gaushala-green-600" />
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-center mb-2">
                            Environmental Impact Award
                          </h4>
                          <p className="text-gray-600 text-center">
                            Recognized for our sustainable biogas project and
                            eco-friendly practices in Gaushala management.
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                              <Award className="h-8 w-8 text-gaushala-green-600" />
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-center mb-2">
                            Community Service Excellence
                          </h4>
                          <p className="text-gray-600 text-center">
                            Honored for our contribution to rural employment and
                            community development initiatives.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="video-gallery">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                    Video Gallery
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Explore videos of our Gaushala, the cows in our care, and
                    the various events and activities we conduct throughout the
                    year.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {youtubeVideos.map((video, i) => (
                      <div
                        key={`video-${i}`}
                        className="overflow-hidden rounded-lg shadow-md relative"
                      >
                        <div className="relative w-full h-64">
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0"
                          ></iframe>
                        </div>
                        {/* <div
                          id="video-title-box"
                          className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50"
                        >
                          <p className="text-white text-sm font-medium">
                            {video.title}
                          </p>
                        </div> */}
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      Awards & Recognition
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                              <Award className="h-8 w-8 text-gaushala-green-600" />
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-center mb-2">
                            Best Animal Shelter 2023
                          </h4>
                          <p className="text-gray-600 text-center">
                            Awarded by Rural Welfare Association for excellence
                            in animal care and welfare practices.
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                              <Award className="h-8 w-8 text-gaushala-green-600" />
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-center mb-2">
                            Environmental Impact Award
                          </h4>
                          <p className="text-gray-600 text-center">
                            Recognized for our sustainable biogas project and
                            eco-friendly practices in Gaushala management.
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                              <Award className="h-8 w-8 text-gaushala-green-600" />
                            </div>
                          </div>
                          <h4 className="text-lg font-semibold text-center mb-2">
                            Community Service Excellence
                          </h4>
                          <p className="text-gray-600 text-center">
                            Honored for our contribution to rural employment and
                            community development initiatives.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Initiatives;
