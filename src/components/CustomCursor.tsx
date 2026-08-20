import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Update mouse position CSS variables for background radial glow effects
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

      // Check hovered element context
      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest('a, button, [data-cursor]');
        if (clickable) {
          setIsHovered(true);
          const customText = clickable.getAttribute('data-cursor');
          setCursorText(customText || '');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Sky-Blue Glowing Halo Ring */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? 'w-20 h-20 bg-sky-400/20 border border-sky-400/50 backdrop-blur-[2px] shadow-[0_0_25px_rgba(56,189,248,0.4)]'
            : 'w-10 h-10 border border-sky-300/40 bg-sky-100/10'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {cursorText && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono-custom font-bold uppercase tracking-wider text-sky-900 drop-shadow-sm">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Core Dot */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-slate-900 transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'w-2 h-2 opacity-0' : 'w-2 h-2 opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};
