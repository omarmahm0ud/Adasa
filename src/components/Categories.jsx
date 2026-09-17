import { Link } from 'react-router-dom'
import postsData from '../data/posts.json'

const icons = {
  'تقنيات': 'fa-solid fa-sliders',
  'مناظر طبيعية': 'fa-solid fa-mountain',
  'بورتريه': 'fa-solid fa-user',
  'إضاءة': 'fa-solid fa-sun',
  'معدات': 'fa-solid fa-gear',
}

function Categories() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <p className="flex items-center justify-center gap-2 text-orange-500 text-sm font-bold mb-3">
        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
        <span>التصنيفات</span>
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3">استكشف حسب الموضوع</h2>
      <p className="text-gray-400 mb-10">اعثر على محتوى مصمم حسب اهتماماتك</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {postsData.categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/blog?category=${encodeURIComponent(cat.name)}`}
            className="bg-white/5 hover:bg-orange-500/20 border border-white/5 hover:border-orange-500 transition rounded-2xl p-6 flex flex-col items-center gap-3"
          >
            <i className={`${icons[cat.name] || 'fa-solid fa-gear'} text-orange-500 text-2xl`}></i>
            <p className="font-bold">{cat.name}</p>
            <p className="text-sm text-gray-400">{cat.count} مقالة</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories