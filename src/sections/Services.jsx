import { motion } from 'framer-motion';
import { services } from '../data/data';
import SectionHeading from '../components/ui/SectionHeading';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0b0f19]/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="What I Can Do" 
          highlight="for You" 
          subtitle="If you're looking for someone who blends creativity with technical skill, communicates clearly, and truly cares about results."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.5)" }}
              className="bg-[#0b0f19] border border-white/10 rounded-2xl p-8 cursor-default group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-4xl mb-4 relative z-10 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 relative z-10 group-hover:text-accent-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}