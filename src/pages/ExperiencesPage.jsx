import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext.jsx'
import PageBanner from '../components/layout/PageBanner.jsx'
import CTABand from '../components/layout/CTABand.jsx'
import { slideInLeft, slideInRight } from '../hooks/useAnimations.js'

const gradients = [
  'from-emerald-300 to-teal-500',
  'from-amber-300 to-orange-400',
  'from-sky-300 to-blue-500',
  'from-green-300 to-emerald-500',
  'from-rose-300 to-pink-400',
  'from-violet-300 to-purple-500',
]
const emojis = ['⛺', '🍽️', '🎮', '🌿', '👨‍👩‍👧‍👦', '🎉']

export default function ExperiencesPage() {
  const { t } = useLanguage()
  const items = t('experiences.items')

  return (
    <>
      <PageBanner title={t('experiences.title')} subtitle={t('experiences.subtitle')} />

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="section-container space-y-20 sm:space-y-24 lg:space-y-32">
          {Array.isArray(items) && items.map((item, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={i} className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                <motion.div
                  {...(isEven ? slideInLeft : slideInRight)}
                  className={`${isEven ? 'order-1' : 'order-1 lg:order-2'}`}
                >
                  <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center shadow-xl`}>
                    <span className="text-[6rem] sm:text-[8rem] opacity-70">{emojis[i]}</span>
                  </div>
                </motion.div>
                <motion.div
                  {...(isEven ? slideInRight : slideInLeft)}
                  className={`${isEven ? 'order-2' : 'order-2 lg:order-1'}`}
                >
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-5">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-base sm:text-lg">{item.desc}</p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </section>

      <CTABand />
    </>
  )
}
