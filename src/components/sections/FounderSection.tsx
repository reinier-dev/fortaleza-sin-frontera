'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { FOUNDER_CONTENT } from '../../data/content';

export const FounderSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-36 bg-transparent overflow-hidden border-t border-b border-white/5">
      {/* Background Ambient Lighting */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#B31217]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Cinematic Portrait with slow zoom, ambient light & soft vignette */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group gpu-layer">
              {/* Moving Ambient Red Light */}
              <div className="absolute inset-0 bg-radial from-[#B31217]/30 via-transparent to-transparent opacity-60 drifting-light-1 pointer-events-none z-10"></div>

              {/* Image with slow zoom */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-[480px] sm:h-[560px] group-hover:scale-105 transition-all duration-1000"
              >
                <Image
                  src={FOUNDER_CONTENT.imageSource}
                  alt="Fundador - Del ring a la comunidad"
                  fill
                  className="object-cover object-top filter contrast-105"
                  sizes="(max-width: 1024px) 100vw, 41vw"
                />
              </motion.div>
              
              {/* Soft Vignette Overlay */}
              <div className="absolute inset-0 shadow-[inset_0_0_90px_rgba(5,5,5,0.9)] pointer-events-none z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 z-10"></div>

              {/* Founder Tag on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 z-20 shadow-2xl">
                <p className="font-heading font-extrabold text-lg text-[#F5F5F5]">
                  {FOUNDER_CONTENT.name}
                </p>
                <p className="text-xs text-[#B31217] uppercase tracking-widest font-semibold">
                  {FOUNDER_CONTENT.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Large Headline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B31217]/10 border border-[#B31217]/30 text-[11px] font-semibold text-[#B31217] uppercase tracking-widest mb-6 w-fit">
              HISTORIA DEL FUNDADOR
            </div>

            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#F5F5F5] uppercase tracking-tight mb-8 leading-none">
              {FOUNDER_CONTENT.headline}
            </h2>

            <p className="text-xl sm:text-2xl text-[#AFAFAF] font-light leading-relaxed mb-8">
              "{FOUNDER_CONTENT.body}"
            </p>

            {/* Quote box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative">
              <Quote className="w-8 h-8 text-[#B31217]/30 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-[#F5F5F5] italic font-serif leading-relaxed">
                "{FOUNDER_CONTENT.quote}"
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
