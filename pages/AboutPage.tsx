import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-50">
          <img src="https://framerusercontent.com/images/uJM98S9Hf8UAVNmz4LCDbbRr1JU.jpg" className="w-full h-full object-cover scale-110" alt="Hero" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />
        <div className={`relative z-10 text-center px-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <span className="text-[#005a5a] font-bold uppercase tracking-[0.4em] md:tracking-[0.8em] text-[10px] md:text-xs mb-8 block">{t.aboutPage.heroSub}</span>
          <h1 className="text-5xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 drop-shadow-2xl">
            {t.aboutPage.heroTitle}
          </h1>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-40 px-4 md:px-10 max-w-[1440px] mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className={`relative group order-2 lg:order-1 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-xl">
              <img src="https://framerusercontent.com/images/ZFhqqQkoQE5tjqtakzIHWZQNhOw.png" alt="Story" className="w-full aspect-square md:aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-10 bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-gray-100 hidden sm:block">
              <p className="text-[#005a5a] font-black text-xl md:text-4xl uppercase tracking-tighter italic">"Smile Agency"</p>
            </div>
          </div>
          <div className={`space-y-8 md:space-y-12 order-1 lg:order-2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-[#005a5a] font-bold uppercase tracking-widest text-xs md:text-sm">{t.aboutPage.historyTitle}</span>
              <h2 className="text-4xl md:text-7xl font-bold text-gray-900 uppercase tracking-tighter leading-none">{t.aboutPage.historyMain}</h2>
            </div>
            <div className="space-y-6 md:space-y-8 text-base md:text-xl text-gray-600 font-medium leading-relaxed">
              <p className="border-l-4 border-[#005a5a] pl-4 md:pl-8 italic text-lg md:text-2xl text-gray-800 font-bold">{t.aboutPage.historyQuote}</p>
              <p className="whitespace-pre-line">{t.aboutPage.historyDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1a1a1a] py-20 md:py-40 px-4 md:px-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {t.aboutPage.stats.map((stat, i) => (
              <div key={i} className={`p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: `${i * 200}ms` }}>
                <span className="text-5xl md:text-8xl font-black text-[#005a5a] mb-6 block tracking-tighter">{stat.value}</span>
                <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-widest mb-2">{stat.label}</h4>
                <p className="text-white/40 uppercase text-[10px] tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 md:py-40 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-center">
          <div className={`lg:col-span-6 order-2 lg:order-1 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <img src="https://framerusercontent.com/images/HIKyHZZgJSbbVe9r9OatOpn2k.png" alt="Tech" className="w-full drop-shadow-2xl" />
          </div>
          <div className={`lg:col-span-6 order-1 lg:order-2 space-y-6 md:space-y-10 text-center lg:text-left transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <h2 className="text-4xl md:text-7xl font-bold text-gray-900 uppercase tracking-tighter leading-tight">{t.aboutPage.techTitle}</h2>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">{t.aboutPage.techDesc}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className={`max-w-4xl mx-auto bg-[#005a5a] rounded-[2.5rem] md:rounded-[5rem] p-10 md:p-32 text-center text-white shadow-2xl transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <h2 className="text-3xl md:text-7xl font-bold uppercase tracking-tighter mb-12">{t.aboutPage.ctaTitle}</h2>
          <Link to="/contact" className="inline-block bg-white text-[#005a5a] px-8 md:px-16 py-4 md:py-6 rounded-2xl md:rounded-3xl font-bold uppercase tracking-widest hover:scale-105 transition-transform text-sm md:text-base shadow-xl">
            {t.aboutPage.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;