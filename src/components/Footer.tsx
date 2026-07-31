'use client'

import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { BRAND_INFO, SCHEDULE_LOCATION } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#050505] border-t border-white/10 py-12 md:py-16 text-[#AFAFAF] text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo_boxeo.png"
              alt="Fortaleza Sin Fronteras Logo"
              width={36}
              height={36}
              className="h-9 w-auto object-contain drop-shadow-[0_0_10px_rgba(179,18,23,0.5)]"
            />
            <span className="font-heading font-extrabold text-sm text-[#F5F5F5] uppercase tracking-wider">
              FORTALEZA SIN FRONTERAS
            </span>
          </div>
          <p className="text-[#AFAFAF] font-light max-w-sm">
            {BRAND_INFO.tagline}
          </p>
        </div>

        {/* Location & Schedule summary */}
        <div className="flex items-center gap-2 text-xs text-[#AFAFAF] bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-[#B31217]" />
          <span>{SCHEDULE_LOCATION.locationTitle} · {SCHEDULE_LOCATION.days} {SCHEDULE_LOCATION.time}</span>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right font-light text-[11px] text-[#AFAFAF]/80">
          <p>© {new Date().getFullYear()} Fortaleza Sin Fronteras.</p>
          <p className="mt-1 flex items-center justify-center md:justify-end gap-1">
            <span>Comunidad, salud y respeto.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
