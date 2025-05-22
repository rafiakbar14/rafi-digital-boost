
import React from 'react';
import { Check, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
  ctaText = "Hubungi Saya",
  ctaLink = "https://wa.me/6283135183093",
  className
}) => {
  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden shadow-md relative transition-all duration-300",
      isPopular ? "border-2 border-brand-blue scale-[1.03] shadow-blue-glow" : "border border-gray-100",
      "hover:shadow-lg",
      className
    )}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULER
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
        </div>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <a 
          href={ctaLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={cn(
            "flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg transition-all font-semibold",
            isPopular 
              ? "bg-brand-blue hover:bg-brand-blue-dark text-white" 
              : "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
          )}
        >
          <PhoneCall size={18} />
          <span>{ctaText}</span>
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
