import { motion } from 'framer-motion';

export default function Hero({ setActivePage }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-accent-blue/30 to-accent-purple/30 blur-[130px] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 max-w-4xl mx-auto"
      >
        <div className="mb-8 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 text-xs font-semibold tracking-[0.2em] uppercase shadow-inner">
          <span className="w-2 h-2 rounded-full bg-accent-purple animate-ping" />
          <span className="w-2 h-2 rounded-full bg-accent-purple -ml-4" />
          Available For Work
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black leading-[0.95] mb-8 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400">
            CINEMATIC
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-accent-purple to-blue-400">
            EDITOR
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          Turning raw footage into visual stories — with style, precision, and a touch of{' '}
          <span className="text-white font-semibold">cinematic magic.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-white text-black px-8 py-3.5 rounded-full font-semibold text-sm shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:bg-gray-100 transition-all w-44"
          >
            View Work
          </motion.a>
          <motion.button
            onClick={() => setActivePage('contact')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-white/[0.04] text-white border border-white/15 px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 transition-all w-44 cursor-pointer"
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-gray-500 uppercase"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ height: [16, 28, 16], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] bg-gradient-to-b from-gray-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}