'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  FaFileMedical, 
  FaChartLine, 
  FaSyncAlt, 
  FaShieldAlt,
  FaArrowRight,
  FaArrowDown
} from 'react-icons/fa'

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: FaFileMedical,
      text: t('service1'),
    },
    {
      icon: FaChartLine,
      text: t('service2'),
    },
    {
      icon: FaSyncAlt,
      text: t('service3'),
    },
    {
      icon: FaShieldAlt,
      text: t('service4'),
    },
  ]

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          {t('servicesTitle')}
        </h2>
        
        <h3 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6 text-center">
          {t('medicalBillingTitle')}
        </h3>
        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-16 text-center">
          {t('service2Detail')}
        </p>
        
        <div className="space-y-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">
              <service.icon className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
        
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            {t('didYouKnowTitle')}
          </h4>
          <ul className="space-y-3 list-disc list-inside">
            <li className="text-lg text-gray-700 leading-relaxed">
              {t('didYouKnowText')}
            </li>
            <li className="text-lg text-gray-700 leading-relaxed">
              {t('usefulData1Text')}
            </li>
            <li className="text-lg text-gray-700 leading-relaxed">
              {t('usefulData2Text')}
            </li>
          </ul>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-400 hover:shadow-lg hover:bg-primary-400 transition-all duration-200 text-center w-[200px] h-[200px] flex flex-col justify-center group shrink-0">
              <div className="text-2xl font-bold text-primary-400 group-hover:text-white mb-2 transition-colors duration-200">Step 1</div>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-200 text-sm leading-tight">{t('billingProcess1')}</p>
            </div>
            <FaArrowRight className="hidden md:block text-gray-900 text-2xl flex-shrink-0" />
            <FaArrowDown className="md:hidden text-gray-900 text-2xl flex-shrink-0" />
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-secondary-400 hover:shadow-lg hover:bg-secondary-400 transition-all duration-200 text-center w-[200px] h-[200px] flex flex-col justify-center group shrink-0">
              <div className="text-2xl font-bold text-secondary-400 group-hover:text-white mb-2 transition-colors duration-200">Step 2</div>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-200 text-sm leading-tight">{t('billingProcess2')}</p>
            </div>
            <FaArrowRight className="hidden md:block text-gray-900 text-2xl flex-shrink-0" />
            <FaArrowDown className="md:hidden text-gray-900 text-2xl flex-shrink-0" />
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-accent-blue hover:shadow-lg hover:bg-accent-blue transition-all duration-200 text-center w-[200px] h-[200px] flex flex-col justify-center group shrink-0">
              <div className="text-2xl font-bold text-accent-blue group-hover:text-white mb-2 transition-colors duration-200">Step 3</div>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-200 text-sm leading-tight">{t('billingProcess3')}</p>
            </div>
            <FaArrowRight className="hidden md:block text-gray-900 text-2xl flex-shrink-0" />
            <FaArrowDown className="md:hidden text-gray-900 text-2xl flex-shrink-0" />
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-accent-violet hover:shadow-lg hover:bg-accent-violet transition-all duration-200 text-center w-[200px] h-[200px] flex flex-col justify-center group shrink-0">
              <div className="text-2xl font-bold text-accent-violet group-hover:text-white mb-2 transition-colors duration-200">Step 4</div>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-200 text-sm leading-tight">{t('billingProcess4')}</p>
            </div>
            <FaArrowRight className="hidden md:block text-gray-900 text-2xl flex-shrink-0" />
            <FaArrowDown className="md:hidden text-gray-900 text-2xl flex-shrink-0" />
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-accent-pink hover:shadow-lg hover:bg-accent-pink transition-all duration-200 text-center w-[200px] h-[200px] flex flex-col justify-center group shrink-0">
              <div className="text-2xl font-bold text-accent-pink group-hover:text-white mb-2 transition-colors duration-200">Step 5</div>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-200 text-sm leading-tight">{t('billingProcess5')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

