import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Send } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { PHONE_LINK, WHATSAPP_LINK } from '../../utils/constants.js'
import { fadeUp } from '../../hooks/useAnimations.js'

export default function CTABand() {
  const { t } = useLanguage()

  return (
    <section className="bg-gradient-to-br from-brand-green-600 via-brand-green-700 to-emerald-800 py-20 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <motion.div {...fadeUp} className="section-container text-center relative">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {t('cta.title')}
        </h2>
        <p className="text-white/75 mb-10 text-base sm:text-lg max-w-xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href={PHONE_LINK}
            className="flex items-center justify-center gap-2.5 bg-white text-brand-green-700 px-8 py-4 rounded-2xl font-bold text-base hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto active:scale-95"
          >
            <Phone size={20} />
            {t('cta.call')}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-[#20BD5A] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto active:scale-95"
          >
            <MessageCircle size={20} />
            {t('cta.whatsapp')}
          </a>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2.5 bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto active:scale-95"
          >
            <Send size={20} />
            {t('cta.inquiry')}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
