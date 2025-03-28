import React, { useState } from 'react';

const BeforeAfterGallery: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const beforeAfterImages = [
    {
      before: 'https://images.unsplash.com/photo-1632904274436-ce831cd2b7f6?auto=format&fit=crop&q=80',
      after: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?auto=format&fit=crop&q=80',
      title: 'Gutter Cleaning'
    }
  ];

  return (
    <section className="py-20 bg-[#5D0E41]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#FF204E]">Before & After</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${beforeAfterImages[0].after})` }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${beforeAfterImages[0].before})`,
                width: `${sliderPosition}%`,
                borderRight: '2px solid #FF204E'
              }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 appearance-none bg-transparent cursor-pointer"
              style={{
                '--thumb-color': '#FF204E',
                '--track-color': 'transparent'
              } as React.CSSProperties}
            />
          </div>
          <p className="text-center mt-4 text-lg">{beforeAfterImages[0].title}</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;