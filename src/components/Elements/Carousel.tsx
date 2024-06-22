"use client";
import React, { useEffect, useState, useRef } from 'react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';

const banners = [
  <Banner1 key="1" />,
  <Banner2 key="2" />,
  <Banner3 key="3" />
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    timeoutRef.current = setTimeout(nextSlide, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragging(true);
    setDragStartX(e.clientX);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragging && dragStartX !== null) {
      setDragOffset(e.clientX - dragStartX);
    }
  };

  const handleMouseUp = () => {
    const threshold = 100; // Minimum pixels to determine a valid swipe

    if (dragging) {
      if (dragOffset > threshold) {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
      } else if (dragOffset < -threshold) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }
    }

    setDragging(false);
    setDragOffset(0);
    setDragStartX(null);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    timeoutRef.current = setTimeout(nextSlide, 5000);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="flex items-center w-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // To handle mouse leaving the banner area
        style={{
          cursor: dragging ? 'grabbing' : 'grab',
          transition: dragging ? 'none' : 'transform 0.3s ease',
          transform: `translateX(${dragging ? dragOffset : 0}px)`
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 ${index !== currentIndex && 'hidden'}`}  // Ensuring only the current index item is visible
          >
            {banner}
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;