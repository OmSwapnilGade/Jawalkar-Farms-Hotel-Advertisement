import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { reviews } from '../data/reviews.js'
import PageBanner from '../components/layout/PageBanner.jsx'
import CTABand from '../components/layout/CTABand.jsx'

const avatarColors = ['bg-emerald-100 text-emerald-700', 'bg-blue-100 text-blue-700', 'bg-amber-100 text-amber-700', 'bg-pink-100 text-pink-700', 'bg-purple-100 text-purple-700', 'bg-teal-100 text-teal-700']

export default function ReviewsPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageBanner title={t('reviewsSection.title')} subtitle={t('reviewsSection.subtitle')} />

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="section-container">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-16 lg:mb-20"
          >
            <div className="text-center">
              <p className="font-heading text-5xl sm:text-6xl font-bold text-gray-900">4.8</p>
              <div className="flex gap-1 justify-center mt-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={20} className="text-brand-amber-400 fill-brand-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Average Rating</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-200" />
            <div className="text-center">
              <p className="font-heading text-5xl sm:text-6xl font-bold text-gray-900">{reviews.length * 10}+</p>
              <p className="text-sm text-gray-500 mt-2">Happy Guests</p>
            </div>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-7 sm:p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={18} className={j < review.stars ? 'text-brand-amber-400 fill-brand-amber-400' : 'text-gray-200'} />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className={`w-11 h-11 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center font-heading font-bold text-base`}>
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
