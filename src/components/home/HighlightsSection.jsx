import { motion } from 'framer-motion'
import { Trees, UtensilsCrossed, Home, Tent } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import SectionHeader from '../layout/SectionHeader.jsx'

const icons = [Trees, UtensilsCrossed, Home, Tent]
const colors = [
  { bg: 'bg-emerald-50', icon: 'text-emerald-600', border: 'border-emerald-100' },
  { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-100' },
  { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-100' },
  { bg: 'bg-violet-50', icon: 'text-violet-600', border: 'border-violet-100' },
]

export default function HighlightsSection() {
  const { t } = useLanguage()
  const items = t('highlights.items')

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="section-container">
        <SectionHeader title={t('highlights.title')} />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {Array.isArray(items) && items.map((item, i) => {
            const Icon = icons[i]
            const color = colors[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`${color.bg} border ${color.border} rounded-2xl p-7 sm:p-8 text-center hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group`}
              >
                <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={30} className={color.icon} />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2.5">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
