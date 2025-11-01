'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    // Use requestAnimationFrame + timeout to ensure DOM has fully updated after language changes
    // This is important because section heights differ between languages
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Small delay to ensure layout has fully recalculated after language changes
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            // Force a reflow to ensure accurate positioning
            element.offsetHeight
            
            const headerHeight = 80 // Account for fixed header height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
            setIsMenuOpen(false)
          }
        }, 50) // Small delay to allow layout recalculation after language/content changes
      })
    })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-50/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="VJ Medical Billing Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
              loading="eager"
            />
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex flex-col items-start hover:opacity-80 transition-opacity"
            >
              <span className="text-xl md:text-2xl font-bold text-black leading-tight">VJ</span>
              <span className="text-sm md:text-base text-black leading-tight">Medical Billing</span>
            </button>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-primary-400 font-medium transition-colors"
            >
              {t('navInicio')}
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-primary-400 font-medium transition-colors"
            >
              {t('navServicios')}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-primary-400 font-medium transition-colors"
            >
              {t('navContacto')}
            </button>
          </nav>
          
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Language Toggle Buttons */}
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-primary-400 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  language === 'es'
                    ? 'bg-primary-400 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Switch to Spanish"
              >
                ES
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-primary-400 font-medium transition-colors py-2"
              >
                {t('navInicio')}
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-left text-gray-700 hover:text-primary-400 font-medium transition-colors py-2"
              >
                {t('navServicios')}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left text-gray-700 hover:text-primary-400 font-medium transition-colors py-2"
              >
                {t('navContacto')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

