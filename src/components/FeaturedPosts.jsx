import { Link } from 'react-router-dom'
import postsData from '../data/posts.json'

function FeaturedPosts() {
  const featured = postsData.posts.filter((p) => p.featured)

  return (
    <section className="max-w-5xl mx-auto px-6 py-10 space-y-8">
      {featured.map((post) => (
        <div key={post.id} className="grid md:grid-cols-2 bg-white/5 rounded-2xl overflow-hidden">
          <div className="relative">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <span className="absolute top-4 left-4 bg-orange-500 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <i className="fa-solid fa-star"></i>
              <span>مميز</span>
            </span>
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">{post.category}</span>
                <span className="flex items-center gap-1">
                  <span>{post.readTime}</span>
                  <i className="fa-regular fa-clock"></i>
                </span>
              </div>
              <h3 className="text-2xl font-extrabold mb-3">{post.title}</h3>
              <p className="text-gray-400 mb-6">{post.excerpt}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-sm">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
              <Link to={`/blog/${post.slug}`} className="flex items-center gap-2 text-orange-500 font-bold text-sm">
                <span>اقرأ المقال</span>
                <i className="fa-solid fa-arrow-left"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default FeaturedPosts