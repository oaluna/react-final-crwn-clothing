import { useRef, useState, useEffect } from 'react';


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
      <div
        ref={ref}
        className={`transition-all duration-1000 ease-out ${className}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    );
  };