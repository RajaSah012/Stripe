import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-full md:w-[75%] h-full z-0 pointer-events-none overflow-hidden flex justify-end">
        <picture className="absolute top-[-20%] right-[-40%] w-[180%] sm:right-[-10%] sm:top-[-10%] sm:w-[130%] lg:w-[110%] h-auto opacity-90 object-cover animate-wave-motion origin-center">
          <source srcSet="https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/0ceb2c44a7a7182cd624262420af7544/wave-fallback-desktop.png?w=1392&fm=webp&q=60 1x, https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/0ceb2c44a7a7182cd624262420af7544/wave-fallback-desktop.png?w=2784&fm=webp&q=60 2x" media="(min-width: 1264px)" />
          <source srcSet="https://images.stripeassets.com/fzn2n1nzq965/6JwIhTZqzfx9sA3R24luWz/388861787e6deb982268742148813182/wave-fallback-tablet.png?w=1248&fm=webp&q=60 1x, https://images.stripeassets.com/fzn2n1nzq965/6JwIhTZqzfx9sA3R24luWz/388861787e6deb982268742148813182/wave-fallback-tablet.png?w=2496&fm=webp&q=60 2x" media="(min-width: 640px) and (max-width: 1263px)" />
          <source srcSet="https://images.stripeassets.com/fzn2n1nzq965/18ArQFiazlljjIKGV0OnTb/2e15cabc1c905bb65e7de2678d3b60a9/wave-fallback-mobile.png?w=624&fm=webp&q=60 1x, https://images.stripeassets.com/fzn2n1nzq965/18ArQFiazlljjIKGV0OnTb/2e15cabc1c905bb65e7de2678d3b60a9/wave-fallback-mobile.png?w=1248&fm=webp&q=60 2x" media="(max-width: 639px)" />
          <img src="https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/0ceb2c44a7a7182cd624262420af7544/wave-fallback-desktop.png" alt="Background Gradient" aria-hidden="true" className="w-full h-auto" />
        </picture>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[850px] pt-16">
          <p className="text-[#425466] font-semibold mb-6 sm:mb-8 flex items-center gap-2 text-[13px] sm:text-[15px]">
            Global GDP running on Stripe: <span className="text-[#8792a2] font-normal font-mono">1.68783820%</span>
          </p>
          
          <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-semibold tracking-[-0.04em] mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05] text-[#0a2540]">
            Financial infrastructure to grow <span className="animated-gradient-text">your revenue.</span>
          </h1>
          
          <p className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] text-[#425466] font-normal leading-[1.4] max-w-[48rem] mb-8 sm:mb-10 pr-4 sm:pr-0">
            Accept payments, offer financial <span className="animated-gradient-text">services and implement custom revenue models – from</span> your first transaction to your billionth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12">
            <button className="bg-[#635BFF] text-white hover:bg-[#0a2540] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group w-max shadow-[0_4px_14px_0_rgba(99,91,255,0.39)] text-[15px] sm:text-[17px]">
              Request an invite <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
