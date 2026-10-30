import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Services from './sections/Services';
import About from './sections/About'; // खरा About इम्पोर्ट केला आहे
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handlePageChange = (page) => {
    if (page === activePage) return;
    setIsLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setActivePage(page);
      setIsLoading(false);
    }, 350);
  };

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-primary-bg min-h-screen selection:bg-accent-purple selection:text-white font-sans relative">
      
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      <main className="min-h-[75vh]">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-[70vh] flex flex-col items-center justify-center gap-3 pt-24"
            >
              <div className="w-9 h-9 border-2 border-accent-purple border-t-transparent rounded-full animate-spin" />
              <p className="text-xs text-gray-400">Loading content...</p>
            </motion.div>
          ) : (
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {activePage === 'home' && (
                <>
                  <Hero setActivePage={handlePageChange} />
                  <Projects />
                  <Services />
                </>
              )}
              
              {/* आता इथे खरा About कॉम्पोनेंट लोड होईल */}
              {activePage === 'about' && <About setActivePage={handlePageChange} />}
              {activePage === 'skills' && <Skills setActivePage={handlePageChange} />}
              {activePage === 'contact' && <Contact />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer setActivePage={handlePageChange} />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#131826] border border-white/15 text-white flex items-center justify-center shadow-lg hover:bg-accent-purple transition-colors cursor-pointer"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}