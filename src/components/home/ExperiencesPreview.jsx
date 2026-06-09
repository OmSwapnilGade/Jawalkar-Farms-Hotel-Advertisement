import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import SectionHeader from '../layout/SectionHeader.jsx'

const colors = [
  'from-emerald-400 to-teal-600',
  'from-amber-400 to-orange-500',
  'from-sky-400 to-blue-500',
  'from-green-400 to-emerald-600',
  'from-rose-400 to-pink-500',
  'from-violet-400 to-purple-500',
  'from-cyan-400 to-cyan-600'
]
const emojis = ['⛺', '🍽️', '🎮', '🌿', '👨‍👩‍👧‍👦', '🎉', '🏊‍♂️']

export default function ExperiencesPreview() {
  const { t } = useLanguage()
  const items = t('experiences.items')

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="section-container">
        <SectionHeader title={t('experiences.title')} subtitle={t('experiences.subtitle')} />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Array.isArray(items) && items.slice(0, 9).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 bg-white">
                <div className={`h-52 sm:h-56 bg-gradient-to-br ${colors[i]} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-7xl sm:text-8xl opacity-70 group-hover:scale-110 transition-transform duration-500">{emojis[i]}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2.5">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 bg-brand-green-50 text-brand-green-700 hover:bg-brand-green-100 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            View All Experiences <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
