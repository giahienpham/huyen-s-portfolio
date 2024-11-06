import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown"; // Import react-markdown
import missionImg from "../assets/mission.jpeg";
import mission4 from "../assets/mission4.jpg";
import TA from "../assets/TA.jpg";
import incre2 from "../assets/incre2.jpg";
import buom from "../assets/buom.jpg";
import plant1 from "../assets/plant1.jpg";
import family from "../assets/family.jpg";

const Mission = () => {
  const slides = [
    {
      id: 1,
      image: family,
      title: "Where it all began",
      description:
        "From a young age, my passion for teaching was kindled by simple yet meaningful interactions with my grandmother. After school, instead of rushing home, I would bring her to sit in front of the wooden wardrobe in the middle of our room. Armed with chalk stolen from my classroom, I would enthusiastically teach her how to construct sentences, distinguish between different parts of speech, and even tackle basic addition and subtraction. Sometimes, I would set up a makeshift study area, complete with a chair for her, to guide her in signing her name. These moments were filled with laughter and joy, as I saw the spark of understanding light up in her eyes.\n\n It was through these cherished memories that I discovered my love for teaching—a passion that continues to drive me to inspire and educate others today.",
    },
    {
      id: 2,
      image: TA,
      title: "Debate Teaching Assistant",
      description:
        "As a Debate Assistant in 2023, I organized and coordinated Debate and World Scholars’ Cup camp activities, including setting up debate spaces, distributing materials, and managing daily operations. I provided guidance on debate techniques, research strategies, and topic understanding to 300 students, while monitoring their participation and progress by offering feedback to instructors and parents.\n\n**Some notable results:**\n- **Team 247 (Hà My, Khánh Linh, Linh Chi):**\n  - 1st Overall Junior\n  - Trophy Top 1 Team Challenge\n  - Trophy Top 2 Team Debate\n  - Top 4 Team Bowl\n  - Top 10 Team Writing\n- **Team 240 (Hồng Phúc, Thái Lâm, Chí Thành):**\n  - Trophy Top 2 Team Challenge\n  - Trophy Top 2 Team Bowl\n  - Trophy Top 3 Team Debate\n  - Top 5 Team Writing",
    },
    {
      id: 3,
      image: mission4,
      title: "Volunteer English Tutor for Autism",
      year: "2023",
      description:
        "In 2023, I met a young girl who was the daughter of my mother's friend. She was one year younger than me and was navigating the challenges of autism, which made learning and communication particularly difficult for her. At that time, she was preparing for the highly selective Vietnam High School Entrance Exam in Hanoi, and her mother reached out to me for assistance with her English studies.\n\nCommitted to making a difference, I offered free, personalized tutoring tailored to her unique needs. I developed customized lesson plans and conducted regular study sessions aimed at addressing her specific challenges in learning and communication. Through our dedicated collaboration, her English skills improved significantly, which not only boosted her confidence but also played a crucial role in her successful admission to a prestigious public school.",
    },
    {
      id: 4,
      image: incre2,
      title: "The Incredibles Project",
      description:
        'The Incredibles Project is an innovative initiative dedicated to teaching English to primary school students through communicative and visual learning methods. I developed the project’s concept, curriculum, and overall strategy, while recruiting and managing a team of 60 staff members. Additionally, I trained 10 professionals in effective classroom techniques and led an 8-session online course, "Super Scholars," which reached 160 students nationwide. The project also included the "Isle of Treasure" workshop, combining survival skills with English communication for 100 participants. We donated 50 million VND to equip Chieng Cang Primary School in Son La province, benefiting teachers and 220 ethnic minority students. Furthermore, I created and taught eight lessons on “Careers” for the “Works Wonder” online event, attracting 53 students, and organized a workshop exploring four career fields—doctor, sports, science, and theater-cinema—for 60 primary students.',
      images: [incre2],
    },
    {
      id: 5,
      image: buom,
      title: "Buom Project",
      description:
        "Buom Project is a non-profit initiative that prepares high school seniors for entrance exams using visual learning methods. I managed 50 lesson plans in math, literature, and English and conducted bi-weekly English sessions for 250 students. This approach resulted in 100% of participants gaining admission to top public schools with English scores of 9 or higher.",
    },
    {
      id: 6,
      image: plant1,
      title: "The Renouveau Project - Season 2",
      description:
        "The Renouveau Project (Season 2) is a social volunteer initiative aimed at reconstructing community facilities to support homeless elderly individuals.\n\n Here, as a Vice President, I organized a successful fundraising bake sale that generated 20 million VND. We donated the proceeds to Hanoi Chung Tay and collaborated with them to renovate garden areas and living rooms in social housing, positively impacting over 50 residents.",
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
      <div className="flex-none py-16">
        <h2 className="text-center text-3xl lg:text-5xl font-medium">
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
          {/* Slides Wrapper */}
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
                <div className="w-1/3 h-full flex flex-col justify-start items-start px-8 md:px-20 py-4 overflow-y-auto">
                  <h3 className="text-2xl md:text-5xl font-bold">
                    {slide.title}
                  </h3>
                  <ReactMarkdown
                    className="mt-4 max-w-lg text-sm md:text-xl"
                    children={slide.description}
                  />
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
      </div>

      {/* Thumbnails Container */}
      <div className="flex-none py-4">
        <div className="flex justify-center space-x-4">
          {visibleThumbnails.map((slide) => {
            // Calculate the actual index in the slides array
            const actualIndex = slides.findIndex((s) => s.id === slide.id);
            return (
              <div
                key={slide.id}
                className={`w-24 h-24 relative cursor-pointer rounded-md overflow-hidden ${
                  actualIndex === currentSlide
                    ? "border-4 border-orange-500"
                    : "border-2 border-transparent"
                } shadow-md hover:shadow-lg transition-shadow duration-300`}
                onClick={() => setCurrentSlide(actualIndex)}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay and Text */}
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <div className="text-sm font-semibold">{slide.title}</div>
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
