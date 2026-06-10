import { createContext, useContext, useState, useCallback } from 'react'
import en from '../data/en.json'
import mr from '../data/mr.json'
import hi from '../data/hi.json'

const translations = { en, mr, hi }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const toggleLang = useCallback(() => {
    setLang(prev => {
      if (prev === 'en') return 'hi'
      if (prev === 'hi') return 'mr'
      return 'en'
    })
  }, [])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[lang]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
