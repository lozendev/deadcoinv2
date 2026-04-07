import React from 'react';

export default function Marquee() {
  // Array of 10 items to comfortably span most screens.
  const items = Array(10).fill("Are we dead yet?");

  return (
    <section className="bg-white w-full py-4 md:py-8 overflow-hidden flex whitespace-nowrap z-40 relative">
      <div className="flex animate-marquee min-w-max will-change-transform">
        
        {/* Set 1 */}
        <div className="flex items-center justify-start whitespace-nowrap pr-4 md:pr-8">
          {items.map((text, idx) => (
            <span 
              key={`set1-${idx}`} 
              className="text-black font-sans font-bold text-4xl md:text-6xl tracking-tight pr-4 md:pr-8 flex items-center gap-4 md:gap-8"
            >
              {text} <span>💀</span>
            </span>
          ))}
        </div>

        {/* Set 2 (Exact Duplicate for Seamless Loop) */}
        <div className="flex items-center justify-start whitespace-nowrap pr-4 md:pr-8">
          {items.map((text, idx) => (
            <span 
              key={`set2-${idx}`} 
              className="text-black font-sans font-bold text-4xl md:text-6xl tracking-tight pr-4 md:pr-8 flex items-center gap-4 md:gap-8"
            >
              {text} <span>💀</span>
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
