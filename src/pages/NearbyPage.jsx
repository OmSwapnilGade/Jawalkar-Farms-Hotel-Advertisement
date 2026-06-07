import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { attractions } from '../data/attractions.js'
import PageBanner from '../components/layout/PageBanner.jsx'
import CTABand from '../components/layout/CTABand.jsx'

const gradients = [
  'from-emerald-300 to-teal-500',
  'from-sky-300 to-blue-500',
  'from-violet-300 to-purple-500',
  'from-amber-300 to-orange-400',
  'from-green-300 to-emerald-500',
]

export default function NearbyPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageBanner title={t('nearby.title')} subtitle={t('nearby.subtitle')} />

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {attractions.map((place, i) => (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className={`h-48 sm:h-56 bg-gradient-to-br ${gradients[i]} flex items-center justify-center relative`}>
                  <MapPin size={60} className="text-white/20" />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">{place.name}</h3>
                  <div className="flex items-center gap-5 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5"><MapPin size={15} /> {place.distance}</span>
                    <span className="flex items-center gap-1.5"><Clock size={15} /> {place.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{place.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-surface-soft rounded-3xl p-8 sm:p-10 lg:p-12 text-center"
          >
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">📍 Conveniently Located</h3>
            <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              Jawalkar Farms is just 30 minutes from Sinhagad Fort Road and easily accessible from Pune city. 
              A perfect base to explore the area's best attractions.
            </p>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
