import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: 'John Smith',
      text: 'Exceptional service! The team was professional and thorough. My gutters have never worked better.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      text: 'Very impressed with their attention to detail and the quality of work. Highly recommend!',
      rating: 5
    },
    {
      name: 'Mike Williams',
      text: 'Fast, efficient, and reasonably priced. They did an amazing job with my gutter installation.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#00224D]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#FF204E]">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FF204E] fill-current" />
                ))}
              </div>
              <p className="text-white/80 mb-4">{testimonial.text}</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;