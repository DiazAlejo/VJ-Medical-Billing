'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/utils/translations'

type Language = 'en' | 'es'

type TranslationKey = 
  | 'navInicio' | 'navServicios' | 'navNosotros' | 'navContacto'
  | 'heroTitle' | 'heroSubtitle' | 'ctaButton' | 'formEmail' | 'formPhone' | 'formMessage' | 'formSubmit'
  | 'formEmailRequired' | 'formEmailInvalid' | 'formPhoneInvalid' | 'formSuccess' | 'formError'
  | 'aboutTitle' | 'aboutText' | 'aboutOwner'
  | 'servicesTitle' | 'service1' | 'service2' | 'service3' | 'service4' | 'service2Detail'
  | 'medicalBillingTitle' | 'medicalBillingText'
  | 'specialtiesTitle' | 'specialtiesText' | 'specialtyCardiology' | 'specialtyPsychiatry' | 'specialtyOptometry' | 'specialtyPulmonology' | 'specialtyGynecology' | 'specialtyInternalMedicine' | 'specialtyEmergency' | 'specialtyPodiatry' | 'specialtyRheumatology' | 'specialtyGeriatrics' | 'specialtySpeech' | 'specialtyAndMore'
  | 'whatSetsUsApartTitle' | 'whatSetsUsApart1' | 'whatSetsUsApart2' | 'whatSetsUsApart3'
  | 'didYouKnowTitle' | 'didYouKnowText'
  | 'usefulData1Title' | 'usefulData1Text'
  | 'usefulData2Title' | 'usefulData2Text' | 'billingProcess1' | 'billingProcess2' | 'billingProcess3' | 'billingProcess4' | 'billingProcess5'
  | 'contactTitle' | 'contactSubtitle' | 'footerAddress' | 'footerPhone' | 'footerEmail' | 'footerFacebook' | 'footerCta' | 'footerCtaButton'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

