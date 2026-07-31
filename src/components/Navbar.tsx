'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenSchedule }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-2xl py-2.5 sm:py-3 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-3 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-12 flex items-center justify-between gap-2">
        {/* Brand Logo / Title - Scales cleanly on mobile and desktop */}
        <a 
          href="#" 
          className={`flex items-center gap-2 sm:gap-3.5 group transition-transform duration-500 ease-out origin-left min-w-0 shrink-0 ${
            scrolled ? 'scale-[0.95] sm:scale-[0.92]' : 'scale-100'
          }`}
        >
          <Image
            src="/logo_boxeo.png"
            alt="Fortaleza Sin Fronteras Logo"
            width={48}
            height={48}
            className="h-9 sm:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(179,18,23,0.5)] group-hover:scale-105 transition-transform duration-300 shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold tracking-wider sm:tracking-widest text-xs sm:text-base text-[#F5F5F5] uppercase group-hover:text-white transition-colors leading-none">
              FORTALEZA
            </span>
            <span className="text-[9px] sm:text-[11px] text-[#AFAFAF] tracking-wider sm:tracking-widest uppercase mt-0.5 font-medium leading-none">
              SIN FRONTERAS
            </span>
          </div>
        </a>

        {/* Center / Right actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Quick Schedule button */}
          <button
            onClick={onOpenSchedule}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-[#AFAFAF] hover:text-[#F5F5F5] transition-colors"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B31217]" />
            <span>Horarios</span>
          </button>

          {/* Primary Navbar CTA - Adjusted for seamless fit on mobile screens */}
          <button
            onClick={onOpenBooking}
            className={`relative group overflow-hidden px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#B31217] text-[#F5F5F5] text-[11px] sm:text-xs font-semibold tracking-wide uppercase transition-all duration-500 ease-out hover:bg-[#7A0A0F] hover:scale-105 active:scale-95 flex items-center gap-1.5 sm:gap-2 shrink-0 ${
              scrolled
                ? 'shadow-[0_0_25px_rgba(179,18,23,0.85)] border border-white/20'
                : 'shadow-[0_0_15px_rgba(179,18,23,0.5)]'
            }`}
          >
            <span className="whitespace-nowrap">Clase Gratis</span>
            <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300 shrink-0" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

