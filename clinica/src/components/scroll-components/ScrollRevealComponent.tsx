import React, { useRef } from 'react';
import useScrollReveal from './UseScrollReveal';

// Hook para detectar o tamanho da tela
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

interface ScrollRevealProps {
  children: React.ReactNode;
  origin?: string;
  distance?: string;
  duration?: number;
  reset?: boolean;
}

const ScrollRevealComponent: React.FC<ScrollRevealProps> = ({ children, origin, distance, duration, reset }) => {
  const elementRef = useRef(null);
  const isMobile = useIsMobile();

  // Se for mobile, muda a origin para "left", (pois a animação estava quebrando a tela no mobile) caso contrário usa a origin passada ou top por padrão
  const adjustedOrigin = isMobile ? 'left' : origin || 'top';

  useScrollReveal(elementRef, {
    origin: adjustedOrigin,
    distance: distance || '100px',
    duration: duration || 1000,
    reset: reset || false,
  });

  return <div ref={elementRef}>{children}</div>;
};

export default ScrollRevealComponent;