
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const Services: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  return (
    <section className="bg-gray-50 py-12 md:py-24 px-4 md:px-10">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-8 md:gap-16">
        <div className="relative group overflow-hidden rounded-2xl md:rounded-[2rem] h-[300px] md:h-[500px]">
          <img src="https://framerusercontent.com/images/Es82GeniQfvbrLe8GIg5ctOEq6M.jpg" alt="Service Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute top-4 right-4 flex gap-1.5">
            <button className="bg-[#005a5a]/80 p-2 md:p-3 rounded-full hover:bg-[#005a5a]"><img src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg" className="w-4 h-4 md:w-6 md:h-6 invert" /></button>
            <button className="bg-[#005a5a]/80 p-2 md:p-3 rounded-full hover:bg-[#005a5a]"><img src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg" className="w-4 h-4 md:w-6 md:h-6 invert" /></button>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="w-12 h-1 bg-[#005a5a]"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase">{t.servicesComp.title}</h2>
          <div className="space-y-4 text-gray-500 font-semibold leading-relaxed text-sm md:text-base">
            <p>{t.servicesComp.desc}</p>
            <ul className="list-disc pl-5 space-y-1">
              {t.servicesComp.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <Link to="/services" className="inline-block px-8 py-4 bg-[#005a5a] text-white font-bold rounded-lg self-start transition-transform hover:scale-105 text-sm">
            {t.servicesComp.more}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
