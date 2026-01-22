import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-dark-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
             <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
               <img 
                src="https://picsum.photos/800/1000?random=20" 
                alt="Studio Culture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              We redefine boundaries between <span className="text-secondary">art and function.</span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-400">
              <p>
                Founded in 2024, Kroma Creative Agency was born from a desire to break the mold of traditional digital marketing. We don't just build websites; we build ecosystems.
              </p>
              <p>
                Our team is a collective of visionary designers, meticulous developers, and strategic thinkers. We believe that good design is invisible, but great design is unforgettable.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-dark-800 pt-8">
              <div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-white">50+</p>
                <p className="text-sm text-zinc-500 mt-1">Projects</p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-white">12</p>
                <p className="text-sm text-zinc-500 mt-1">Awards</p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-white">5</p>
                <p className="text-sm text-zinc-500 mt-1">Years Exp</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;