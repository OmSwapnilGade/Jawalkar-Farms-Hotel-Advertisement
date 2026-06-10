import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { galleryImages, getPlaceholderGradient, galleryCategories } from '../data/gallery.js'
import PageBanner from '../components/layout/PageBanner.jsx'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { t } = useLanguage()

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => setLightboxIndex(prev => (prev + 1) % filtered.length)
  const prevImage = () => setLightboxIndex(prev => (prev - 1 + filtered.length) % filtered.length)

  return (
    <>
      <PageBanner title={t('gallery.title')} subtitle={t('gallery.subtitle')} />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 capitalize ${
                  activeCategory === cat
                    ? 'bg-brand-green-600 text-white shadow-lg shadow-brand-green-600/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t(`gallery.${cat}`)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              {filtered.map((img, i) => {
                const heights = ['h-56', 'h-64', 'h-72', 'h-52', 'h-60']
                const h = heights[i % heights.length]

                return (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className={`${h} rounded-2xl overflow-hidden cursor-pointer group relative break-inside-avoid`}
                    style={{ background: img.image ? `url('${img.image}') center/cover` : getPlaceholderGradient(img.category) }}
                    onClick={() => openLightbox(i)}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black/40 px-4 py-2 rounded-xl backdrop-blur-sm max-w-[80%] text-center">
                        {img.alt}
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 bg-white/85 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full text-gray-700 capitalize">
                      {img.category}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6 sm:p-10"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox() }}
              className="absolute top-5 right-5 text-white/70 hover:text-white p-2.5 rounded-full hover:bg-white/10 transition-colors z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 sm:left-8 text-white/50 hover:text-white p-2 z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl aspect-[16/10] rounded-3xl overflow-hidden"
              style={{ background: filtered[lightboxIndex]?.image ? `url('${filtered[lightboxIndex]?.image}') center/cover` : getPlaceholderGradient(filtered[lightboxIndex]?.category) }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white/80 px-6">
                  <p className="text-xl sm:text-2xl font-medium mb-2">{filtered[lightboxIndex]?.alt}</p>
                  <p className="text-sm opacity-50">{lightboxIndex + 1} of {filtered.length}</p>
                </div>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 sm:right-8 text-white/50 hover:text-white p-2 z-10"
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
