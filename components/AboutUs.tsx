'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function AboutUs() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          {t('aboutTitle')}
        </h2>
        <p className="text-xl md:text-2xl font-semibold text-primary-400 mb-6 text-center">
          {t('aboutOwner')}
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-16">
          {t('aboutText')}
        </p>
        
        <div className="mt-16 pt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('whatSetsUsApartTitle')}
          </h3>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-gray-900">1. </strong>{t('whatSetsUsApart1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-gray-900">2. </strong>{t('whatSetsUsApart2')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-gray-900">3. </strong>{t('whatSetsUsApart3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

