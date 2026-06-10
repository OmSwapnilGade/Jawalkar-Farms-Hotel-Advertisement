import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext.jsx'
import { menuItems } from '../data/menu.js'
import PageBanner from '../components/layout/PageBanner.jsx'
import CTABand from '../components/layout/CTABand.jsx'
import { fadeUp } from '../hooks/useAnimations.js'

const tabs = [
  { key: 'veg', label: 'Veg 🌿', labelMr: 'शाकाहारी 🌿', labelHi: 'शाकाहारी 🌿' },
  { key: 'nonveg', label: 'Non-Veg 🍗', labelMr: 'मांसाहारी 🍗', labelHi: 'मांसाहारी 🍗' },
  { key: 'thali', label: 'Thali 🍽️', labelMr: 'थाळी 🍽️', labelHi: 'थाली 🍽️' },
  { key: 'specials', label: 'Specials ⭐', labelMr: 'स्पेशल ⭐', labelHi: 'स्पेशल ⭐' },
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
                {lang === 'mr' ? tab.labelMr : lang === 'hi' ? tab.labelHi : tab.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl mx-auto overflow-hidden bg-white shadow-card rounded-2xl"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="py-4 px-6 font-heading font-bold text-gray-700">Item</th>
                      <th className="py-4 px-6 font-heading font-bold text-gray-700 hidden sm:table-cell">Description</th>
                      <th className="py-4 px-6 font-heading font-bold text-gray-700 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((item, i) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <h3 className={`font-bold text-gray-900 ${item.isVeg ? 'veg-dot' : 'nonveg-dot'}`}>
                              {item.name}
                            </h3>
                            {item.featured && (
                              <span className="bg-brand-amber-100 text-brand-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap">Special</span>
                            )}
                          </div>
                          {item.category === 'thali' && (
                            <p className="text-sm text-gray-500 mt-1 sm:hidden">{item.desc}</p>
                          )}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 hidden sm:table-cell">
                          {item.category === 'thali' ? item.desc : ''}
                        </td>
                        <td className="py-4 px-6 font-heading text-lg font-bold text-brand-amber-600 text-right whitespace-nowrap">
                          ₹{item.price}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
