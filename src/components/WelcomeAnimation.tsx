import { useEffect, useState } from 'react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

type IntroPhase = 'welcome' | 'transition' | 'identity' | 'exit';

export function WelcomeAnimation({ onComplete }: WelcomeAnimationProps) {
  const [phase, setPhase] = useState<IntroPhase>('welcome');
  const [isReducedMotion] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));

  useEffect(() => {
    if (isReducedMotion) {
      const reducedTimer = window.setTimeout(onComplete, 700);
      return () => window.clearTimeout(reducedTimer);
    }

    const transitionTimer = window.setTimeout(() => setPhase('transition'), 3200);
    const identityTimer = window.setTimeout(() => setPhase('identity'), 3700);
    const exitTimer = window.setTimeout(() => setPhase('exit'), 4500);
    const completeTimer = window.setTimeout(onComplete, 5050);

    return () => {
      window.clearTimeout(transitionTimer);
      window.clearTimeout(identityTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [isReducedMotion, onComplete]);

  return (
    <div
      className={`welcome-animation welcome-animation--${phase}${isReducedMotion ? ' welcome-animation--reduced' : ''}`}
      role="status"
      aria-label="Welcome to Ramees portfolio"
    >
      <div className="welcome-animation__content">
        <p className="welcome-animation__welcome">WELCOME</p>

        <div className="welcome-animation__identity" aria-hidden="true">
          <span className="welcome-animation__to">TO</span>
          <span className="welcome-animation__name">RAMEES</span>
          <span className="welcome-animation__portfolio">PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
}
