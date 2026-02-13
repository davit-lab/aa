
import React, { useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { teamData } from './TeamPage';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const TeamMemberPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Fixed: Added LanguageContext to access current language state for localized data
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];
  const member = teamData.find(m => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-6 uppercase">
          {lang === 'ka' ? 'წევრი ვერ მოიძებნა' : 'Member not found'}
        </h2>
        <Link to="/team" className="bg-[#005a5a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest">
          {lang === 'ka' ? 'უკან დაბრუნება' : 'Go back'}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header / Back button */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-10">
        <button 
          onClick={() => navigate('/team')}
          className="flex items-center gap-3 text-gray-400 hover:text-[#005a5a] font-bold uppercase text-xs tracking-widest transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {lang === 'ka' ? 'ყველა წევრი' : 'All members'}
        </button>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 grid lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Image */}
        <div className="lg:col-span-5">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Fixed: Access member.name[lang] to resolve Type '{ ka: string; en: string; }' is not assignable to type 'string' */}
            <img 
              src={member.image} 
              alt={member.name[lang]} 
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>

        {/* Right Column: Info */}
        <div className="lg:col-span-7 pt-8">
          <span className="text-[#005a5a] font-bold uppercase tracking-[0.3em] text-sm block mb-4">
            {lang === 'ka' ? 'პროფესიონალი' : 'Professional'}
          </span>
          {/* Fixed: Access member.name[lang] to resolve Type '{ ka: string; en: string; }' is not assignable to type 'ReactNode' */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 uppercase tracking-tighter mb-4 leading-none">
            {member.name[lang]}
          </h1>
          {/* Fixed: Access member.role[lang] to resolve Type '{ ka: string; en: string; }' is not assignable to type 'ReactNode' */}
          <p className="text-2xl text-gray-400 font-medium uppercase mb-12">
            {member.role[lang]}
          </p>

          <div className="space-y-12 max-w-3xl">
            <div>
              <h4 className="text-[#005a5a] font-bold uppercase text-xs tracking-widest mb-6 border-b border-[#005a5a]/10 pb-2">
                {lang === 'ka' ? 'მოკლე მიმოხილვა' : 'Brief Overview'}
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {/* Fixed: Access member.name[lang] to resolve Type '{ ka: string; en: string; }' is not assignable to type 'ReactNode' */}
                {member.name[lang]} {lang === 'ka' ? 'არის Smile Agency-ის წამყვანი სპეციალისტი მრავალწლიანი გამოცდილებით. მისი მთავარი პრიორიტეტია პაციენტების კომფორტი და უმაღლესი ხარისხის სტომატოლოგიური მომსახურება.' : 'is a leading specialist at Smile Agency with years of experience. Their main priority is patient comfort and high-quality dental services.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-[#005a5a] font-bold uppercase text-xs tracking-widest mb-6 border-b border-[#005a5a]/10 pb-2">
                  {lang === 'ka' ? 'განათლება' : 'Education'}
                </h4>
                <ul className="space-y-4 text-gray-600 font-medium">
                  <li>• {lang === 'ka' ? 'თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი' : 'Tbilisi State Medical University'}</li>
                  <li>• {lang === 'ka' ? 'რეზიდენტურა სტომატოლოგიაში' : 'Residency in Dentistry'}</li>
                  <li>• {lang === 'ka' ? 'საერთაშორისო მასტერკლასები ევროპაში' : 'International Masterclasses in Europe'}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#005a5a] font-bold uppercase text-xs tracking-widest mb-6 border-b border-[#005a5a]/10 pb-2">
                  {lang === 'ka' ? 'სპეციალიზაცია' : 'Specialization'}
                </h4>
                <ul className="space-y-4 text-gray-600 font-medium">
                  {/* Fixed: Access member.role[lang].split to resolve Property 'split' does not exist on type '{ ka: string; en: string; }' */}
                  <li>• {member.role[lang].split('/')[0].trim()}</li>
                  <li>• {lang === 'ka' ? 'თანამედროვე ტექნოლოგიების ფლობა' : 'Mastery of modern technologies'}</li>
                  <li>• {lang === 'ka' ? 'პაციენტზე მორგებული თერაპია' : 'Patient-centered therapy'}</li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Link to="/contact" className="inline-block bg-[#005a5a] text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-[#005a5a]/20">
                {/* Fixed: Access member.name[lang].split to resolve Property 'split' does not exist on type '{ ka: string; en: string; }' */}
                {lang === 'ka' ? 'ჩაეწერეთ ვიზიტზე' : 'Book a visit with'} {member.name[lang].split(' ')[0]} {lang === 'ka' ? '-თან' : ''}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Other Members Quick View */}
      <div className="mt-40 bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">
              {lang === 'ka' ? 'სხვა სპეციალისტები' : 'Other Specialists'}
            </h2>
            <Link to="/team" className="text-[#005a5a] font-bold uppercase text-xs tracking-widest border-b-2 border-[#005a5a] pb-1">
              {lang === 'ka' ? 'ყველას ნახვა' : 'View all'}
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamData.filter(m => m.id !== member.id).slice(0, 4).map((other) => (
              <Link key={other.id} to={`/team/${other.id}`} className="group">
                <div className="aspect-square rounded-3xl overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-all duration-500">
                  {/* Fixed: Access other.name[lang] to resolve Type '{ ka: string; en: string; }' is not assignable to type 'string' */}
                  <img src={other.image} alt={other.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                {/* Fixed: Access other.name[lang] to resolve Type '{ ka: string; en: string; }' is not assignable to type 'ReactNode' */}
                <h5 className="font-bold text-gray-900 uppercase text-sm tracking-tight group-hover:text-[#005a5a] transition-colors">
                  {other.name[lang]}
                </h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPage;
