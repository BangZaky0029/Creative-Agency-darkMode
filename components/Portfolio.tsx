import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/dummy';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-zinc-400 text-lg max-w-md">A showcase of our most impactful collaborations.</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`group relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-dark-900 aspect-[4/3]">
                <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 mt-1">{project.category}</p>
                </div>
                <span className="text-zinc-600 font-mono text-sm border border-dark-800 px-3 py-1 rounded-full">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
           <a href="#" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-white hover:border-primary pb-1">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;