import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Graveyard from './components/Graveyard'
import Narrative from './components/Narrative'
import HowToBuy from './components/HowToBuy'
import Marquee from './components/Marquee'
import Roadmap from './components/Roadmap'
import Media from './components/Media'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { useEffect } from 'react'
import './App.css';

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen w-full relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Graveyard />
      <Narrative />
      <HowToBuy />
      <Marquee />
      <Roadmap />
      <Media />
      <div className="relative w-full" 
        style={{ 
          backgroundImage: 'url(./jpegs/footbg.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        {/* Dark overlay for the whole merged section */}
        <div className="absolute inset-0 bg-black/60 z-0" />
        <Faq />
        <Footer />
      </div>
    </main>
  )
}

export default App;
