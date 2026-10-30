import { motion } from 'framer-motion';
import { Clapperboard } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-5 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="pointer-events-auto w-full max-w-5xl bg-[#0e121e]/75 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3.5 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
      >
        <div
          onClick={() => setActivePage('home')}
          className="text-white font-bold text-lg flex items-center gap-3 cursor-pointer group"
        >
          <span className="bg-white/10 border border-white/15 p-2 rounded-xl group-hover:bg-accent-purple/30 group-hover:border-accent-purple/50 transition-all">
            <Clapperboard size={18} className="text-white" />
          </span>
          <span className="tracking-tight">Vishal</span>
        </div>

        <ul className="flex items-center space-x-1 sm:space-x-2 text-sm">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-colors cursor-pointer ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </div>
  );
}