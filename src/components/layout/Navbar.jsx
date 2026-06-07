import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { NAV_LINKS, PHONE_LINK } from '../../utils/constants.js'
import LanguageSwitcher from '../ui/LanguageSwitcher.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useLanguage()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // On homepage: transparent until scroll, then white
  // On inner pages: always white
  const showSolid = scrolled || !isHome
  const navBg = showSolid
    ? 'bg-white/95 backdrop-blur-xl shadow-nav'
    : 'bg-transparent'
  const textColor = showSolid ? 'text-gray-700' : 'text-white'
  const logoColor = showSolid ? 'text-gray-900' : 'text-white'
  const activeColor = showSolid ? 'text-brand-green-600' : 'text-white bg-white/15'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="section-container flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className={`font-heading text-xl lg:text-2xl font-bold tracking-tight ${logoColor} transition-colors duration-300`}>
            🌿 Jawalkar Farms
          </Link>

          {/* Desktop Nav - only show key links to avoid crowding */}
          <div className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.map(link => (
              <Link
                key={link.key}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 hover:bg-brand-green-50 hover:text-brand-green-700 ${
                  location.pathname === link.path
                    ? activeColor
                    : textColor
                }`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            <a
              href={PHONE_LINK}
              className="hidden sm:flex items-center gap-2 bg-brand-green-600 hover:bg-brand-green-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Phone size={16} />
              {t('nav.callUs')}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden p-2.5 rounded-xl transition-colors ${showSolid ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 xl:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl xl:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-heading text-lg font-bold text-gray-900">🌿 Jawalkar Farms</span>
                  <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100" aria-label="Close menu">
                    <X size={22} />
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map(link => (
                    <Link
                      key={link.key}
                      to={link.path}
                      className={`px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'bg-brand-green-50 text-brand-green-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {t(`nav.${link.key}`)}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                  <a
                    href={PHONE_LINK}
                    className="flex items-center justify-center gap-2.5 bg-brand-green-600 text-white w-full py-3.5 rounded-xl font-bold"
                  >
                    <Phone size={18} />
                    {t('nav.callUs')}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
