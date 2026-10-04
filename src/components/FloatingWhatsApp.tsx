'use client'

import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface FloatingWhatsAppProps {
  onOpenBookingModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBookingModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState(
    'Hola! Quisiera información sobre la clase gratis de prueba en Fortaleza Sin Fronteras.'
  );

  const handleSend = () => {
    const encoded = encodeURIComponent(customMsg);
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-2xl glass-panel p-5 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7A0A0F] to-[#B31217] flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(179,18,23,0.5)]">
                  FSF
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#050505]"></div>
              </div>
              <div>
                <h4 className="font-heading text-sm font-semibold text-[#F5F5F5]">
                  Fortaleza Sin Fronteras
                </h4>
                <p className="text-[11px] text-[#AFAFAF] flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Responde en minutos
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#AFAFAF] hover:text-[#F5F5F5] p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white/5 p-3 rounded-xl mb-4 border border-white/5 text-xs text-[#AFAFAF] leading-relaxed">
            <p className="text-[#F5F5F5] font-medium mb-1">💬 ¡Hola! Estamos listos para recibirte.</p>
            <p>Escríbenos directamente para resolver dudas o agendar tu clase de bienvenida en Parque Medalla de Honor.</p>
          </div>

          {/* Quick options */}
          <div className="space-y-2 mb-4">
            <button
              onClick={() => {
                setCustomMsg('Hola! Quiero reservar mi clase gratis de prueba este Sábado / Domingo.');
              }}
              className="w-full text-left text-xs px-3 py-2 rounded-lg bg-white/5 hover:bg-[#B31217]/20 hover:border-[#B31217]/40 border border-white/5 text-[#F5F5F5] transition-all duration-200 flex items-center justify-between group"
            >
              <span>🎟️ Reservar clase gratis</span>
              <Sparkles className="w-3.5 h-3.5 text-[#B31217] group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={() => {
                setCustomMsg('Hola! ¿En qué lugar exacto del Parque Medalla de Honor entrenan?');
              }}
              className="w-full text-left text-xs px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-[#AFAFAF] hover:text-[#F5F5F5] transition-all duration-200"
            >
              📍 Punto de encuentro en el parque
            </button>
          </div>

          {/* Message input */}
          <div className="relative">
            <textarea
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              rows={2}
              className="w-full bg-[#050505] border border-white/15 rounded-xl p-2.5 text-xs text-[#F5F5F5] placeholder-[#AFAFAF]/50 focus:outline-none focus:border-[#B31217] transition-colors resize-none pr-10"
              placeholder="Escribe tu mensaje..."
            />
            <button
              onClick={handleSend}
              className="absolute right-2 bottom-2.5 p-2 rounded-lg bg-[#B31217] hover:bg-[#7A0A0F] text-white transition-all duration-200 active:scale-90"
              title="Enviar por WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-3 text-center">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBookingModal();
              }}
              className="text-[11px] text-[#AFAFAF] hover:text-[#F5F5F5] underline underline-offset-4"
            >
              O completa el formulario web interactivo →
            </button>
          </div>
        </div>
      )}

      {/* Main Custom Branded Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-[#050505] border border-[#B31217]/40 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:bg-[#B31217] hover:border-[#B31217] hover:shadow-[0_0_30px_rgba(179,18,23,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#B31217] border-2 border-[#050505] rounded-full animate-bounce"></span>
        <MessageCircle className="w-6 h-6 text-white fill-white group-hover:scale-110 transition-transform duration-300" />
        
        {/* Hover Label */}
        <span className="absolute right-full mr-3 whitespace-nowrap px-3.5 py-1.5 rounded-lg bg-[#050505]/95 border border-[#B31217]/30 text-xs font-medium text-[#F5F5F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-2xl">
          Escríbenos por WhatsApp
        </span>
      </button>
    </div>
  );
};
