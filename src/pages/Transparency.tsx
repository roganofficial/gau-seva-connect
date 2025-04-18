
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Award, Shield, BarChart } from "lucide-react";

// You would replace this with actual chart components using recharts
const ExpenseChart = () => (
  <div className="h-72 bg-gray-100 rounded-md flex items-center justify-center">
    <p className="text-gray-600">Expense Breakdown Chart</p>
  </div>
);

const Transparency = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gaushala-cream py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Transparency Hub</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We believe in complete transparency. Access our legal documentation, financial reports, and compliance information.
              </p>
            </div>
          </div>
        </section>

        {/* Transparency Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="legal">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="legal">Legal Compliance</TabsTrigger>
                <TabsTrigger value="financial">Financial Reports</TabsTrigger>
                <TabsTrigger value="recognition">Recognition & Compliance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="legal">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">80G Certificate</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Certifying tax exemption eligibility for donors
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm">
                        Certificate Number: AABTG1234F
                        <br />
                        Valid through: March 31, 2025
                      </p>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Download size={16} /> Download Certificate
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">12A Registration</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Income tax exemption for charitable organizations
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm">
                        Registration Number: AABTG1234F12A
                        <br />
                        Issued Date: April 15, 2015
                      </p>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Download size={16} /> Download Certificate
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">FCRA Registration</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Permission to receive foreign contributions
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm">
                        Registration Number: 098765432
                        <br />
                        Valid through: December 31, 2025
                      </p>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Download size={16} /> Download Certificate
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">NGO Registration</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Official registration as a non-profit organization
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm">
                        Registration Number: GSNGO12345
                        <br />
                        Registered on: January 10, 2015
                      </p>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Download size={16} /> Download Certificate
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">PAN Card</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Permanent Account Number for tax identification
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm">
                        PAN Number: AABTG1234F
                        <br />
                        Issued to: गौ सेवा Connect Foundation
                      </p>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Download size={16} /> Download Certificate
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-900">Trust Deed</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Legal document establishing our trust
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 text-sm">
                        Trust Registration: TR12345
                        <br />
                        Registered on: January 5, 2015
                      </p>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Download size={16} /> Download Document
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="financial">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-4">Annual Financial Reports</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-gaushala-green-600 mr-3" />
                              <div>
                                <p className="font-medium">Annual Report 2024-2025</p>
                                <p className="text-sm text-gray-500">Complete audited financial statements</p>
                              </div>
                            </div>
                            <Button variant="outline" className="flex items-center gap-1">
                              <Download size={16} /> Download
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-gaushala-green-600 mr-3" />
                              <div>
                                <p className="font-medium">Annual Report 2023-2024</p>
                                <p className="text-sm text-gray-500">Complete audited financial statements</p>
                              </div>
                            </div>
                            <Button variant="outline" className="flex items-center gap-1">
                              <Download size={16} /> Download
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-gaushala-green-600 mr-3" />
                              <div>
                                <p className="font-medium">Annual Report 2022-2023</p>
                                <p className="text-sm text-gray-500">Complete audited financial statements</p>
                              </div>
                            </div>
                            <Button variant="outline" className="flex items-center gap-1">
                              <Download size={16} /> Download
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-gaushala-green-600 mr-3" />
                              <div>
                                <p className="font-medium">Tax Returns 2023-2024</p>
                                <p className="text-sm text-gray-500">Filed income tax returns</p>
                              </div>
                            </div>
                            <Button variant="outline" className="flex items-center gap-1">
                              <Download size={16} /> Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-4">Expense Breakdown</h3>
                        <ExpenseChart />
                        <div className="mt-6 space-y-3">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-gaushala-green-500 rounded-full mr-2"></div>
                            <span className="text-sm">Feed & Nutrition (45%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-gaushala-saffron-500 rounded-full mr-2"></div>
                            <span className="text-sm">Medical Care (25%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                            <span className="text-sm">Infrastructure (15%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                            <span className="text-sm">Staff Salaries (10%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
                            <span className="text-sm">Administrative (5%)</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                          Our commitment: 85% of all donations directly benefit the cows through food, shelter, and medical care.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="recognition">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-6">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <Award className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold text-gray-900">Awards & Recognition</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Honors received for our work in animal welfare
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="border-l-4 border-gaushala-green-500 pl-4 py-1">
                          <h4 className="font-medium">Best Animal Shelter 2023</h4>
                          <p className="text-gray-600 text-sm">Awarded by Rural Welfare Association for excellence in animal care</p>
                        </div>
                        
                        <div className="border-l-4 border-gaushala-green-500 pl-4 py-1">
                          <h4 className="font-medium">Environmental Impact Award 2022</h4>
                          <p className="text-gray-600 text-sm">For sustainable practices in operating our Gaushala</p>
                        </div>
                        
                        <div className="border-l-4 border-gaushala-green-500 pl-4 py-1">
                          <h4 className="font-medium">Community Service Recognition 2021</h4>
                          <p className="text-gray-600 text-sm">For our contribution to rural community development</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-6">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold text-gray-900">Compliance & Standards</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Meeting all regulatory standards for animal welfare
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium">Animal Welfare Standards Compliance</h4>
                            <p className="text-gray-600 text-sm">Certified by Animal Welfare Board of India</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium">Health & Hygiene Certification</h4>
                            <p className="text-gray-600 text-sm">Regular inspections by veterinary authorities</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium">Environmental Compliance</h4>
                            <p className="text-gray-600 text-sm">Sustainable waste management practices</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium">Ethical Fund Management</h4>
                            <p className="text-gray-600 text-sm">Transparent financial practices</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-6">
                        <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                          <BarChart className="h-5 w-5 text-gaushala-green-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold text-gray-900">Impact Metrics</h3>
                          <p className="text-gray-600 text-sm mt-1">
                            Measuring our contribution to animal welfare and community
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <h4 className="text-3xl font-bold text-gaushala-green-600">5,000+</h4>
                          <p className="text-gray-700">Cows Rescued</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <h4 className="text-3xl font-bold text-gaushala-green-600">95%</h4>
                          <p className="text-gray-700">Survival Rate</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <h4 className="text-3xl font-bold text-gaushala-green-600">120+</h4>
                          <p className="text-gray-700">Villages Served</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <h4 className="text-3xl font-bold text-gaushala-green-600">50+</h4>
                          <p className="text-gray-700">Rural Jobs Created</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default Transparency;
