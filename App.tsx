
import React, { createContext, useContext, useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Treatments from './components/Treatments';
import Equipment from './components/Equipment';
import Footer from './components/Footer';

import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import TeamMemberPage from './pages/TeamMemberPage';
import ServicesPage from './pages/ServicesPage';
import PricePage from './pages/PricePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

type Language = 'ka' | 'en';
interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'ka',
  setLang: () => {},
});

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Treatments />
      <Equipment />
    </main>
  );
};

const App: React.FC = () => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('site-lang');
    return (saved as Language) || 'ka';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('site-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/team/:id" element={<TeamMemberPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/price" element={<PricePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
