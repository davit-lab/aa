import React, { useState, useEffect, useContext } from 'react';
import { teamData } from './TeamPage';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const ContactPage: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    concern: '',
    timeFrom: '',
    timeTo: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.doctor) {
      alert(lang === 'ka' ? 'გთხოვთ აირჩიოთ ექიმი' : 'Please select a doctor');
      return;
    }
    
    setStatus('submitting');
    const formPayload = new FormData();
    formPayload.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); 
    formPayload.append("subject", `New Booking: ${formData.name}`);
    formPayload.append("Name", formData.name);
    formPayload.append("Phone", formData.phone);
    formPayload.append("Email", formData.email);
    formPayload.append("Doctor", formData.doctor);
    formPayload.append("Concern", formData.concern);
    formPayload.append("Preferred Time", `${formData.timeFrom} - ${formData.timeTo}`);
    formPayload.append("Message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', doctor: '', concern: '', timeFrom: '', timeTo: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-6 md:pt-20 pb-16 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Info Side (Left) */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            <div className="space-y-3">
              <span className="text-[#005a5a] font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs block">{t.contactPage.connect}</span>
              <h1 className="text-4xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none">{t.contactPage.title}</h1>
            </div>
            
            <div className="grid gap-6 md:gap-10">
              <div className="border-l-[3px] border-[#005a5a] pl-6 py-1">
                <h4 className="text-[#005a5a] font-bold text-[9px] uppercase tracking-[0.2em] mb-2 opacity-50">{lang === 'ka' ? 'მისამართი' : 'Address'}</h4>
                <p className="text-lg md:text-2xl font-bold text-gray-800 leading-snug">{t.common.address}</p>
              </div>
              <div className="border-l-[3px] border-[#005a5a] pl-6 py-1">
                <h4 className="text-[#005a5a] font-bold text-[9px] uppercase tracking-[0.2em] mb-2 opacity-50">{t.contactPage.phone}</h4>
                <p className="text-2xl md:text-4xl font-black text-gray-900 tracking-tighter">555 58 53 56</p>
              </div>
            </div>
          </div>

          {/* Form Side (Right) - Now more compact */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#f8fafb] p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-[#005a5a] rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#005a5a] uppercase tracking-wide">{t.common.sent}</h3>
                  <p className="text-gray-500 mt-2 font-medium text-sm">{t.common.wait}</p>
                </div>
              ) : (
                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight border-b border-gray-200 pb-4">{t.contactPage.formTitle}</h3>
                  
                  {/* Doctor Selection - Optimized height */}
                  <div className="space-y-3">
                    <p className="text-[9px] font-black text-[#005a5a] uppercase tracking-[0.2em] pl-1">{t.contactPage.chooseDoctor}</p>
                    <div className="flex gap-2.5 overflow-x-auto hide-scrollbar pb-1 snap-x -mx-1 px-1">
                      {teamData.slice(0, 12).map((member) => (
                        <button
                          key={member.id}
                          type="button"
                          onClick={() => setFormData(prev => ({...prev, doctor: member.name[lang]}))}
                          className={`flex-shrink-0 w-[60px] md:w-[75px] transition-all duration-300 ${formData.doctor === member.name[lang] ? 'scale-105 opacity-100' : 'opacity-50 grayscale hover:opacity-80'}`}
                        >
                          <div className={`relative aspect-square rounded-xl md:rounded-2xl overflow-hidden mb-1.5 border-2 transition-colors ${formData.doctor === member.name[lang] ? 'border-[#005a5a] shadow-md shadow-[#005a5a]/20' : 'border-white bg-white'}`}>
                            <img src={member.image} alt={member.name[lang]} className="w-full h-full object-cover" />
                          </div>
                          <p className={`text-[8px] md:text-[9px] font-bold uppercase text-center truncate px-0.5 transition-colors ${formData.doctor === member.name[lang] ? 'text-[#005a5a]' : 'text-gray-400'}`}>
                            {member.name[lang].split(' ')[0]}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs Grid - Compact padding */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder={t.contactPage.name} 
                      className="w-full p-3.5 md:p-4 rounded-xl bg-white border border-transparent shadow-sm outline-none focus:ring-2 focus:ring-[#005a5a]/10 focus:border-[#005a5a] transition-all text-sm font-medium" 
                    />
                    <input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      type="tel" 
                      placeholder={t.contactPage.phonePlaceholder} 
                      className="w-full p-3.5 md:p-4 rounded-xl bg-white border border-transparent shadow-sm outline-none focus:ring-2 focus:ring-[#005a5a]/10 focus:border-[#005a5a] transition-all text-sm font-medium" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">{t.contactPage.time}</label>
                      <div className="flex gap-2">
                        <input name="timeFrom" value={formData.timeFrom} onChange={handleChange} required type="time" className="flex-1 p-3 rounded-lg bg-white border border-transparent shadow-sm outline-none text-xs font-bold text-[#005a5a]" />
                        <input name="timeTo" value={formData.timeTo} onChange={handleChange} required type="time" className="flex-1 p-3 rounded-lg bg-white border border-transparent shadow-sm outline-none text-xs font-bold text-[#005a5a]" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">{t.contactPage.concern}</label>
                      <input name="concern" value={formData.concern} onChange={handleChange} required placeholder={t.contactPage.concernPlaceholder} className="w-full p-3 rounded-lg bg-white border border-transparent shadow-sm outline-none focus:border-[#005a5a] text-xs md:text-sm font-medium" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[8px] font-black text-gray-400 uppercase tracking-widest pl-1">{t.contactPage.message}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="..." rows={2} className="w-full p-4 rounded-xl bg-white border border-transparent shadow-sm outline-none focus:border-[#005a5a] text-sm font-medium resize-none"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'} 
                    className="w-full py-4 md:py-5 bg-[#005a5a] text-white font-black rounded-xl uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-lg hover:bg-gray-900 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
                  >
                    {status === 'submitting' && (
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {status === 'submitting' ? t.common.sending : t.contactPage.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;