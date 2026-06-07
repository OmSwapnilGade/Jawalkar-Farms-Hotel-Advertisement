import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext.jsx'
import { menuItems } from '../data/menu.js'
import PageBanner from '../components/layout/PageBanner.jsx'
import CTABand from '../components/layout/CTABand.jsx'
import { fadeUp } from '../hooks/useAnimations.js'

const tabs = [
  { key: 'veg', label: 'Veg 🌿', labelMr: 'शाकाहारी 🌿' },
  { key: 'nonveg', label: 'Non-Veg 🍗', labelMr: 'मांसाहारी 🍗' },
  { key: 'thali', label: 'Thali 🍽️', labelMr: 'थाळी 🍽️' },
  { key: 'specials', label: 'Specials ⭐', labelMr: 'स्पेशल ⭐' },
]

const categoryGradients = {
  veg: 'from-green-200 to-emerald-300',
  nonveg: 'from-orange-200 to-red-300',
  thali: 'from-amber-200 to-yellow-300',
  specials: 'from-purple-200 to-pink-300',
}
const categoryEmojis = {
  veg: '🥗',
  nonveg: '🍖',
  thali: '🍛',
  specials: '✨',
}

export default function RestaurantPage() {
  const [active, setActive] = useState('veg')
  const { t, lang } = useLanguage()
  const filtered = menuItems.filter(item => item.category === active)

  return (
    <>
      <PageBanner title={t('food.title')} subtitle={t('food.subtitle')} />

      {/* Intro */}
      <section className="py-14 sm:py-16 lg:py-20">
        <motion.div {...fadeUp} className="section-container text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{t('food.desc')}</p>
        </motion.div>
      </section>

      {/* Menu */}
      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="section-container">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  active === tab.key
                    ? 'bg-brand-green-600 text-white shadow-lg shadow-brand-green-600/25 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {lang === 'mr' ? tab.labelMr : tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className={`rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${item.featured ? 'ring-2 ring-brand-amber-400 ring-offset-2' : ''}`}
                >
                  <div className={`h-40 sm:h-44 bg-gradient-to-br ${categoryGradients[item.category]} flex items-center justify-center relative`}>
                    <span className="text-6xl opacity-60">{categoryEmojis[item.category]}</span>
                    {item.featured && (
                      <span className="absolute top-3 right-3 bg-brand-amber-400 text-xs font-bold px-3 py-1.5 rounded-full text-white shadow-sm">⭐ SPECIAL</span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className={`font-heading font-bold text-gray-900 ${item.isVeg ? 'veg-dot' : 'nonveg-dot'}`}>
                        {item.name}
                      </h3>
                      <span className="font-heading text-lg font-bold text-brand-amber-600 whitespace-nowrap">₹{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-sm text-gray-400 mt-10">
            Menu items may vary based on season and availability. Prices are indicative.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  )
}
