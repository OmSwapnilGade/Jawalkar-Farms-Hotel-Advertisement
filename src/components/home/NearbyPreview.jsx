import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { attractions } from '../../data/attractions.js'
import SectionHeader from '../layout/SectionHeader.jsx'

// Images are now loaded directly from attractions.js

export default function NearbyPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-surface-soft">
      <div className="section-container">
        <SectionHeader title={t('nearby.title')} subtitle={t('nearby.subtitle')} />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {attractions.slice(0, 3).map((place, i) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="h-48 sm:h-52 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full text-gray-700 shadow-sm">
                  📍 {place.distance}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-1.5">{place.name}</h3>
                <p className="text-sm text-brand-green-600 font-medium mb-3">{place.time}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{place.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/nearby"
            className="inline-flex items-center gap-2 bg-brand-green-50 text-brand-green-700 hover:bg-brand-green-100 px-6 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            View All Nearby Places <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
