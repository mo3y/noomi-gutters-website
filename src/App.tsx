import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, Droplets, Shield, RefreshCw, Power, Home } from 'lucide-react';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import ServiceCard from './components/ServiceCard';
import TestimonialSection from './components/TestimonialSection';
import ContactForm from './components/ContactForm';

function App() {
  const services = [
    { icon: Droplets, title: 'Gutter Cleaning', description: 'Professional cleaning to ensure proper water flow' },
    { icon: Shield, title: 'Gutter Guard Installation', description: 'Premium protection against debris and clogs' },
    { icon: RefreshCw, title: 'Gutter Replacement', description: 'Expert installation of modern gutter systems' },
    { icon: Power, title: 'Power Washing', description: 'Restore your property\'s pristine appearance' },
    { icon: Home, title: 'Roof Cleaning', description: 'Comprehensive roof maintenance services' },
  ];

  return (
    <div className="min-h-screen bg-[#00224D] text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in text-[#FF204E] drop-shadow-[0_0_35px_rgba(255,32,78,0.3)]">
            Noomi Gutters
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-white/90">
            Professional Gutter Solutions That Protect Your Home
          </p>
          <button className="bg-[#FF204E] hover:bg-[#A0153E] text-white px-8 py-4 rounded-full text-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            Schedule Service Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#00224D] to-[#5D0E41]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FF204E]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="mt-16 text-center text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              At Noomi Gutters, we understand that your home's drainage system is more than just metal channels—it's a critical defense against water damage. Our comprehensive gutter services are designed to protect your property's structural integrity, prevent foundation issues, and maintain your home's aesthetic appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <BeforeAfterGallery />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Contact Section */}
      <section className="py-20 bg-[#00224D]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#FF204E]">Contact Us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#FF204E]" />
                <div>
                  <p className="text-lg">443-417-5707</p>
                  <p className="text-lg">443-600-2696</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#FF204E]" />
                <p className="text-lg">Noomigutters@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[#FF204E]" />
                <p className="text-lg">Baltimore, MD</p>
              </div>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.89219782043!2d-76.71789269076645!3d39.28387495747376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803aed6f483b7%3A0x44896a84223e758!2sBaltimore%2C%20MD!5e0!3m2!1sen!2sus!4v1644324093555!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;