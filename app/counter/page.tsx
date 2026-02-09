'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Counter() {
  const [days, setDays] = useState(0)
  const [displayDays, setDisplayDays] = useState(0)

  useEffect(() => {
    // FIXED DATES
    const startDate = new Date('2025-09-28')
    const endDate = new Date('2026-02-09')

    const difference = endDate.getTime() - startDate.getTime()
    const calculatedDays = Math.floor(difference / (1000 * 60 * 60 * 24))
    setDays(calculatedDays)

    // Animate counter
    let current = 0
    const interval = setInterval(() => {
      if (current < calculatedDays) {
        current += Math.ceil((calculatedDays - current) / 10)
        setDisplayDays(Math.min(current, calculatedDays))
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 flex items-center justify-center overflow-hidden relative">

      {/* Floating background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-blue-500 hover:text-blue-700"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <div className="mb-12 animate-slide-up">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
            Days Together
          </h1>
          <p className="text-xl text-gray-600 font-light">
            From 28 Sept 2025 to 9 Feb 2026 💙
          </p>
        </div>

        {/* Counter */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-3xl opacity-20 animate-glow" />
            <div className="relative bg-white/90 rounded-3xl p-14 border-2 border-blue-200 shadow-2xl">
              <div className="text-8xl md:text-9xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                {displayDays}
              </div>
              <p className="text-2xl text-gray-600">Beautiful Days</p>
              <p className="text-lg text-gray-500 mt-2">And counting forever ♾️</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/80 rounded-2xl p-6 border">
            <p className="text-4xl font-bold text-blue-500">{Math.floor(days / 7)}</p>
            <p className="text-gray-600">Weeks</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-6 border">
            <p className="text-4xl font-bold text-cyan-500">{Math.floor(days / 30)}</p>
            <p className="text-gray-600">Months</p>
          </div>
          <div className="bg-white/80 rounded-2xl p-6 border">
            <p className="text-4xl font-bold text-blue-400">{Math.floor(days / 365)}</p>
            <p className="text-gray-600">Years</p>
          </div>
        </div>

        {/* PHOTO SECTION (DIRECT IMAGE) */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
            <img
              src="/images/counter.jpg"
              alt="Our Days Together"
              className="w-full aspect-video object-cover"
            />
            <p className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white py-4 text-center font-medium">
              Every day with you is my favorite 💕
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border">
            <p className="text-lg text-gray-700 italic">
              "From our first day to today, every sunrise with you has been a blessing.  
              And I promise — this count will never stop."
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/memories" className="text-blue-500 font-medium">
            ← Previous
          </Link>
          <Link
            href="/feelings"
            className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-playfair px-8 py-3 rounded-full hover:shadow-lg"
          >
            Next →
          </Link>
        </div>

      </div>
    </div>
  )
}
