import React, { useRef, useState, useEffect } from 'react';

export default function Startups() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cards = [
    {
      id: 'lovable',
      image: 'https://images.stripeassets.com/fzn2n1nzq965/1CBkJePR5Cwf2QNIVCia1I/c0a702cec7a3814c69f21f86b89ed718/lovable.png?w=864&q=90',
      title: 'Lovable grows into a vibe-coding juggernaut with Stripe.',
      link: "Read Lovable's story"
    },
    {
      id: 'gamma',
      image: 'https://images.stripeassets.com/fzn2n1nzq965/2QjRFO1cRvocACDtyA7g9e/44245671788d6e086ab7d82b37937450/Gamma.png?w=864&q=90',
      title: 'Gamma expands to US$100m ARR and 70 million users with Stripe.',
      link: "Read Gamma's story"
    },
    {
      id: 'runway',
      image: 'https://images.stripeassets.com/fzn2n1nzq965/6fpvaTP1TZWXKWVMewABjV/4412b9ca2940d89d3834ac65c1fc329d/Runway.png?w=864&q=90',
      title: 'Runway protects developer time with no-code solutions from Stripe.',
      link: "Read Runway's story"
    },
    {
      id: 'supabase',
      image: 'https://images.stripeassets.com/fzn2n1nzq965/7fM8bvEbivprOMM1zyow9N/3cad3cc826f96e4038b4ea88d81ebe3b/Supabase.png?w=864&q=90',
      title: 'Supabase delivers its backend service to 150 countries with Stripe.',
      link: "Read Supabase's story"
    },
    {
      id: 'linear',
      image: 'https://images.stripeassets.com/fzn2n1nzq965/4b8Ubw7N2kYwb7QZl3Ogri/422cc19f725aa68e647d90ce2833c8d0/linear.png?w=864&q=90',
      title: 'Linear streamlines its global payment operations using Stripe.',
      link: "Read Linear's story"
    }
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350); // check after smooth scroll completes
    }
  };

  return (
    <div className="py-24 bg-white text-slate-900 border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          
          <div className="flex-1 max-w-[500px]">
            <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-medium tracking-tight text-[#0a2540] mb-6">
              Build a foundation for your startup that enables faster growth
            </h2>
            <a href="#" className="inline-flex items-center justify-center font-medium bg-[#635bff] text-white hover:bg-[#0a2540] transition-colors rounded-[4px] px-4 py-2 text-[15px] group shadow-sm">
              Stripe for startups 
              <svg className="w-[10px] h-[10px] ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="flex-1 md:pl-16 mt-8 md:mt-0 flex flex-col justify-end h-full">
             <p className="text-[15px] md:text-[1.125rem] text-[#425466] leading-[1.6] font-normal mb-8 max-w-[450px]">
               From stablecoin pioneers to 78% of the Forbes AI 50, Stripe helps startups build what's next on easy-to-integrate financial infrastructure.
             </p>

             <div className="hidden md:flex items-center gap-2 mt-auto self-end">
                <button 
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-9 h-9 rounded-[4px] border border-slate-200 flex items-center justify-center transition-colors ${!canScrollLeft ? 'opacity-50 cursor-not-allowed text-slate-300' : 'text-[#0a2540] hover:bg-slate-50 hover:border-slate-300'}`}
                  aria-label="Scroll left"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 6H1M1 6L5 2M1 6L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`w-9 h-9 rounded-[4px] bg-[#e3e8ff] text-[#635bff] flex items-center justify-center transition-colors ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d0d7ff]'}`}
                  aria-label="Scroll right"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6H11M11 6L7 2M11 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
             </div>
          </div>
        </div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <div 
                key={card.id} 
                className="flex-none w-[280px] sm:w-[320px] snap-start group cursor-pointer"
              >
                <div className="rounded-[8px] overflow-hidden aspect-[3/4] mb-5 relative bg-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-[15px] font-medium text-[#0a2540] mb-3 leading-snug">
                  {card.title}
                </h4>
                <a href="#" className="inline-flex items-center text-[15px] font-medium text-[#635bff] group-hover:text-[#0a2540] transition-colors">
                  {card.link}
                  <svg className="w-[10px] h-[10px] ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="absolute top-0 right-0 bottom-8 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none lg:w-32 hidden md:block z-10"></div>
          <div className={`absolute top-0 left-0 bottom-8 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none lg:w-32 hidden md:block z-10 transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-24 relative z-20">

          <div className="rounded-[8px] bg-white border border-slate-200 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] relative flex flex-col justify-between min-h-[180px] md:min-h-[200px] group/card">
            <div className="p-8 z-10 w-[60%]">
              <h4 className="text-[15px] font-medium text-[#425466] mb-4 leading-[1.6]">
                <strong className="font-semibold text-[#0a2540]">Stripe Startups programme.</strong> Access financial benefits, a focused community, and expert resources to help you grow your business.
              </h4>
            </div>
            <div className="px-8 pb-8 z-10">
              <a href="#" className="inline-flex items-center text-[15px] font-medium text-[#635bff] hover:text-[#0a2540] transition-colors group-hover/card:text-[#0a2540]">
                Apply now 
                <svg className="w-[10px] h-[10px] ml-1 transition-transform group-hover/card:translate-x-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[8px]">
               <img src="https://images.stripeassets.com/fzn2n1nzq965/1DZkp4Ce0kiwj2F2Z0kJ16/fcb4904fd728f49521385059618245b9/card_startups.png?w=585&q=90" alt="" className="absolute top-0 right-[-10%] h-full w-[80%] md:w-[70%] object-cover object-left" loading="lazy" />
            </div>
          </div>

          <div className="rounded-[8px] bg-white border border-slate-200 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] relative flex flex-col justify-between min-h-[180px] md:min-h-[200px] group/card">
            <div className="p-8 z-10 w-[60%]">
              <h4 className="text-[15px] font-medium text-[#425466] mb-4 leading-[1.6]">
                <strong className="font-semibold text-[#0a2540]">Stripe Atlas.</strong> Incorporate and get everything you need to fundraise, bank, and accept payments in two business days.
              </h4>
            </div>
            <div className="px-8 pb-8 z-10">
              <a href="#" className="inline-flex items-center text-[15px] font-medium text-[#635bff] hover:text-[#0a2540] transition-colors group-hover/card:text-[#0a2540]">
                Start your company 
                <svg className="w-[10px] h-[10px] ml-1 transition-transform group-hover/card:translate-x-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none flex items-end justify-end overflow-hidden rounded-r-[8px]">
               <svg className="w-[120%] md:w-[110%] h-auto max-w-[280px] transform translate-x-[5%] translate-y-[10%]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M19.9952 1c.9747 0 1.8657.5513 2.3006 1.42365l7.9975 15.99495 8.425 16.8558c.3991.7977.3569 1.7452-.1118 2.5041-.3437.5566-.8808.9537-1.4945 1.126l-.1692.0412c-.114.0238-.2301.04-.3478.0481L36.4176 39l-16.4224-3.2655L9.69702 18.4186 17.6945 2.42365C18.1295 1.5513 19.0204 1 19.9952 1" fill="#fb0"></path>
                  <path d="M19.9952 1c.9748 0 1.8657.5513 2.3007 1.42365l7.9975 15.99495-10.2982 17.3159L3.5728 39c-.892 0-1.72022-.4625-2.1889-1.2215-.468672-.7589-.510968-1.7064-.11178-2.5041l8.42495-16.8558L17.6945 2.42365C18.1295 1.5513 19.0204 1 19.9952 1" fill="url(#atlas-gradient-a-1)"></path>
                  <path d="M19.9952 1c.9747 0 1.8657.5513 2.3006 1.42365l7.9975 15.99495-10.2981 17.3159L9.69702 18.4186 17.6945 2.42365c.4078-.81782 1.2163-1.35348 2.119-1.41725z" fill="url(#atlas-gradient-b-1)"></path>
                  <defs>
                    <linearGradient id="atlas-gradient-a-1" x1="15.6303" y1="18.2379" x2="15.545" y2="38.9999" gradientUnits="userSpaceOnUse"><stop stopColor="#ffd748"></stop><stop offset=".5362" stopColor="#ffcd48"></stop><stop offset="1" stopColor="#ffcb48"></stop></linearGradient>
                    <linearGradient id="atlas-gradient-b-1" x1="19.9976" y1="34.5164" x2="19.9976" y2="15.3186" gradientUnits="userSpaceOnUse"><stop stopColor="#ffad00"></stop><stop offset="1" stopColor="#ff7600"></stop></linearGradient>
                  </defs>
               </svg>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 mb-20 hidden md:block"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 relative z-20">
          <div className="flex-1 max-w-[500px]">
            <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] leading-[1.1] font-medium tracking-tight text-[#0a2540] mb-6">
              Make your SaaS platform a complete financial operating system
            </h2>
            <a href="#" className="inline-flex items-center justify-center font-medium bg-[#635bff] text-white hover:bg-[#0a2540] transition-colors rounded-[4px] px-4 py-2 text-[15px] group shadow-sm">
              Stripe for platforms 
              <svg className="w-[10px] h-[10px] ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="flex-1 md:pl-16 mt-8 md:mt-0 flex flex-col justify-end h-full">
             <p className="text-[15px] md:text-[1.125rem] text-[#425466] leading-[1.6] font-normal max-w-[450px]">
               From the Fortune 100 to the Forbes Cloud 100, vertical SaaS platforms use Stripe to expand their product offerings with embedded payments and financial services.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}
