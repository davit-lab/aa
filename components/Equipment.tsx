
import React, { useRef, useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const equipmentData = [
  { image: 'https://framerusercontent.com/images/0cDiBk9jk9gtvYgw3hbElEFDBU.png', title: 'Guttafusion Oven', link: 'https://www.vdw-dental.com/en/products/detail/guttafusion-oven/' },
  { image: 'https://framerusercontent.com/images/HIKyHZZgJSbbVe9r9OatOpn2k.png', title: 'Planmeca ProMax® 3D Plus', link: 'https://www.planmeca.com/dental-imaging/cbct-machines/planmeca-promax-3d-plus' },
  { image: 'https://framerusercontent.com/images/HUXzvDqjVQdjsDWASUK38Buyfz4.png', title: 'SybronEndo', link: 'https://k-dental.ca/sybronendo-elements-obturation-unit-system-b-handpiece-shield-2-pkg-sp-order-52929-00.html' },
  { image: 'https://framerusercontent.com/images/JiJtK4JDkx3IP7aYywCGVf3wOE.png', title: 'Planmeca Emerald® S', link: 'https://www.planmeca.com/cadcam-dentistry/intraoral-scanners/planmeca-emerald-s/' }
];

const Equipment: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({ left: direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 md:px-10 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="w-24 h-24 bg-[#005a5a] rounded-full shrink-0 flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" /></svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase">{t.equipmentComp.title}</h2>
      </div>

      <div className="relative group">
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-4">
          {equipmentData.map((item, idx) => (
            <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="min-w-[300px] md:min-w-[370px] snap-center block bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-[300px] p-8">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="bg-[#005a5a]/80 p-6 text-white min-h-[140px] flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-4 h-4 bg-teal-300 rounded-sm"></div>
                   <span className="text-xs font-bold uppercase tracking-widest opacity-80">{t.equipmentComp.unit}</span>
                </div>
                <h4 className="text-xl font-bold uppercase leading-tight">{item.title}</h4>
              </div>
            </a>
          ))}
        </div>
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#005a5a] p-4 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"><img src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg" className="w-8 h-8 invert" /></button>
        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#005a5a] p-4 rounded-l-lg opacity-100 group-hover:opacity-100 transition-opacity z-10"><img src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg" className="w-8 h-8 invert" /></button>
      </div>
    </section>
  );
};

export default Equipment;
