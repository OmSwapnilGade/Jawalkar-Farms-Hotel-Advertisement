import { useLanguage } from '../../context/LanguageContext.jsx'

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 hover:border-brand-green-300 hover:bg-brand-green-50 transition-all duration-200"
      aria-label="Switch language"
    >
      <span className={lang === 'en' ? 'text-brand-green-600' : 'text-gray-400'}>EN</span>
      <span className="text-gray-300">|</span>
      <span className={lang === 'hi' ? 'text-brand-green-600' : 'text-gray-400'}>हिं</span>
      <span className="text-gray-300">|</span>
      <span className={lang === 'mr' ? 'text-brand-green-600' : 'text-gray-400'}>मरा</span>
    </button>
  )
}
