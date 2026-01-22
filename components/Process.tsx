import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/dummy';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">Our Methodology</h2>
          <p className="text-zinc-400 text-lg">We don't believe in guesswork. Our proven process ensures every project is delivered on time, within budget, and above expectation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-dark-800 via-primary/50 to-dark-800 z-0" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-dark-950 border border-dark-800 flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-xl shadow-black/50">
                <span className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
                  {step.id}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center lg:text-left">{step.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-center lg:text-left text-sm sm:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;