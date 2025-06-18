import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, LucideIcon } from "lucide-react";

interface CertificateCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  buttonText?: string;
  url?: string;
}

const CertificateCard = ({
  icon: Icon,
  title,
  description,
  details,
  buttonText = "Download Certificate",
  url
}: CertificateCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 rounded-full bg-gaushala-green-100 flex items-center justify-center">
            <Icon className="h-5 w-5 text-gaushala-green-600" />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4 text-sm">
          {details.map((detail, index) => (
            <span key={index}>
              {detail}
              {index < details.length - 1 && <br />}
            </span>
          ))}
        </p>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Download size={16} /> {buttonText}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
