import { useRef, useState, useEffect } from 'react';

import { RevealContainer } from './bloom-reveal.styles';

const BloomReveal = ({ children, className = '', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Only animate once
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <RevealContainer
        ref={ref}
        className={className}
        isVisible={isVisible}
        delay={delay}
      >
        {children}
      </RevealContainer>
    );
  };
  
  export default BloomReveal;