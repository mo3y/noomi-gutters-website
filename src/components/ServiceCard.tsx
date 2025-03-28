import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-[#FF204E]/50">
      <Icon className="w-12 h-12 text-[#FF204E] mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
};

export default ServiceCard;