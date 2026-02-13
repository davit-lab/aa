import React, { useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../i18n';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);
  const t = translations[lang];
  
  const blogPosts = Object.entries(t.blogPage.posts).map(([postId, data]: [string, any]) => ({
    id: postId,
    ...data
  }));
  
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">{lang === 'ka' ? 'ბლოგი ვერ მოიძებნა' : 'Blog not found'}</h2>
          <Link to="/blog" className="text-[#005a5a] font-bold underline">{lang === 'ka' ? 'უკან დაბრუნება' : 'Back to blog'}</Link>
        </div>
      </div>
    );
  }

  // Localized Content Map
  const localizedContentMap: Record<string, Record<'ka' | 'en', React.ReactElement>> = {
    'implant-care': {
      ka: (
        <>
          <p>კბილის იმპლანტაცია თანამედროვე სტომატოლოგიის ერთ-ერთი ყველაზე ეფექტური მეთოდია დაკარგული კბილების აღსადგენად. თუმცა, იმპლანტის ხანგრძლივობა დიდწილად დამოკიდებულია იმაზე, თუ როგორ მოუვლით მას ოპერაციის შემდეგ.</p>
          <h3 className="text-2xl font-bold text-gray-900 uppercase my-6">ჰიგიენა - მთავარი პრიორიტეტი</h3>
          <p>იმპლანტი არ ფუჭდება კარიესით, თუმცა მის ირგვლივ არსებული ქსოვილები (ღრძილი და ძვალი) შეიძლება დაავადდეს. პერიიმპლანტიტი არის ანთებითი პროცესი, რომელიც ხშირად არასწორი ჰიგიენის შედეგია.</p>
          <ul className="list-disc pl-5 space-y-4 my-6">
            <li>გამოიყენეთ რბილი ჯაგრისი და სპეციალური კბილის პასტა.</li>
            <li>ინტერდენტალური ჯაგრისები და ირიგატორი აუცილებელია იმპლანტის ირგვლივ ძნელად მისადგომი ადგილების გასაწმენდად.</li>
            <li>პროფესიონალური წმენდა კლინიკაში წელიწადში მინიმუმ ორჯერ.</li>
          </ul>
          <p>მოერიდეთ ძალიან მყარი საკვების (თხილეული, ყინული) უშუალოდ იმპლანტით ღეჭვას პირველ პერიოდში, რათა თავიდან აიცილოთ გვირგვინის დაზიანება.</p>
        </>
      ),
      en: (
        <>
          <p>Dental implantation is one of the most effective methods of modern dentistry to restore missing teeth. However, the longevity of the implant largely depends on how you care for it after the surgery.</p>
          <h3 className="text-2xl font-bold text-gray-900 uppercase my-6">Hygiene - A Main Priority</h3>
          <p>The implant itself does not decay from caries, but the surrounding tissues (gums and bone) can become diseased. Peri-implantitis is an inflammatory process that is often the result of improper hygiene.</p>
          <ul className="list-disc pl-5 space-y-4 my-6">
            <li>Use a soft toothbrush and special toothpaste.</li>
            <li>Interdental brushes and an irrigator are essential for cleaning hard-to-reach areas around the implant.</li>
            <li>Professional cleaning at the clinic at least twice a year.</li>
          </ul>
          <p>Avoid chewing very hard foods (nuts, ice) directly with the implant during the initial period to prevent damage to the crown.</p>
        </>
      )
    },
    'braces-timing': {
      ka: (
        <>
          <p>ბევრი ადამიანი ფიქრობს, რომ ბრეკეტები მხოლოდ თინეიჯერობის ასაკშია ეფექტური. სინამდვილეში, ორთოდონტიული მკურნალობა წარმატებით ტარდება ნებისმიერ ასაკში, თუმცა არსებობს "ოქროს შუალედი".</p>
          <h3 className="text-2xl font-bold text-gray-900 uppercase my-6">როდის მივიყვანოთ ბავშვი პირველად?</h3>
          <p>ორთოდონტთა ასოციაციის რეკომენდაციით, ბავშვის პირველი შემოწმება ორთოდონტთან 7 წლის ასაკში უნდა მოხდეს. ამ დროს ყბების ზრდა ჯერ კიდევ აქტიურია და ბევრი პრობლემის პრევენცია უფრო მარტივია.</p>
          <h3 className="text-2xl font-bold text-gray-900 uppercase my-6">მოზრდილთა ორთოდონტია</h3>
          <p>დღესდღეობით პაციენტების 30%-ზე მეტი ზრდასრული ადამიანია. თანამედროვე გამჭვირვალე ბრეკეტები ან ელაინერები მკურნალობას თითქმის შეუმჩნეველს ხდის, რაც კარიერასა და სოციალურ ცხოვრებაში დისკომფორტს არ ქმნის.</p>
        </>
      ),
      en: (
        <>
          <p>Many people think that braces are only effective during teenage years. In fact, orthodontic treatment is successfully performed at any age, although there is a "golden mean."</p>
          <h3 className="text-2xl font-bold text-gray-900 uppercase my-6">When to bring a child for the first time?</h3>
          <p>According to the Orthodontic Association recommendations, a child's first check-up with an orthodontist should take place at age 7. At this age, jaw growth is still active, and many problems are easier to prevent.</p>
          <h3 className="text-2xl font-bold text-gray-900 uppercase my-6">Adult Orthodontics</h3>
          <p>Nowadays, more than 30% of patients are adults. Modern transparent braces or aligners make treatment almost invisible, creating no discomfort in career or social life.</p>
        </>
      )
    },
    'veneers-aesthetic': {
      ka: (
        <>
          <p>ჰოლივუდის ღიმილი აღარ არის მხოლოდ ვარსკვლავების პრივილეგია. ვინირები - ეს არის თხელი, მაღალტექნოლოგიური ფაიფურის ფირფიტები, რომლებიც მაგრდება კბილის წინა ზედაპირზე.</p>
          <h3 className="text-2xl font-bold text-gray-900 uppercase my-6">რა პრობლემებს აგვარებს ვინირი?</h3>
          <ul className="list-disc pl-5 space-y-4 my-6">
            <li>კბილების არასასურველი ფერი (რომელიც არ ექვემდებარება გათეთრებას).</li>
            <li>კბილებს შორის ნაპრალები (დიასთემები).</li>
            <li>კბილის ფორმის ანომალიები და მცირე სიმრუდე.</li>
            <li>კბილის ემალის ბზარები და ცვეთა.</li>
          </ul>
          <p>Smile Agency-ში ჩვენ ვიყენებთ ციფრულ დაგეგმარებას, რაც საშუალებას გაძლევთ ნახოთ მომავალი ღიმილი პროცედურის დაწყებამდე.</p>
        </>
      ),
      en: (
        <>
          <p>A Hollywood smile is no longer just a privilege for stars. Veneers are thin, high-tech porcelain plates that are attached to the front surface of the tooth.</p>
          <h3 className="text-2xl font-bold text-gray-900 uppercase my-6">What problems do veneers solve?</h3>
          <ul className="list-disc pl-5 space-y-4 my-6">
            <li>Undesired tooth color (that does not respond to whitening).</li>
            <li>Gaps between teeth (diastemas).</li>
            <li>Tooth shape anomalies and slight misalignment.</li>
            <li>Cracks and wear of tooth enamel.</li>
          </ul>
          <p>At Smile Agency, we use digital planning, which allows you to see your future smile before starting the procedure.</p>
        </>
      )
    }
  };

  return (
    <article className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <span className="bg-[#005a5a] text-white text-xs font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full mb-6">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter max-w-5xl leading-tight">
            {post.title}
          </h1>
          <p className="text-white/80 mt-6 font-bold uppercase tracking-widest text-sm">
            {post.date} • Smile Agency
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-16 md:py-24 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 lg:col-start-3">
          <div className="mb-12">
            <button 
              onClick={() => navigate('/blog')}
              className="flex items-center gap-3 text-gray-400 hover:text-[#005a5a] font-bold uppercase text-xs tracking-widest transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {lang === 'ka' ? 'ყველა ბლოგი' : 'All blog posts'}
            </button>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-[1.8]">
            {localizedContentMap[post.id] ? localizedContentMap[post.id][lang] : (
              <>
                <p>{post.excerpt}</p>
                <p className="mt-8">{lang === 'ka' ? 'დეტალური ინფორმაცია ამ თემაზე მალე დაემატება. ჩვენი კლინიკის სპეციალისტები მუშაობენ საუკეთესო რჩევების მოსამზადებლად.' : 'Detailed information on this topic will be added soon. Our clinic specialists are working on preparing the best advice.'}</p>
              </>
            )}
          </div>

          <div className="mt-20 p-8 md:p-12 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 uppercase mb-2 tracking-tight">{lang === 'ka' ? 'გაქვთ კითხვები?' : 'Have questions?'}</h4>
              <p className="text-gray-500 font-medium">{lang === 'ka' ? 'ჩვენი გუნდი მზად არის დაგეხმაროთ ნებისმიერ დროს.' : 'Our team is ready to help you anytime.'}</p>
            </div>
            <Link to="/contact" className="bg-[#005a5a] text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform shrink-0">
              {lang === 'ka' ? 'კონსულტაცია' : 'Consultation'}
            </Link>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      <div className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase mb-12 tracking-tight">{lang === 'ka' ? 'სხვა სიახლეები' : 'Other News'}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((related) => (
              <Link key={related.id} to={`/blog/${related.id}`} className="group">
                <div className="h-[250px] rounded-[2rem] overflow-hidden mb-6">
                  <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 uppercase leading-tight group-hover:text-[#005a5a] transition-colors line-clamp-2">
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;