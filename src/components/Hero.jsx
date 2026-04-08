import React from 'react';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const start = window.pageYOffset;
      const target = element.getBoundingClientRect().top + start;
      const duration = 1500;
      const startTime = performance.now();

      // Ease-in Cubic: starts slow, picks up speed
      const easeInCubic = (t) => t * t * t;

      function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInCubic(progress);

        window.scrollTo(0, start + (target - start) * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
      requestAnimationFrame(animate);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-24 overflow-hidden">
      {/* Main Hero Image - Touching Top Border, Resized */}
      <div className="absolute top-0 right-0 h-[96%] w-auto z-0 pointer-events-none opacity-90 overflow-hidden">
        <img
          src="/deadcoinv2/jpegs/heroStill.jpg"
          alt="Zombie Character"
          className="h-full w-auto object-cover object-left-top"
        />
      </div>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/heroV1.webm" type="video/webm" />
      </video>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full px-6 flex flex-col justify-center mt-12 pb-32">

        {/* Left Source: Oversized Typography */}
        <div className="flex flex-col space-y-0 lg:pr-10 w-full cursor-default pl-8 md:pl-24 lg:pl-32 relative group">

          {/* Monumental Rotated X-Shaped Card Overlay */}
          <div
            className="absolute left-[5%] top-[-5%] w-[18.75rem] h-[18.75rem] md:w-[30rem] md:h-[30rem] glass-card z-50 opacity-25 pointer-events-none rotate-[33deg] backdrop-blur-[100px]"
            style={{ clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)' }}
          >
            <div className="absolute inset-0 bg-[var(--color-brand-toxic)] opacity-10 blur-[80px]"></div>
          </div>
          <h1 className="font-header text-[11vw] md:text-[177pt] uppercase leading-[0.71] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            DIE n
          </h1>
          <div className="flex items-center gap-2 group">
            <div className="font-sans text-[7pt] md:text-[9pt] leading-[1.1] opacity-70 uppercase tracking-[0.2em] text-white text-left shrink-0 ml-4 md:ml-8">
              We're just too<br />stubborn to<br />stay dead.
            </div>
            <h1 className="font-header text-[11vw] md:text-[177pt] uppercase leading-[0.71] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] mix-blend-overlay opacity-90 md:ml-8 lg:ml-16">
              ARISE
            </h1>
          </div>
          <h1 className="font-header text-[11vw] md:text-[177pt] uppercase leading-[0.71] text-transparent bg-clip-text bg-gradient-to-r from-[#f0c63d] to-[#f1cf30] drop-shadow-[0_0_30px_rgba(240,198,61,0.3)] pt-8 -mt-8">
            CYCLE
          </h1>

          {/* Separate Social Circles - Shifted Right under Header */}
          <div className="absolute -bottom-36 left-12 md:left-24 lg:left-32 flex flex-col items-center gap-3 z-50">
            {/* X Logo Button */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] border border-white/40 group/social"
            >

              <svg className="w-5 h-5 text-black transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>

            {/* Telegram Logo Button (Borderless) */}
            <a
              href="https://t.me/deadcoinlol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] border border-white/40 group/social"
            >

              <svg className="w-6 h-6 text-black group-hover/social:text-[#0088cc] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 1.589 4.86c.191.525.097.733.535.733.34 0 .49-.155.679-.34l2.274-2.21 4.73 3.496c.87.48 1.498.232 1.716-.812l3.1-14.618c.317-1.27-.481-1.847-1.313-1.428z" /></svg>
            </a>
          </div>

          {/* Manifest Text - Right of Social Buttons */}
          <div className="absolute -bottom-36 left-28 md:left-44 lg:left-52 flex flex-col items-start gap-4 max-w-[15rem] md:max-w-[20rem] z-50">
            <p className="font-sans text-[6pt] md:text-[8pt] leading-[1.3] opacity-60 uppercase tracking-[0.2em] text-white text-left">
              When volume hits zero and the chart flatlines → coin declared dead.<br />
              Relaunch under the same name, same ticker, same dead eyes.
            </p>
            <button 
              onClick={(e) => scrollToSection(e, 'narrative')}
              className="bg-white text-black px-6 py-2 rounded-full text-[7pt] md:text-[9pt] font-sans font-bold uppercase tracking-[0.2em] self-end transition-all hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.5)] border border-white/40"
            >

              narrative
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Navigation Menu - Horizontal Refinement */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-[calc(50%+150px)] z-40 flex flex-row items-center justify-end gap-2 md:gap-3">
        {['graveyard', 'narrative', 'how2buy', 'roadmap', 'media', 'FAQ'].map((item, index) => (
          <div key={item} className="flex items-center gap-2 md:gap-3">
            <a
              href={`#${item.replace(/\s+/g, '-')}`}
              onClick={(e) => scrollToSection(e, item.replace(/\s+/g, '-'))}
              className="font-sans text-[7pt] md:text-[9pt] leading-[1.1] opacity-70 uppercase tracking-[0.2em] text-white hover:text-[var(--color-brand-toxic)] hover:opacity-100 transition-all duration-300 animate-wobble cursor-pointer"
            >
              {item}
            </a>
            {index < 5 && (
              <div className="w-[1px] h-3 bg-[var(--color-brand-toxic)] opacity-30"></div>
            )}
          </div>
        ))}
      </div>

      {/* Right Source: Glassmorphed card */}
      <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-30 opacity-90 backdrop-blur-md group">
        {/* Floating Buy & Chart Cards - Top Left Offset */}
        {/* Floating Buy & Chart Buttons - Overlapped Layout */}
        <div className="absolute -top-16 -left-16 w-64 h-32 z-40 pointer-events-none">
          <a
            href="https://pump.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-0 top-[12px] w-28 h-28 bg-[#f1cf30] rounded-[2.5rem] flex flex-col items-center justify-center p-4 transform -rotate-12 hover:rotate-0 transition-all duration-500 shadow-[0_10px_40px_rgba(241,207,48,0.4)] cursor-pointer pointer-events-auto z-40"
          >
            <span className="font-sans font-black text-black text-[9pt] tracking-tighter leading-none text-center">
              BUY<br />$DEAD
            </span>
            <div className="mt-2 w-6 h-[2px] bg-black/20"></div>
          </a>

          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-[100px] top-0 w-28 h-28 bg-[#b1de42] rounded-[2.5rem] flex flex-col items-center justify-center p-4 transform rotate-12 hover:rotate-0 transition-all duration-500 shadow-[0_10px_40px_rgba(177,222,66,0.4)] cursor-pointer pointer-events-auto z-50"
          >
            <span className="font-sans font-black text-black text-[9pt] tracking-tighter leading-none text-center">
              VIEW<br />CHART
            </span>
            <div className="mt-2 w-6 h-[2px] bg-black/20"></div>
          </a>
        </div>

        <div
          className="glass-card p-6 md:p-8 rounded-none w-52 md:w-60 h-48 md:h-52 flex flex-col justify-end border border-[rgba(0,255,159,0.4)] relative overflow-hidden transition-all duration-500 hover:border-[var(--color-brand-toxic)]/50"
          style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 80%, 85% 100%, 0% 100%, 0% 20%)' }}
        >
          {/* Glow effects inside card */}
          <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-[var(--color-brand-toxic)] mix-blend-screen filter blur-[80px] opacity-20 rounded-full"></div>
          <div className="absolute bottom-[-50%] left-[-50%] w-full h-full bg-[var(--color-brand-purple)] mix-blend-screen filter blur-[80px] opacity-10 rounded-full"></div>

          <img src="/hand.png" alt="Hand Icon" className="absolute top-4 right-4 w-10 h-10 object-contain z-20 opacity-90 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]" />

          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-widest relative z-10 uppercase drop-shadow-[0_0_15px_rgba(0,255,159,0.5)]">
            DEAD <span className="text-[#00FF9F]">#1</span>
          </h2>

          <p className="text-[10px] md:text-xs text-gray-200 font-medium leading-relaxed relative z-10 mt-2 tracking-wide drop-shadow-md max-w-[90%] opacity-60 uppercase">
            SHOULD WE DIE, AND WE LIKELY WILL, THEN HEAD ON OVER TO X FOR NEXT RELEASE NEWS.
          </p>
        </div>
      </div>

      {/* Bottom Section Divider - Lime Green Fading Borders */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none z-10">
        {/* Bottom Horizontal Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b1de42] opacity-50"></div>

        {/* Left Vertical Fading Line */}
        <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-[#b1de42]/50 to-transparent"></div>

        {/* Right Vertical Fading Line */}
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-[#b1de42]/50 to-transparent"></div>
      </div>
    </div>
  );
}
