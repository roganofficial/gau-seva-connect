
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Download } from "lucide-react";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const bankDetails = {
  accountName: "गौ सेवा Connect Foundation",
  accountNumber: "1234567890123456",
  ifscCode: "ABCD0123456",
  bankName: "Indian National Bank",
  branchName: "Main Branch, Delhi",
  swiftCode: "INBNABCD123"
};

const BankTransferDetails = () => {
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(16);
    doc.text('Bank Account Details', 14, 20);
    
    // Prepare data for table
    const tableData = Object.entries(bankDetails).map(([key, value]) => [
      key.split(/(?=[A-Z])/).join(" "),
      value
    ]);
    
    // Add table
    autoTable(doc, {
      startY: 30,
      head: [['Field', 'Details']],
      body: tableData,
      styles: { fontSize: 12 },
      headStyles: { fillColor: [76, 175, 80] },
    });
    
    // Save PDF
    doc.save('gau-seva-connect-bank-details.pdf');
  };

  return (
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
            {Object.entries(bankDetails).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  {key.split(/(?=[A-Z])/).join(" ")}
                </label>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <span className="font-medium">{value}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleCopyToClipboard(value)}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleDownloadPDF}
            >
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
  );
};

export default BankTransferDetails;
