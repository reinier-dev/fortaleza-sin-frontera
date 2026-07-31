'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const finishLoading = () => {
    setLoading(false);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    // Fallback timer in case video takes longer or onEnded is delayed
    const timer = setTimeout(() => {
      finishLoading();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden"
          onClick={finishLoading}
        >
          {/* Animated Logo Video Presentation */}
          <div className="relative w-full h-full max-w-2xl max-h-[85vh] flex items-center justify-center px-4 bg-black">
            {/* PC Video (Desktop / Tablet) */}
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              onEnded={finishLoading}
              className="hidden sm:block w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(179,18,23,0.6)] mix-blend-screen"
            >
              <source src="/video/logo_presentacion.mp4" type="video/mp4" />
            </video>

            {/* Mobile Video (Cell) */}
            <video
              autoPlay
              muted
              playsInline
              onEnded={finishLoading}
              className="block sm:hidden w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(179,18,23,0.6)] mix-blend-screen"
            >
              <source src="/video/logo_presentacion_cell.mp4" type="video/mp4" />
            </video>

            {/* Subtle glow effect behind video */}
            <div className="absolute inset-0 bg-[#B31217]/10 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse"></div>
          </div>

          {/* Optional skip hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-6 text-[10px] text-[#AFAFAF] tracking-[0.2em] uppercase font-mono pointer-events-none"
          >
            FORTALEZA SIN FRONTERAS
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

