// src/components/Honors.jsx

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import honors1 from "../assets/honors1.jpg";
import honors2 from "../assets/honors2.jpg";
import honors3 from "../assets/honors3.jpg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";

const Honors = () => {
  const slides = [
    {
      id: 1,
      image: honors1,
      title: "Honors Topic 1",
      description: "An insightful discussion on Topic 1.",
      price: "$20",
      rating: 4.5,
      images: [honors1, honors2, honors3],
    },
    {
      id: 2,
      image: dish2,
      title: "Honors Topic 2",
      description: "Engaging honors on Topic 2.",
      price: "$15",
      rating: 4.2,
    },
    {
      id: 3,
      image: dish3,
      title: "Honors Topic 3",
      description: "Thought-provoking honors on Topic 3.",
      price: "$10",
      rating: 4.8,
    },
    {
      id: 4,
      image: dish4,
      title: "Honors Topic 4",
      description: "Dynamic discussion on Topic 4.",
      price: "$18",
      rating: 4.6,
    },
    {
      id: 5,
      image: dish5,
      title: "Honors Topic 5",
      description: "In-depth analysis on Topic 5.",
      price: "$12",
      rating: 4.3,
    },
    {
      id: 6,
      image: dish6,
      title: "Honors Topic 6",
      description: "Comprehensive honors on Topic 6.",
      price: "$22",
      rating: 4.7,
    },
    {
      id: 7,
      image: dish7,
      title: "Honors Topic 7",
      description: "Extensive discussion on Topic 7.",
      price: "$16",
      rating: 4.4,
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperRef = useRef(null);

  const [selectedSlide, setSelectedSlide] = useState(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  return (
    <section id="honors" className="py-16 bg-[#FFFFF0] relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="my-16 text-3xl lg:text-4xl text-black">
          Honors & Achievements
        </h2>
        <div className="relative">
          {/* Swiper Container */}
          <Swiper
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={0} // Removed space between slides
            loopedSlides={slides.length}
            loopAdditionalSlides={3}
            watchSlidesProgress={true}
            watchSlidesVisibility={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} bg-black w-3 h-3 rounded-full mx-1"></span>`; // Changed bullet color for visibility
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            observer={true}
            observeParents={true}
            className="honors-slider pb-16"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={slide.id}
                className="flex justify-center"
                onClick={() => {
                  // Check if the clicked slide is the active slide
                  if (swiperRef.current.realIndex === index) {
                    // Open the details modal
                    setSelectedSlide(slide);
                    setSelectedSlideIndex(index);
                  } else {
                    // Move to the clicked slide
                    swiperRef.current.slideToLoop(index);
                  }
                }}
              >
                <div className="relative w-full h-full md:h-[42rem] overflow-hidden rounded-3xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105 rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
                    <div className="flex justify-end"></div>
                    <div>
                      <h2 className="text-white text-xl font-semibold">
                        {slide.title}
                      </h2>
                      <p className="text-white text-sm mt-4">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {selectedSlide && (
          <EnlargedSlide
            slide={selectedSlide}
            onClose={() => setSelectedSlide(null)}
            slides={slides}
            selectedIndex={selectedSlideIndex}
            setSelectedIndex={setSelectedSlideIndex}
            setSelectedSlide={setSelectedSlide}
          />
        )}
      </div>

      {/* Navigation Buttons (Positioned Outside of Swiper Container) */}
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <button
          ref={prevRef}
          className="swiper-button-prev-custom bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button
          ref={nextRef}
          className="swiper-button-next-custom bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

const EnlargedSlide = ({
  slide,
  onClose,
  slides,
  selectedIndex,
  setSelectedIndex,
  setSelectedSlide,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + slides.length) % slides.length;
    setSelectedIndex(prevIndex);
    setSelectedSlide(slides[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % slides.length;
    setSelectedIndex(nextIndex);
    setSelectedSlide(slides[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 bg-transparent z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose} // Allows clicking outside to close
    >
      <div
        className="relative flex w-full h-full"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-black text-4xl focus:outline-none z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center p-1"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
        {/* Image Section */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            animate ? "w-1/2" : "w-0"
          }`}
        >
          {slide.id === 1 ? (
            // For the first slide, display honors1 on top and honors2 & honors3 below
            <div className="flex flex-col h-full">
              {/* Top Image (honors1) */}
              <div className="h-1/2">
                <img
                  src={slide.images[0]}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    animate ? "scale-100" : "scale-50"
                  } rounded-3xl`}
                />
              </div>
              {/* Bottom Images (honors2 and honors3) */}
              <div className="flex h-1/2">
                {slide.images.slice(1).map((imgSrc, idx) => (
                  <div key={idx} className="w-1/2 overflow-hidden rounded-3xl">
                    <img
                      src={imgSrc}
                      alt={`${slide.title} ${idx + 2}`}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // For other slides, display the single image
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                animate ? "scale-100" : "scale-50"
              } rounded-3xl`}
            />
          )}
        </div>
        {/* Details Section */}
        <div
          className={`bg-black bg-opacity-80 transition-all duration-500 text-white flex flex-col ${
            animate ? "w-1/2 p-8" : "w-0 p-0"
          }`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-4xl focus:outline-none bg-black rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Close Modal"
          >
            &times;
          </button>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            {slide.title}
          </h2>

          <p className="text-white text-lg">{slide.description}</p>
        </div>
        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-black text-4xl focus:outline-none z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center p-1"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Honors;
