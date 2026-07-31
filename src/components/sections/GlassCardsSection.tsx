'use client'

import React from 'react';
import { motion } from 'motion/react';
import { GLASS_CARDS } from '../../data/content';

export const GlassCardsSection: React.FC = () => {
  return (
    <section id="section-glass-cards" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Background Subtle Red Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#B31217]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {GLASS_CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 hover:border-[#B31217]/50 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-12px_rgba(179,18,23,0.35)] transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden min-h-[280px] cursor-pointer gpu-layer"
            >
              {/* Top Card Tag & Number Accent */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-mono tracking-widest text-[#B31217] uppercase bg-[#B31217]/10 px-3 py-1 rounded-full border border-[#B31217]/30 group-hover:bg-[#B31217]/20 group-hover:border-[#B31217] transition-colors duration-300">
                  {card.tag}
                </span>
                <span className="font-heading font-black text-2xl text-white/20 opacity-60 group-hover:opacity-100 group-hover:text-[#B31217] group-hover:scale-110 transition-all duration-500">
                  {card.accent}
                </span>
              </div>

              {/* Card Title & Content */}
              <div>
                <h3 className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight mb-3 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-base sm:text-lg text-[#AFAFAF] font-light leading-snug group-hover:text-[#F5F5F5] transition-colors">
                  {card.description}
                </p>
              </div>

              {/* Red Underline Animates Left to Right */}
              <div className="w-full h-0.5 bg-white/5 mt-8 overflow-hidden rounded-full">
                <div className="w-0 group-hover:w-full h-full bg-[#B31217] shadow-[0_0_12px_#B31217] transition-all duration-700 ease-out"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

