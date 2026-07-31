'use client'

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { FINAL_CTA, BRAND_INFO } from '../../data/content';

interface FinalCTASectionProps {
  onOpenBooking: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenBooking }) => {
  const handleJoinGroup = () => {
    // Open WhatsApp Group or pre-filled WhatsApp message
    const msg = encodeURIComponent('Hola! Quisiera unirme al grupo oficial de WhatsApp de Fortaleza Sin Fronteras.');
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative py-28 md:py-40 bg-[#050505] overflow-hidden">
      {/* Background Slowly Glowing Radial Atmosphere */}
      <div className="absolute inset-0 bg-radial from-[#B31217]/25 via-[#050505]/80 to-[#050505] pointer-events-none drifting-light-1"></div>

      {/* Ambient Red Glow Spotlight Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-[#B31217]/20 rounded-full blur-[200px] pointer-events-none drifting-light-2"></div>

      {/* Film Grain */}
      <div className="absolute inset-0 film-grain-moving pointer-events-none opacity-30"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Subtle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#B31217]/30 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B31217] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F5F5F5]">
            TU PRIMER PASO COMIENZA AHORA
          </span>
        </motion.div>

        {/* Large Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5F5] uppercase tracking-tight leading-none mb-8 max-w-4xl mx-auto gpu-layer"
        >
          {FINAL_CTA.headline}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-[#AFAFAF] max-w-2xl mx-auto font-light leading-relaxed mb-12 gpu-layer"
        >
          {FINAL_CTA.subtext}
        </motion.p>

        {/* Large Premium Buttons with 8s Heartbeat Pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
        >
          {/* Primary CTA - Pulses once every 8 seconds */}
          <button
            onClick={handleJoinGroup}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#B31217] hover:bg-[#7A0A0F] text-white font-heading font-extrabold text-base sm:text-lg tracking-widest uppercase transition-all duration-300 shadow-[0_15px_50px_rgba(179,18,23,0.7)] hover:shadow-[0_20px_60px_rgba(179,18,23,0.9)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group border border-white/10 animate-pulse-8s cursor-pointer"
          >
            <span>{FINAL_CTA.buttonText}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-5 rounded-full glass-panel text-[#F5F5F5] hover:text-white font-heading font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/10 border border-white/15 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Reservar Clase Gratis
          </button>
        </motion.div>

        {/* Trust Markers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-[#AFAFAF]"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B31217]" />
            <span>Sin pagos adelantados</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B31217]" />
            <span>Ambiente 100% libre de juicios</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B31217]" />
            <span>Para todas las edades y niveles</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
