
import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const slides = [
  { image: 'https://framerusercontent.com/images/hZGvcwu0k7zo07VbJwEmzsMH7c.jpg', id: 1 },
  { image: 'https://framerusercontent.com/images/uJM98S9Hf8UAVNmz4LCDbbRr1JU.jpg', id: 2 }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[35vh] md:h-[80vh] w-full overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
        <h1 className="text-white text-xl md:text-6xl lg:text-7xl font-bold text-center drop-shadow-xl max-w-4xl uppercase tracking-tight leading-tight">
          {t.hero.welcome} <br /> <span className="text-[#005a5a] bg-white/10 backdrop-blur-sm px-2.5 py-0.5 rounded-lg">{t.hero.agency}</span>{t.hero.to}
        </h1>
      </div>

      <div className="absolute bottom-3 md:bottom-10 right-3 md:right-10 flex gap-0">
        <button onClick={prevSlide} className="bg-[#005a5a]/90 hover:bg-[#005a5a] p-2 md:p-4 active:scale-95">
          <img src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg" className="w-4 h-4 md:w-8 md:h-8 invert" alt="Back" />
        </button>
        <button onClick={nextSlide} className="bg-[#005a5a]/90 hover:bg-[#005a5a] p-2 md:p-4 active:scale-95">
          <img src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg" className="w-4 h-4 md:w-8 md:h-8 invert" alt="Next" />
        </button>
      </div>

      <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1 md:gap-3">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className={`w-1 h-1 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-3 md:w-8' : 'bg-white/40'}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
