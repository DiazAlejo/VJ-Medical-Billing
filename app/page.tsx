import dynamic from 'next/dynamic'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

// Dynamically import below-the-fold components for code splitting
const Specialties = dynamic(() => import('@/components/Specialties').then(mod => ({ default: mod.Specialties })), {
  loading: () => <div className="py-16 md:py-24" />,
})
const Services = dynamic(() => import('@/components/Services').then(mod => ({ default: mod.Services })), {
  loading: () => <div className="py-16 md:py-24" />,
})
const Contact = dynamic(() => import('@/components/Contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-16 md:py-24" />,
})
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="py-12 md:py-16" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Specialties />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

