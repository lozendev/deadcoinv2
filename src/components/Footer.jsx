import React from 'react';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden pb-0"
    >
      {/* Inner container */}
      <div className="relative z-10 w-full px-6 md:px-12 pt-16 md:pt-24 pb-12 flex flex-col min-h-[70vh]">

        {/* TOP ROW */}
        <div className="flex items-start justify-between w-full mb-12 md:mb-20">
          {/* Top Left: Logo */}
          <div className="flex items-center">
            <img
              src="/deadcoinv2/logoyellow.png"
              alt="Dead Coin Logo"
              className="h-[4.5rem] w-auto object-contain animate-glitch"
            />
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="relative flex flex-col items-center justify-center flex-grow overflow-visible mb-[-2rem] md:mb-[-4rem]">
          
          {/* Top Right: Disclaimer positioned relative to the "COIN" part */}
          <div className="absolute top-[-2rem] md:top-[-4rem] right-0 md:right-65 z-30 max-w-[500px] text-center">
            <p className="font-sans text-[7pt] md:text-[9pt] leading-tight opacity-70 uppercase tracking-[0.2em] text-white">
              DYOR because if this shitcoin rugs you into oblivion,<br />
              at least you can blame yourself instead of me.
            </p>
          </div>

          <h1
            className="font-header text-white font-black uppercase leading-none select-none w-full text-center tracking-[0.05em] md:tracking-[0.1em] lg:tracking-[0.15em] whitespace-nowrap"
            style={{ fontSize: 'clamp(5rem, 20vw, 22rem)', lineHeight: 1 }}
          >
            DEAD COIN
          </h1>

          {/* Character Image: UNCHOPPED and touching bottom */}
          <div className="absolute bottom--10 left-1/2 -translate-x-1/2 h-[75vh] md:h-[60vh] w-auto pointer-events-none z-20 flex items-end justify-center">
            <img
              src="/deadcoinv2/jpegs/foot.png"
              alt="Footer Character"
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
        </div>

        {/* BOTTOM ROW: Dropped lower */}
        <div className="relative z-30 flex items-end justify-between w-full mt-auto pt-12">
          {/* Bottom Left: Copyright + Link */}
          <div>
            <a 
              href="https://www.lozen.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-[8pt] md:text-[10pt] leading-[1.6] opacity-70 uppercase tracking-[0.3em] text-white hover:opacity-100 transition-opacity"
            >
              © 2026 LOZENPRJKT#1
            </a>
          </div>

          {/* Bottom Right: Social Buttons */}
          <div className="flex items-center gap-4">
            {/* X / Twitter */}
            <a
              href="https://www.x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] border border-white/40"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://www.t.me/deadcoinlol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] border border-white/40 group/social"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 text-black group-hover/social:text-[#0088cc] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 1.589 4.86c.191.525.097.733.535.733.34 0 .49-.155.679-.34l2.274-2.21 4.73 3.496c.87.48 1.498.232 1.716-.812l3.1-14.618c.317-1.27-.481-1.847-1.313-1.428z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
