import { Link } from 'react-router-dom'
import postsData from '../data/posts.json'

const stats = [
  { value: '+2مليون', label: 'قارئ شهرياً', icon: 'fa-solid fa-users' },
  { value: '500+', label: 'مقالة منشورة', icon: 'fa-solid fa-newspaper' },
  { value: '50+', label: 'كاتب خبير', icon: 'fa-solid fa-pen-nib' },
  { value: '15+', label: 'تصنيف', icon: 'fa-solid fa-book-open' },
]

const values = [
  { title: 'الجودة أولاً', desc: 'محتوى مدروس ومكتوب بخبرة', icon: 'fa-solid fa-bullseye' },
  { title: 'تركيز عملي', desc: 'أمثلة واقعية يمكنك تطبيقها اليوم', icon: 'fa-solid fa-bolt' },
  { title: 'المجتمع', desc: 'تعلم مع آلاف المصورين', icon: 'fa-solid fa-handshake' },
  { title: 'دائماً محدث', desc: 'أحدث الاتجاهات وأفضل الممارسات', icon: 'fa-solid fa-arrows-rotate' },
]

const teamNames = [
  'إبراهيم حسن',
  'محمد علي',
  'سالم أحمد',
  'هاني الشمري',
  'نادر سعيد',
  'خالد الفيصل',
  'سامي الحربي',
  'فارس العلي',
  'عمر الراشد',
]

function About() {
  const team = teamNames
    .map((name) => postsData.posts.find((p) => p.author.name === name)?.author)
    .filter(Boolean)

  return (
    <div>
      <section className="max-w-4xl mx-auto text-center px-6 py-16">
        <p className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-orange-500 text-sm font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span>من نحن</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          مهمتنا هي <span className="text-orange-500">الإعلام والإلهام</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 hover:bg-white/10 transition rounded-2xl py-6">
              <i className={`${s.icon} text-orange-500 text-2xl mb-3`}></i>
              <p className="text-3xl font-extrabold text-orange-500 mb-1">{s.value}</p>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-extrabold mb-3">
          <span className="w-1 h-7 bg-orange-500"></span>
          <span>قيمنا</span>
          <span className="w-1 h-7 bg-orange-500"></span>
        </h2>
        <p className="text-gray-400 mb-10">المبادئ التي توجه كل ما نقوم بإنشائه</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white/5 hover:bg-orange-500/10 border border-white/5 hover:border-orange-500 transition rounded-2xl p-6"
            >
              <i className={`${v.icon} text-orange-500 text-2xl mb-4`}></i>
              <p className="font-bold mb-2">{v.title}</p>
              <p className="text-sm text-gray-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-orange-500 text-sm font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span>فريقنا</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">تعرف على كتابنا</h2>
        <p className="text-gray-400 mb-10">فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 border border-white/5 hover:border-orange-500 transition rounded-2xl p-8"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full object-cover" />
                <span className="absolute bottom-0 left-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-black">
                  <i className="fa-solid fa-check text-xs"></i>
                </span>
              </div>
              <p className="font-bold mb-1">{member.name}</p>
              <p className="text-orange-500 text-sm mb-4">{member.role}</p>
              <div className="flex items-center justify-center gap-3">
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-orange-500 transition"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-orange-500 transition"><i className="fa-brands fa-github"></i></a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-orange-500 transition"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="bg-linear-to-l from-orange-600 to-amber-400 p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">لديك أسئلة؟ دعنا نتحدث!</h2>
          <p className="mb-8 max-w-xl mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href={`mailto:${postsData.siteInfo.email}`} className="flex items-center gap-2 bg-black hover:bg-gray-900 transition px-6 py-3 rounded-2xl font-bold">
              <span>تواصل معنا</span>
              <i className="fa-solid fa-envelope"></i>
            </a>
            <Link to="/blog" className="flex items-center gap-2 border border-black/30 hover:bg-white text-black transition px-6 py-3 rounded-2xl font-bold">
              <span>تصفح المقالات</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About