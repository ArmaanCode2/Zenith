import React, { useRef, useState, useEffect } from 'react';

function HorizontalCarousel({ children, className = '' }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });

    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [children]);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const firstItem = el.firstElementChild;
    const scrollAmount = firstItem ? firstItem.clientWidth + 16 : el.clientWidth * 0.85;

    el.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-controls-mobile" aria-label="Carousel navigation">
        <button
          type="button"
          className="carousel-btn carousel-btn-prev"
          onClick={() => handleScroll('prev')}
          disabled={!canScrollLeft}
          aria-label="Previous items"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          className="carousel-btn carousel-btn-next"
          onClick={() => handleScroll('next')}
          disabled={!canScrollRight}
          aria-label="Next items"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className={`carousel-track ${className}`} ref={scrollRef}>
        {children}
      </div>
    </div>
  );
}

export default HorizontalCarousel;
