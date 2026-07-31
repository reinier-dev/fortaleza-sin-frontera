'use client'

import React from 'react';
import { motion } from 'motion/react';
import { WHO_IS_THIS_FOR } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

interface WhoIsThisForSectionProps {
  onOpenBooking: () => void;
}

export const WhoIsThisForSection: React.FC<WhoIsThisForSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 md:py-36 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-semibold text-[#B31217] uppercase tracking-widest block mb-3">
              ¿PARA QUÉ Y PARA QUIÉN?
            </span>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#F5F5F5] uppercase tracking-tight">
              ¿Para quién es esto?
            </h2>
          </div>

          <p className="text-base text-[#AFAFAF] max-w-md font-light">
            Fortaleza Sin Fronteras no es un espacio competitivo. Es un punto de encuentro para reencontrarte con la salud y el movimiento.
          </p>
        </div>

        {/* Five Clean Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHO_IS_THIS_FOR.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={onOpenBooking}
              className={`group cursor-pointer rounded-3xl glass-panel p-8 border border-white/10 hover:border-[#B31217]/50 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-12px_rgba(179,18,23,0.35)] flex flex-col justify-between transition-all duration-500 ease-out gpu-layer overflow-hidden ${
                index === 0 ? 'lg:col-span-2 bg-gradient-to-r from-white/5 to-[#B31217]/10' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#B31217] font-bold opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    0{item.id}
                  </span>
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#B31217] text-[#AFAFAF] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(179,18,23,0)] group-hover:shadow-[0_0_20px_rgba(179,18,23,0.6)]">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F5F5F5] mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#AFAFAF] font-light leading-relaxed group-hover:text-[#F5F5F5] transition-colors">
                  {item.detail}
                </p>
              </div>

              <div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#AFAFAF] group-hover:text-[#B31217] font-medium transition-colors">
                  <span>Tu lugar te espera</span>
                  <span>Reservar gratis →</span>
                </div>

                {/* Animated Red Underline */}
                <div className="w-full h-0.5 bg-white/5 mt-3 overflow-hidden rounded-full">
                  <div className="w-0 group-hover:w-full h-full bg-[#B31217] shadow-[0_0_12px_#B31217] transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
