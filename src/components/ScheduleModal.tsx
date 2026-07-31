'use client'

import React from 'react';
import Image from 'next/image';
import { X, MapPin, Calendar, Clock, CheckCircle2, Navigation } from 'lucide-react';
import { SCHEDULE_LOCATION, BRAND_INFO } from '../data/content';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#AFAFAF] hover:text-[#F5F5F5] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B31217]">
            UBICACIÓN & CRONOGRAMA
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F5] mt-1">
            Entrenamientos al aire libre
          </h3>
        </div>

        {/* Location Banner */}
        <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 mb-6 group">
          <Image
            src={SCHEDULE_LOCATION.mapImage}
            alt="Parque Medalla de Honor"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
            sizes="(max-width: 640px) 100vw, 574px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent p-5 flex flex-col justify-end">
            <div className="flex items-center gap-2 text-[#B31217] font-semibold text-xs mb-1">
              <MapPin className="w-4 h-4" />
              <span>Punto de Encuentro Oficial</span>
            </div>
            <h4 className="font-heading text-lg font-bold text-white">
              {SCHEDULE_LOCATION.locationTitle}
            </h4>
            <p className="text-xs text-[#AFAFAF]">{SCHEDULE_LOCATION.locationSubtitle}</p>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#B31217]/20 text-[#B31217]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-[#AFAFAF] uppercase tracking-wider font-medium">Días de Entrenamiento</p>
              <p className="text-sm font-semibold text-[#F5F5F5] mt-0.5">{SCHEDULE_LOCATION.days}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#B31217]/20 text-[#B31217]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-[#AFAFAF] uppercase tracking-wider font-medium">Horario Puntual</p>
              <p className="text-sm font-semibold text-[#F5F5F5] mt-0.5">{SCHEDULE_LOCATION.time}</p>
              <p className="text-[10px] text-[#AFAFAF]">(Llegar 5 min antes)</p>
            </div>
          </div>
        </div>

        {/* Session Structure */}
        <div className="space-y-3 mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
          <h5 className="text-xs font-semibold text-[#F5F5F5] uppercase tracking-wider mb-2">
            ¿Cómo es una sesión típica? (60 minutos)
          </h5>
          
          <div className="flex items-start gap-3 text-xs text-[#AFAFAF]">
            <CheckCircle2 className="w-4 h-4 text-[#B31217] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">10 min — Activación Movilidad:</strong> Calentamiento articular progresivo sin impacto brusco.
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs text-[#AFAFAF]">
            <CheckCircle2 className="w-4 h-4 text-[#B31217] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">40 min — Trabajo Funcional Adaptable:</strong> Ejercicios corporales con opciones de intensidad según tu nivel personal.
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs text-[#AFAFAF]">
            <CheckCircle2 className="w-4 h-4 text-[#B31217] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">10 min — Estiramiento & Cierre:</strong> Respiración guiada y conversación en comunidad.
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="py-3.5 px-4 rounded-xl bg-[#B31217] hover:bg-[#7A0A0F] text-white font-semibold text-xs transition-all duration-300 shadow-[0_10px_25px_rgba(179,18,23,0.4)] text-center"
          >
            Reservar Mi Lugar
          </button>

          <a
            href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent('Hola, me gustaría la ubicación exacta en GPS para llegar a la clase en Parque Medalla de Honor.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-[#F5F5F5] font-semibold text-xs transition-all duration-300 text-center flex items-center justify-center gap-2 border border-white/10"
          >
            <Navigation className="w-3.5 h-3.5 text-[#B31217]" />
            <span>Ubicación GPS por WA</span>
          </a>
        </div>
      </div>
    </div>
  );
};
