import { ChevronRight } from 'lucide-react';

export default function AISection() {
  return (
    <div className="py-24 bg-white">
       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#0f0f1c] text-white">
             
             <div className="absolute inset-0 w-full h-full pointer-events-none">
                <picture>
                   <source media="(min-width: 768px)" srcSet="https://images.stripeassets.com/fzn2n1nzq965/2YFdgdFPeIiDpmQbhHPAx8/186752498bf713fea245f31bcec84f8a/sessions-2026-on-demand-bg.png?w=2464&q=90" />
                   <img src="https://images.stripeassets.com/fzn2n1nzq965/52qeQQDMQNJ3CmnFPjHbTi/1a3a3acd4f027175a863fafcc29a4d9a/sessions-2026-on-demand-bg-mobile.png?w=736&q=90" alt="Stripe Sessions" className="w-full h-full object-cover object-right md:object-center" />
                </picture>
             </div>
             
             <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between min-h-[500px]">
                <div className="max-w-2xl mt-4">
                   <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.1] mb-8 tracking-tight">
                      Building the economic<br className="hidden md:block"/> infrastructure for AI
                   </h2>
                   <button className="bg-white text-[#0a2540] hover:bg-slate-50 px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all flex items-center justify-center gap-2 group w-max shadow-sm">
                     Watch now <ChevronRight className="w-4 h-4 text-[#0066FF] group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>

                <div className="absolute bottom-10 right-12 text-white">
                   <div className="text-[1.75rem] font-bold tracking-tighter flex items-center gap-1.5">
                      stripe <span className="font-normal opacity-90">sessions</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}
