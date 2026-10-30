import { motion } from 'framer-motion';
import { Clapperboard } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#050814] border-t border-white/10 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <div 
            onClick={() => setActivePage('home')}
            className="text-white font-bold text-xl flex items-center gap-2 mb-4 cursor-pointer"
          >
            <span className="bg-white/10 border border-white/15 p-2 rounded-xl">
              <Clapperboard size={18} />
            </span> 
            Vishal
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Video Editor and Motion Graphics Designer passionate about creating visual stories with style, precision, and cinematic magic.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {links.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => setActivePage(link.id)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Connect With Me</h4>
          <div className="flex gap-4 text-gray-400">
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all">YT</a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all">IG</a>
             <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all">IN</a>
          </div>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500 border-t border-white/10 pt-8">
        Made with ❤️ by Vishal © 2026
      </div>
    </motion.footer>
  );
}