import React, { useState } from 'react';

const FAQ_DATA = [
  { id: 1, question: "Is Dead Coin a good investment?", answer: "Absolutely not. But it’s way more entertaining than your 401(k)." },
  { id: 2, question: "When is the next relaunch?", answer: "After we die, usually the next day or next time zone." },
  { id: 3, question: "Are there any risks?", answer: "Yes. You might get emotionally attached to a coin that keeps dying." },
  { id: 4, question: "Why $DEAD and not $UNDEAD?", answer: "Because 99% of the time we will be dead. There's no cheating it." },
  { id: 5, question: "When will Dead Coin moon?", answer: "On the version where we finally stop dying. So… V69 maybe?" },
  { id: 6, question: "Who is behind Dead Coin?", answer: "LozenDev. A professional failures who refuses to stay dead." },
  { id: 7, question: "Why should I buy Dead Coin?", answer: "Because your other coins are boringly alive and never throw funeral parties." },
  { id: 8, question: "Is there a token burn?", answer: "Every time the coin dies, a portion of holders’ hope gets burned." },
  { id: 9, question: "What’s your marketing strategy?", answer: "Post “V2+ SOON” until something sticks. It’s genius." },
  { id: 10, question: "WHAT IS DEAD COIN?", answer: "The only honest memecoin. It dies, we revive it. Zero utility, infinite rebirth." },
];

export default function Faq() {
  const [currentIndex, setCurrentIndex] = useState(4);
  const [expandedId, setExpandedId] = useState(null);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % FAQ_DATA.length);
    setExpandedId(null);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + FAQ_DATA.length) % FAQ_DATA.length);
    setExpandedId(null);
  };

  const jumpToIndex = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setExpandedId(null);
    }
  };

  const getCardStyles = (offset) => {
    if (offset === 0) return "translate-x-0 scale-100 translate-y-0 opacity-100 z-50 shadow-[0_20px_50px_rgba(0,0,0,0.5)]";
    if (offset === -1) return "-translate-x-[70%] md:-translate-x-[110%] scale-[0.85] translate-y-0 opacity-90 z-40 cursor-pointer hover:opacity-100";
    if (offset === 1) return "translate-x-[70%] md:translate-x-[110%] scale-[0.85] translate-y-0 opacity-90 z-40 cursor-pointer hover:opacity-100";
    if (offset === -2) return "-translate-x-[130%] md:-translate-x-[200%] scale-[0.85] -translate-y-8 md:-translate-y-16 opacity-50 z-30 cursor-pointer hover:opacity-70";
    if (offset === 2) return "translate-x-[130%] md:translate-x-[200%] scale-[0.85] -translate-y-8 md:-translate-y-16 opacity-50 z-30 cursor-pointer hover:opacity-70";
    if (offset < -2) return "-translate-x-[250%] scale-50 opacity-0 z-10 pointer-events-none";
    if (offset > 2) return "translate-x-[250%] scale-50 opacity-0 z-10 pointer-events-none";
    return "hidden";
  };

  return (
    <section id="faq" className="relative min-h-[80vh] w-full overflow-hidden flex flex-col items-center justify-start z-30 py-24 md:py-32">

      
      {/* Ledge Image */}
      <img src="/jpegs/ledge.png" alt="" className="absolute top-12 md:top-20 right-0 w-[200px] md:w-[350px] h-auto pointer-events-none z-10" />

      {/* FAQ Header (Identical to "DIE n ARISE" from Hero) */}
      <div className="w-full text-center flex justify-center mt-12 mb-20 md:mb-32 relative z-20">
        <h1 className="font-header text-[16vw] md:text-[150pt] uppercase leading-none text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
          F<span className="text-[#b1de42]">A</span>Q
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[100rem] mx-auto h-[320px] md:h-[400px] flex items-center justify-center perspective-[1000px]">
        {FAQ_DATA.map((item, idx) => {
          const n = FAQ_DATA.length;
          // Shortest circular distance — prevents visual jump on wrap-around
          let wrappedOffset = ((idx - currentIndex) % n + n) % n;
          if (wrappedOffset > n / 2) wrappedOffset -= n;
          const offset = wrappedOffset;
          const isCenter = offset === 0;
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              onClick={() => !isCenter && jumpToIndex(idx)}
              className={`absolute top-[35%] md:top-[40%] left-1/2 -ml-[125px] md:-ml-[150px] -mt-[125px] md:-mt-[150px] w-[250px] h-[250px] md:w-[300px] md:h-[300px] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] rounded-[2rem] border border-[#b1de42]/60 p-5 flex flex-col justify-center items-center backdrop-blur-xl overflow-hidden ${
                isExpanded 
                  ? 'bg-white/95 text-black shadow-[0_0_60px_rgba(240,198,61,0.3),inset_0_1px_0_rgba(255,255,255,0.8)]' 
                  : 'bg-[#f0c73c]/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(240,199,60,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]'
              } ${getCardStyles(offset)}`}
            >
              {/* Radial glow in bottom-left */}
              {!isExpanded && (
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#f0c73c]/20 rounded-full blur-2xl pointer-events-none" />
              )}
              {/* Dead coin skull decoration */}
              {!isExpanded && (
                <span className="absolute top-4 right-5 text-[#b1de42]/30 text-2xl pointer-events-none select-none">💀</span>
              )}

              {/* Card inner layout: question rises, answer appears below */}
              <div className={`relative z-10 w-full flex flex-col transition-all duration-500 ${isExpanded ? 'justify-start pt-2 gap-4' : 'justify-center items-center h-full'}`}>
                
                {/* Question — slides up by transitioning from centered to top */}
                <h3 className={`font-sans font-black uppercase text-center tracking-tight text-xl md:text-2xl transition-all duration-500 ${isExpanded ? 'text-black' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'}`}>
                  {item.question}
                </h3>

                {/* Answer — fades in below the question */}
                <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden font-sans text-sm md:text-base font-medium text-center leading-relaxed text-black/80">
                    {item.answer}
                  </div>
                </div>

              </div>

              {/* Toggle Button Box */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if (isCenter) setExpandedId(isExpanded ? null : item.id);
                }}
                className={`absolute bottom-5 z-20 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 cursor-pointer ${
                  isExpanded 
                    ? 'right-5 bg-[#0a0a0a] text-white shadow-md' 
                    : 'left-5 bg-black/10 text-black hover:bg-black/20'
                } ${!isCenter && 'opacity-0 pointer-events-none'}`}
              >
                {isExpanded ? (
                  <svg className="w-6 h-6 rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </div>
          );
        })}
        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-[75%] md:top-[80%] -translate-y-1/2 flex items-center justify-between px-2 md:px-8 lg:px-16 z-50 pointer-events-none">
          <button 
            onClick={handlePrev}
            className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 bg-white text-black hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={handleNext}
            className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 bg-white text-black hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}
