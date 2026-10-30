import { motion } from 'framer-motion';
import { Globe, CheckCircle2, Quote, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const trustedClients = [
  "Impel IT", "GrowthLeo LLC", "Incepta", "Eco Farming", "Stack Learner", "EduBridge Academy", "EcoRevolution"
];

export default function About({ setActivePage }) {
  return (
    <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">
      
      {/* --- 1. Page Header --- */}
      <div className="text-center mb-14">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-white mb-4">
          The Man Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Magic</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-gray-400 text-sm md:text-base">
          Visual Storyteller. Motion Graphics Artist. Problem Solver.
        </motion.p>
      </div>

      {/* --- 2. Bento Grid Layout --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
        
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden border border-white/10 bg-[#0b0f19] min-h-[450px] flex items-end p-8 group"
        >
          {/* 👇 इथे थेट /profile.png वापरला आहे */}
          <img 
            src="/Profile.png" 
            alt="Vishal Kumbhar" 
            className="absolute inset-0 w-full h-full object-cover object-[center_25%] opacity-100 group-hover:scale-105 transition-transform duration-700" 
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/50 to-transparent" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-2 drop-shadow-lg">
              VISHAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-md">Kumbhar</span>
            </h2>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gray-200 font-semibold border-t-2 border-accent-purple pt-2 inline-block drop-shadow-md">
              Professional Video Editor & Motion Designer
            </p>
          </div>
        </motion.div>

        {/* Experience Card */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
          <div className="bg-[#071318] border border-emerald-500/20 rounded-2xl py-6 text-center mb-4">
            <span className="text-5xl font-black text-emerald-400">8+</span>
            <p className="text-[10px] tracking-widest text-emerald-300 uppercase mt-1">Months Active</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm"><CheckCircle2 size={16} className="text-emerald-400" /> Experience</div>
            <p className="text-xs text-gray-400 mt-1">Months of professional grinding.</p>
          </div>
        </motion.div>

        {/* Global Reach Card */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
          <div className="bg-[#091124] border border-blue-500/20 rounded-2xl py-8 flex flex-col items-center justify-center mb-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <Globe size={28} className="text-accent-blue mb-3 animate-pulse relative z-10" />
            <span className="text-[10px] bg-blue-500/20 text-accent-blue px-3 py-1 rounded-full font-bold uppercase tracking-wider relative z-10">Worldwide</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm flex items-center gap-2"><Globe size={14} className="text-accent-blue" /> Global Reach</p>
            <p className="text-xs text-gray-400 mt-1">Remote ready.</p>
          </div>
        </motion.div>

        {/* Philosophy Quote Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="md:col-span-2 bg-[#0b0f19] border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
          <Quote size={70} className="absolute top-4 right-6 text-white/[0.03] rotate-12" />
          <p className="text-lg md:text-xl italic text-gray-200 leading-relaxed mb-8 relative z-10 max-w-2xl">"I don't just cut footage; I construct feelings. Every frame must earn its place on the timeline, serving the narrative above all else."</p>
          <div>
            <p className="text-sm font-bold text-amber-400 flex items-center gap-2"><Lightbulb size={16} /> Philosophy</p>
            <p className="text-xs text-gray-400 mt-1">Story is King.</p>
          </div>
        </motion.div>

        {/* Connect Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-center gap-2 my-auto py-2">
            {[FaLinkedin, FaInstagram, FaYoutube].map((Icon, idx) => (
              <motion.a key={idx} href="#" whileHover={{ scale: 1.1, y: -3 }} className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-accent-purple transition-colors">
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
          <div>
            <p className="text-sm font-bold text-white flex items-center gap-2"><Sparkles size={16} className="text-accent-purple" /> Connect</p>
            <p className="text-xs text-gray-400 mt-1">Let's stay in touch.</p>
          </div>
        </motion.div>
      </div>

      {/* --- 4. Bottom CTA Card --- */}
      <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-b from-[#0e1424] to-[#080b14] border border-white/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 relative z-10">Open For New Projects</span>
        <h3 className="text-3xl md:text-5xl font-black text-white mb-4 relative z-10">Ready to Work Together?</h3>
        <p className="text-gray-400 text-sm md:text-base mb-8 relative z-10 max-w-md mx-auto">Let's make something that breaks the internet.</p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActivePage && setActivePage('contact')} className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-gray-200 transition-all cursor-pointer relative z-10">Start Collaboration <ArrowRight size={16} /></motion.button>
      </motion.div>
    </section>
  );
}