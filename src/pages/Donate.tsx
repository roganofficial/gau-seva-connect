
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DonationForm from "@/components/donate/DonationForm";
import BankTransferDetails from "@/components/donate/BankTransferDetails";
import DonationImpact from "@/components/donate/DonationImpact";

const Donate = () => {
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
                    <DonationForm />
                  </TabsContent>
                  <TabsContent value="bank">
                    <BankTransferDetails />
                  </TabsContent>
                </Tabs>
              </div>

              {/* Donation Impact & Tax Benefits */}
              <div className="lg:col-span-1">
                <DonationImpact />
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
