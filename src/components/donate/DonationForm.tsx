
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export const donationAmounts = [
  { value: "501", label: "₹501", impact: "Feeds 1 cow for a week" },
  { value: "1100", label: "₹1,100", impact: "Provides medical care for 2 cows" },
  { value: "2100", label: "₹2,100", impact: "Supports 3 cows for a month" },
  { value: "5100", label: "₹5,100", impact: "Helps 10 cows with comprehensive care" },
  { value: "11000", label: "₹11,000", impact: "Sponsors a cow for 6 months" },
  { value: "21000", label: "₹21,000", impact: "Fully sponsors a cow for a year" },
];

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState("1100");
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
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
  );
};

export default DonationForm;
