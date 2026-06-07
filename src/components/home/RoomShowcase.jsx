import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { slideInRight, fadeUp } from '../../hooks/useAnimations.js'

export default function RoomShowcase() {
  const { t } = useLanguage()
  const features = t('room.features')

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Text */}
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 bg-brand-blue-100 text-brand-blue-600 rounded-full text-xs font-bold tracking-wide mb-5">
              FAMILY-FRIENDLY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              {t('room.title')}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
              {t('room.desc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {Array.isArray(features) && features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 text-gray-700 text-sm sm:text-base">
                  <Check size={18} className="text-brand-green-500 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-heading text-4xl font-bold text-gray-900">{t('room.price')}</span>
              <span className="text-gray-500">{t('room.priceUnit')}</span>
            </div>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 bg-brand-green-600 hover:bg-brand-green-700 text-white px-7 py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              {t('room.ctaBook')} <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div {...slideInRight} className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-200 via-blue-300 to-indigo-400 flex items-center justify-center shadow-xl">
              <span className="text-[7rem] sm:text-[9rem]">🛏️</span>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 left-4 lg:left-8 bg-white rounded-2xl shadow-card-hover px-5 py-3.5 flex items-center gap-3"
            >
              <span className="text-3xl">✨</span>
              <div>
                <p className="text-xs text-gray-400 font-medium">Extra bed</p>
                <p className="text-sm font-bold text-gray-900">₹500/night</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
