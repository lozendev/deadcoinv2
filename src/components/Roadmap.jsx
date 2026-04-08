import React from 'react';

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-start z-30 pb-24 md:pb-[25vh]">


      {/* Background Gradient from Top (Identical to Graveyard) */}
      <div
        className="absolute inset-x-0 top-0 h-[400px] opacity-40 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, #649329 0%, transparent 100%)'
        }}
      />

      {/* Roadmap Header (Narrative Style) */}
      <div className="relative z-20 w-full text-center mt-20 mb-2">
        <span className="text-white/40 font-semibold tracking-[0.4em] uppercase text-[10px] md:text-xs">
          ROADMAP
        </span>
      </div>

      {/* Main Content Split */}
      <div className="relative z-20 w-full h-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 pb-32 md:pb-0 items-start overflow-y-auto md:overflow-visible">

        {/* Left Side */}
        <div className="flex flex-col items-start justify-start text-left w-full xl:max-w-xl">
          <h2 className="text-white font-sans font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-4 md:mb-6">
            HAD A ROADMAP
          </h2>
          <div className="font-sans text-[7pt] md:text-[9pt] leading-[1.6] opacity-70 uppercase tracking-[0.2em] text-white text-left flex flex-col gap-4">
            <p>
              Our roadmap is simple and beautifully honest:<br />
              the coin dies, we relaunch it as #2+,
            </p>
            <p>
              it dies again, and we repeat the cycle with<br />
              fresh memes and copium <span className="font-bold text-[#f0c73c]">UNTIL</span><br />
              one version finally moons.
            </p>
            <p>
              Just endless death, rebirth, and the slim hope<br />
              that persistence beats competence.
            </p>
            <p className="mt-2 text-white/90">
              Welcome to Dead Coin, where failure is<br />our foreplay.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end justify-start text-right w-full xl:max-w-md ml-auto mt-12 md:mt-0">
          <h2 className="text-white font-sans font-bold text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-4 md:mb-6">
            ...BUT IT DIED TOO
          </h2>
          <div className="text-white/80 font-sans text-lg md:text-xl lg:text-2xl leading-relaxed flex flex-col mt-4 md:mt-8 uppercase">
            <p>NO FANCY <span className="text-[#f0c73c] font-bold">CHARTS</span></p>
            <p>NO <span className="text-[#f0c73c] font-bold">FAKE</span> UTILITY</p>
            <p>NO <span className="underline font-black text-white">BULLSHIT</span> PROMISES</p>
          </div>
        </div>
      </div>

      {/* Center Image (fu.png) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[40vh] lg:h-[45vh] w-auto pointer-events-none z-10 flex justify-center items-end">
        <img
          src="./jpegs/fu.png"
          alt="Roadmap Character"
          className="h-full w-auto object-contain object-bottom"
        />
      </div>

    </section>
  );
}
