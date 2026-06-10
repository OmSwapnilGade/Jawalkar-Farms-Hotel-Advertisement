import { motion } from 'framer-motion'
import { Check, Phone, MessageCircle, Send, Bath, Car, Coffee, TreePine, Droplets } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { PHONE_LINK, WHATSAPP_LINK } from '../utils/constants.js'
import PageBanner from '../components/layout/PageBanner.jsx'
import CTABand from '../components/layout/CTABand.jsx'
import { fadeUp, slideInLeft, slideInRight } from '../hooks/useAnimations.js'
import { Link } from 'react-router-dom'
import { galleryImages } from '../data/gallery.js'

const amenityIcons = [Bath, Car, Coffee, TreePine, Droplets]

export default function RoomsPage() {
  const { t } = useLanguage()
  const features = t('room.features')
  const amenities = t('room.amenities')
  
  const roomsPhotos = galleryImages.filter(img => img.category === 'rooms')

  return (
    <>
      <PageBanner title={t('room.title')} subtitle={t('room.subtitle')} />

      <section className="py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="section-container">
          {/* Room Gallery Carousel */}
          <motion.div {...fadeUp} className="mb-14 lg:mb-20">
            <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-hide -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
              {roomsPhotos.map((img, i) => (
                <div key={img.id || i} className="w-[280px] sm:w-[340px] lg:w-[420px] aspect-[16/10] rounded-2xl snap-center shrink-0 overflow-hidden shadow-lg relative bg-gray-100 border border-gray-100">
                  <img src={img.image} alt={img.alt || 'Room View'} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            <motion.div {...slideInLeft} className="lg:col-span-3">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-5">{t('room.title')}</h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-base sm:text-lg">{t('room.desc')}</p>

              <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">Room Features</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {Array.isArray(features) && features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-700 bg-surface-soft rounded-xl px-4 py-3.5">
                    <Check size={18} className="text-brand-green-500 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <h3 className="font-heading text-lg font-bold text-gray-900 mb-4">What's Included</h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {Array.isArray(amenities) && amenities.map((a, i) => {
                  const Icon = amenityIcons[i] || Coffee
                  return (
                    <div key={i} className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-5 py-3 text-sm text-gray-700 shadow-sm">
                      <Icon size={18} className="text-brand-green-500" />
                      {a}
                    </div>
                  )
                })}
              </div>

              <div className="bg-brand-blue-50 rounded-2xl p-6 text-sm sm:text-base text-gray-600 space-y-2">
                <p>📌 {t('room.checkin')}</p>
                <p>📌 {t('room.checkout')}</p>
                <p>📌 {t('room.extraBed')}</p>
              </div>
            </motion.div>

            {/* Pricing Card */}
            <motion.div {...slideInRight} className="lg:col-span-2">
              <div className="sticky top-28 bg-white border border-gray-100 rounded-3xl shadow-card p-7 sm:p-8">
                <p className="text-sm text-gray-500 mb-1.5">Starting at</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading text-4xl sm:text-5xl font-bold text-gray-900">{t('room.price')}</span>
                  <span className="text-gray-500">{t('room.priceUnit')}</span>
                </div>
                <p className="text-xs text-gray-400 mb-8">{t('room.extraBed')}</p>

                <div className="space-y-3.5">
                  <a href={PHONE_LINK} className="flex items-center justify-center gap-2.5 bg-brand-green-600 hover:bg-brand-green-700 text-white w-full py-3.5 rounded-2xl font-bold transition-all hover:shadow-md active:scale-95">
                    <Phone size={18} />
                    Call to Book
                  </a>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white w-full py-3.5 rounded-2xl font-bold transition-all hover:shadow-md active:scale-95">
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                  <Link to="/contact" className="flex items-center justify-center gap-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 w-full py-3.5 rounded-2xl font-bold transition-all active:scale-95">
                    <Send size={18} />
                    Send Inquiry
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="py-12 sm:py-14 bg-surface-warm">
        <div className="section-container text-center">
          <p className="text-gray-600 text-lg mb-4">🍽️ Pair your stay with our famous Maharashtrian Thali</p>
          <Link to="/restaurant" className="inline-flex items-center gap-2 bg-brand-green-50 text-brand-green-700 hover:bg-brand-green-100 px-6 py-3 rounded-xl font-semibold transition-all duration-200">
            View Menu →
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  )
}
