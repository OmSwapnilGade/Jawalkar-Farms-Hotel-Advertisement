import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { reviews } from '../../data/reviews.js'
import SectionHeader from '../layout/SectionHeader.jsx'

const avatarColors = ['bg-emerald-100 text-emerald-700', 'bg-blue-100 text-blue-700', 'bg-amber-100 text-amber-700', 'bg-pink-100 text-pink-700', 'bg-purple-100 text-purple-700', 'bg-teal-100 text-teal-700']

export default function ReviewsPreview() {
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage()

  const next = useCallback(() => setCurrent(prev => (prev + 1) % reviews.length), [])
  const prev = useCallback(() => setCurrent(prev => (prev - 1 + reviews.length) % reviews.length), [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="section-container">
        <SectionHeader title={t('reviewsSection.title')} subtitle={t('reviewsSection.subtitle')} />

        <div className="mt-12 lg:mt-16 max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-surface-soft rounded-3xl p-8 sm:p-10 lg:p-14 text-center relative"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-full bg-brand-green-100 flex items-center justify-center mx-auto mb-6">
                <Quote size={22} className="text-brand-green-600" />
              </div>

              <div className="flex justify-center gap-1.5 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={22}
                    className={i < reviews[current].stars ? 'text-brand-amber-400 fill-brand-amber-400' : 'text-gray-200'}
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8 font-medium">
                "{reviews[current].text}"
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className={`w-12 h-12 rounded-full ${avatarColors[current % avatarColors.length]} flex items-center justify-center font-heading font-bold text-lg`}>
                  {reviews[current].name[0]}
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">{reviews[current].name}</p>
                  <p className="text-sm text-gray-500">{reviews[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex justify-center items-center gap-5 mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" aria-label="Previous review">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <span className="text-sm font-medium text-gray-400 min-w-[3rem] text-center">{current + 1} / {reviews.length}</span>
            <button onClick={next} className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" aria-label="Next review">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
