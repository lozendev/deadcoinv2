import { useState } from 'react';

export default function Navbar() {
  const handleCopyCA = () => {
    navigator.clipboard.writeText(" Updating. View @lozendev for CA");
    alert("Copied to clipboard!");
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-[100] px-6 py-8 flex justify-between items-center bg-transparent">
      <div 
        className="flex items-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative ${isHovered ? 'animate-glitch' : ''}`}>
          <img 
            src={isHovered ? "/deadcoinv2/logoyellow.png" : "/deadcoinv2/Logo.png"} 
            alt="Logo" 
            className="h-[4.5rem] w-auto object-contain transition-all duration-75" 
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center hidden sm:flex">
        <button 
          onClick={handleCopyCA}
          className="glass-button px-8 py-3 rounded-full text-sm sm:text-base tracking-wider font-semibold text-gray-200"
        >
          CA: Updating. View @lozendev for CA
        </button>
      </div>
      <div className="flex items-center">
        <button className="glass-button px-6 py-2 rounded-full text-sm sm:text-base font-bold tracking-widest text-white">
          Deaths 💀: <span className="text-[#00FF9F]">0</span>
        </button>
      </div>
    </nav>
  );
}
