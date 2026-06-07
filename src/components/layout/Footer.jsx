import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { NAV_LINKS, PHONE_NUMBER, EMAIL, ADDRESS, WHATSAPP_LINK, PHONE_LINK } from '../../utils/constants.js'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-4">🌿 Jawalkar Farms</h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-5">{t('footer.tagline')}</p>
            <div className="flex gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-green-600 hover:bg-brand-green-700 text-white transition-colors text-sm" aria-label="WhatsApp">💬</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm" aria-label="Facebook">f</a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-600 hover:bg-pink-700 text-white transition-colors text-sm" aria-label="Instagram">📷</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.slice(0, 5).map(link => (
                <Link
                  key={link.key}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">&nbsp;</h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.slice(5).map(link => (
                <Link
                  key={link.key}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">{t('footer.contactInfo')}</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a href={PHONE_LINK} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={16} className="mt-0.5 shrink-0" />
                {PHONE_NUMBER}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={16} className="mt-0.5 shrink-0" />
                {EMAIL}
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}
