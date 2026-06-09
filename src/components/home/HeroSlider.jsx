import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'

const slideImages = [
  { image: '/images/hero/greenery scene.jpeg', gradient: 'linear-gradient(135deg, #1a4731 0%, #2d6a4f 40%, #40916c 100%)', icon: '🌿' },
  { image: '/images/hero/food.jpeg', gradient: 'linear-gradient(135deg, #7c2d12 0%, #b45309 40%, #d97706 100%)', icon: '🍽️' },
  { image: '/images/hero/night scene.jpeg', gradient: 'linear-gradient(135deg, #0c2d48 0%, #1a5276 40%, #2980b9 100%)', icon: '⛺' },
  { image: '/images/hero/room photo.jpeg', gradient: 'linear-gradient(135deg, #3d2c1d 0%, #6e4e37 40%, #8b6b53 100%)', icon: '🛏️' },
  { image: '/images/hero/children pay area.jpeg', gradient: 'linear-gradient(135deg, #0b3d0b 0%, #1a7a1a 40%, #2ecc71 100%)', icon: '👨‍👩‍👧‍👦' },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const { t } = useLanguage()
  const slides = t('hero.slides')

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slideImages.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + slideImages.length) % slideImages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])
 
  return (
    <section className="relative w-full h-[99vh] min-h-[600px] max-h-[900px] overflow-hidden" id="hero">
      {/* Slides */}
      <AnimatePresence mode="wait">
        
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: slideImages[current].image ? `url('${slideImages[current].image}')` : slideImages[current].gradient,
            backgroundColor: '#2d6a4f'
          }}
        >
          {/* Decorative background icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[16rem] sm:text-[20rem] lg:text-[28rem] select-none opacity-[0.06]">
              {slideImages[current].icon}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      {/* Lighter overlay */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

      {/* Content */}
      <div className="relative h-full section-container flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="
        relative
        w-[90%]
        max-w-2xl
        bg-black/20
        backdrop-blur-2xl
        border border-white/20
        rounded-2xl
        p-5 sm:p-6 lg:p-8
        shadow-2xl
      "
          >
            {/* Glass highlight */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute -top-12 left-0 w-48 h-24 bg-white/10 blur-3xl" />
            </div>

            <motion.h1
              className="
          font-heading
          text-2xl
          sm:text-5xl
          lg:text-7xl
          font-bold
          !text-white
          mb-2
          sm:mb-4
          leading-[1.1]
          tracking-tight
          drop-shadow-lg
        "
            >
              {Array.isArray(slides) ? slides[current]?.title : ''}
            </motion.h1>

            <motion.p
              className="
          !text-white/95
          text-xs
          sm:text-lg
          lg:text-2xl
          mb-4
          sm:mb-6
          leading-relaxed
          max-w-2xl
          mx-auto
          lg:mx-0
          drop-shadow-md
        "
            >
              {Array.isArray(slides) ? slides[current]?.subtitle : ''}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                to="/rooms"
                className="
            inline-flex
            items-center
            justify-center
            bg-brand-green-600
            hover:bg-brand-green-700
            text-white
            px-6
            py-3
            rounded-xl
            font-semibold
            transition-all
            duration-300
            hover:-translate-y-1
          "
              >
                {t('hero.ctaRooms')}
              </Link>

              <Link
                to="/restaurant"
                className="
            inline-flex
            items-center
            justify-center
            bg-white/10
            hover:bg-white/20
            border
            border-white/30
            text-white
            px-6
            py-3
            rounded-xl
            backdrop-blur-sm
            font-semibold
            transition-all
            duration-300
            hover:-translate-y-1
          "
              >
                {t('hero.ctaMenu')}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0 flex items-center gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex gap-2.5">
            {slideImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 rounded-full transition-all duration-500 ${i === current
                  ? 'bg-white w-10'
                  : 'bg-white/30 w-3 hover:bg-white/50'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
