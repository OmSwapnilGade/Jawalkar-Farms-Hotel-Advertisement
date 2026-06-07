import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { PHONE_NUMBER, PHONE_LINK, WHATSAPP_LINK, EMAIL, ADDRESS, GOOGLE_MAPS_EMBED } from '../utils/constants.js'
import PageBanner from '../components/layout/PageBanner.jsx'
import { fadeUp } from '../hooks/useAnimations.js'

export default function ContactPage() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', phone: '', email: '', checkin: '', guests: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactCards = [
    { icon: Phone, label: t('contact.phone'), value: PHONE_NUMBER, href: PHONE_LINK, bg: 'bg-brand-blue-50', color: 'text-brand-blue-600' },
    { icon: MessageCircle, label: t('contact.whatsapp'), value: 'Chat Now', href: WHATSAPP_LINK, bg: 'bg-brand-green-50', color: 'text-brand-green-600', external: true },
    { icon: Mail, label: t('contact.email'), value: EMAIL, href: `mailto:${EMAIL}`, bg: 'bg-amber-50', color: 'text-amber-600' },
  ]

  return (
    <>
      <PageBanner title={t('contact.title')} subtitle={t('contact.subtitle')} />

      {/* Contact Cards */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {contactCards.map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-card hover:shadow-card-hover p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center`}>
                  <card.icon size={24} className={card.color} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{card.label}</p>
                  <p className="text-sm text-gray-500 mt-1">{card.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Inquiry Form */}
            <motion.div {...fadeUp} className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-card p-7 sm:p-8 lg:p-10">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">{t('contact.formTitle')}</h2>

                {submitted ? (
                  <div className="text-center py-16">
                    <span className="text-6xl mb-5 block">✅</span>
                    <p className="font-heading text-2xl font-bold text-gray-900 mb-3">Thank you!</p>
                    <p className="text-gray-500 text-lg">Your inquiry has been sent. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.formFields.name')}</label>
                        <input
                          type="text" name="name" value={form.name} onChange={handleChange} required
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all bg-surface-soft"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.formFields.phone')}</label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange} required
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all bg-surface-soft"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.formFields.email')}</label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all bg-surface-soft"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.formFields.checkin')}</label>
                        <input
                          type="date" name="checkin" value={form.checkin} onChange={handleChange}
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all bg-surface-soft"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.formFields.guests')}</label>
                        <input
                          type="number" name="guests" value={form.guests} onChange={handleChange} min="1"
                          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all bg-surface-soft"
                          placeholder="2"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('contact.formFields.message')}</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} rows={5}
                        className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all resize-none bg-surface-soft"
                        placeholder="Tell us about your plans..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2.5 bg-brand-green-600 hover:bg-brand-green-700 text-white w-full py-4 rounded-2xl font-bold text-base transition-all hover:shadow-lg active:scale-[0.98]"
                    >
                      <Send size={18} />
                      {t('contact.submit')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map + Address */}
            <motion.div {...fadeUp} className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                {/* Map */}
                <div className="rounded-3xl overflow-hidden shadow-card h-64 sm:h-72 lg:h-80 bg-gray-100">
                  <iframe
                    src={GOOGLE_MAPS_EMBED}
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jawalkar Farms Location"
                  />
                </div>

                {/* Address Card */}
                <div className="bg-white rounded-2xl shadow-card p-6 sm:p-7 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-green-50 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">{t('contact.address')}</p>
                      <p className="text-sm text-gray-500 mt-1">{ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-50 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-brand-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">{t('contact.hours')}</p>
                      <p className="text-sm text-gray-500 mt-1">{t('contact.hoursDetail')}</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 w-full py-3 rounded-xl font-bold text-sm transition-all"
                  >
                    <MapPin size={16} />
                    {t('contact.directions')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
