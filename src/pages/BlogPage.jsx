import { useState } from 'react'
import { Link } from 'react-router-dom'
import postsData from '../data/posts.json'

const POSTS_PER_PAGE = 6

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('category') || 'جميع المقالات'
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState('grid')

  let filteredPosts = postsData.posts

  if (selectedCategory !== 'جميع المقالات') {
    filteredPosts = filteredPosts.filter((p) => p.category === selectedCategory)
  }

  if (searchTerm.trim() !== '') {
    filteredPosts = filteredPosts.filter(
      (p) => p.title.includes(searchTerm) || p.excerpt.includes(searchTerm)
    )
  }

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat)
    setCurrentPage(1)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <p className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-orange-500 text-sm font-bold mb-6">
          <span>مدونتنا</span>
          <i className="fa-regular fa-newspaper"></i>
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          استكشف <span className="text-orange-500">مقالاتنا</span>
        </h1>
        <p className="text-gray-400">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sticky top-18 z-40 bg-[#0a0a0af0] py-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="ابحث في المقالات..."
            className="bg-white/5 border border-white/10 rounded-full pl-5 pr-11 py-2.5 text-sm outline-none w-64"
          />
          <i className="fa-solid fa-magnifying-glass absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"></i>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => handleCategoryClick('جميع المقالات')}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition ${
              selectedCategory === 'جميع المقالات'
                ? 'bg-orange-500 text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            جميع المقالات
          </button>
          {postsData.categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition ${
                selectedCategory === cat.name
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
        <p className="text-gray-400 text-sm">عرض {filteredPosts.length} مقالة</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
              viewMode === 'grid' ? 'bg-orange-500' : 'bg-white/5 text-gray-400'
            }`}
          >
            <i className="fa-solid fa-grip"></i>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition ${
              viewMode === 'list' ? 'bg-orange-500' : 'bg-white/5 text-gray-400'
            }`}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {paginatedPosts.length === 0 ? (
        <p className="text-center text-gray-400 py-20">لا توجد مقالات مطابقة لبحثك.</p>
      ) : viewMode === 'grid' ? (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {paginatedPosts.map((post) => (
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
      ) : (
        <div className="space-y-6 mb-12">
          {paginatedPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="grid md:grid-cols-3 bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition">
              <div className="relative h-48 md:h-full">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-black/70 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <div className="p-6 md:col-span-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <i className="fa-regular fa-clock"></i>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-extrabold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2">
                  <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold">{post.author.name}</p>
                    <p className="text-xs text-gray-500">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 disabled:opacity-30"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition ${
                currentPage === page ? 'bg-orange-500 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 disabled:opacity-30"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogPage