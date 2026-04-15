import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add event listeners to any clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea, select');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  // Use framer-motion variants to manage animation states
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(20, 184, 166, 0.4)", // Teal color matching primary
      border: "1px solid rgba(20, 184, 166, 0.5)",
      mixBlendMode: "difference"
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(20, 184, 166, 0.8)",
      border: "2px solid rgba(20, 184, 166, 1)",
      mixBlendMode: "difference"
    }
  };

  return (
    <>
      {/* Outer blurred glow */}
      <motion.div
        className="fixed top-0 left-0 bg-primary-500/20 blur-xl rounded-full pointer-events-none z-50 transition-colors duration-300 hidden md:block"
        variants={variants}
        animate={isHovered ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Exact cursor dot */}
      <motion.div
        className="fixed top-0 left-0 bg-primary-500 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          width: 8,
          height: 8,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
    </>
  );
}
