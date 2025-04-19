
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DonationImpact = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Impact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { amount: "₹500", impact: "Feeds 1 cow for a week" },
            { amount: "₹5K", impact: "Provides medical care for 10 cows" },
            { amount: "₹21K", impact: "Fully sponsors a cow for a year" }
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
                  <span className="text-gaushala-green-600 font-bold">{item.amount}</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium">{item.impact}</p>
                </div>
              </div>
            </div>
          ))}
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
  );
};

export default DonationImpact;
