import React, { useRef } from 'react';
import useScrollReveal from './UseScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  origin?: string;
  distance?: string;
  duration?: number;
  reset?: boolean;
}

const ScrollRevealComponent: React.FC<ScrollRevealProps> = ({ children, origin, distance, duration, reset }) => {
  const elementRef = useRef(null);

  useScrollReveal(elementRef, {
    origin: origin || 'bottom',
    distance: distance || '100px',
    duration: duration || 1000,
    reset: reset || false,
  });

  return <div ref={elementRef}>{children}</div>;
};

export default ScrollRevealComponent;