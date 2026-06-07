import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { packages } from '../data/packages.js'
import PageBanner from '../components/layout/PageBanner.jsx'
import CTABand from '../components/layout/CTABand.jsx'

const cardGradients = [
  'from-emerald-100 to-teal-200',
  'from-blue-100 to-sky-200',
  'from-amber-100 to-orange-200',
  'from-violet-100 to-purple-200',
]

export default function PackagesPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageBanner title={t('packages.title')} subtitle={t('packages.subtitle')} />

      <section className="py-16 sm:py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 ${pkg.featured ? 'ring-2 ring-brand-green-400 ring-offset-2' : ''}`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-br ${cardGradients[i]} p-7 sm:p-8 relative`}>
                  <span className="text-5xl mb-3 block">{pkg.icon}</span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900">{pkg.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{pkg.subtitle}</p>
                  {pkg.featured && (
                    <span className="absolute top-5 right-5 bg-brand-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">POPULAR</span>
                  )}
                </div>

                {/* Body */}
                <div className="p-7 sm:p-8">
                  <p className="text-xs text-gray-400 font-medium mb-2">{pkg.audience}</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-sm text-gray-500">{pkg.priceUnit}</span>
                  </div>

                  <div className="border-t border-gray-100 pt-5 mb-7">
                    <div className="space-y-3.5">
                      {pkg.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm text-gray-700">
                          <Check size={18} className="text-brand-green-500 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 bg-brand-green-600 hover:bg-brand-green-700 text-white w-full py-3.5 rounded-2xl font-bold transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                  >
                    Inquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-sm text-gray-400 mb-3">{t('packages.note')}</p>
            <p className="text-gray-600 font-medium text-lg">{t('packages.ctaHelp')}</p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
