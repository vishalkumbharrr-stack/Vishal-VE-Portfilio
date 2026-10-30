import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/data';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory || p.tags.includes(activeCategory));

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleCategoryChange = (catName) => {
    setActiveCategory(catName);
    setVisibleCount(6);
  };

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
      <SectionHeading
        title="My Video"
        highlight="Projects"
        subtitle="From smooth transitions to precise audio syncing and dynamic animations — I focus on making your content not just polished, but powerful."
      />

      <div className="flex flex-wrap justify-center gap-2.5 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.name;
          return (
            <motion.button
              key={cat.name}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleCategoryChange(cat.name)}
              className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                  : 'bg-[#0b0f19] border border-white/10 text-gray-400 hover:text-white hover:border-white/25'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                isActive ? 'bg-black/30 text-white' : 'bg-white/5 text-gray-400'
              }`}>
                {cat.count}
              </span>
            </motion.button>
          );
        })}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visibleCount < filteredProjects.length && (
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="bg-white text-black px-7 py-3 rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:bg-gray-200 transition-all cursor-pointer"
          >
            Load More Projects <ArrowRight size={15} />
          </motion.button>
        </div>
      )}
    </section>
  );
}