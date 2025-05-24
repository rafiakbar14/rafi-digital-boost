
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  startingPrice?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
  startingPrice,
  className
}) => {
  return (
    <div className={cn("bg-white rounded-xl overflow-hidden shadow-md card-hover", className)}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {startingPrice && (
          <div className="mb-4">
            <span className="text-lg font-bold text-brand-blue">Mulai dari {startingPrice}</span>
          </div>
        )}
        <Link 
          to={`${linkUrl}#${linkUrl === "/ecommerce" ? "pricing" : "top"}`} 
          className="flex items-center text-brand-blue hover:text-brand-blue-dark font-medium transition-colors"
        >
          <span>Lihat Detail</span>
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
