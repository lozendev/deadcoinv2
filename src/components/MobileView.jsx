import React from 'react';

export default function MobileView() {
  const handleCopyCA = () => {
    navigator.clipboard.writeText("CA: View X for updates");
    alert("Copied to clipboard!");
  };

  return (
    <div 
      className="md:hidden fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-[200] flex flex-col justify-between items-center p-6"
      style={{ backgroundImage: 'url(/jpegs/mobile.jpg)' }}
    >
      {/* Top Container: CA Button */}
      <div className="w-full flex justify-center pt-4">
        <button 
          onClick={handleCopyCA}
          className="glass-button px-6 py-3 rounded-full text-xs font-semibold tracking-wider text-gray-200 shadow-lg border border-white/20"
        >
          CA: View X for updates
        </button>
      </div>

      {/* Bottom Container: X and Telegram Social Buttons */}
      <div className="flex items-center justify-center gap-6 pb-8">
        {/* X Logo Button */}
        <a
          href="https://x.com/nevertrulydead"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,0.6)] flex items-center justify-center transition-transform active:scale-95 border border-white/40"
        >
          <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Telegram Logo Button */}
        <a
          href="https://t.me/DeadcoinOnSol"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,0.6)] flex items-center justify-center transition-transform active:scale-95 border border-white/40"
        >
          <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 1.589 4.86c.191.525.097.733.535.733.34 0 .49-.155.679-.34l2.274-2.21 4.73 3.496c.87.48 1.498.232 1.716-.812l3.1-14.618c.317-1.27-.481-1.847-1.313-1.428z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
