'use client'

import React, { useEffect, useRef } from 'react';

export const BackgroundAtmosphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Drifting dust particles
    const particleCount = 35;
    const particles: {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      vx: number;
      vy: number;
      pulseSpeed: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.5,
        opacity: Math.random() * 0.35 + 0.05,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.3 - 0.05,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Render drifting dust particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = 0.15 + Math.sin(time + i) * 0.1;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 245, 245, ${Math.max(0, p.opacity)})`;
        ctx.shadowColor = 'rgba(179, 18, 23, 0.4)';
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden bg-[#050505]">
      {/* Responsive Animated Background Videos */}
      <div className="absolute inset-0">
        {/* PC Video (Desktop / Tablet) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block w-full h-full object-cover opacity-50 filter contrast-125 saturate-110"
        >
          <source src="/video/bg_pc.mp4" type="video/mp4" />
        </video>

        {/* Cell Video (Mobile) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block sm:hidden w-full h-full object-cover opacity-50 filter contrast-125 saturate-110"
        >
          <source src="/video/bg_cell.mp4" type="video/mp4" />
        </video>

        {/* Darkening Gradient Overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]/70 pointer-events-none" />
      </div>

      {/* Drifting Red Ambient Lights */}
      <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-[#B31217]/10 blur-[160px] drifting-light-1 gpu-layer" />
      <div className="absolute top-1/2 -right-40 w-[700px] h-[700px] rounded-full bg-[#B31217]/08 blur-[180px] drifting-light-2 gpu-layer" />
      <div className="absolute -bottom-40 left-1/3 w-[800px] h-[800px] rounded-full bg-[#7A0A0F]/12 blur-[200px] drifting-light-1 gpu-layer" />

      {/* Subtle Dust Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Moving Film Grain Overlay */}
      <div className="absolute -inset-[50%] w-[200%] h-[200%] film-grain-moving pointer-events-none opacity-40" />

      {/* Subtle Vignette Breathing */}
      <div className="absolute inset-0 vignette-breath pointer-events-none" />
    </div>
  );
};
