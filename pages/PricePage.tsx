import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const PricePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Hero Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 opacity-30">
          <img src="https://framerusercontent.com/images/hZGvcwu0k7zo07VbJwEmzsMH7c.jpg" className="w-full h-full object-cover" alt="Interior" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <span className="text-[#005a5a] font-bold uppercase tracking-[0.8em] text-[10px] mb-6 block">{t.pricePage.heroSub}</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">{t.pricePage.heroTitle}</h1>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-10 -mt-16 relative z-20">
        <div className="columns-1 lg:columns-2 gap-10 space-y-10">
          {t.pricePage.categories.map((category: any, groupIdx: number) => (
            <div key={groupIdx} 
              className={`break-inside-avoid bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-50 group mb-10 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${groupIdx * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[2px] bg-[#005a5a] group-hover:w-16 transition-all duration-500" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-tight">{category.name}</h2>
              </div>
              <div className="space-y-1">
                {category.items.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between items-start py-4 border-b border-gray-50 hover:bg-gray-50/50 px-3 rounded-xl transition-all group/item">
                    <span className="text-gray-500 font-semibold text-base group-hover/item:text-[#005a5a] transition-colors">{item.n}</span>
                    <span className="text-[#005a5a] font-black text-lg whitespace-nowrap tracking-tighter">{item.p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`mt-32 px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight">{t.pricePage.ctaTitle}</h3>
            <p className="text-white/40 text-base font-medium max-w-xl mx-auto leading-relaxed">{t.pricePage.ctaDesc}</p>
            <div className="pt-6">
              <Link to="/contact" className="bg-[#005a5a] text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl active:scale-95 inline-block">{t.common.bookVisit}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricePage;