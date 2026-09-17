import { Link } from 'react-router-dom'
import postsData from '../data/posts.json'

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="text-right">
          <div className="flex items-center justify-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">
              ع
            </div>
            <p className="font-extrabold text-lg">عدسة</p>
          </div>
          <p className="text-gray-400 text-sm mb-5">{postsData.siteInfo.description}</p>
          <div className="flex justify-start gap-3">
            <a href={postsData.siteInfo.social.twitter} className="w-9 h-9 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-orange-500 transition"><i className="fa-brands fa-x-twitter"></i></a>
            <a href={postsData.siteInfo.social.github} className="w-9 h-9 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-orange-500 transition"><i className="fa-brands fa-github"></i></a>
            <a href={postsData.siteInfo.social.linkedin} className="w-9 h-9 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-orange-500 transition"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href={postsData.siteInfo.social.youtube} className="w-9 h-9 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-orange-500 transition"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        <div>
          <h4 className="flex items-center gap-2 font-bold mb-4">
            <span className="w-6 h-px bg-orange-500"></span>
            <span>استكشف</span>
            
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-orange-500 transition">الرئيسية</Link></li>
            <li><Link to="/blog" className="hover:text-orange-500 transition">المدونة</Link></li>
            <li><Link to="/about" className="hover:text-orange-500 transition">من نحن</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="flex items-center gap-2 font-bold mb-4">
            <span className="w-6 h-px bg-orange-500"></span>
            <span>التصنيفات</span>
            
          </h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {postsData.categories.map((cat) => (
              <li key={cat.name}>
                <Link to={`/blog?category=${encodeURIComponent(cat.name)}`} className="hover:text-orange-500 transition">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="flex items-center gap-2 font-bold mb-4">
            <span className="w-6 h-px bg-orange-500"></span>
            <span>ابق على اطلاع</span>
            
          </h4>
          <p className="text-gray-400 text-sm mb-4">اشترك للحصول على أحدث المقالات والتحديثات</p>
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm mb-3 outline-none"
          />
          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2.5 rounded-lg text-sm font-bold">
            اشترك
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-3">
        <p>© 2026 عدسة. صنع بكل ❤️ جميع الحقوق محفوظة.</p>
        <div className="flex gap-4">
          <span>شروط الخدمة</span>
          <span>سياسة الخصوصية</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer