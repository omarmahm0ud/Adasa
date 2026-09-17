import { Link } from 'react-router-dom'
import postsData from '../data/posts.json'

function LatestPosts() {
  const latest = [...postsData.posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="flex items-center gap-2 text-orange-500 text-sm font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>الأحدث</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">أحدث المقالات</h2>
          <p className="text-gray-400 mt-2">محتوى جديد طازج من المطبعة</p>
        </div>
        <Link to="/blog" className="hidden md:flex items-center gap-2 text-orange-500 font-bold">
          <span>عرض جميع المقالات</span>
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {latest.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition block">
            <div className="relative h-48">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              <span className="absolute top-3 right-3 bg-black/70 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <i className="fa-regular fa-clock"></i>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-extrabold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold">{post.author.name}</p>
                    <p className="text-xs text-gray-500">{post.author.role}</p>
                  </div>
                </div>
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10">
                  <i className="fa-solid fa-chevron-left text-orange-500 text-xs"></i>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default LatestPosts