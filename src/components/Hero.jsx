import { Link } from 'react-router-dom'

const stats = [
  { label: 'مقالة', value: '+50' },
  { label: 'قارئ', value: '+10ألف' },
  { label: 'تصنيفات', value: '4' },
  { label: 'كاتب', value: '6' },
]

function Hero() {
  return (
    <section className="max-w-5xl mx-auto text-center px-6 py-16">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        اكتشف <span className="text-orange-500">فن</span> التصوير الفوتوغرافي
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
        انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
      </p>
      <div className="flex items-center justify-center gap-4 mb-14">
        <Link to="/blog" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-bold">
          <span>استكشف المقالات</span>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <Link to="/about" className="flex items-center gap-2 border border-white/20 hover:bg-white/10 transition px-6 py-3 rounded-full font-bold">
          <i className="fa-solid fa-circle-info"></i>
          <span>اعرف المزيد</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/5 hover:bg-white/10 transition rounded-2xl py-6">
            <p className="text-3xl font-extrabold text-orange-500 mb-1">{s.value}</p>
            <p className="text-sm text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero