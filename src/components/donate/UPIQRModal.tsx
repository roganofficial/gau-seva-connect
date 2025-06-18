import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface UPIQRModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
}

const UPIQRModal = ({ isOpen, onClose, amount }: UPIQRModalProps) => {
  const upiUrl = `upi://pay?pa=ravijyoti3@okhdfcbank&pn=Ravi Jyoti&am=${amount}&cu=INR`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Scan QR Code to Pay</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
              upiUrl
            )}`}
            alt="UPI QR Code"
            className="w-64 h-64"
          />
          <p className="text-sm text-gray-500">Amount: ₹{amount}</p>
          <p className="text-sm text-gray-500">UPI ID: ravijyoti3@okhdfcbank</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UPIQRModal;
