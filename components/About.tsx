
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const About: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  return (
    <section id="about-section" className="relative py-12 md:py-20 px-4 md:px-10 max-w-[1440px] mx-auto overflow-hidden">
      <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.03] whitespace-nowrap overflow-hidden w-full h-full flex justify-end">
        <h2 className="font-karla text-[60px] md:text-[150px] font-bold leading-none translate-x-10 md:translate-x-20">{t.aboutComp.title}</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight">{t.aboutComp.title}</h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-semibold max-w-xl mx-auto lg:mx-0">
            {t.aboutComp.desc}
          </p>
          <div>
            <Link to="/contact" className="inline-block px-8 py-4 bg-[#005a5a] text-white font-bold rounded-xl transition-transform hover:scale-105 shadow-lg shadow-[#005a5a]/20 text-sm md:text-base">
              {t.aboutComp.btn}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 h-[250px] md:h-[500px]">
          <div className="rounded-xl md:rounded-[2.5rem] overflow-hidden h-full shadow-lg">
            <img src="https://framerusercontent.com/images/0JhnuSVKqzhBvoFbmldufpEA.jpg" alt="Dental Office 1" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl md:rounded-[2.5rem] overflow-hidden h-full mt-6 md:mt-12 shadow-lg">
            <img src="https://framerusercontent.com/images/NL9ZihxOkco4TeWtDDi8fz20.jpg" alt="Dental Office 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
