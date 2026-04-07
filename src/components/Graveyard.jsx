import React, { useEffect } from 'react';

const TWEETS = [
  // Row 1: Tall / Priority Tweets
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">the trenches are dead<br><br>we need a memecoin to revive them<br><br>hint:<br>- it’s not gonna be a “justice for” coin<br>- it’s not gonna be a “endorse” coin<br>- it’s not gonna be a “claim fees” coin<br><br>what’s gonna be?</p>&mdash; Rune (@RuneCrypto_) <a href="https://twitter.com/RuneCrypto_/status/2029555824679440550?ref_src=twsrc%5Etfw">March 5, 2026</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">the trenches is dead because no one wants to lead anymore.<br><br>2 years ago we would have cto leads who would lead us to millions, then CT decided to blame them for everything, now they are gone, we are left with extractors, and people wonder why the trenches are horrible</p>&mdash; gas (@_gas404) <a href="https://twitter.com/_gas404/status/2037978444336632015?ref_src=twsrc%5Etfw">March 28, 2026</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">Trenches are extremely dead.<br>It looks like people don’t want to gamble scam coins anymore.<br>We want real communities and products.</p>&mdash; atlas (@bestplayeratlas) <a href="https://twitter.com/bestplayeratlas/status/1997419777405452601?ref_src=twsrc%5Etfw">December 6, 2025</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">Trenches are completely dead<br>Majors are looking horrific <br>Everyone got giga poor<br><br>If you survived this long just know that you’re probably going to make it <a href="https://t.co/Ar5FF4riQC">pic.twitter.com/Ar5FF4riQC</a></p>&mdash; Kgb (@Kgb32_) <a href="https://twitter.com/Kgb32_/status/2035648364679680302?ref_src=twsrc%5Etfw">March 22, 2026</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">Most memecoins died<br><br>Too much greed<br><br>Some are still here though<br><br>Any active communities left?</p>&mdash; Bark (@barkmeta) <a href="https://twitter.com/barkmeta/status/1848820262076068212?ref_src=twsrc%5Etfw">October 22, 2024</a></blockquote>`,
  
  // Remaining Tweets
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">just saw someone shill a $2.6k marketcap coin in a 300 person chat<br><br>the trenches are dead</p>&mdash; voh (@vohvohh) <a href="https://twitter.com/vohvohh/status/2036807454650925347?ref_src=twsrc%5Etfw">March 25, 2026</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">The trenches are so dead<br><br>What runner can save them?<br><br>👇</p>&mdash; 0xMarioNawfal (@RoundtableSpace) <a href="https://twitter.com/RoundtableSpace/status/2007402809843675449?ref_src=twsrc%5Etfw">January 3, 2026</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">Trenches are cooked. <br><br>Trading is dead. <br><br>Believing is the only option left.</p>&mdash; voided (@voided) <a href="https://twitter.com/voided/status/1936923655147245854?ref_src=twsrc%5Etfw">June 22, 2025</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">Yup, trenches are dead.</p>&mdash; JR5 (@JR5_Crypto) <a href="https://twitter.com/JR5_Crypto/status/1962270928378712187?ref_src=twsrc%5Etfw">August 31, 2025</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">Trenches are completely dead, bag workers gone, tg chats silent<br><br>It’s over or what?</p>&mdash; bong (@bon_g) <a href="https://twitter.com/bon_g/status/1986454108295856551?ref_src=twsrc%5Etfw">November 6, 2025</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">Bro, trenches are dead rn<br><br>we need a big runner for the culture</p>&mdash; Assasin (@assasin_eth) <a href="https://twitter.com/assasin_eth/status/1891931567401947240?ref_src=twsrc%5Etfw">February 18, 2025</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">the trenches are so dead, what’s going on?!</p>&mdash; Mac (@itzmac_) <a href="https://twitter.com/itzmac_/status/2035753805417971993?ref_src=twsrc%5Etfw">March 22, 2026</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">the trenches are so cooked even the devs gave up</p>&mdash; JR5 (@JR5_Crypto) <a href="https://twitter.com/JR5_Crypto/status/2012782007432970333?ref_src=twsrc%5Etfw">January 18, 2026</a></blockquote>`,
  `<blockquote class="twitter-tweet" data-theme="dark" data-cards="hidden"><p lang="en" dir="ltr">Memecoin culture died when everyone pivoted to X communities instead of Telegram chats.</p>&mdash; 0xBossman (@0xBossman) <a href="https://twitter.com/0xBossman/status/2035047089390907493?ref_src=twsrc%5Etfw">March 20, 2026</a></blockquote>`
];

export default function Graveyard() {
  const cards = Array(15).fill(null);

  useEffect(() => {
    // Re-render Twitter widgets when component mounts
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);
  
  return (
    <section id="graveyard" className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Top Section Divider - Lime Green Fading Borders (REVERSE HERO) */}
      <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none z-10">
        {/* Top Horizontal Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#b1de42] opacity-50"></div>
        
        {/* Left Vertical Fading Line (Downwards) */}
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#b1de42]/50 to-transparent"></div>
        
        {/* Right Vertical Fading Line (Downwards) */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#b1de42]/50 to-transparent"></div>
      </div>

      {/* Background Gradient from Top */}
      <div 
        className="absolute inset-x-0 top-0 h-[400px] opacity-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #649329 0%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-[95rem] mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 w-full">
          {cards.map((_, index) => {
            // Middle card is at index 7 in a 5x3 grid (3rd col, 2nd row)
            if (index === 7) {
              return (
                <div key={index} className="flex flex-col items-center justify-center text-center p-4">
                  <h2 className="font-header text-xl md:text-2xl lg:text-3xl text-white uppercase leading-tight tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    💀<br />They called it.<br />We became it.
                  </h2>
                </div>
              );
            }

            // Map tweets to skip the center card
            const tweetIdx = index < 7 ? index : index - 1;
            const activeTweet = tweetIdx < TWEETS.length ? TWEETS[tweetIdx] : null;

            return (
              <div 
                key={index}
                className="glass-card min-h-[150px] border border-[#00FF9F]/10 rounded-xl flex items-center justify-center p-2 transition-all duration-500 overflow-hidden"
              >
                {activeTweet ? (
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    dangerouslySetInnerHTML={{ __html: activeTweet }}
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full border border-white/5 flex items-center justify-center opacity-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
