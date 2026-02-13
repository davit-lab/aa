
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const TreatmentCard = ({ image, title, link }: { image: string, title: string, link: string }) => (
  <Link to={link} className="relative group block overflow-hidden rounded-2xl md:rounded-3xl h-[280px] md:h-[400px]">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
      <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-wider">{title}</h3>
    </div>
  </Link>
);

const Treatments: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  return (
    <section className="py-12 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 uppercase max-w-2xl">
          {t.treatmentsComp.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <TreatmentCard image="https://framerusercontent.com/images/PCHp4YGU02Gr9bhVeNxl3NlwDeE.jpg" title="Implantology" link="/services" />
        <TreatmentCard image="https://framerusercontent.com/images/InTtVcj8vGawB5IxVzmu2I4ic.png" title="Orthodontics" link="/services" />
        <div className="space-y-6 md:space-y-8 flex flex-col justify-between">
           <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm flex-1 mb-6 md:mb-0">
              <p className="text-gray-500 font-semibold text-base md:text-lg leading-relaxed mb-6">{t.treatmentsComp.desc}</p>
              <Link to="/blog" className="inline-block bg-[#005a5a] text-white px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#004a4a]">
                {t.treatmentsComp.btn}
              </Link>
           </div>
           <TreatmentCard image="https://framerusercontent.com/images/QQ50fOqBmC27PyxomM9BpnW9Yho.jpg" title="Oral Surgery" link="/services" />
        </div>
      </div>
    </section>
  );
};

export default Treatments;
