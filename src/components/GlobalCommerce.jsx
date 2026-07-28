export default function GlobalCommerce() {
  const stats = [
    {
      value: '135+',
      label: 'currencies and payment methods supported',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      value: 'US$1.9tn',
      label: 'in payments volume processed in 2025',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      value: '99.999%',
      label: 'historical uptime for Stripe services',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      value: '200m+',
      label: 'active subscriptions managed on Stripe Billing',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium text-[#0a2540] mb-24 leading-[1.1] tracking-tight">
          The backbone<br />of global commerce
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 relative">
           
           <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200 hidden md:block"></div>
           <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-200 hidden md:block"></div>
           
           {stats.map((stat, i) => (
             <div 
               key={i} 
               className="group relative flex flex-col items-center text-center py-10 md:py-12 px-4 cursor-default border-b border-slate-200 md:border-b-0 last:border-b-0"
             >
               
               <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block`}></div>

               <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block`}></div>

               <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden`}></div>
               
               <div className="text-4xl md:text-5xl font-medium text-slate-400 group-hover:text-[#0a2540] mb-3 tracking-tight transition-colors duration-300">
                 {stat.value}
               </div>
               
               <div className="text-[15px] font-medium text-slate-500 max-w-[210px] leading-relaxed">
                 {stat.label}
               </div>
             </div>
           ))}
        </div>

        <div className="relative w-[100vw] ml-[calc(50%-50vw)] max-w-[1920px]">

          <div 
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-1000"
            style={{
              backgroundColor: '#fffcf9', // Warm white base
              backgroundImage: `
                radial-gradient(circle at 28% 70%, rgba(254, 140, 45, 0.4) 0%, transparent 45%),
                radial-gradient(ellipse 80% 70% at 40% 115%, rgba(249, 107, 238, 0.5) 0%, rgba(254, 140, 45, 0.3) 45%, transparent 80%),
                radial-gradient(circle at 75% 75%, rgba(255, 213, 82, 0.25) 0%, transparent 60%)
              `
            }}
          ></div>

          <div className="absolute right-6 sm:right-10 md:right-16 top-6 z-20">
            <button className="p-1.5 border border-pink-100 rounded-[4px] bg-white/50 backdrop-blur-sm text-pink-500 hover:text-pink-600 hover:border-pink-200 transition-colors shadow-sm cursor-pointer opacity-80 hover:opacity-100">
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  
                  <circle cx="10" cy="10" r="4.25"></circle>
                  <path d="M10 2.75V1M10 19v-1.75M16.364 3.636L14.6 5.4M5.4 14.6l-1.764 1.764M19 10h-1.75M2.75 10H1M16.364 16.364L14.6 14.6M5.4 5.4L3.636 3.636"></path>
               </svg>
            </button>
          </div>

          <div className="w-full relative overflow-hidden z-10 flex justify-center">
            <picture className="w-full flex justify-center">
               <source media="(min-width: 940px)" srcSet="https://images.stripeassets.com/fzn2n1nzq965/64K1iZhe99ADmiTzeY5TeI/47cfb0a595bbe98513df60c751aad398/volume-fallback_2x.png?w=2468&q=90" />
               <img 
                 src="https://images.stripeassets.com/fzn2n1nzq965/64K1iZhe99ADmiTzeY5TeI/47cfb0a595bbe98513df60c751aad398/volume-fallback_2x.png?w=1232&q=90" 
                 alt="Global Commerce Visualization" 
                 className="w-[150%] max-w-[150%] -ml-[25%] md:w-full md:max-w-full md:ml-0 h-auto" 
                 loading="lazy" 
               />
            </picture>
          </div>
        </div>
        
      </div>
    </div>
  );
}
