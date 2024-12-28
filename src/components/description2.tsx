import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Description2: React.FC = () => {
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
          <h1>GRAIL IS THE INTERSECTION OF HIGH END TECHWEAR, STYLE, DURABLITY AND AFFORDABILITY</h1>
        </p>
      </div>
    </div>
  );
};

export default Description2;
