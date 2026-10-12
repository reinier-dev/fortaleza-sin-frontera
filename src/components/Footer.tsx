'use client'

import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { BRAND_INFO, SCHEDULE_LOCATION, SOCIAL_CONTENT } from '../data/content';
import { SocialLinks } from './SocialLinks';

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

      {/* Social profiles */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 pt-8 border-t border-white/5 flex flex-col items-center gap-5">
        <p className="text-[11px] font-semibold text-[#AFAFAF] uppercase tracking-widest">
          {SOCIAL_CONTENT.footerHeading}
        </p>
        <SocialLinks variant="compact" />
      </div>

      {/* Web credit (extra bottom space on mobile keeps the footer clear of the floating WhatsApp button) */}
      <p className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pb-12 md:pb-0 text-center font-light text-[11px] text-[#AFAFAF]/80">
        Website designed &amp; developed by{' '}
        <a
          href="https://reinierdev.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-normal text-[#AFAFAF] hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:underline underline-offset-4 transition-colors duration-300"
        >
          ReinierDev
        </a>
      </p>
    </footer>
  );
};
