import React, { useState, useEffect, useRef } from "react";
import missionImg from "../assets/mission.jpeg";
import mission4 from "../assets/mission4.jpg";

const Mission = () => {
  const slides = [
    {
      id: 1,
      image: missionImg,
      title: "Where it all began",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatem perspiciatis dicta possimus voluptates exercitationem esse quo dolorem, itaque, pariatur ducimus omnis facere reprehenderit ex distinctio reiciendis? Inventore, distinctio eius!",
    },
    {
      id: 2,
      image: mission4,
      title: "Creative Work",
      description:
        "Another description for the second slide. Add as many slides as you like.",
    },
    {
      id: 3,
      image: mission4,
      title: "Innovative Ideas",
      description:
        "Description for the third slide. You can customize the content.",
    },
    {
      id: 4,
      image: mission4,
      title: "Future Vision",
      description: "Exploring the vastness of space and our place within it.",
    },
    {
      id: 5,
      image: missionImg,
      title: "Sustainable Growth",
      description:
        "Strategies for sustainable growth and environmental preservation.",
    },
    {
      id: 6,
      image: missionImg,
      title: "Global Impact",
      description: "Making a positive impact on communities worldwide.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Determine the total number of slides
  const totalSlides = slides.length;

  // Function to get the next slide index
  const nextSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to get the previous slide index
  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const getVisibleThumbnails = () => {
    const visibleCount = 3;
    let start = currentSlide - 1;

    // Adjust start index to ensure it stays within bounds
    if (start < 0) {
      start = 0;
    } else if (start + visibleCount > totalSlides) {
      start = totalSlides - visibleCount;
    }

    return slides.slice(start, start + visibleCount);
  };

  const visibleThumbnails = getVisibleThumbnails();

  return (
    <section className="w-full h-screen flex flex-col" id="Mission">
      {/* Title */}
      <div className="flex-none py-8">
        <h2 className="text-center text-3xl lg:text-4xl">
          My Mission in Education
        </h2>
      </div>

      {/* Slider Container */}
      <div className="flex-1 flex relative overflow-hidden" ref={sliderRef}>
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="text-white p-2 rounded-full z-20 self-center"
        >
          <span className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black text-black">
            &#10094;
          </span>
        </button>

        {/* Slides */}
        <div className="relative w-full h-full flex-grow">
          {/* Slides */}
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 flex transition-transform duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "translate-x-0 opacity-100 z-10"
                    : index < currentSlide
                    ? "-translate-x-full opacity-0 z-0"
                    : "translate-x-full opacity-0 z-0"
                }`}
              >
                {/* Content (1/3 width) */}
                <div className="w-1/3 h-full flex flex-col justify-start items-start px-8 md:px-20 py-4">
                  <h3 className="text-2xl md:text-5xl font-extrabold">
                    {slide.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm md:text-base">
                    {slide.description}
                  </p>
                </div>
                {/* Image (2/3 width) */}
                <div className="w-2/3 h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover pr-18"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="text-white p-2 rounded-full z-20 self-center"
        >
          <span className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black text-black">
            &#10095;
          </span>
        </button>

        {/* Thumbnails */}
        <div className="absolute bottom-6 right-10 flex space-x-6 z-20">
          {visibleThumbnails.map((slide) => {
            // Calculate the actual index in the slides array
            const actualIndex = slides.findIndex((s) => s.id === slide.id);
            return (
              <div
                key={slide.id}
                className={`w-40 h-60 relative cursor-pointer rounded-2xl overflow-hidden ${
                  actualIndex === currentSlide
                    ? "border-4 border-orange-500"
                    : "border-2 border-transparent"
                }`}
                onClick={() => setCurrentSlide(actualIndex)}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay and Text */}
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
                <div className="absolute bottom-1 left-2 text-white">
                  <div className="text-sm font-bold">{slide.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
