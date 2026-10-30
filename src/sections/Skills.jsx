import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { technicalSkills, specializations, workflowSteps } from '../data/data';
import { ArrowRight } from 'lucide-react';

export default function Skills({ setActivePage }) {
  return (
    <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">
      <SectionHeading title="My Skills &" highlight="Expertise" subtitle="With years of experience in video editing and motion graphics, I bring technical expertise and creative vision to every project. Here's what I can do for you." />

      {/* 1. Technical Skills (आता लोगो इमेजेससह) */}
      <h3 className="text-xl font-bold text-white text-center mb-8">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {technicalSkills.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: index * 0.08 }} 
            whileHover={{ y: -4 }} 
            className="bg-[#0b0f19] border border-white/10 hover:border-accent-purple/40 rounded-2xl p-6 flex items-start gap-4 transition-all"
          >
            {/* 👇 इथे लोगो इमेज ॲड केली आहे 👇 */}
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-md p-1.5">
              <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
            </div>
            
            <div>
              <h4 className="text-base font-bold text-white mb-1">{skill.name}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Specializations */}
      <h3 className="text-xl font-bold text-white text-center mb-8">Specializations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {specializations.map((spec, i) => (
          <motion.div key={spec.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="bg-[#0b0f19] border border-white/10 hover:border-accent-blue/40 rounded-2xl p-6 flex flex-col justify-between transition-all">
            <div>
              <div className="text-3xl mb-4">{spec.icon}</div>
              <h4 className="text-base font-bold text-white mb-2">{spec.title}</h4>
              <p className="text-xs text-gray-400 mb-5 leading-relaxed">{spec.desc}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {spec.tags.map((t) => (<span key={t} className="text-[10px] bg-white/[0.04] border border-white/10 text-gray-300 px-2.5 py-1 rounded-md">{t}</span>))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Achievements */}
      <h3 className="text-xl font-bold text-white text-center mb-8">Achievements</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
        {[
          { icon: "🎬", title: "10+ Projects Completed", desc: "Successfully delivered over 10 video projects across various industries" },
          { icon: "⭐", title: "Happy Clients", desc: "Built strong client relationships with positive feedback and lasting partnerships" },
          { icon: "🚀", title: "8+ Months Experience", desc: "Professional video editing experience with continuous skill development" },
          { icon: "⚡", title: "Fast Turnaround", desc: "Known for delivering high-quality work within tight deadlines" },
        ].map((ach, idx) => (
          <motion.div key={idx} whileHover={{ y: -4 }} className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">{ach.icon}</div>
            <h4 className="text-sm font-bold text-white mb-2">{ach.title}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">{ach.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 4. Workflow */}
      <h3 className="text-xl font-bold text-white text-center mb-14">My Workflow</h3>
      <div className="relative max-w-4xl mx-auto mb-20">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-blue via-accent-purple to-emerald-500 hidden md:block" />
        <div className="space-y-10">
          {workflowSteps.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div key={item.step} initial={{ opacity: 0, x: isLeft ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className={`flex flex-col md:flex-row items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-5/12 bg-[#0b0f19] border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-all">
                  <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-full md:w-2/12 flex justify-center relative z-10">
                  <div className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center text-lg shadow-[0_0_20px_rgba(139,92,246,0.5)] border-4 border-[#050814]`}>{item.icon}</div>
                </div>
                <div className={`w-full md:w-5/12 text-center ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.step}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-b from-[#0e1424] to-[#080b14] border border-white/10 rounded-3xl p-12 text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-4">Open For New Projects</span>
        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Work Together?</h3>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">Let's discuss your video editing needs and create something amazing together.</p>
        <button onClick={() => setActivePage('contact')} className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 hover:bg-gray-200 transition-all cursor-pointer">Start Your Project <ArrowRight size={16} /></button>
      </div>
    </section>
  );
}