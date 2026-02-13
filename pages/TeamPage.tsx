
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

export const teamData = [
  { id: 'tea-gotsiridze', name: { ka: 'თეა გოცირიძე', en: 'Tea Gotsiridze' }, role: { ka: 'კლინიკის ხელმძღვანელი / იმპლანტოლოგი', en: 'Clinic Head / Implantologist' }, image: 'https://framerusercontent.com/images/NL9ZihxOkco4TeWtDDi8fz20.jpg' },
  { id: 'giorgi-beridze', name: { ka: 'გიორგი ბერიძე', en: 'Giorgi Beridze' }, role: { ka: 'თერაპევტი / ორთოდონტი', en: 'Therapist / Orthodontist' }, image: 'https://framerusercontent.com/images/Es82GeniQfvbrLe8GIg5ctOEq6M.jpg' },
  { id: 'nino-kapanadze', name: { ka: 'ნინო კაპანაძე', en: 'Nino Kapanadze' }, role: { ka: 'ბავშვთა სტომატოლოგი', en: 'Pediatric Dentist' }, image: 'https://framerusercontent.com/images/0JhnuSVKqzhBvoFbmldufpEA.jpg' },
  { id: 'david-makharadze', name: { ka: 'დავით მახარაძე', en: 'David Makharadze' }, role: { ka: 'ყბა-სახის ქირურგი', en: 'Maxillofacial Surgeon' }, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800' },
  { id: 'mariam-chelidze', name: { ka: 'მარიამ ჭელიძე', en: 'Mariam Chelidze' }, role: { ka: 'ორთოდონტი', en: 'Orthodontist' }, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800' },
  { id: 'levan-akhvlediani', name: { ka: 'ლევან ახვლედიანი', en: 'Levan Akhvlediani' }, role: { ka: 'იმპლანტოლოგი', en: 'Implantologist' }, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800' },
  { id: 'natia-kvaratskhelia', name: { ka: 'ნათია კვარაცხელია', en: 'Natia Kvaratskhelia' }, role: { ka: 'თერაპევტი', en: 'Therapist' }, image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c77d?auto=format&fit=crop&q=80&w=800' },
  { id: 'zurab-chxeidze', name: { ka: 'ზურაბ ჩხეიძე', en: 'Zurab Chkheidze' }, role: { ka: 'ორთოპედი', en: 'Orthopedist' }, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800' },
  { id: 'ana-tabatadze', name: { ka: 'ანა ტაბატაძე', en: 'Ana Tabatadze' }, role: { ka: 'პერიოდონტოლოგი', en: 'Periodontologist' }, image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800' },
  { id: 'elene-japharidze', name: { ka: 'ელენე ჯაფარიძე', en: 'Elene Japharidze' }, role: { ka: 'ასისტენტი', en: 'Assistant' }, image: 'https://images.unsplash.com/photo-1631815541552-b9f0827e8c45?auto=format&fit=crop&q=80&w=800' },
  { id: 'giga-kobakhidze', name: { ka: 'გიგა კობახიძე', en: 'Giga Kobakhidze' }, role: { ka: 'ასისტენტი', en: 'Assistant' }, image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800' },
  { id: 'tamar-lomidze', name: { ka: 'თამარ ლომიძე', en: 'Tamar Lomidze' }, role: { ka: 'ასისტენტი', en: 'Assistant' }, image: 'https://images.unsplash.com/photo-1590611380053-9dc3904a43c7?auto=format&fit=crop&q=80&w=800' },
  { id: 'ketevan-shengelia', name: { ka: 'ქეთევან შენგელია', en: 'Ketevan Shengelia' }, role: { ka: 'მენეჯერი', en: 'Manager' }, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
  { id: 'salome-gurgenidze', name: { ka: 'სალომე გურგენიძე', en: 'Salome Gurgenidze' }, role: { ka: 'რეცეფცია', en: 'Reception' }, image: 'https://images.unsplash.com/photo-1586767912890-f82a89789299?auto=format&fit=crop&q=80&w=800' },
  { id: 'nikoloz-tsereteli', name: { ka: 'ნიკოლოზ წერეთელი', en: 'Nikoloz Tsereteli' }, role: { ka: 'ქირურგი', en: 'Surgeon' }, image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&q=80&w=800' },
  { id: 'maia-kalandadze', name: { ka: 'მაია კალანდაძე', en: 'Maia Kalandadze' }, role: { ka: 'თერაპევტი', en: 'Therapist' }, image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800' },
  { id: 'vakhtang-kakhidze', name: { ka: 'ვახტანგ კახიძე', en: 'Vakhtang Kakhidze' }, role: { ka: 'ორთოდონტი', en: 'Orthodontist' }, image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
  { id: 'sophio-kvantaliani', name: { ka: 'სოფიო კვანტალიანი', en: 'Sophio Kvantaliani' }, role: { ka: 'თერაპევტი', en: 'Therapist' }, image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800' },
  { id: 'irakli-gabunia', name: { ka: 'ირაკლი გაბუნია', en: 'Irakli Gabunia' }, role: { ka: 'ასისტენტი', en: 'Assistant' }, image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800' },
  { id: 'mzia-chikovani', name: { ka: 'მზია ჩიქოვანი', en: 'Mzia Chikovani' }, role: { ka: 'ასისტენტი', en: 'Assistant' }, image: 'https://images.unsplash.com/photo-1631815541552-b9f0827e8c45?auto=format&fit=crop&q=80&w=800' },
  { id: 'beka-zhvania', name: { ka: 'ბექა ჟვანია', en: 'Beka Zhvania' }, role: { ka: 'ადმინისტრატორი', en: 'Administrator' }, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800' },
  { id: 'khatia-tsitsishvili', name: { ka: 'ხატია ციციშვილი', en: 'Khatia Tsitsishvili' }, role: { ka: 'ჰიგიენისტი', en: 'Hygienist' }, image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c77d?auto=format&fit=crop&q=80&w=800' },
  { id: 'guram-menabde', name: { ka: 'გურამ მენაბდე', en: 'Guram Menabde' }, role: { ka: 'ტექნიკოსი', en: 'Technician' }, image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800' },
  { id: 'nata-gelashvili', name: { ka: 'ნატა გელაშვილი', en: 'Nata Gelashvili' }, role: { ka: 'რეცეფცია', en: 'Reception' }, image: 'https://images.unsplash.com/photo-1586767912890-f82a89789299?auto=format&fit=crop&q=80&w=800' },
];

const TeamPage: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  return (
    <div className="py-12 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto bg-white min-h-screen">
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-4xl md:text-8xl font-bold text-gray-900 uppercase mb-4 tracking-tighter">{t.teamPage.title}</h1>
        <p className="text-base md:text-xl text-[#005a5a] max-w-2xl mx-auto font-bold uppercase tracking-widest">{t.teamPage.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamData.map((member) => (
          <Link key={member.id} to={`/team/${member.id}`} className="group block">
            <div className="relative h-[400px] rounded-[2rem] overflow-hidden mb-4 shadow-sm group-hover:shadow-2xl transition-all duration-500">
              <img src={member.image} alt={member.name[lang]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="px-2 text-center">
              <h3 className="text-xl font-bold text-gray-900 uppercase group-hover:text-[#005a5a] transition-colors">{member.name[lang]}</h3>
              <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">{member.role[lang]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
