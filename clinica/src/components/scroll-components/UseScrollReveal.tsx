import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function useScrollReveal(
  ref: React.RefObject<HTMLElement>,
  config: scrollReveal.ScrollRevealObjectOptions
) {
  useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, config);
    }
  }, [ref, config]);
}