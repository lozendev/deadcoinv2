import React from 'react';

export default function Media() {
  return (
    <section 
      id="media" 
      className="relative h-screen w-full flex flex-col items-center justify-center border border-[#b1de42]/50 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/jpegs/media5.jpg)',


          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Optional overlay to ensure text/button readability against the image */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8 px-6 text-center mt-[10vh]">
        
        {/* Center Button (Hero Narrative Style) */}
        <a 
          href="https://www.dropbox.com/scl/fo/s30o47x8watmeppftd5pz/AOrNERGEYtv-ejtqKgavUl4?rlkey=i6qe4dz1xxl4drdfypznozm5t&st=c01bn0pr&dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-black px-8 py-3 rounded-full text-[8pt] md:text-[10pt] font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.5)] border border-white/40 group">
            MEDIA PACK
          </button>
        </a>


        {/* Text Below Button (Hero Sub-sentence Style) */}
        <div className="font-sans text-[7pt] md:text-[9pt] leading-[1.6] opacity-80 uppercase tracking-[0.2em] text-white text-center">
          GET CREATIVE WITH OUR MEDIA PACK<br />
          TOP DESIGNS GET ADDED TO THE PACK
        </div>
        
      </div>
    </section>
  );
}
