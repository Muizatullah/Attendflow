import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Fades + slides its children up into place the first time they scroll
 * into view. Used across the site instead of animating every section by
 * hand — wrap anything in <Reveal> and optionally stagger a group with
 * incrementing `delay` values (in ms).
 *
 * Honors prefers-reduced-motion globally via index.css (transitions
 * collapse to ~0 there), so no extra handling is needed here.
 */
const Reveal = ({ children, as: Tag = 'div', delay = 0, className = '', once = true, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
