'use client'

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Clock, MessageSquare, ExternalLink, Navigation } from 'lucide-react';
import { SCHEDULE_LOCATION, BRAND_INFO } from '../../data/content';

export const ScheduleLocationSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent(
      'Hola! Quiero confirmar información de horarios y ubicación en Parque Medalla de Honor.'
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative py-24 md:py-36 bg-transparent overflow-hidden border-t border-white/5">
      {/* Ambient Red Glow Bottom */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[350px] bg-[#B31217]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-semibold text-[#B31217] uppercase tracking-widest block mb-3">
            HORARIOS & UBICACIÓN
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#F5F5F5] uppercase tracking-tight mb-4">
            Punto de Encuentro
          </h2>
          <p className="text-base sm:text-lg text-[#AFAFAF] font-light">
            Entrenamos al aire libre, aprovechando la luz natural y el espacio verde.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl glass-panel p-8 border border-white/10 glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B31217]/20 border border-[#B31217]/40 flex items-center justify-center text-[#B31217] mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#AFAFAF]">
                UBICACIÓN
              </span>

              <h3 className="font-heading font-extrabold text-2xl text-[#F5F5F5] mt-2 mb-2">
                {SCHEDULE_LOCATION.locationTitle}
              </h3>

              <p className="text-xs text-[#AFAFAF] leading-relaxed">
                {SCHEDULE_LOCATION.locationSubtitle}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#F5F5F5]">
              <span className="flex items-center gap-1.5 text-[#B31217]">
                <Navigation className="w-3.5 h-3.5" />
                Área de pasto principal
              </span>
            </div>
          </motion.div>

          {/* Card 2: Days */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl glass-panel p-8 border border-white/10 glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B31217]/20 border border-[#B31217]/40 flex items-center justify-center text-[#B31217] mb-6">
                <Calendar className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#AFAFAF]">
                DÍAS
              </span>

              <h3 className="font-heading font-extrabold text-2xl text-[#F5F5F5] mt-2 mb-2">
                {SCHEDULE_LOCATION.days}
              </h3>

              <p className="text-xs text-[#AFAFAF] leading-relaxed">
                2 días por semana diseñados para dar descanso adecuado y progreso sostenido.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-[#AFAFAF]">
              Llegar 5 a 10 minutos antes para estirar
            </div>
          </motion.div>

          {/* Card 3: Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-3xl glass-panel p-8 border border-white/10 glass-panel-hover flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B31217]/20 border border-[#B31217]/40 flex items-center justify-center text-[#B31217] mb-6">
                <Clock className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#AFAFAF]">
                HORARIO
              </span>

              <h3 className="font-heading font-extrabold text-2xl text-[#F5F5F5] mt-2 mb-2">
                {SCHEDULE_LOCATION.timeSlots.map((slot) => (
                  <span key={slot} className="block">{slot}</span>
                ))}
              </h3>

              <p className="text-xs text-[#AFAFAF] leading-relaxed">
                Sesión de 60 minutos ideal para empezar la mañana con energía renovada.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-emerald-400 font-medium">
              ● Sesión confirmada activa
            </div>
          </motion.div>

        </div>

        {/* Large WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#25D366] hover:bg-emerald-600 text-white font-heading font-bold text-base tracking-wide transition-all duration-300 shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_50px_rgba(37,211,102,0.6)] active:scale-95 inline-flex items-center justify-center gap-3"
          >
            <MessageSquare className="w-5 h-5 fill-white stroke-none" />
            <span>{SCHEDULE_LOCATION.whatsappCTA}</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
