'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import { 
  FaHeartbeat,
  FaBrain,
  FaEye,
  FaLungs,
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaProcedures,
  FaHandHoldingHeart,
  FaComments,
  FaShoePrints,
  FaPlus
} from 'react-icons/fa'

export function Specialties() {
  const { t } = useLanguage()

  // Define specialties with icons in the specified order
  const specialties = [
    { name: t('specialtyPodiatry'), icon: FaShoePrints },
    { name: t('specialtyInternalMedicine'), icon: FaUserMd },
    { name: t('specialtyPsychiatry'), icon: FaBrain },
    { name: t('specialtyCardiology'), icon: FaHeartbeat },
    { name: t('specialtyGynecology'), icon: FaStethoscope },
    { name: t('specialtyOptometry'), icon: FaEye },
    { name: t('specialtyPulmonology'), icon: FaLungs },
    { name: t('specialtyEmergency'), icon: FaHospital },
    { name: t('specialtySpeech'), icon: FaComments },
    { name: t('specialtyRheumatology'), icon: FaProcedures },
    { name: t('specialtyGeriatrics'), icon: FaHandHoldingHeart },
    { name: t('specialtyAndMore'), icon: FaPlus },
  ]

  return (
    <section id="especialidades" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/bg.png"
          alt=""
          fill
          className="object-cover"
          quality={75}
          loading="lazy"
          sizes="100vw"
          style={{ transform: 'rotate(180deg) scale(1.5)', transformOrigin: 'center center' }}
          priority={false}
      />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {t('specialtiesTitle')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon
            // Cycle through accent colors: blue, violet, or pink only
            const colorClasses = [
              'text-accent-blue',
              'text-accent-violet',
              'text-accent-pink',
            ]
            const hoverClasses = [
              'hover:border-accent-blue hover:bg-accent-blue',
              'hover:border-accent-violet hover:bg-accent-violet',
              'hover:border-accent-pink hover:bg-accent-pink',
            ]
            const colorIndex = index % colorClasses.length
            const iconColorClass = colorClasses[colorIndex]
            const hoverClass = hoverClasses[colorIndex]
            
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 border border-gray-200 ${hoverClass} hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center group`}
              >
                <Icon className={`w-10 h-10 ${iconColorClass} mb-4 group-hover:text-white group-hover:scale-110 transition-all duration-200`} />
                <p className="text-sm md:text-base font-medium text-gray-900 group-hover:text-white transition-colors duration-200">
                  {specialty.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

