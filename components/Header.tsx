
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang];
  
  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about-us' },
    { label: t.nav.team, path: '/team' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.price, path: '/price' },
    { label: t.nav.blog, path: '/blog' },
    { label: t.nav.contact, path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-11 md:h-[70px] flex items-center justify-between">
          <Link to="/" className="relative z-[1100] transition-transform active:scale-95 flex items-center">
            <img 
              src="https://framerusercontent.com/images/0RLn6DL4qHZwAL47gzRU28dnWk.png" 
              alt="Smile Agency" 
              className="h-5 md:h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-[12px] font-black uppercase tracking-[0.1em] transition-all relative group ${
                      isActive ? 'text-[#005a5a]' : 'text-gray-400 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#005a5a] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Language Switcher Desktop */}
            <div className="flex items-center gap-3 border-l border-gray-100 pl-6 h-6">
              <button 
                onClick={() => setLang('ka')}
                className={`text-[10px] font-black transition-colors ${lang === 'ka' ? 'text-[#005a5a]' : 'text-gray-300 hover:text-gray-600'}`}
              >
                GE
              </button>
              <span className="text-gray-200 text-[10px]">|</span>
              <button 
                onClick={() => setLang('en')}
                className={`text-[10px] font-black transition-colors ${lang === 'en' ? 'text-[#005a5a]' : 'text-gray-300 hover:text-gray-600'}`}
              >
                EN
              </button>
            </div>
            
            <Link 
              to="/contact" 
              className="bg-[#005a5a] text-white px-7 py-2.5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-gray-900 transition-all active:scale-95 shadow-sm"
            >
              {t.nav.book}
            </Link>
          </nav>

          <div className="flex items-center gap-4 lg:hidden relative z-[1100]">
             {/* Language Switcher Mobile */}
             <button 
                onClick={() => setLang(lang === 'ka' ? 'en' : 'ka')}
                className="text-[10px] font-black text-[#005a5a] bg-gray-100 px-3 py-1 rounded-full uppercase"
              >
                {lang === 'ka' ? 'EN' : 'GE'}
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-8 h-8 flex flex-col items-center justify-center gap-1 focus:outline-none"
              >
                <span className={`w-5 h-0.5 bg-[#005a5a] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-5 h-0.5 bg-[#005a5a] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-0.5 bg-[#005a5a] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-[#005a5a] z-[1050] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 z-[1200] w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <div className="h-full flex flex-col pt-16 px-8 pb-8 overflow-y-auto hide-scrollbar">
            <nav className="flex flex-col gap-0.5 mb-6">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`menu-item-enter text-[26px] font-black uppercase tracking-tighter py-1.5 flex items-center gap-3 ${
                      isActive ? 'text-white' : 'text-white/30'
                    }`}
                    style={{ transitionDelay: `${index * 40 + 100}ms` }}
                  >
                    {isActive && <span className="w-2 h-2 bg-white rounded-full shrink-0" />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="menu-item-enter mb-6 rounded-2xl overflow-hidden h-[160px] shrink-0 border border-white/10 shadow-lg" style={{ transitionDelay: '450ms' }}>
              <iframe 
                src="https://maps.google.com/maps?q=41.7166158,44.7747431&z=17&output=embed" 
                className="w-full h-full border-0 grayscale opacity-80"
                title="Mobile Menu Map"
              ></iframe>
            </div>

            <div className="mt-auto grid grid-cols-2 gap-3 menu-item-enter" style={{ transitionDelay: '550ms' }}>
                <a href="tel:+995555585356" className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <span className="text-[7px] text-white/40 font-bold uppercase block">{t.common.call}</span>
                  <span className="text-white font-bold text-[11px]">555 58 53 56</span>
                </a>
                <Link to="/contact" className="bg-white p-4 rounded-xl shadow-lg">
                  <span className="text-[7px] text-[#005a5a]/60 font-bold uppercase block">{t.nav.book}</span>
                  <span className="text-[#005a5a] font-bold text-[11px]">{t.common.bookVisit}</span>
                </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="h-11 md:h-[70px] w-full" />
    </>
  );
};

export default Header;
