import { motion } from "motion/react";

interface NavbarProps {
  activeTab: 'home' | 'profile';
  setActiveTab: (tab: 'home' | 'profile') => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-outline-variant/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab('home')}
        >
          <span className="text-2xl font-bold font-headline text-primary tracking-tight">dr. Bege</span>
          <span className="hidden sm:inline-block w-[1px] h-4 bg-outline-variant/30"></span>
          <span className="hidden sm:inline-block text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">Academic Sanctuary</span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`text-sm font-medium transition-colors ${activeTab === 'profile' ? 'text-primary border-b-2 border-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Profile
          </button>
          <button 
            onClick={() => {
              if (activeTab !== 'home') {
                setActiveTab('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            Contact
          </button>
          <button 
            onClick={() => {
              if (activeTab !== 'home') {
                setActiveTab('home');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:shadow-lg transition-all"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
}
