import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCarousel from './components/Logos';
import Features from './components/Features';
import AISection from './components/AISection';
import GlobalCommerce from './components/GlobalCommerce';
import Enterprise from './components/Enterprise';
import Startups from './components/Startups';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-200 relative">
      {/* Subtle Background Grid Lines framing the content */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-0">
        <div className="w-full max-w-[1400px] h-full border-x border-slate-100/80"></div>
      </div>
      
      <div className="relative z-10">
        {/* ========================================================= */}
        {/* GLOBAL NAVIGATION                                         */}
        {/* ========================================================= */}
        <Navbar />

        {/* ========================================================= */}
        {/* HERO SECTION (Animated gradient typography & phone mockup)  */}
        {/* ========================================================= */}
        <Hero />

        {/* ========================================================= */}
        {/* CUSTOMER LOGOS (Infinite scrolling marquee)               */}
        {/* ========================================================= */}
        <LogoCarousel />

        {/* ========================================================= */}
        {/* BENTO GRID FEATURES (Payment & Product Modular Solutions) */}
        {/* ========================================================= */}
        <Features />

        {/* ========================================================= */}
        {/* AI CAPABILITIES SECTION                                   */}
        {/* ========================================================= */}
        <AISection />

        {/* ========================================================= */}
        {/* GLOBAL COMMERCE (Interactive globe & stats)               */}
        {/* ========================================================= */}
        <GlobalCommerce />

        {/* ========================================================= */}
        {/* ENTERPRISE SECTION (Large scale business features)        */}
        {/* ========================================================= */}
        <Enterprise />

        {/* ========================================================= */}
        {/* STARTUPS SECTION (Stripe Atlas & quick incorporation)     */}
        {/* ========================================================= */}
        <Startups />

        {/* ========================================================= */}
        {/* GLOBAL FOOTER (Multi-column links & settings)             */}
        {/* ========================================================= */}
        <Footer />
      </div>
    </div>
  );
}
