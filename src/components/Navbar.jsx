import { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Products', 'Solutions', 'Developers', 'Resources', 'Pricing'];

  return (
    <nav className="absolute w-full z-50 bg-transparent py-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900">
              stripe
            </a>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link} href="#" className="text-[15px] font-medium text-[#0a2540] hover:opacity-70 flex items-center gap-1 group transition-opacity">
                  {link}
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:rotate-90 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ml-2">
            <a href="#" className="text-[14px] font-semibold text-[#f6a551] hover:text-[#0a2540] bg-white px-4 py-1.5 rounded-full transition-colors shadow-[0_2px_8px_-2px_rgba(0,0,0,0.12)]">
              Sign in
            </a>
            <a href="#" className="text-[14px] font-semibold bg-[#635BFF] text-white hover:bg-[#0a2540] px-4 py-1.5 rounded-full transition-colors flex items-center justify-center gap-1 shadow-[0_2px_8px_-2px_rgba(99,91,255,0.4)]">
              Contact sales <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

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
