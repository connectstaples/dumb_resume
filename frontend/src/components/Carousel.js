import React, { useState, useEffect, useRef } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

// setting slides function
function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  // logic to handle previous slide
  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  // logic to handle next slide
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // useEffect to handle the current slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
    }, 10000);
  // returning slide for client
    return () => clearInterval(interval);
  }, [slides.length]);
  // video autoplay
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === current) {
          video.play().catch(error => console.log(error)); 
        } else {
          video.pause();
        }
      }
    });
  }, [current]);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform ease-out duration-300"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {/* rendering video functions 'index' */}
        {slides.map((s, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {s.endsWith('.mov') || s.endsWith('.MOV') ? (
              <video
                src={s}
                ref={el => (videoRefs.current[index] = el)}
                controls
                className="w-full"
              />
            ) : (
              <img src={s} alt={`Slide ${index}`} className="w-full" />
            )}
          </div>
        ))}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
        {/* design elements for carousel */}
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
