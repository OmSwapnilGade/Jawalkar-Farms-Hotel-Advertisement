import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { slideInLeft, fadeUp } from '../../hooks/useAnimations.js'

export default function FoodShowcase() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-surface-warm">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <motion.div {...slideInLeft} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-200 via-orange-300 to-amber-400 flex items-center justify-center shadow-xl">
              <span className="text-[7rem] sm:text-[9rem]">🍽️</span>
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 right-4 lg:right-8 bg-white rounded-2xl shadow-card-hover px-5 py-3.5 flex items-center gap-3"
            >
              <span className="text-3xl">🔥</span>
              <div>
                <p className="text-xs text-gray-400 font-medium">Signature Dish</p>
                <p className="text-sm font-bold text-gray-900">Kolhapuri Chicken</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div {...fadeUp}>
            <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-bold tracking-wide mb-5">
              FRESH & HOMESTYLE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              {t('food.title')}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-6 leading-relaxed">
              {t('food.desc')}
            </p>
            <ul className="space-y-3 mb-8">
              {['Veg Thali — ₹250', 'Non-Veg Thali — ₹350', 'Special Jawalkar Thali — ₹450'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 text-base">
                  <span className="w-2 h-2 rounded-full bg-brand-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/restaurant"
              className="inline-flex items-center gap-2 bg-brand-green-600 hover:bg-brand-green-700 text-white px-7 py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              {t('food.ctaMenu')} <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
