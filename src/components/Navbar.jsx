import { Link, NavLink } from 'react-router-dom'
import logo from './../assets/logo-GdqARQRt.png'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black  border-b border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="عدسة" className="w-10 h-10 object-contain" />
          <div className="text-right">
            <p className="font-extrabold text-lg leading-tight">عدسة</p>
            <p className="text-xs text-orange-400 leading-tight">عالم التصوير الفوتوغرافي</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2 bg-white/5 rounded-full p-1 ">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-5 py-2 rounded-full text-sm font-medium transition ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full text-sm font-medium transition ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            المدونة
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-5 py-2 rounded-full text-sm font-medium transition ${
                isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            من نحن
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/blog"
            className="w-10 h-10 flex items-center justify-center rounded-2xl  hover:text-orange-500 transition"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link
            to="/blog"
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2.5 rounded-full text-sm font-bold"
          >
            ابدأ القراءة
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar