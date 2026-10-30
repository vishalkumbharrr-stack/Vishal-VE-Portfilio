import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group bg-[#0b0f19] rounded-2xl overflow-hidden border border-white/10 hover:border-accent-blue/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)]"
    >
      <div>
        <div className="relative aspect-video bg-gray-900 overflow-hidden m-3 rounded-xl">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 ease-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
            <motion.div
              whileHover={{ scale: 1.12 }}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/25 group-hover:bg-accent-blue group-hover:border-accent-blue transition-all cursor-pointer shadow-lg"
            >
              <Play size={18} className="text-white ml-0.5" fill="white" />
            </motion.div>
          </div>
          <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px] text-white font-semibold">
            {project.duration}
          </div>
        </div>

        <div className="px-5 pt-2 pb-4">
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-medium bg-white/[0.04] border border-white/10 text-gray-400 px-2.5 py-0.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-5 py-3.5 border-t border-white/[0.06] flex justify-between items-center bg-white/[0.01]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center text-[11px] font-bold text-white">
            {project.client[0]}
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-200 leading-none">{project.client}</p>
            <p className="text-[10px] text-gray-500 mt-0.5">{project.date}</p>
          </div>
        </div>
        <button className="text-xs bg-white/[0.06] hover:bg-white hover:text-black text-gray-200 font-medium px-3.5 py-1.5 rounded-lg border border-white/10 transition-all cursor-pointer">
          Details
        </button>
      </div>
    </motion.div>
  );
}