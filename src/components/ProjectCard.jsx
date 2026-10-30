import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ProjectCard({ project, onPlay }) {
  const isVertical = project.type === 'vertical';

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onClick={() => project.videoUrl && onPlay(project.videoUrl)}
      className="group bg-[#0b0f19] rounded-2xl overflow-hidden border border-white/10 hover:border-accent-blue/50 transition-all duration-300 shadow-lg hover:shadow-[0_12px_35px_rgba(59,130,246,0.15)] cursor-pointer flex flex-col"
    >
      <div className={`relative ${isVertical ? 'aspect-[9/16]' : 'aspect-video'} bg-[#131826] w-full overflow-hidden`}>
        <img
          src={project.thumbnail}
          alt={project.title}
          onError={(e) => { e.target.style.display = 'none'; }}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 ease-out"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/40 transition-colors z-10">
          <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/25 group-hover:bg-accent-blue group-hover:border-accent-blue transition-all shadow-lg group-hover:scale-110">
            <Play size={22} className="text-white ml-1" fill="white" />
          </div>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] text-white font-semibold z-20">
          {project.duration}
        </div>
      </div>

      <div className="p-4 bg-[#0b0f19] border-t border-white/[0.05]">
        <h3 className="text-sm font-bold text-white group-hover:text-accent-blue transition-colors line-clamp-1">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}