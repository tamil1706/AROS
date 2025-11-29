import React, { useEffect, useRef } from 'react';

export const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Configuration for "Smoke" particles
    // We create large, soft orbs that move slowly to simulate nebula/smoke
    const particleCount = 6; 
    
    // Brand colors with very low opacity for blending
    const colors = [
      'rgba(14, 165, 233, 0.18)', // brand-500 (Sky Blue)
      'rgba(124, 58, 237, 0.18)', // accent-500 (Violet)
      'rgba(56, 189, 248, 0.15)', // brand-400 (Light Blue)
      'rgba(76, 29, 149, 0.15)',  // Deep Purple
      'rgba(2, 132, 199, 0.15)',  // Brand darker
    ];

    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      sinOffset: number;
      growthSpeed: number;
    }

    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 300 + 200, // Large radius (200-500px)
        vx: (Math.random() - 0.5) * 0.2,   // Very slow velocity
        vy: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        sinOffset: Math.random() * Math.PI * 2,
        growthSpeed: (Math.random() * 0.002) + 0.001,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Deep dark background base
      ctx.fillStyle = '#020617'; // slate-950
      ctx.fillRect(0, 0, width, height);

      // Draw each "smoke" puff
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Gentle undulating size (breathing effect)
        p.sinOffset += p.growthSpeed;
        const pulse = Math.sin(p.sinOffset) * 60; 

        // Screen wrap
        if (p.x < -p.radius * 2) p.x = width + p.radius;
        if (p.x > width + p.radius * 2) p.x = -p.radius;
        if (p.y < -p.radius * 2) p.y = height + p.radius;
        if (p.y > height + p.radius * 2) p.y = -p.radius;

        const currentRadius = Math.max(0, p.radius + pulse);

        // Create radial gradient for soft edges
        // This is expensive but fine for low particle count
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0, 
          p.x, p.y, currentRadius
        );
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(0.5, p.color.replace('0.18', '0.05').replace('0.15', '0.05')); 
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none -z-50"
      style={{ filter: 'blur(80px)' }} // Extreme blur to merge shapes into "smoke"
    />
  );
};