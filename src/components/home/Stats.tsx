
import { LucideIcon, Utensils, Heart, Calendar, Users } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

const StatItem = ({ icon: Icon, value, label }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-gaushala-green-100 flex items-center justify-center mb-4">
        <Icon size={32} className="text-gaushala-green-600" />
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-gaushala-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem 
            icon={Heart} 
            value="5,000+" 
            label="Cows Rescued" 
          />
          <StatItem 
            icon={Utensils} 
            value="1M+" 
            label="Meals Served" 
          />
          <StatItem 
            icon={Calendar} 
            value="20+" 
            label="Years of Service" 
          />
          <StatItem 
            icon={Users} 
            value="10,000+" 
            label="Supporters" 
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
