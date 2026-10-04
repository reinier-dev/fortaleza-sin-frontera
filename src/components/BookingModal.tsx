'use client'

import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO, SCHEDULE_LOCATION } from '../data/content';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedDay, setSelectedDay] = useState(SCHEDULE_LOCATION.dayList[0]);
  const [selectedTime, setSelectedTime] = useState(SCHEDULE_LOCATION.timeSlots[0]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#B31217', '#7A0A0F', '#F5F5F5'],
    });

    setIsSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const msg = BRAND_INFO.whatsappBookingMessage(name || 'Amigo/a', selectedDay, selectedTime);
    const url = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel p-6 sm:p-8 border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Ambient Red Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#B31217]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#AFAFAF] hover:text-[#F5F5F5] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B31217]/20 border border-[#B31217]/40 text-[11px] font-semibold uppercase tracking-widest text-[#F5F5F5] mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B31217]" />
              100% Gratis · Sin Compromiso
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-2">
              Reserva tu primera clase
            </h3>
            <p className="text-xs sm:text-sm text-[#AFAFAF] mb-6 leading-relaxed">
              Sin exámenes, sin juicios y sin necesidad de condición previa. Ven a probar la energía del grupo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Day selection */}
              <div>
                <label className="block text-xs font-medium text-[#AFAFAF] uppercase tracking-wider mb-2">
                  Selecciona el día que prefieres
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {SCHEDULE_LOCATION.dayList.flatMap((day) =>
                    SCHEDULE_LOCATION.timeSlots.map((time) => (
                    <button
                      key={`${day}-${time}`}
                      type="button"
                      onClick={() => {
                        setSelectedDay(day);
                        setSelectedTime(time);
                      }}
                      className={`py-3 px-2 rounded-xl text-xs font-semibold border transition-all duration-300 flex flex-col items-center gap-1 ${
                        selectedDay === day && selectedTime === time
                          ? 'bg-[#B31217] border-[#B31217] text-white shadow-[0_0_20px_rgba(179,18,23,0.4)]'
                          : 'bg-white/5 border-white/10 text-[#AFAFAF] hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span>{day}</span>
                      <span className="text-[10px] opacity-80 font-normal">{time}</span>
                    </button>
                    ))
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-[#AFAFAF] uppercase tracking-wider mb-2">
                  Tu Nombre
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Carlos Mendoza"
                  className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#AFAFAF]/40 focus:outline-none focus:border-[#B31217] transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-medium text-[#AFAFAF] uppercase tracking-wider mb-2">
                  WhatsApp / Teléfono
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. +52 55 1234 5678"
                  className="w-full bg-[#050505] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F5F5F5] placeholder-[#AFAFAF]/40 focus:outline-none focus:border-[#B31217] transition-colors"
                />
              </div>

              {/* Session summary badge */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#AFAFAF] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B31217]" />
                  <span>{SCHEDULE_LOCATION.locationTitle}</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[#F5F5F5]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedTime}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#B31217] hover:bg-[#7A0A0F] text-white font-heading font-semibold tracking-wide text-sm transition-all duration-300 shadow-[0_10px_30px_rgba(179,18,23,0.4)] flex items-center justify-center gap-2 group"
              >
                <span>Confirmar Reserva Gratis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#B31217]/20 border border-[#B31217] flex items-center justify-center mx-auto mb-4 text-[#B31217]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="font-heading text-2xl font-bold text-[#F5F5F5] mb-2">
              ¡Lugar Reservado!
            </h3>
            <p className="text-sm text-[#AFAFAF] mb-6 max-w-sm mx-auto leading-relaxed">
              Te esperamos el <strong className="text-white">{selectedDay} de {selectedTime}</strong> en <strong className="text-white">{SCHEDULE_LOCATION.locationTitle}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-left text-xs space-y-2 text-[#AFAFAF]">
              <div className="flex justify-between">
                <span>Nombre:</span>
                <span className="text-[#F5F5F5] font-semibold">{name}</span>
              </div>
              <div className="flex justify-between">
                <span>Día seleccionado:</span>
                <span className="text-[#F5F5F5] font-semibold">{selectedDay} · {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Costo:</span>
                <span className="text-emerald-400 font-semibold">$0 (Clase de Regalo)</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-emerald-600 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enviar Confirmación por WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 text-xs text-[#AFAFAF] hover:text-[#F5F5F5] transition-colors"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
