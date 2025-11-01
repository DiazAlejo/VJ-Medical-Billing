'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-400 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">VJ Medical Billing LLC</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span className="text-white">{t('footerAddress')}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 text-white" />
                <a 
                  href="https://wa.me/17872239801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  {t('footerPhone')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-white" />
                <a href={`mailto:${t('footerEmail')}`} className="text-white hover:opacity-80 transition-opacity">
                  {t('footerEmail')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaFacebook className="w-5 h-5 text-white" />
                <a 
                  href="https://www.facebook.com/vjmedicalbilling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  {t('footerFacebook')}
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="VJ Medical Billing Logo"
              width={180}
              height={180}
              className="object-contain"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col items-center md:items-end justify-center">
            <p className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-right">
              {t('footerCta')}
            </p>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('contacto')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="bg-primary-400 hover:bg-primary-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
            >
              {t('footerCtaButton')}
            </a>
          </div>
        </div>

        <div className="border-t border-white/30 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} VJ Medical Billing LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

