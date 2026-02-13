import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const BlogPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const posts = Object.entries(t.blogPage.posts).map(([id, data]: [string, any]) => ({
    id,
    ...data
  }));

  return (
    <div className="py-20 px-4 md:px-10 max-w-[1440px] mx-auto bg-white min-h-screen">
      <div className={`mb-20 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl md:text-8xl font-bold text-gray-900 uppercase mb-6 tracking-tighter">{t.blogPage.title}</h1>
        <p className="text-[#005a5a] text-xl font-bold uppercase tracking-widest max-w-2xl mx-auto">{t.blogPage.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: any, index: number) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`} 
            className={`group flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative h-[300px] overflow-hidden">
              <img src={post.image || "https://framerusercontent.com/images/PCHp4YGU02Gr9bhVeNxl3NlwDeE.jpg"} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-[#005a5a] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">{post.category}</div>
            </div>
            <div className="p-10 flex flex-col flex-1">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">{post.date}</span>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-[#005a5a] transition-colors uppercase mb-4">{post.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed line-clamp-3 mb-8">{post.excerpt || post.content}</p>
              <div className="mt-auto flex items-center gap-2 text-[#005a5a] font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                {t.blogPage.readMore}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;