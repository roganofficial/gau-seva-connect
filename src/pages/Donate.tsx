
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Download, Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const donationAmounts = [
  { value: "501", label: "₹501", impact: "Feeds 1 cow for a week" },
  { value: "1100", label: "₹1,100", impact: "Provides medical care for 2 cows" },
  { value: "2100", label: "₹2,100", impact: "Supports 3 cows for a month" },
  { value: "5100", label: "₹5,100", impact: "Helps 10 cows with comprehensive care" },
  { value: "11000", label: "₹11,000", impact: "Sponsors a cow for 6 months" },
  { value: "21000", label: "₹21,000", impact: "Fully sponsors a cow for a year" },
];

const bankDetails = {
  accountName: "गौ सेवा Connect Foundation",
  accountNumber: "1234567890123456",
  ifscCode: "ABCD0123456",
  bankName: "Indian National Bank",
  branchName: "Main Branch, Delhi",
  swiftCode: "INBNABCD123"
};

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("1100");
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gaushala-cream py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Support Our Cause</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Your generosity helps us provide shelter, food, and medical care to hundreds of cows.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Tabs defaultValue="online">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="online">Online Donation</TabsTrigger>
                    <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
                  </TabsList>
                  <TabsContent value="online">
                    <Card>
                      <CardHeader>
                        <CardTitle>Make a Donation</CardTitle>
                        <CardDescription>
                          Choose an amount or enter a custom donation. All donations are eligible for tax benefits under Section 80G.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form>
                          <div className="space-y-6">
                            <div>
                              <Label className="text-base">Select Donation Amount</Label>
                              <RadioGroup 
                                value={donationAmount} 
                                onValueChange={setDonationAmount}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3"
                              >
                                {donationAmounts.map((amount) => (
                                  <div key={amount.value} className="relative">
                                    <RadioGroupItem
                                      value={amount.value}
                                      id={`amount-${amount.value}`}
                                      className="peer sr-only"
                                    />
                                    <Label
                                      htmlFor={`amount-${amount.value}`}
                                      className="flex flex-col p-4 bg-white border border-gray-200 rounded-md cursor-pointer peer-checked:border-gaushala-green-500 peer-checked:bg-gaushala-green-50 hover:bg-gray-50"
                                    >
                                      <span className="text-lg font-semibold">{amount.label}</span>
                                      <span className="text-sm text-gray-500">{amount.impact}</span>
                                    </Label>
                                  </div>
                                ))}
                                <div className="relative md:col-span-2 lg:col-span-3">
                                  <RadioGroupItem
                                    value="custom"
                                    id="amount-custom"
                                    className="peer sr-only"
                                  />
                                  <Label
                                    htmlFor="amount-custom"
                                    className="flex items-center p-4 bg-white border border-gray-200 rounded-md cursor-pointer peer-checked:border-gaushala-green-500 peer-checked:bg-gaushala-green-50 hover:bg-gray-50 w-full"
                                  >
                                    <span className="text-lg font-semibold mr-3">Custom: </span>
                                    <Input 
                                      type="number" 
                                      placeholder="₹ Enter amount" 
                                      className="max-w-xs"
                                      value={customAmount}
                                      onChange={(e) => {
                                        setCustomAmount(e.target.value);
                                        setDonationAmount("custom");
                                      }}
                                    />
                                  </Label>
                                </div>
                              </RadioGroup>
                            </div>

                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <Label htmlFor="recurring" className="text-base">Make this a monthly donation</Label>
                                <Switch 
                                  id="recurring" 
                                  checked={isRecurring}
                                  onCheckedChange={setIsRecurring}
                                />
                              </div>
                              <div className="flex items-center justify-between">
                                <Label htmlFor="anonymous" className="text-base">Donate anonymously</Label>
                                <Switch 
                                  id="anonymous" 
                                  checked={isAnonymous}
                                  onCheckedChange={setIsAnonymous}
                                />
                              </div>
                            </div>

                            <Button type="button" className="w-full bg-gaushala-saffron-500 hover:bg-gaushala-saffron-600 text-white text-lg py-6">
                              Proceed to Payment
                            </Button>
                            <p className="text-center text-sm text-gray-500">
                              We accept Credit/Debit cards, UPI, Net Banking, and Wallet payments through our secure payment gateway.
                            </p>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="bank">
                    <Card>
                      <CardHeader>
                        <CardTitle>Direct Bank Transfer</CardTitle>
                        <CardDescription>
                          You can make a direct transfer to our bank account. Please use your name as reference.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-500">Account Name</label>
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                <span className="font-medium">{bankDetails.accountName}</span>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleCopyToClipboard(bankDetails.accountName)}
                                >
                                  <Copy size={16} />
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-500">Account Number</label>
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                <span className="font-medium">{bankDetails.accountNumber}</span>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleCopyToClipboard(bankDetails.accountNumber)}
                                >
                                  <Copy size={16} />
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-500">IFSC Code</label>
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                <span className="font-medium">{bankDetails.ifscCode}</span>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleCopyToClipboard(bankDetails.ifscCode)}
                                >
                                  <Copy size={16} />
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-500">Bank Name</label>
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                <span className="font-medium">{bankDetails.bankName}</span>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleCopyToClipboard(bankDetails.bankName)}
                                >
                                  <Copy size={16} />
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-500">Branch</label>
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                <span className="font-medium">{bankDetails.branchName}</span>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleCopyToClipboard(bankDetails.branchName)}
                                >
                                  <Copy size={16} />
                                </Button>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-500">SWIFT Code (for international transfers)</label>
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                                <span className="font-medium">{bankDetails.swiftCode}</span>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => handleCopyToClipboard(bankDetails.swiftCode)}
                                >
                                  <Copy size={16} />
                                </Button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-center mt-4">
                            <Button variant="outline" className="flex items-center gap-2">
                              <Download size={16} /> Download Bank Details (PDF)
                            </Button>
                          </div>
                          
                          <div className="bg-gaushala-cream p-4 rounded-md mt-4">
                            <p className="text-gray-700">
                              <strong>Important:</strong> After making the transfer, please email us at <a href="mailto:donations@gauseva-connect.org" className="text-gaushala-green-600 underline">donations@gauseva-connect.org</a> with your transaction details to receive a tax exemption certificate.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Donation Impact & Tax Benefits */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Impact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                            <span className="text-gaushala-green-600 font-bold">₹500</span>
                          </div>
                          <div className="ml-4">
                            <p className="font-medium">Feeds 1 cow for a week</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                            <span className="text-gaushala-green-600 font-bold">₹5K</span>
                          </div>
                          <div className="ml-4">
                            <p className="font-medium">Provides medical care for 10 cows</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                            <span className="text-gaushala-green-600 font-bold">₹21K</span>
                          </div>
                          <div className="ml-4">
                            <p className="font-medium">Fully sponsors a cow for a year</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tax Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        All donations to गौ सेवा Connect are eligible for tax deduction under Section 80G of the Income Tax Act.
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Registration Details:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>80G Certificate: AABTG1234F</li>
                        <li>12A Registration: AABTG1234F12A</li>
                        <li>FCRA Registration: 098765432</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
