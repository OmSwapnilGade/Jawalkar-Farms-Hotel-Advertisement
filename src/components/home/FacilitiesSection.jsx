import { motion } from 'framer-motion'
import { Bed, UtensilsCrossed, Tent, Baby, Sun, TreePine, Car, PartyPopper } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import SectionHeader from '../layout/SectionHeader.jsx'

const facilityIcons = [Bed, UtensilsCrossed, Tent, Baby, Sun, TreePine, Car, PartyPopper]

export default function FacilitiesSection() {
  const { t } = useLanguage()
  const items = t('facilities.items')

  return (
    <section className="mt-8 pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32 bg-gray-50 border-t border-gray-200">
      <div className="section-container">
        <SectionHeader title={t('facilities.title')} subtitle={t('facilities.subtitle')} />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {Array.isArray(items) && items.map((item, i) => {
            const Icon = facilityIcons[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green-50 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-brand-green-600" />
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-700">{item}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
