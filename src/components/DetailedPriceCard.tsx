
import React, { useState } from 'react';
import { Check, PhoneCall, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

interface DetailedPriceCardProps {
  title: string;
  description: string;
  startingPrice: string;
  tiers: PricingTier[];
  className?: string;
}

const DetailedPriceCard: React.FC<DetailedPriceCardProps> = ({
  title,
  description,
  startingPrice,
  tiers,
  className
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappMessage = `Halo, saya berminat dengan layanan ${title}. Bisa konsultasi lebih lanjut?`;

  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg",
      className
    )}>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="mb-4">
          <span className="text-2xl font-bold text-gray-900">Mulai dari {startingPrice}</span>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center gap-2 w-full py-2 px-4 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-lg transition-all font-medium mb-4"
        >
          <span>Lihat Detail Paket</span>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {isExpanded && (
          <div className="space-y-4 animate-fade-in">
            {tiers.map((tier, index) => (
              <div key={index} className={cn(
                "border rounded-lg p-4 relative",
                tier.isPopular ? "border-brand-blue bg-blue-50" : "border-gray-200"
              )}>
                {tier.isPopular && (
                  <div className="absolute -top-2 left-4 bg-brand-blue text-white text-xs font-bold px-2 py-1 rounded">
                    POPULER
                  </div>
                )}
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-900">{tier.name}</h4>
                  <span className="text-lg font-bold text-brand-blue">{tier.price}</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/6283135183093?text=${encodeURIComponent(whatsappMessage + ` Paket ${tier.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg transition-all font-medium text-sm",
                    tier.isPopular 
                      ? "bg-brand-blue hover:bg-brand-blue-dark text-white" 
                      : "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  )}
                >
                  <PhoneCall size={14} />
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            ))}
          </div>
        )}

        <a 
          href={`https://wa.me/6283135183093?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-lg transition-all font-semibold mt-4"
        >
          <PhoneCall size={18} />
          <span>Konsultasi Gratis</span>
        </a>
      </div>
    </div>
  );
};

export default DetailedPriceCard;
