import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-950 border-t border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-dark-900 to-black border border-dark-800 p-8 sm:p-16 lg:p-24 text-center overflow-hidden">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Have a visionary idea?
              <br />
              <span className="text-zinc-500">Let's build it together.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              We are currently accepting new projects for Q4. Reach out today to schedule a discovery call with our lead strategists.
            </p>
            
            <a 
              href="mailto:hello@kroma.agency"
              className="inline-block px-10 py-5 bg-white text-dark-950 font-bold text-lg rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-xl shadow-white/5"
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;