import { useState } from 'react';

export default function Enterprise() {
  const [activeAccordion, setActiveAccordion] = useState('hertz');

  const accordionItems = [
    {
      id: 'hertz',
      logo: (
        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ffd166] rounded-[4px] flex items-center justify-center text-[#0a2540] font-bold italic text-lg shadow-sm">
          H
        </div>
      ),
      text: 'Hertz unifies commerce with Stripe.',
      image: 'https://images.stripeassets.com/fzn2n1nzq965/24BNV3GGtvCprFLrYovyaa/b2eac20a1d5ec75e4bff3888b998d163/enterprise-accordion-hertz.png?w=2460&q=90',
      stats: [
        { value: '160', label: 'countries' },
        { value: '11k+', label: 'locations globally' },
        { value: 'Products used', label: 'Payments, Terminal, Connect, Radar and Stripe Sigma' }
      ]
    },
    {
      id: 'urbn',
      logo: (
        <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-[4px] flex items-center justify-center text-white shadow-sm p-1">
          <div className="grid grid-cols-2 gap-0 text-[9px] md:text-[11px] font-bold leading-[0.9] tracking-tighter">
            <span>U</span><span>R</span><span>B</span><span>N</span>
          </div>
        </div>
      ),
      text: 'URBN consolidates $5 billion in online and in-store revenue onto Stripe.',
      image: 'https://images.stripeassets.com/fzn2n1nzq965/37wKFanVluouT2iEZUbD0H/f75e77141e1330ad81ea18c6aea65f0c/enterprise-accordion-urbn.png?w=2460&q=90',
      stats: [
        { value: '5+', label: 'consumer brands in retailer portfolio' },
        { value: '700+', label: 'store locations' },
        { value: 'Products used', label: 'Payments, Terminal, Connect, Stripe Sigma, Radar and Link' }
      ]
    },
    {
      id: 'instacart',
      logo: (
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white border border-slate-200 rounded-[4px] flex items-center justify-center shadow-sm text-xl md:text-2xl">
          🥕
        </div>
      ),
      text: 'Instacart powers online grocery delivery with Stripe.',
      image: 'https://images.stripeassets.com/fzn2n1nzq965/1v5hJ2NWvKpQfVbMqOzCpE/c900b9ed4c288f7cf0a0dced5f4983f2/enterprise-accordion-instacart.png?w=2460&q=90',
      stats: [
        { value: '600k+', label: 'shoppers' },
        { value: '1.8k', label: 'retail partners across nearly 100k stores' },
        { value: 'Products used', label: 'Payments, Connect, Data Pipeline and Issuing' }
      ]
    },
    {
      id: 'lemonde',
      logo: (
        <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-[4px] flex items-center justify-center text-white font-serif font-bold italic text-xl md:text-2xl shadow-sm">
          M
        </div>
      ),
      text: 'Le Monde improves local and international payments with Stripe.',
      image: 'https://images.stripeassets.com/fzn2n1nzq965/5AQ9A87KzwpPy4CD3uPz5C/4afd1a1e9d6e1d698c4c7c74a4868822/enterprise-accordion-lemonde.png?w=2460&q=90',
      stats: [
        { value: '100%', label: 'of digital and print payments powered by Stripe' },
        { value: 'Less than 3 months', label: 'to implement and go live' },
        { value: 'Products used', label: 'Payments, Stripe Sigma and Radar' }
      ]
    }
  ];

  return (
    <div className="py-24 bg-[#f6f9fc] lg:bg-white relative overflow-hidden text-slate-900 border-t border-slate-100">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-24">
          <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] font-medium tracking-tight text-[#0a2540] max-w-[950px]">
            Powering businesses of all sizes. <span className="text-[#425466] font-normal">Run your business on a reliable platform that adapts to your needs.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-24 mb-20 items-start">
          <div className="max-w-[480px]">
             <h3 className="text-[1.5rem] md:text-[1.75rem] font-medium text-[#0a2540] mb-8 leading-[1.2] tracking-tight">
               Transform your enterprise with agile financial infrastructure
             </h3>
             <a href="#" className="inline-flex items-center justify-center font-medium bg-[#635bff] text-white hover:bg-[#0a2540] transition-colors rounded-[4px] px-5 py-2.5 text-[15px] group shadow-sm">
               Stripe for enterprises 
               <svg className="w-[10px] h-[10px] ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </a>
          </div>
          <div className="pt-2">
            <p className="text-[1.125rem] text-[#425466] leading-[1.6] font-normal">
              50% of Fortune 100 companies have used Stripe to grow their businesses – from expanding internationally to reimagining the customer experience.
            </p>
          </div>
        </div>

        <div className="flex flex-col border-b border-slate-200">
          {accordionItems.map((item, index) => {
            const isActive = activeAccordion === item.id;
            
            return (
              <div key={item.id} className="flex flex-col w-full">
                
                <div 
                  onClick={() => setActiveAccordion(item.id)}
                  className={`flex items-center justify-between py-6 cursor-pointer group ${!isActive && index !== 0 ? 'border-t border-slate-200' : ''} ${isActive && index !== 0 ? 'mt-4' : ''}`}
                >
                  <div className="flex items-center gap-4 md:gap-6 pr-4">
                    <div className="flex-shrink-0">
                      {item.logo}
                    </div>
                    <div className={`text-[1.125rem] md:text-[1.25rem] font-medium transition-colors ${isActive ? 'text-[#0a2540]' : 'text-[#425466] group-hover:text-[#635bff]'}`}>
                      {item.text}
                    </div>
                  </div>

                  {isActive ? (
                    <a href="#" className="hidden md:flex text-[#635bff] font-medium hover:text-[#0a2540] transition-colors text-[15px] items-center flex-shrink-0">
                      Read the story 
                      <svg className="w-[10px] h-[10px] ml-2" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  ) : (
                    <div className="w-8 h-8 rounded-[4px] bg-[#e3e8ff] text-[#635bff] flex items-center justify-center font-medium transition-colors group-hover:bg-[#d0d7ff] flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>

                <div 
                  className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0 mb-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-[8px] bg-white border border-slate-200 overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] group/card flex flex-col mt-2">
                       
                       <div className="w-full relative aspect-[16/10] md:aspect-[2.1/1] bg-slate-100 overflow-hidden">
                         <img 
                           src={item.image} 
                           alt={`${item.id} enterprise story`} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-[1.02]"
                           loading="lazy"
                         />
                       </div>

                       <div className="px-6 py-5 bg-white grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-4 md:gap-8 items-center text-[14px] md:text-[15px] leading-snug border-t border-slate-100">
                         {item.stats.map((stat, i) => (
                           <div key={i} className={i === 2 ? 'md:justify-self-end' : ''}>
                             <span className="font-semibold text-[#0a2540]">{stat.value}</span>{' '}
                             <span className="text-[#425466]">{stat.label}</span>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 mb-10">
          <h3 className="text-[1.5rem] md:text-[1.75rem] font-medium text-[#0a2540] mb-12 tracking-tight">
            Realise value faster with dedicated experts
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

            <div>
              <div className="w-10 h-10 rounded-[4px] border border-slate-200 flex items-center justify-center text-[#635bff] mb-6 shadow-sm bg-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <p className="text-[15px] leading-relaxed text-[#425466]">
                <strong className="font-semibold text-[#0a2540]">Professional services.</strong> Get tailored guidance from Stripe on implementation, complex integrations, or major migrations.
              </p>
              <a href="#" className="inline-flex items-center font-medium text-[#635bff] hover:text-[#0a2540] transition-colors mt-4 text-[15px] group">
                View services 
                <svg className="w-[10px] h-[10px] ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div>
              <div className="w-10 h-10 rounded-[4px] border border-slate-200 flex items-center justify-center text-[#635bff] mb-6 shadow-sm bg-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <p className="text-[15px] leading-relaxed text-[#425466]">
                <strong className="font-semibold text-[#0a2540]">Stripe-certified experts.</strong> Work with a Stripe consulting partner that can integrate and deploy Stripe solutions on your behalf.
              </p>
              <a href="#" className="inline-flex items-center font-medium text-[#635bff] hover:text-[#0a2540] transition-colors mt-4 text-[15px] group">
                View partners 
                <svg className="w-[10px] h-[10px] ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div>
              <div className="w-10 h-10 rounded-[4px] border border-slate-200 flex items-center justify-center text-[#635bff] mb-6 shadow-sm bg-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <p className="text-[15px] leading-relaxed text-[#425466]">
                <strong className="font-semibold text-[#0a2540]">Support plans.</strong> Receive ongoing assistance and day-to-day support for technical questions with tiered plans based on your needs.
              </p>
              <a href="#" className="inline-flex items-center font-medium text-[#635bff] hover:text-[#0a2540] transition-colors mt-4 text-[15px] group">
                View plans 
                <svg className="w-[10px] h-[10px] ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
