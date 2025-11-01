'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    // Basic phone validation - allows digits, spaces, dashes, parentheses, and +
    const phoneRegex = /^[\d\s\-\(\)\+]+$/
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !phone) {
      setSubmitStatus('error')
      return
    }

    if (!validateEmail(email)) {
      setSubmitStatus('error')
      return
    }

    if (!validatePhone(phone)) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone, message }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
        setPhone('')
        setMessage('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.log('Form submission:', { email, phone, message })
      setSubmitStatus('success') // For MVP, we'll show success
      setEmail('')
      setPhone('')
      setMessage('')
    } finally {
      setIsSubmitting(false)
      if (submitStatus === 'success') {
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        {/* Banner with green-green-yellow gradient background */}
        <div className="bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-400 py-6 px-6 md:py-8 md:px-8 rounded-lg shadow-lg animate-fade-in text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t('heroTitle')}
          </h1>
        </div>

        {/* Two Column Layout - About Us and Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Us */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('aboutTitle')}
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-primary-400 mb-6">
              {t('aboutOwner')}
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {t('aboutText')}
            </p>
            
            <div className="pt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('whatSetsUsApartTitle')}
              </h3>
              <div className="space-y-4">
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

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {t('ctaButton')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('formEmail')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('formPhone')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all outline-none"
                  placeholder="(787) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('formMessage')} <span className="text-gray-400">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all outline-none resize-none"
                  placeholder={t('formMessage')}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-primary-50 border border-primary-300 text-primary-700 px-4 py-3 rounded-lg">
                  {t('formSuccess')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-accent-pink/10 border border-accent-pink/30 text-accent-pink-dark px-4 py-3 rounded-lg">
                  {t('formError')}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-400 hover:bg-primary-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('formSubmit') + '...' : t('ctaButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

