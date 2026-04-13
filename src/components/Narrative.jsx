import React from 'react';

export default function Narrative() {
  const mockupData = [
    { 
      emoji: '💀', 
      header: 'Born to Die', 
      text: 'We relaunch as #2+ every time we flatline. Death is just version control.' 
    },
    { 
      emoji: '🧟', 
      header: 'Undead Investing', 
      text: 'Most coins stay dead. Ours keep coming back until one finally moons... probably.' 
    },
    { 
      emoji: '🚬', 
      header: 'Warning: Addictive', 
      text: 'Funerals, community, memes. Only buy if you enjoy chaos with your portfolio.' 
    },
    { 
      emoji: '⭐', 
      header: 'Better Than Alive Coins', 
      text: 'Your bags are boring. Ours die, revive, and might actually moon.' 
    },
  ];

  return (
    <section id="narrative" className="relative bg-white h-screen w-full rounded-[60px] md:rounded-[80px] overflow-hidden -mt-20 z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">

      {/* Narrative Label - Centered at Top */}
      <div className="absolute top-6 md:top-8 left-0 w-full text-center z-10">
        <span className="text-black/40 font-semibold tracking-[0.4em] uppercase text-[10px] md:text-xs">
          Narrative
        </span>
      </div>

      {/* Large Background Image - Increased Size (2/3 coverage) */}
      <div className="absolute bottom-0 left-0 w-[66%] h-[85%] pointer-events-none z-10 flex items-end">
        <img 
          src="/jpegs/n1.png" 
          alt="Deadcoin Graphic" 
          className="w-full h-full object-contain object-left-bottom m-0 p-0"
        />
      </div>

      <div className="relative h-full w-full max-w-5xl mx-auto px-6 md:px-12 z-20">
        {/* Header Section - Left-Aligned Text in Centered Container */}
        <div className="mt-20 md:mt-24 text-left">
          <h2 className="text-black font-sans font-bold text-3xl md:text-5xl lg:text-5xl leading-[1.1] tracking-tight">
            {/* Inline Bullet Dot */}
            <span className="inline-block w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#1A1A1A] shadow-[0_0_15px_rgba(0,255,159,0.5)] border border-[#00FF9F]/30 mr-4 align-middle"></span>
            In a market obsessed with narratives,{' '}
            <img 
              src="/jpegs/n2.png" 
              alt="" 
              className="inline-block h-[0.9em] w-auto rounded-full align-middle mx-1 md:mx-2 translate-y-[-0.05em]"
            />
            {' '}we offer the ultimate one: never fully dying, just persevering until <u>wa</u>g<u>mi</u>.{' '}
            <span className="text-black/30 inline whitespace-normal">
              How many times will this coin be proclaimed $DEAD{' '}
              <img 
                src="/jpegs/n3.png" 
                alt="" 
                className="inline-block h-[0.9em] w-auto rounded-full align-middle mx-1 translate-y-[-0.05em]"
              />
              {' '}before we reach the top?
            </span>
          </h2>
        </div>

        {/* Sub-sentence - Hero Style & Moved Sligtly Lower */}
        <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] md:max-w-[420px] pointer-events-auto z-30">
          <p className="font-sans text-[7pt] md:text-[9pt] leading-[1.3] opacity-60 uppercase tracking-[0.2em] text-black text-center md:text-left drop-shadow-sm">
            Dead Coin lives in a cycle of reincarnation. We embrace the bad news, feed on the FUD, and when the chart finally hits rock bottom, we simply rise again with a fresh coat of paint and a #2 tag.
          </p>
        </div>

        {/* 2x2 Grid - Bottom Right (Aligned with Header Padding & Moved Significanty Higher) */}
        <div className="absolute bottom-28 md:bottom-36 right-6 md:right-12 w-full max-w-[400px] lg:max-w-[480px]">
          <div className="grid grid-cols-2 gap-x-8 md:gap-x-10 gap-y-6 md:gap-y-10">
            {mockupData.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2 md:gap-3">
                <span className="text-2xl md:text-3xl">{item.emoji}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-header text-base md:text-lg text-black uppercase tracking-wider">{item.header}</h3>
                  <p className="text-black/60 text-[10px] md:text-xs leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
