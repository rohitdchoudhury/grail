import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Description: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.5 }, // Starting from the middle with reduced scale
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' } // Spreading out and becoming fully visible
      );
    }
  }, []);

  return (
    <div className="relative w-screen h-2/6 flex items-center justify-center mt-0 mb-20">
      <div
        ref={textRef}
        className="max-w-full text-center p-6 bg-white "
      >
        <p className="text-black text-lg leading-relaxed">
          <p>Techwear refers to clothing made from technical fabrics like Primaloft nylon, Polartec fleece, designed to allow for water-resistance, 
          <p></p> breathability, windproof features, and comfort.Techwear can also describe a specific aesthetic inspired by cyberpunk culture and urban fashion.</p>
        </p>
      </div>
    </div>
  );
};

export default Description;
