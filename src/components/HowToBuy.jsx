import React from 'react';

export default function HowToBuy() {
  const steps = [
    {
      id: '01',
      text: 'Download phantom or your wallet of choice to get a wallet address'
    },
    {
      id: '02',
      text: 'Deposit SOL (Solana) into your new wallet address from a crypto exchange'
    },
    {
      id: '03',
      text: 'Connect wallet to pump.fun and paste the most recent contract address'
    },
    {
      id: '04',
      text: 'Swap SOL for $DEAD by entering the amount you want to convert'
    }
  ];

  return (
    <section id="how-to-buy" className="relative bg-[#0a0a0a] h-[90vh] w-full overflow-hidden z-30">

      {/* Background Image: h2bBG.png - 10% Opacity, Center-Right (Even Larger) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[90%] h-full z-0 pointer-events-none opacity-5">
        <img
          src="/jpegs/h2bbg.png"
          alt=""
          className="w-full h-full object-contain object-right"
        />
      </div>

      {/* Featured Image: hang.png - Touching Top, Resized */}
      <div className="absolute top-0 right-[2%] h-[90vh] w-auto z-10 pointer-events-none hidden md:block">
        <img
          src="/jpegs/hang.png"
          alt="Hanging Zombie"
          className="h-full w-auto object-contain object-right"
        />
      </div>

      <div className="relative h-full w-full max-w-7xl mx-auto px-6 md:px-20 z-20 flex flex-col items-start py-20 md:py-24 justify-between">
        <div className="max-w-4xl w-full flex flex-col">
          {/* Headers Section - Centered RELATIVE to the grid/assembly */}
          <div className="w-full text-center mb-10 md:mb-14">
            <div className="mb-2">
              <span className="text-white/40 font-semibold tracking-[0.4em] uppercase text-[10px] md:text-xs">
                How to Buy
              </span>
            </div>

            <h2 className="text-white font-sans font-bold text-4xl md:text-6xl uppercase tracking-tight">
              $DEAD COIN
            </h2>
          </div>

          {/* 2x2 Grid of Cards - Explicitly w-full to define the centering axis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative group p-8 rounded-3xl border border-[#d5c544]/20 bg-[#00FF9F]/5 backdrop-blur-xl overflow-hidden hover:border-[#d5c544]/60 transition-all duration-500 min-h-[180px] flex flex-col justify-center"
              >
                {/* Radial Gradient Glow */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#f0c73c]/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#f0c73c]/30 transition-colors duration-500"></div>

                {/* Step Number - Top Left */}
                <span className="absolute top-6 left-8 font-header text-white/20 text-2xl md:text-3xl tracking-tighter group-hover:text-[#00FF9F]/40 transition-colors duration-500">
                  {step.id}
                </span>

                {/* Card Content - Centered */}
                <p className="text-white/80 text-center font-sans font-medium text-sm md:text-base leading-relaxed relative z-10 mt-6 group-hover:text-white transition-colors duration-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Sentence - Centered RELATIVE to the grid columns */}
          <div className="mt-10 md:mt-14 w-full text-center">
            <p className="font-sans text-[7pt] md:text-[9pt] opacity-60 uppercase tracking-[0.2em] text-white/60 drop-shadow-sm mx-auto">
              BY THE TIME YOU DO THESE STEPS<br />
              WE MAY ALREADY BE DEAD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
