'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  drift: number;
}

const COLORS = [
  'rgba(201,145,138,0.55)',
  'rgba(245,225,208,0.45)',
  'rgba(212,168,158,0.5)',
  'rgba(255,255,255,0.2)',
  'rgba(188,168,159,0.4)',
];

function getParticleSize(): number {
  const r = Math.random();
  if (r < 0.15) return 3.5;
  if (r < 0.45) return 2;
  return 1.5;
}

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const ps: Particle[] = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 10,
      size: getParticleSize(),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      drift: (Math.random() - 0.5) * 50,
    }));
    setParticles(ps);
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={
            {
              left: `${p.x}%`,
              bottom: '-4px',
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              animation: `floatUp ${p.duration}s ${p.delay}s ease-in infinite`,
              '--drift': `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
