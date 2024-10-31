import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";
import dish5 from "../assets/dish5.jpg";
import dish6 from "../assets/dish6.jpg";
import dish7 from "../assets/dish7.jpg";
import dish8 from "../assets/dish8.jpg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "My Art Gallery", targetId: "arts" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Recommendation", targetId: "recommendation" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Elephant – Strength and Nobility",
    description:
      "The elephant symbolizes majesty, wisdom, and gentle power in Vietnamese culture. The painting highlights its dignity, while the plush form embodies strength and warmth, celebrating true power as compassionate—a gentle giant.",
  },
  {
    image: dish2,
    title: "Chicken – Resilience and Vitality",
    description:
      "The chicken symbolizes resilience, bravery, and vitality in Vietnamese culture. The painting depicts its energetic strength, emphasizing its role in family life. The plush version captures this lively spirit, using bright colors to celebrate resilience, cheerfulness found in both family and community",
  },
  {
    image: dish3,
    title: "Turtle – Longevity and Stability",
    description:
      "The turtle symbolizes longevity, patience, and stability in Vietnamese culture. The painting highlights its resilience with layered shell patterns, while the plush version conveys warmth and reliability. Together, they celebrate the turtle's legacy of strength paired with compassion.",
  },
  {
    image: dish4,
    title: "Horse – Freedom and Determination",
    description:
      "The horse symbolizes strength, freedom, and determination in Vietnamese culture. The painting captures its powerful stance, while the plush version conveys loyalty and gentler resolve. Together, they reflect how true strength balances fierceness with warmth.",
  },
  {
    image: dish5,
    title: "Tiger – Power and Bravery",
    description:
      "The tiger is an emblem of strength, courage, and authority in Vietnamese culture. The painting depicts its commanding nature, while the plush version softens its ferocity, illustrating strength with compassion. This dual portrayal reflects bravery as both fierce and nurturing.",
  },
  {
    image: dish6,
    title: "Buffalo – Hard Work and Endurance",
    description:
      "The buffalo repressents hard work, patience, and endurance in Vietnamese culture, representing rural resilience. The painting emphasizes its strength, while the plush version highlights loyalty and warmth. Together, they honor the buffalo's role in tradition and companionship.",
  },
  {
    image: dish7,
    title: "Pig – Abundance and Contentment",
    description:
      "In Vietnamese culture, the pig symbolizes prosperity, warmth, and abundance. The painting features a joyful, round pig representing contentment and a plush version conveying comfort. This dual image blends tradition with modern simplicity, highlighting enduring prosperity across generations.",
  },
  {
    image: dish8,
    title: "Dragon – Wisdom and Protection",
    description:
      "In traditional Vietnamese art, the dragon symbolizes wisdom, protection, and prosperity. Its intricate, sacred design guards against evil and brings good fortune, while its friendlier form offers comfort and support. This duality illustrates how wisdom can be both powerful and approachable, serving as a protective force in both mythical and everyday life.",
  },
];

export const ABOUT = {
  header: "Hi there, welcome!",
  content:
    "I'm Huyen Pham, a passionate learner and changemaker from Hanoi, Vietnam, whose journey is fueled by a combination of learning, creativity, and community building. My life is enriched with a blend of passions - from data and analytics to expressive realms of debate, silk painting, and creative storytelling - all united by a single purpose: to empower people and catalyze meaningful growth. My projects connect generations and communities: inclusive education through guiding the elderly to active use of modern technologies, bringing bright moments of English lessons to young students all over Vietnam. Debate gives me a voice; painting is an expression of my heritage and imagination. And with data, I show insights that create bridges of understanding. With every project that I lead or every piece I create, it would always be toward that larger mission: a world where goodness shall result from imagination and learning. Let's inspire one another, project after project, contact after contact, blending learning with tradition and innovation.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "My Journey",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "My Achievements",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Nurturing Future Debaters",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
  {
    number: "04.",
    image: indian,
    title: "My Website for Debate",
    description:
      "I created a website my own to share my knowledge and thoughts about debate. Check out it here!",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  {
    key: "address",
    value: "Address: 1 Ton That Tung Street, Hanoi, Vietnam 100000",
  },
  { key: "phone", value: "Phone: (+84) 88 891 3900" },
  { key: "email", value: "Email: huyenpk090307@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
