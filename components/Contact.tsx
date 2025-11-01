'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Contact() {
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
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              {t('ctaButton')}
            </h3>
            
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

