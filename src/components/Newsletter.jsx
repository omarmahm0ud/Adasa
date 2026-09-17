import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">
        <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <i className="fa-solid fa-envelope text-xl"></i>
        </div>
        <h2 className="text-3xl font-extrabold mb-3">
          اشترك في <span className="text-orange-500">نشرتنا الإخبارية</span>
        </h2>
        <p className="text-gray-400 mb-8">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="أدخل بريدك الإلكتروني"
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none"
          />
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl font-bold">
            اشترك الآن
          </button>
        </form>

        <p className="text-xs text-gray-500">إلغاء الاشتراك في أي وقت • بدون إزعاج • انضم لـ 10,000+ مصور</p>
      </div>
    </section>
  )
}

export default Newsletter