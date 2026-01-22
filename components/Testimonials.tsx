import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/dummy';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-16 text-center">
          Trusted by Industry Leaders
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-900 p-8 rounded-2xl border border-dark-800 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-dark-800" />
              
              <blockquote className="text-zinc-300 text-lg mb-8 relative z-10">
                "{item.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border border-dark-800"
                />
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-sm text-zinc-500">{item.role}, {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;