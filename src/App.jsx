import { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import LogoCarousel from './components/Logos';
import './App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Products', 'Solutions', 'Developers', 'Resources', 'Pricing'];

  return (
    <nav className="absolute w-full z-50 bg-transparent py-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Links Container */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900">
              stripe
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link} href="#" className="text-[15px] font-medium text-[#0a2540] hover:opacity-70 flex items-center gap-1 group transition-opacity">
                  {link}
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:rotate-90 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3 ml-2">
            <a href="#" className="text-[14px] font-semibold text-[#f6a551] hover:text-[#0a2540] bg-white px-4 py-1.5 rounded-full transition-colors shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)]">
              Sign in
            </a>
            <a href="#" className="text-[14px] font-semibold bg-[#635BFF] text-white hover:bg-[#0a2540] px-4 py-1.5 rounded-full transition-colors flex items-center justify-center gap-1 shadow-[0_2px_8px_-2px_rgba(99,91,255,0.4)]">
              Contact sales <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col space-y-4 border-t">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-slate-700 font-medium px-4 py-2 hover:bg-slate-50 rounded-lg">
              {link}
            </a>
          ))}
          <div className="border-t border-slate-100 pt-4 flex flex-col space-y-2">
            <a href="#" className="text-orange-500 font-medium px-4 py-2 hover:bg-slate-50 rounded-lg text-center border border-orange-200">
              Sign in
            </a>
            <a href="#" className="bg-[#635BFF] text-white font-medium px-4 py-3 rounded-lg text-center flex items-center justify-center gap-2">
              Contact sales <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      {/* Primary Background Image */}
      <div className="absolute top-0 right-0 w-full md:w-[75%] h-full z-0 pointer-events-none overflow-hidden flex justify-end">
        <picture className="absolute top-[-10%] right-[-10%] w-[110%] md:w-[130%] h-auto opacity-90 object-cover animate-wave-motion origin-center">
          <source srcSet="https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/0ceb2c44a7a7182cd624262420af7544/wave-fallback-desktop.png?w=1392&fm=webp&q=60 1x, https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/0ceb2c44a7a7182cd624262420af7544/wave-fallback-desktop.png?w=2784&fm=webp&q=60 2x" media="(min-width: 1264px)" />
          <source srcSet="https://images.stripeassets.com/fzn2n1nzq965/6JwIhTZqzfx9sA3R24luWz/388861787e6deb982268742148813182/wave-fallback-tablet.png?w=1248&fm=webp&q=60 1x, https://images.stripeassets.com/fzn2n1nzq965/6JwIhTZqzfx9sA3R24luWz/388861787e6deb982268742148813182/wave-fallback-tablet.png?w=2496&fm=webp&q=60 2x" media="(min-width: 640px) and (max-width: 1263px)" />
          <source srcSet="https://images.stripeassets.com/fzn2n1nzq965/18ArQFiazlljjIKGV0OnTb/2e15cabc1c905bb65e7de2678d3b60a9/wave-fallback-mobile.png?w=624&fm=webp&q=60 1x, https://images.stripeassets.com/fzn2n1nzq965/18ArQFiazlljjIKGV0OnTb/2e15cabc1c905bb65e7de2678d3b60a9/wave-fallback-mobile.png?w=1248&fm=webp&q=60 2x" media="(max-width: 639px)" />
          <img src="https://images.stripeassets.com/fzn2n1nzq965/115d4Vd5LVAsqFGDR1ClAv/0ceb2c44a7a7182cd624262420af7544/wave-fallback-desktop.png" alt="Background Gradient" aria-hidden="true" className="w-full h-auto" />
        </picture>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[850px] pt-16">
          <p className="text-[#425466] font-semibold mb-8 flex items-center gap-2 text-[15px]">
            Global GDP running on Stripe: <span className="text-[#8792a2] font-normal font-mono">1.68783820%</span>
          </p>
          
          <h1 className="text-[4rem] sm:text-[4.5rem] lg:text-[5.5rem] font-semibold tracking-[-0.04em] mb-6 leading-[1.05] text-[#0a2540]">
            Financial infrastructure to grow <span className="animated-gradient-text">your revenue.</span>
          </h1>
          
          <p className="text-[1.25rem] lg:text-[1.5rem] text-[#425466] font-normal leading-[1.4] max-w-[48rem] mb-10">
            Accept payments, offer financial <span className="animated-gradient-text">services and implement custom revenue models – from</span> your first transaction to your billionth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <button className="bg-[#635BFF] text-white hover:bg-[#0a2540] px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group w-max shadow-[0_4px_14px_0_rgba(99,91,255,0.39)] text-[17px]">
              Request an invite <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



function Solutions() {
  return (
    <div className="py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-4xl">
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#0a2540] mb-6 tracking-tight leading-tight">
            Flexible solutions for every business model. <span className="text-slate-500 font-normal">Grow your business with a comprehensive set of payments and financial tools – designed to work individually or together.</span>
          </h2>
        </div>

        {/* CSS Grid for the Cards matching the layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                 {/* Card 1: Accept and optimise payments */}
          <div className="md:col-span-8 rounded-[2rem] p-8 md:p-12 border border-slate-200/60 relative overflow-hidden group shadow-sm flex flex-col min-h-[500px]">
            {/* Highly Vibrant Solid Wave Background - Positioned Lower */}
            <div className="absolute inset-0 bg-white -z-20"></div>
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] -z-10 pointer-events-none">
              <div className="absolute -bottom-[45%] -left-[10%] w-[130%] h-[90%] bg-gradient-to-r from-[#e52e71] via-[#ff8a00] to-[#ffb700] transform -rotate-12 scale-110 rounded-[100%] opacity-90 blur-2xl"></div>
              <div className="absolute -bottom-[35%] -left-[5%] w-[110%] h-[70%] bg-gradient-to-r from-[#9d4edd] via-[#ff007f] to-[#ff8a00] transform -rotate-6 scale-110 rounded-[100%] opacity-95 blur-3xl"></div>
            </div>

            <div className="absolute top-8 right-8 w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </div>
            
            <h3 className="text-[1.75rem] md:text-[2rem] font-bold text-[#0a2540] mb-8 max-w-sm leading-[1.15] tracking-tight">Accept and optimise payments globally – online and in person</h3>
            
            <div className="mt-auto relative h-[500px] w-full">
              
              {/* Web Mockup */}
              <div className="absolute bottom-6 left-[280px] w-[500px] bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-200 z-10 hidden sm:block overflow-hidden transition-transform duration-700 group-hover:-translate-y-2">
                <div className="bg-[#f8f9fa] border-b border-slate-200 px-4 py-2.5 flex items-center gap-3">
                  <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div><div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div></div>
                  <div className="flex-1 flex justify-center">
                     <div className="bg-white text-[10px] text-slate-500 px-20 py-1.5 rounded-md shadow-sm flex items-center gap-1.5 border border-slate-100"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> roastery.com/checkout</div>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-[1.4fr_1fr] gap-6 bg-white h-[420px]">
                  <div className="border-r border-slate-100 pr-6 flex flex-col">
                    <div className="text-slate-900 font-bold text-[13px] mb-5 tracking-tight">ROASTERY.</div>
                    <div className="space-y-3 flex-1">
                      <div className="space-y-1">
                         <div className="text-[10px] text-slate-500 font-medium">Email</div>
                         <div className="w-full border border-slate-200 rounded-md text-[11px] text-slate-900 p-2 font-medium shadow-sm bg-white">jane.diaz@stripe.com</div>
                      </div>
                      <div className="flex gap-2">
                         <button className="flex-1 h-9 bg-[#00d632] rounded-md flex items-center justify-center text-white text-[12px] font-bold shadow-sm hover:brightness-105 transition-all gap-1.5">
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Link
                         </button>
                         <button className="flex-1 h-9 bg-[#0a2540] rounded-md flex items-center justify-center text-white text-[12px] font-bold shadow-sm hover:bg-slate-800 transition-all gap-1.5">
                           <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5"><path d="M14.6 9.8c-.1-1.6 1.3-2.6 1.3-2.6-1-1.4-2.5-1.5-2.8-1.5-1.2-.1-2.4.7-3.1.7-.6 0-1.7-.7-2.6-.7-1.3 0-2.6.7-3.3 1.9-1.3 2.3-.3 5.7 1 7.6.6.9 1.3 1.9 2.3 1.8.9-.1 1.3-.7 2.4-.7 1.1 0 1.4.7 2.4.7 1 .1 1.6-1 2.2-1.9.7-1 1-2 1.1-2.1 0 0-1.7-.7-1.9-2.5zM12.9 6.2c.5-.6.8-1.5.7-2.3-.7 0-1.6.4-2.1 1-.4.5-.8 1.4-.7 2.2.8.1 1.5-.4 2.1-.9z"/></svg> Pay
                         </button>
                      </div>
                      
                      <div className="relative py-1 flex items-center">
                          <div className="flex-grow border-t border-slate-100"></div>
                          <span className="flex-shrink-0 mx-3 text-[10px] text-slate-400 bg-white">or</span>
                          <div className="flex-grow border-t border-slate-100"></div>
                      </div>
                      
                      <div className="space-y-1.5">
                         <div className="text-[10px] text-slate-500 font-medium mb-1.5">Payment method</div>
                         <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                            <div className="flex items-center gap-2 p-2.5 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                               <div className="w-3 h-3 rounded-full border border-slate-300"></div>
                               <div className="text-[11px] text-slate-700 font-medium flex items-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg> Card</div>
                            </div>
                            <div className="flex flex-col gap-1 p-2.5 bg-[#f0f4ff] border-b border-slate-100 relative cursor-pointer">
                               <div className="absolute left-[-1px] top-[-1px] bottom-[-1px] w-[2px] bg-blue-600 rounded-l-lg"></div>
                               <div className="flex items-center gap-2">
                                 <div className="w-3 h-3 rounded-full border-[3px] border-blue-600 bg-white"></div>
                                 <div className="text-[11px] text-slate-900 font-semibold flex items-center gap-1.5"><span className="bg-blue-600 text-white px-1 py-0.5 rounded-sm text-[8px] font-bold leading-none">A</span> Affirm</div>
                               </div>
                               <div className="pl-5 text-[9.5px] text-slate-500 leading-relaxed max-w-[180px]">Pay now or in 4 interest-free payments of US$40.73.</div>
                            </div>
                            <div className="flex items-center gap-2 p-2.5 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                               <div className="w-3 h-3 rounded-full border border-slate-300"></div>
                               <div className="text-[11px] text-[#00d632] font-semibold flex items-center gap-1.5"><span className="bg-[#00d632] text-white rounded-[3px] px-1 py-0.5 text-[9px] leading-none">$</span> Cash App</div>
                            </div>
                            <div className="flex items-center gap-2 p-2.5 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                               <div className="w-3 h-3 rounded-full border border-slate-300"></div>
                               <div className="text-[11px] text-[#8b5cf6] font-semibold flex items-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg> Cryptocurrency</div>
                            </div>
                            <div className="flex items-center gap-2 p-2.5 hover:bg-slate-50 cursor-pointer transition-colors">
                               <div className="w-3 h-3 rounded-full border border-slate-300"></div>
                               <div className="text-[11px] text-slate-700 font-medium flex items-center gap-2"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> US bank account</div>
                            </div>
                         </div>
                      </div>
                    </div>
                    <button className="w-full bg-[#fdece6] text-[#ff6a38] py-2.5 rounded-lg text-[12px] font-bold transition-colors hover:bg-[#fadcd0] mt-3">Continue</button>
                  </div>
                  
                  <div className="flex flex-col">
                     <div className="text-[12px] font-bold text-slate-900 mb-4 tracking-wide">Order summary</div>
                     <div className="flex gap-3 mb-5">
                        <div className="w-12 h-12 bg-white border border-slate-200 rounded-md flex-shrink-0 flex items-center justify-center shadow-sm relative overflow-hidden">
                           {/* Abstract kettle illustration using basic shapes */}
                           <div className="w-6 h-6 rounded-full bg-slate-800 absolute bottom-1.5"></div>
                           <div className="w-2.5 h-3 bg-slate-800 absolute top-1.5 rounded-t-sm"></div>
                           <div className="w-5 h-1 bg-slate-800 absolute top-1 rounded-full"></div>
                           <div className="w-1.5 h-5 bg-slate-800 absolute right-1.5 top-3 origin-bottom -rotate-45 rounded-full"></div>
                        </div>
                        <div className="text-[10px] space-y-0.5">
                          <div className="font-semibold text-slate-900 leading-snug">Electric Kettle with Temp Control</div>
                          <div className="font-bold text-slate-900 mt-1 pt-0.5 text-[11px]">US$150.00</div>
                        </div>
                     </div>
                     
                     <div className="space-y-2 text-[11px] text-slate-500 mt-auto">
                        <div className="flex justify-between"><span>Subtotal</span><span className="text-slate-900">US$150.00</span></div>
                        <div className="flex justify-between"><span>Tax</span><span className="text-slate-900">US$15.34</span></div>
                        <div className="flex justify-between"><span>Delivery</span><span className="text-slate-900">Free</span></div>
                     </div>
                     <div className="h-px bg-slate-200 my-3"></div>
                     <div className="flex justify-between text-[13px] font-bold text-slate-900"><span>Total</span><span>US$165.34</span></div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup (Black Smartphone on White Dock) */}
              <div className="absolute -bottom-6 left-0 w-[220px] z-20 flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-700">
                <div className="w-full h-[450px] bg-black rounded-[2.5rem] border-[6px] border-black shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden ring-1 ring-slate-900/20">
                  {/* Screen Content */}
                  <div className="bg-white w-full h-full p-4 flex flex-col pt-10">
                    <div className="flex justify-center mb-8">
                       <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2.5-1.5-3.5M6.5 17.5c1.5 1.5 3.5 2.5 6 2.5 4.5 0 8.5-4 8.5-8.5S17 3 12.5 3 4 7 4 11.5c0 2.5 1 4.5 2.5 6M11.5 7.5c2.5 0 4.5 2 4.5 4.5 0 2.5-2 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5" /></svg>
                    </div>
                    <div className="text-center mb-8">
                      <div className="text-[12px] text-slate-500 mb-2 font-medium">Pay Roastery</div>
                      <div className="text-3xl font-bold text-slate-900 tracking-tight leading-none mb-3">US$5.46</div>
                      <div className="text-[11px] text-slate-500 mt-2 max-w-[130px] mx-auto leading-relaxed">Tap, insert or swipe to pay</div>
                    </div>
                    <div className="space-y-4 mt-auto pt-4 border-t border-slate-100">
                      <div className="flex justify-between text-[12px]"><span className="text-slate-600">Mocha Latte</span><span className="font-semibold text-slate-900">US$5.50</span></div>
                      <div className="flex justify-between text-[12px]"><span className="text-slate-600">Loyalty (10% off)</span><span className="font-semibold text-slate-900">-US$0.55</span></div>
                      <div className="flex justify-between text-[12px]"><span className="text-slate-600">Tax</span><span className="font-semibold text-slate-900">US$0.51</span></div>
                      <div className="h-px bg-slate-100 my-1"></div>
                      <div className="flex justify-between text-[14px] font-bold text-slate-900 mb-2"><span>Total</span><span>US$5.46</span></div>
                    </div>
                    <button className="w-full bg-[#fdece6] text-[#ff6a38] py-3 rounded-xl text-[13px] font-bold transition-colors mt-3">Continue</button>
                  </div>
                </div>
                {/* White Charging Dock */}
                <div className="w-[240px] h-[30px] bg-gradient-to-b from-white to-slate-100 rounded-b-[1.5rem] shadow-xl absolute -bottom-2 z-0 border border-slate-200"></div>
              </div>
              
            </div>
          </div>

          {/* Card 2: Enable any billing model */}
          <div className="md:col-span-4 rounded-[2rem] p-8 md:p-12 border border-slate-200/60 relative overflow-hidden group shadow-sm flex flex-col min-h-[500px]">
            {/* Highly Vibrant Multi-layered Gradient - Lowered */}
            <div className="absolute inset-0 bg-white -z-20"></div>
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] -z-10 pointer-events-none">
              {/* Vibrant deep purple bottom base */}
              <div className="absolute bottom-[-10%] left-0 right-0 h-[70%] bg-gradient-to-t from-[#6e22e6] via-[#d946ef] to-transparent opacity-90 blur-xl"></div>
              {/* Peach glow top-left (lowered slightly) */}
              <div className="absolute top-[35%] -left-[10%] w-[60%] h-[60%] bg-[#ffaa77] rounded-full blur-[100px] opacity-50"></div>
              {/* Deep violet glow bottom-right */}
              <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[#4f46e5] rounded-full blur-[80px] opacity-90"></div>
            </div>

            <div className="absolute top-8 right-8 w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </div>

            <h3 className="text-2xl md:text-[1.75rem] font-bold text-[#0a2540] mb-8 leading-[1.15] tracking-tight">Enable any billing model</h3>
            
            <div className="mt-auto space-y-4 relative z-10 w-full">
               
               <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/80 transition-transform duration-700 group-hover:-translate-y-1">
                  <div className="flex items-center gap-3.5 mb-5">
                     <div className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100/50">
                        <div className="w-4 h-4 bg-[#635BFF] rounded-full ring-4 ring-indigo-100"></div>
                     </div>
                     <div>
                        <div className="font-semibold text-slate-900 text-[14px]">Pro Plan</div>
                        <div className="text-[12px] text-slate-500 font-medium mt-0.5">Billed monthly</div>
                     </div>
                  </div>
                  <div className="mb-1 text-[13px] font-semibold text-slate-900">Tokens</div>
                  <div className="text-[12px] text-slate-500 mb-5">₹0.95 per 1,000 units</div>
                  <div className="flex items-center gap-1.5 text-[12px] text-slate-600 mb-3 font-medium">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> Usage meter
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full w-[70%] bg-gradient-to-r from-[#635BFF] via-[#d946ef] to-[#f97316] rounded-full"></div>
                  </div>
               </div>
               
               <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/80 transition-transform duration-700 group-hover:-translate-y-1">
                  <div className="text-[12px] text-slate-500 mb-2 font-medium">Tokens used in the last 30 days</div>
                  <div className="text-[1.75rem] font-bold text-[#0a2540] mb-8 tracking-tight">2,005,345,940</div>
                  <div className="flex items-end gap-1 h-20 w-full px-1">
                     {/* Accurate representation of the bar chart in screenshot */}
                     {[20,30,25,15,40,35,45,60,30,40,55,30,25,85,90,75,80,60,70,50,45,60,50,70,80,60,40,30,50,60,70,55,40,50].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#635BFF] rounded-t-sm hover:bg-indigo-400 transition-colors" style={{height: `${h}%`}}></div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
          
          {/* Card 3: Monetise through agentic commerce */}
          <div className="md:col-span-4 bg-gradient-to-br from-slate-50 to-pink-50/30 rounded-[2rem] p-8 md:p-10 border border-slate-100 relative overflow-hidden group min-h-[500px] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-xl">
             <div className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-[#635BFF] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <ArrowRight className="w-4 h-4 -rotate-45" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a2540] mb-8 pr-8 leading-tight">Monetise through agentic commerce</h3>
            
            <div className="relative mt-8">
               {/* Explosive pink/orange particle background */}
               <div className="absolute inset-0 flex items-center justify-center -z-10 scale-[1.3]">
                  <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-400/20 via-pink-300/5 to-transparent blur-xl"></div>
                  {/* Decorative particles */}
                  <svg className="absolute w-[130%] h-[130%] opacity-80" viewBox="0 0 200 200">
                     {Array.from({length: 120}).map((_, i) => (
                        <circle key={i} cx={(i * 17.3) % 200} cy={(i * 23.7) % 200} r={(i % 3) * 0.5 + 0.2} fill={i % 2 === 0 ? '#ec4899' : '#d946ef'} opacity={(i % 5) * 0.15 + 0.2} />
                     ))}
                  </svg>
               </div>
               
               <div className="space-y-4">
                  <div className="bg-white rounded-2xl rounded-tr-sm p-4 text-sm shadow-sm border border-slate-100 max-w-[85%] ml-auto text-slate-600">
                     I'm refreshing my wardrobe. Can you recommend some cosy, comfortable basics in size M?
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 text-sm shadow-sm border border-slate-100 max-w-[90%] text-slate-600">
                     Absolutely. Here are a few comfy essentials that pair well and could be a good starting point:
                     
                     <div className="flex gap-2 mt-4">
                        <div className="flex-1 bg-slate-50 rounded-xl p-2 border border-slate-100 flex flex-col items-center text-center hover:bg-slate-100 transition-colors cursor-pointer">
                           {/* T-Shirt SVG */}
                           <div className="w-full h-16 bg-[#eef2ff] rounded-lg mb-2 flex items-center justify-center">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="#2563eb" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7 2L4 5L5 9L8 8V20C8 21.1 8.9 22 10 22H14C15.1 22 16 21.1 16 20V8L19 9L20 5L17 2H7Z" />
                              </svg>
                           </div>
                           <div className="text-[10px] font-bold text-slate-800 leading-tight">Deluxe Shirt</div>
                           <div className="text-[9px] text-slate-500 mb-1">Blue - Medium</div>
                           <div className="text-xs font-bold text-slate-900 mb-1">₹2,470.00</div>
                           <div className="text-[9px] text-slate-400">Cartsy</div>
                        </div>
                        <div className="flex-1 bg-slate-50 rounded-xl p-2 border border-slate-100 flex flex-col items-center text-center hover:bg-slate-100 transition-colors cursor-pointer">
                           {/* Hoodie SVG */}
                           <div className="w-full h-16 bg-[#f1f5f9] rounded-lg mb-2 flex items-center justify-center">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="#0f172a" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M12 2C9.5 2 7 4 7 7V9L3 11V14L5 13V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V13L21 14V11L17 9V7C17 4 14.5 2 12 2ZM12 4C13.5 4 15 5.2 15 7V9H9V7C9 5.2 10.5 4 12 4Z"/>
                              </svg>
                           </div>
                           <div className="text-[10px] font-bold text-slate-800 leading-tight">Essential Hoodie</div>
                           <div className="text-[9px] text-slate-500 mb-1">Navy - Medium</div>
                           <div className="text-xs font-bold text-slate-900 mb-1">₹4,560.00</div>
                           <div className="text-[9px] text-slate-400">Cartsy</div>
                        </div>
                     </div>
                     <button className="w-full mt-3 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors text-xs font-bold py-2.5 rounded-lg shadow-sm">Buy now</button>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Card 4: Create a card issuing programme */}
          <div className="md:col-span-4 bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-[2rem] p-8 md:p-10 border border-slate-100 relative overflow-hidden group min-h-[500px] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-[#635BFF] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <ArrowRight className="w-4 h-4 -rotate-45" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a2540] mb-8 pr-8 leading-tight">Create a card issuing programme</h3>
            
            <div className="relative mt-12 flex justify-center h-64">
               {/* Abstract aura */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-200/50 via-purple-100/30 to-transparent blur-3xl -z-10 scale-150"></div>
               
               {/* Credit Card Mockup */}
               <div className="w-48 h-72 rounded-2xl bg-gradient-to-br from-[#ffb1eb] via-[#cd79ff] to-[#ffb377] shadow-[0_20px_50px_-15px_rgba(205,121,255,0.4)] p-5 flex flex-col justify-between border border-white/40 backdrop-blur-md transform rotate-[5deg] hover:rotate-[2deg] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  {/* Internal wave graphics for the card */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/30 to-transparent opacity-80 pointer-events-none"></div>
                  
                  <div className="flex justify-between items-start z-10">
                     {/* EMV Chip */}
                     <div className="w-8 h-6 rounded-md border border-white/60 bg-white/20 flex flex-col justify-between py-[2px] px-[2px] backdrop-blur-sm shadow-sm relative overflow-hidden">
                        <div className="h-[1px] w-full bg-white/50"></div>
                        <div className="h-[1px] w-full bg-white/50"></div>
                        <div className="h-[1px] w-full bg-white/50"></div>
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-white/50"></div>
                     </div>
                     {/* NFC Icon */}
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><path d="M4 14a8 8 0 0 1 15-4"/><path d="M7 17a5 5 0 0 1 10-3"/><path d="M10 20a2 2 0 0 1 5-2"/></svg>
                  </div>
                  
                  <div className="text-right font-bold text-[#0a2540] text-2xl tracking-widest italic drop-shadow-sm z-10">VISA</div>
               </div>
            </div>
          </div>
          
          {/* Card 5: Access borderless money movement */}
          <div className="md:col-span-4 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-[2rem] p-8 md:p-10 border border-slate-100 relative overflow-hidden group min-h-[500px] transition-all duration-700 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-[#635BFF] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <ArrowRight className="w-4 h-4 -rotate-45" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a2540] mb-8 pr-8 leading-tight">Access borderless money movement with stablecoins and crypto</h3>
            
            <div className="relative mt-4 h-64 md:h-[350px] flex justify-end items-center overflow-hidden">
               {/* Complex 3D Globe Graphic */}
               <div className="absolute right-[-40%] top-[-20%] w-[500px] h-[500px] opacity-80 mix-blend-multiply">
                  {/* Rotating Globe SVG */}
                  <div className="w-full h-full animate-spin" style={{ animationDuration: '60s' }}>
                     <svg className="w-full h-full opacity-50" viewBox="0 0 200 200" fill="none" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="1 3">
                        <circle cx="100" cy="100" r="90" />
                        <ellipse cx="100" cy="100" rx="90" ry="30" transform="rotate(30 100 100)" />
                        <ellipse cx="100" cy="100" rx="90" ry="30" transform="rotate(-30 100 100)" />
                        <ellipse cx="100" cy="100" rx="30" ry="90" transform="rotate(20 100 100)" />
                        <ellipse cx="100" cy="100" rx="30" ry="90" transform="rotate(80 100 100)" />
                        <ellipse cx="100" cy="100" rx="90" ry="40" transform="rotate(60 100 100)" />
                        
                        <path d="M 10 100 A 90 90 0 0 1 190 100" stroke="#f472b6" strokeDasharray="2 4" strokeWidth="1" className="opacity-50" />
                        <path d="M 10 100 A 90 90 0 0 0 190 100" stroke="#c084fc" strokeDasharray="2 4" strokeWidth="1" className="opacity-50" />
                     </svg>
                  </div>
                  
                  {/* Data lines jumping across globe (Static so they stay fixed) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" fill="none">
                     <path d="M30 70 Q 70 20 140 40" stroke="#c084fc" strokeWidth="1" strokeDasharray="none" className="opacity-70" />
                     <path d="M90 170 Q 150 140 180 90" stroke="#f472b6" strokeWidth="1" strokeDasharray="none" className="opacity-60" />
                     {/* Points */}
                     <circle cx="140" cy="40" r="3" fill="#8b5cf6" />
                     <circle cx="30" cy="70" r="2" fill="#c084fc" />
                     <circle cx="180" cy="90" r="3" fill="#f97316" />
                     <circle cx="90" cy="170" r="2" fill="#f472b6" />
                  </svg>
                  
                  {/* Floating Tags (Animated so they float around) */}
                  <div className="absolute top-[15%] left-[30%] animate-float-tag-1 bg-white rounded-lg shadow-xl p-1.5 flex items-center gap-1.5 border border-slate-100 z-10 text-[12px] font-bold text-slate-800 cursor-pointer drop-shadow-lg">
                     <div className="w-6 h-6 flex items-center justify-center rounded-sm overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="2" fill="#7132f5"></rect><path d="M11.9981 6C7.58072 6 4 9.41938 4 13.6373v3.2729C4 17.5123 4.511 18 5.14179 18s1.14553-.4877 1.14553-1.0898v-3.2729c0-.6038.50912-1.0915 1.14178-1.0915.63079 0 1.14178.4877 1.14178 1.0915v3.2729c0 .6021.51102 1.0898 1.1418 1.0898.63262 0 1.14362-.4877 1.14362-1.0898v-3.2729c0-.6038.511-1.0915 1.1418-1.0915.6327 0 1.1455.4877 1.1455 1.0915v3.2729c0 .6021.5111 1.0898 1.1418 1.0898.6308 0 1.1418-.4877 1.1418-1.0898v-3.2729c0-.6038.511-1.0915 1.1456-1.0915.6307 0 1.1417.4877 1.1417 1.0915v3.2729c0 .6021.511 1.0898 1.1437 1.0898C19.489 18 20 17.5123 20 16.9102v-3.2729C20 9.41938 16.4174 6 11.9981 6" fill="#fff"></path></svg>
                     </div>
                     <div className="flex gap-1 items-baseline px-0.5 pr-1">
                        <span className="text-[13px]">$238</span><span className="text-[10px] text-slate-500 font-semibold">USDC</span>
                     </div>
                  </div>

                  <div className="absolute top-[50%] right-[15%] animate-float-tag-2 bg-white rounded-lg shadow-xl p-1.5 flex items-center gap-1.5 border border-slate-100 z-10 text-[12px] font-bold text-slate-800 cursor-pointer drop-shadow-lg" style={{ animationDelay: '1s' }}>
                     <div className="w-6 h-6 flex items-center justify-center rounded-sm overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="2" fill="#ebf1f7"></rect><path d="m18.8095 5-5.8759 4.36414 1.0866-2.57544z" fill="#e2761b"></path><path d="m5.24339 5 5.82881 4.4053-1.0337-2.6166-4.79511-1.78811zM16.6947 15.116l-1.5653 2.3984 3.3487.9214.9625-3.2663-2.7459-.053zm-12.07165.0535.95667 3.2663 3.34866-.9214-1.56525-2.3979z" fill="#e4761b"></path><path d="m8.74009 11.0643-.93198 1.4124 3.32459.1476-.1176-3.57269-2.27384 2.01389zm6.57321 0-2.3032-2.05502-.0764 3.61442 3.3187-.147-.9391-1.4118zm-6.38388 6.4498 1.99628-.9743-1.72462-1.3465zm4.19888-.9743 2.0022.9743-.2776-2.3214-1.7246 1.3465z" fill="#e4761b"></path><path d="m15.1307 17.5145-2.0021-.9744.1593 1.3054-.0176.5486zm-6.20101 0 1.86041.8796-.0117-.5492.147-1.3053z" fill="#d7c1b3"></path><path d="m10.8195 14.3308-1.6652-.4904 1.1748-.5374zm2.4155 0 .4904-1.0278 1.1807.5374z" fill="#233447"></path><path d="m8.92951 17.5141.28342-2.3979-1.84867.0529zm5.91759-2.3985.2835 2.3985 1.5652-2.345-1.8487-.0529zm1.4054-2.6395-3.3187.1476.3069 1.7069.4904-1.0278 1.1807.5374zm-7.09837 1.3641 1.18067-.5374.4845 1.0278.3129-1.7069-3.32459-.147 1.34652 1.3641z" fill="#cd6116"></path><path d="m7.80762 12.4761 1.39356 2.7165-.04704-1.3524zm7.10418 1.3641-.0588 1.3524 1.3995-2.7165zm-3.7796-1.2165-.3128 1.7069.3898 2.0139.0882-2.6519-.1646-1.0689zm1.8016 0-.1593 1.0631.0705 2.6577.3957-2.0139z" fill="#e4751f"></path><path d="m13.2709 18.3936.0176-.5492-.1481-.1294h-2.2262l-.1358.1294.0117.5492-1.86041-.8797.64974.5316 1.31707.9149h2.2615l1.323-.9149.6497-.5316-1.8604.8797z" fill="#c0ad9e"></path><path d="m13.1281 16.5399-.2834-.1952h-1.6359l-.2834.1952-.1476 1.3054.1353-.1305h2.2267l.1476.1299-.1587-1.3053z" fill="#161616"></path><path d="m19.0577 9.64755.5022-2.40962L18.8096 5l-5.6813 4.21655 2.185 1.84865 3.0888.9032.6856-.7968-.2958-.2128.4728-.431-.3663-.2834.4727-.36047zM4.5 7.23793l.50215 2.40962-.31928.23638.47275.36047-.36044.2834.47275.431-.29577.2128.67973.7968 3.08877-.9032 2.18504-1.84865L5.24441 5z" fill="#763d16"></path><path d="m13.2409 14.3312-.3957 2.0139.2834.1952 1.7246-1.3465.0588-1.3524zm-4.0866-.4904.04704 1.3524 1.72456 1.3465.2835-.1946-.3899-2.0139z" fill="#f6851b"></path><path d="m18.4011 11.9682-3.0888-.9032.939 1.4112-1.3994 2.7166 1.8428-.0236h2.7459zm-9.66205-.9038-3.08818.9038-1.02782 3.201h2.74008l1.83691.0236-1.39356-2.7166.93257-1.4112zm4.19365 1.5594.1946-3.40747.8979-2.42727h-3.9867l.8861 2.42727.2064 3.40747.0706 1.0749.0059 2.646h1.6364l.0117-2.646.0765-1.0749z" fill="#f6851b"></path></svg>
                     </div>
                     <div className="flex gap-1 items-baseline px-0.5 pr-1">
                        <span className="text-[13px]">$426</span><span className="text-[10px] text-slate-500 font-semibold">USDC</span>
                     </div>
                  </div>

                  <div className="absolute bottom-[20%] left-[10%] animate-float-tag-1 bg-white rounded-lg shadow-xl p-1.5 flex items-center gap-1.5 border border-slate-100 z-10 text-[12px] font-bold text-slate-800 cursor-pointer drop-shadow-lg" style={{ animationDelay: '2.5s', animationDirection: 'reverse' }}>
                     <div className="w-6 h-6 flex items-center justify-center rounded-sm overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M24 0H0v24h24z" fill="#000"></path><path d="M24 0H0v24h24z" fill="#111"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.4444 15.2962c-.94238 1.4439-2.52146 3.2713-4.62262 3.2713-.99328 0-1.94836-.409-1.94836-2.1852 0-4.5236 6.17618-11.52615 11.90668-11.52615 3.26 0 4.5589 2.2618 4.5589 4.83026 0 3.29689-2.1394 7.06649-4.2661 7.06649-.6749 0-1.006-.3706-1.006-.9584 0-.1533.0255-.3194.0764-.4983-.7258 1.2395-2.1266 2.3895-3.4382 2.3895-.9551 0-1.439-.6006-1.439-1.4439 0-.3067.0636-.6262.1783-.9456m4.9363-5.69895c0 .74845-.4416 1.12265-.9355 1.12265-.5015 0-.9356-.3742-.9356-1.12265 0-.74842.4341-1.12264.9356-1.12264.4939 0 .9355.37422.9355 1.12264m2.8066.00002c0 .74843-.4415 1.12263-.9355 1.12263-.5015 0-.9355-.3742-.9355-1.12263 0-.74844.434-1.12266.9355-1.12266.494 0 .9355.37422.9355 1.12266" fill="#fffdf8"></path></svg>
                     </div>
                     <div className="flex gap-1 items-baseline px-0.5 pr-1">
                        <span className="text-[13px]">$893</span><span className="text-[10px] text-slate-500 font-semibold">CASH</span>
                     </div>
                  </div>
               </div>
               
               {/* Decorative dots to add noise like in screenshot */}
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjYzhiNmZlIi8+PC9zdmc+')] opacity-[0.15] mix-blend-multiply pointer-events-none" style={{backgroundSize: '12px 12px'}}></div>
            </div>
          </div>
          
          {/* Card 6: Embed payments in your platform */}
          <div className="md:col-span-12 modular-solutions-bento-card group rounded-3xl overflow-hidden relative min-h-[500px] flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer bg-white mt-2">
             {/* The actual background image */}
             <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img 
                   src="https://images.stripeassets.com/fzn2n1nzq965/1j4wM9h2bBsyRFvTv6Wsn0/07f4b9b1e1e17fdc509d9087454dd8bc/ConnectBentoBackground.jpg?w=2484&q=90" 
                   alt="Background" 
                   className="w-full h-[120%] object-cover object-left md:object-center transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1"
                />
             </div>
             
             {/* Left Content */}
             <div className="relative z-10 w-full md:w-[30%] p-10 md:p-14 flex flex-col justify-start">
                <h3 className="text-[2rem] md:text-[2.25rem] font-bold text-[#0a2540] leading-[1.1] max-w-[220px] tracking-tight mt-4">Embed payments in your platform</h3>
             </div>
             
             {/* Right Content (The Dashboard UI) */}
             <div className="relative z-10 w-full md:w-[70%] flex items-center justify-end overflow-visible pt-10 md:pt-14 pb-0 pointer-events-none">
                
                {/* Scaled Wrapper for exact proportions */}
                <div className="relative flex justify-end w-full scale-[0.85] md:scale-[0.75] lg:scale-[0.85] xl:scale-100 origin-right transition-transform">
                   
                   {/* Expand icon */}
                   <div className="absolute top-10 right-10 w-8 h-8 rounded-lg bg-[#635BFF] flex items-center justify-center text-white cursor-pointer z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                   </div>

                   {/* Dashboard Window */}
                   <div className="w-[120%] md:w-[120%] max-w-5xl bg-white rounded-tl-xl rounded-tr-xl md:rounded-tr-none shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] border border-slate-200/60 overflow-hidden relative group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-500 mt-auto md:translate-x-[15%]">
                      {/* Browser Header */}
                      <div className="h-10 border-b border-slate-100 flex items-center px-4 bg-[#f6f9fc]">
                         <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                         </div>
                         <div className="mx-auto bg-white border border-slate-200/70 rounded text-[9px] text-slate-400 px-16 py-1 flex items-center justify-center gap-1.5 shadow-sm">
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2v-2zm0-10h2v8h-2V7z"/></svg>
                            dashboard.zenflow.com
                         </div>
                      </div>
                      {/* Dashboard Content */}
                      <div className="p-8 bg-white pb-0">
                         <div className="flex items-center gap-2 mb-10">
                            <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-[10px]">🌸</div>
                            <span className="font-bold text-[#0a2540] text-[13px]">Zenflow</span>
                         </div>
                         
                         <h4 className="font-bold text-[#0a2540] mb-6 text-[15px]">Connected Accounts</h4>
                         
                         {/* Table header */}
                         <div className="grid grid-cols-4 gap-4 text-[9px] font-bold text-[#0a2540] border-b border-slate-100 pb-3 mb-3">
                            <div>Accounts</div>
                            <div>Account country</div>
                            <div>Payment balance (INR)</div>
                            <div>Volume (USD)</div>
                         </div>
                         
                         {/* Table Rows */}
                         <div className="flex flex-col">
                         {[
                            { name: 'Vital Flow', country: 'Canada', bal: '₹793,060.00', vol: '$6,796,483.10', color: 'bg-[#FBF4E4] text-[#10120C]', icon: '🌸' },
                            { name: 'Daybreak Yoga', country: 'United States', bal: '₹142,690.00', vol: '$843,505.00', color: 'bg-indigo-100 text-indigo-700', icon: '☀️' },
                            { name: 'Sacred Space', country: 'UK', bal: '₹118,465.00', vol: '$2,334,063.55', color: 'bg-[#FAB000] text-white', icon: 'S' },
                            { name: 'Jackson Hot Yoga', country: 'Australia', bal: '₹347,700.00', vol: '$1,205,645.00', color: 'bg-[#FF6118] text-white', icon: 'J' },
                            { name: 'Harmony Flow', country: 'United States', bal: '₹2,938,350.00', vol: '$27,993,616.75', color: 'bg-gradient-to-br from-orange-300 to-fuchsia-400 text-white', icon: 'H' },
                            { name: 'Balance at Brunch', country: 'Canada', bal: '₹31,825.00', vol: '$346,784.20', color: 'bg-[#7F7DFC] text-white', icon: 'B' },
                            { name: 'Breathline Studio', country: 'United States', bal: '₹213,275.00', vol: '$817,760.00', color: 'bg-slate-100 text-slate-700 border border-slate-200', icon: 'B' },
                            { name: 'Quiet Fire Yoga', country: 'UK', bal: '₹38,860.00', vol: '$151,655.15', color: 'bg-[#E5EDF5] text-orange-600', icon: '🔥', highlight: true },
                            { name: 'Zenith Zen', country: 'Australia', bal: '₹62,700.00', vol: '$156,113.50', color: 'bg-[#FF6118] text-white', icon: 'Z' },
                            { name: 'M.E. Yoga', country: 'Canada', bal: '₹420,280.00', vol: '$637,412.00', color: 'bg-[#FAB000] text-white', icon: 'M' },
                         ].map((row, i) => (
                            <div key={i} className={`grid grid-cols-4 gap-4 text-[10px] text-slate-500 py-3 border-b border-slate-50 items-center transition-colors`}>
                               <div className="flex items-center gap-2.5 font-semibold text-[#0a2540]">
                                  <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[7.5px] font-bold ${row.color}`}>{row.icon}</div>
                                  {row.name}
                               </div>
                               <div>{row.country}</div>
                               <div className={row.highlight ? 'text-[#0a2540] font-bold' : ''}>{row.bal}</div>
                               <div className={row.highlight ? 'text-[#0a2540] font-bold' : ''}>{row.vol}</div>
                            </div>
                         ))}
                         </div>
                      </div>
                   </div>
                   
                   {/* Quiet Fire Yoga Floating Modal */}
                   <div className="absolute top-1/2 left-[-5%] md:left-[-5%] -translate-y-[45%] w-[280px] bg-white rounded-[1.25rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 p-6 z-20 transition-transform duration-700 ease-out group-hover:-translate-y-[52%] hidden md:block pointer-events-auto cursor-default">
                      <div className="flex items-center gap-3 mb-5">
                         <div className="w-8 h-8 rounded-full bg-[#E5EDF5] flex items-center justify-center text-orange-600 font-bold text-[14px]">
                            🔥
                         </div>
                         <span className="font-bold text-[#0a2540] text-[14px]">Quiet Fire Yoga</span>
                      </div>
                      
                      <div className="text-[11px] font-bold text-[#0a2540] mb-0.5">Thank you!</div>
                      <div className="text-[11px] text-slate-500 mb-8">Your payment was successful.</div>
                      
                      <div className="flex justify-between items-center mb-5 text-[11px] border-t border-slate-100 pt-4">
                         <div className="text-[#0a2540] font-medium">
                            Order number
                         </div>
                         <div className="text-slate-500 text-[10px] font-mono tracking-tighter">#194756</div>
                      </div>

                      <div className="flex justify-between items-center mb-5 text-[11px] border-t border-slate-100 pt-4">
                         <div className="text-[#0a2540] font-medium">
                            Date
                         </div>
                         <div className="text-slate-500 text-[10px]">20 Feb</div>
                      </div>

                      <div className="flex justify-between items-center mb-5 text-[11px] border-t border-slate-100 pt-4">
                         <div className="text-[#0a2540] font-medium">
                            Payment method
                         </div>
                         <div className="text-slate-500 text-[10px]">
                            <div className="w-8 h-5 bg-[#00D66F] rounded flex items-center justify-center">
                               <svg width="12" height="10" viewBox="0 0 20 15" fill="none"><path d="M0 2.35294C0 1.05412 1.05455 0 2.35364 0H17.6473C18.9473 0 20 1.05412 20 2.35294V11.7647C20 13.0635 18.9464 14.1176 17.6473 14.1176H2.35364C1.05364 14.1176 0 13.0635 0 11.7647V2.35294Z" fill="#00D66F"></path><path d="M8.96549 2.35303H6.4707C6.95592 4.40891 8.37244 6.16567 10.1446 7.27126C8.36896 8.37597 6.95592 10.1327 6.4707 12.1886H8.96375C9.58114 10.2871 11.2924 8.6345 13.3942 8.29744V6.24156C11.2898 5.90626 9.57853 4.2545 8.96375 2.35303H8.96549Z" fill="#011E0F"></path></svg>
                            </div>
                         </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-5 border-t border-slate-100 pt-4 text-[11px]">
                         <div className="font-medium text-[#0a2540]">Your purchase</div>
                         <div className="text-slate-500">£22.00</div>
                      </div>

                      <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                         <div className="font-bold text-[13px] text-[#0a2540]">Total</div>
                         <div className="font-bold text-[13px] text-[#0a2540]">£22.00</div>
                      </div>
                      
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AISection() {
  return (
    <div className="py-24 bg-white">
       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#0f0f1c] text-white">
             {/* Background Image/Gradient resembling the AI Banner */}
             <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#11052C] via-[#38115C] to-[#C13628] opacity-90">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_50%,_#ff8c00_0%,_transparent_60%)]"></div>
                {/* Wavy lines decorative background (approximation) */}
                <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay" preserveAspectRatio="none" viewBox="0 0 100 100">
                   <path d="M 0 50 Q 25 30 50 50 T 100 50 L 100 100 L 0 100 Z" fill="none" stroke="#fff" strokeWidth="0.2" strokeDasharray="1,2"/>
                   <path d="M 0 60 Q 25 40 50 60 T 100 60 L 100 100 L 0 100 Z" fill="none" stroke="#fff" strokeWidth="0.4"/>
                   <path d="M 0 70 Q 25 50 50 70 T 100 70 L 100 100 L 0 100 Z" fill="none" stroke="#fff" strokeWidth="0.8"/>
                </svg>
             </div>
             
             <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row justify-between items-start md:items-center min-h-[400px]">
                <div className="max-w-xl">
                   <h2 className="text-4xl md:text-[3.5rem] font-bold leading-tight mb-8">
                      Building the economic<br/>infrastructure for AI
                   </h2>
                   <button className="bg-white text-[#0a2540] hover:bg-slate-100 px-5 py-2.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group w-max">
                     Watch now <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
                
                {/* Silhouette or Logo */}
                <div className="absolute bottom-8 right-12">
                   <div className="text-2xl font-bold tracking-tighter opacity-80 flex items-center gap-1">
                      stripe <span className="font-normal">sessions</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-slate-200 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter text-[#0a2540] mb-6 block">stripe</a>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
              India (English)
            </div>
            <p className="text-sm text-slate-500">© 2026 Stripe, Inc.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#0a2540] mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Atlas</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Billing</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Capital</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Checkout</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#0a2540] mb-4">Developers</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">API reference</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#0a2540] mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Customers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-200 relative">
      {/* Subtle Background Grid Lines framing the content */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-0">
        <div className="w-full max-w-[1400px] h-full border-x border-slate-100/80"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <LogoCarousel />
        <Solutions />
        <AISection />
        <Footer />
      </div>
    </div>
  );
}
