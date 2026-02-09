'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'

interface FloatingHeart {
  id: number
  left: number
  top: number
  delay: number
}

export default function Home() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    // Generate random positions only on client side
    const newHearts = [...Array(5)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: i * 0.5,
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center overflow-hidden relative">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-float opacity-20"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            <Heart className="w-8 h-8 text-rose-400" fill="currentColor" />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Main heading with animation */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400 mb-4">
            Our Love Story
          </h1>
          <p className="text-xl text-gray-600 font-light tracking-wide">
            A journey of moments, memories, and endless love
          </p>
        </div>

        {/* Navigation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* Welcome Page */}
          <Link href="/welcome">
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-pink-100/50 hover:border-rose-300/50 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <Heart className="w-8 h-8 text-rose-400 group-hover:animate-heartbeat" fill="currentColor" />
              </div>
              <h2 className="text-2xl font-playfair font-bold text-rose-500 mb-2">
                Welcome
              </h2>
              <p className="text-gray-600 text-sm">
                Begin our magical journey together
              </p>
            </div>
          </Link>

          {/* Memory Page */}
          <Link href="/memories">
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-purple-100/50 hover:border-purple-300/50 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <span className="text-4xl">🌳</span>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-purple-500 mb-2">
                Our Story
              </h2>
              <p className="text-gray-600 text-sm">
                Discover how our love began
              </p>
            </div>
          </Link>

          {/* Counter Page */}
          <Link href="/counter">
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100/50 hover:border-blue-300/50 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <span className="text-4xl">📅</span>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-blue-500 mb-2">
                Days Together
              </h2>
              <p className="text-gray-600 text-sm">
                Count every precious moment
              </p>
            </div>
          </Link>

          {/* Hidden Feelings Page */}
          <Link href="/feelings">
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-indigo-100/50 hover:border-indigo-300/50 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <span className="text-4xl">💬</span>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-indigo-500 mb-2">
                Hidden Messages
              </h2>
              <p className="text-gray-600 text-sm">
                Discover sweet surprises
              </p>
            </div>
          </Link>

          {/* Valentine Page */}
          <Link href="/valentine">
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-red-100/50 hover:border-red-300/50 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <span className="text-4xl">💝</span>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-red-500 mb-2">
                Every Day Valentine
              </h2>
              <p className="text-gray-600 text-sm">
                Choosing you, every single day
              </p>
            </div>
          </Link>

          {/* Final Page */}
          <Link href="/forever">
            <div className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-fuchsia-100/50 hover:border-fuchsia-300/50 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <span className="text-4xl">✨</span>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-fuchsia-500 mb-2">
                Forever & Always
              </h2>
              <p className="text-gray-600 text-sm">
                You are deeply loved
              </p>
            </div>
          </Link>
        </div>

        {/* Footer message */}
        <div className="mt-16 animate-pulse-subtle">
          <p className="text-gray-500 text-sm italic">
            Click on any card to explore the magic within...
          </p>
        </div>
      </div>
    </div>
  )
}
