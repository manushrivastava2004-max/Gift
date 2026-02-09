'use client'

import Link from 'next/link'
import { ChevronLeft, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Welcome() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center overflow-hidden relative">
      
      {/* Animated background hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <Heart className="w-12 h-12 text-red-400" fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-rose-500 hover:text-rose-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      <div
        className={`relative z-10 max-w-2xl mx-auto px-6 text-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Welcome greeting */}
        <div className="mb-12 animate-slide-up">
          <h1 className="text-7xl md:text-8xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500 mb-6">
            Welcome
          </h1>
          <p className="text-3xl font-playfair text-rose-500 mb-4">
            My One & Only
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed max-w-xl mx-auto">
            You're about to embark on a magical journey through our memories,
            emotions, and the beautiful love story we've built together. Each
            page holds a piece of my heart for you.
          </p>
        </div>

        {/* PHOTO SECTION (DIRECT IMAGE) */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 backdrop-blur-sm">
            <img
              src="/images/myphoto.jpg"
              alt="My One & Only"
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <p className="absolute bottom-4 left-4 right-4 text-sm text-white bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
              Forever us 💖
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-100/50 shadow-xl">
            <Heart
              className="w-6 h-6 text-rose-400 mx-auto mb-4 animate-heartbeat"
              fill="currentColor"
            />
            <p className="text-xl font-playfair text-rose-500 mb-4">
              Every moment with you is a treasure
            </p>
            <p className="text-gray-600 leading-relaxed">
              From the day we met to this very moment, you've filled my life with
              boundless joy and endless love. This page is a celebration of us, a
              digital love letter to the most important person in my world.
            </p>
          </div>
        </div>

        {/* Continue button */}
        <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Link
            href="/memories"
            className="inline-block bg-gradient-to-r from-rose-400 to-red-500 text-white font-playfair text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Continue to Our Story →
          </Link>
        </div>
      </div>
    </div>
  )
}
