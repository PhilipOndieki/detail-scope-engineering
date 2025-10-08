import { useEffect, useRef, useState } from 'react';

const ScrollBearing = () => {
  const bearingRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastScrollRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastScrollTime;
      const deltaScroll = currentScroll - lastScrollRef.current;

      velocityRef.current = (deltaScroll / deltaTime) * 10;

      lastScrollRef.current = currentScroll;
      lastScrollTime = currentTime;
    };

    const animate = () => {
      if (Math.abs(velocityRef.current) > 0.01) {
        rotationRef.current += velocityRef.current;

        velocityRef.current *= 0.92;

        if (bearingRef.current) {
          bearingRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="hidden sm:block fixed bottom-6 left-6 z-10 pointer-events-none">
      <div
        ref={bearingRef}
        className="relative w-8 h-8 transition-transform will-change-transform"
        style={{ transformOrigin: 'center' }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 2px 6px rgba(220, 38, 38, 0.4))' }}
        >
          <defs>
            <radialGradient id="outerRing" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#991B1B" />
              <stop offset="100%" stopColor="#450A0A" />
            </radialGradient>
            <radialGradient id="innerRing" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#7F1D1D" />
            </radialGradient>
            <radialGradient id="center" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#FCA5A5" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </radialGradient>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="48"
            fill="url(#outerRing)"
            stroke="#450A0A"
            strokeWidth="1.5"
          />

          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#7F1D1D"
            strokeWidth="1.5"
          />

          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const radian = (angle * Math.PI) / 180;
            const x = 50 + 33 * Math.cos(radian);
            const y = 50 + 33 * Math.sin(radian);
            return (
              <circle
                key={angle}
                cx={x}
                cy={y}
                r="4"
                fill="url(#innerRing)"
                stroke="#450A0A"
                strokeWidth="0.5"
              />
            );
          })}

          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="#991B1B"
            strokeWidth="1"
          />

          <circle
            cx="50"
            cy="50"
            r="18"
            fill="url(#center)"
            stroke="#450A0A"
            strokeWidth="1"
          />

          <circle
            cx="50"
            cy="50"
            r="6"
            fill="#7F1D1D"
          />

          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <line
              key={angle}
              x1="50"
              y1="50"
              x2={50 + 15 * Math.cos((angle * Math.PI) / 180)}
              y2={50 + 15 * Math.sin((angle * Math.PI) / 180)}
              stroke="#7F1D1D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default ScrollBearing;
