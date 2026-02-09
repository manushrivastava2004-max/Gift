'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Feelings() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleMessages([0])
      const timers = [1, 2, 3, 4].map((i) =>
        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, i])
        }, i * 800)
      )
      return () => timers.forEach(clearTimeout)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const messages = [
    {
      text: 'You make me smile without even trying',
      position: 'top-32 left-10',
    },
    {
      text: 'I love the way you laugh',
      position: 'top-48 right-12',
    },
    {
      text: 'You are my safe place, my home',
      position: 'top-72 left-1/2 -translate-x-1/2',
    },
    {
      text: 'Every day with you is a gift',
      position: 'bottom-48 left-16',
    },
    {
      text: 'I choose you, always',
      position: 'bottom-32 right-20',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden relative">
      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-indigo-500 hover:text-indigo-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4">
            Hidden Messages
          </h1>
          <p className="text-lg text-gray-600">
            Move your mouse around to discover my secret feelings for you ✨
          </p>
        </div>

        {/* Floating messages */}
        <div className="relative h-screen max-h-96 mb-12">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 ${
                visibleMessages.includes(index)
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              } ${message.position}`}
              style={{
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
              }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 border-2 border-indigo-200/50 shadow-lg hover:shadow-2xl transition-all whitespace-nowrap">
                <p className="font-playfair text-indigo-500 font-semibold text-lg">
                  {message.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Main message section */}
        <div className="mb-12 animate-slide-up">
          <div className="bg-gradient-to-br from-white/80 to-indigo-50/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-indigo-200/50 shadow-2xl">
            <h2 className="text-3xl font-playfair font-bold text-indigo-500 mb-6 text-center">
              What You Mean to Me
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <p>
                You are the reason my heart skips a beat. In a world full of chaos, you are my calm, my peace, my everything.
              </p>
              <p>
                The way you understand me without words, the way you hold my hand like it's the most precious thing in the world, the way you look at me like I'm your entire world—it all means everything to me.
              </p>
              <p>
                You've shown me what real love feels like. Not just in grand gestures, but in the quiet moments, the everyday miracles we share, the simple joy of just being together.
              </p>
              <p>
                I fall in love with you a little more every single day.
              </p>
            </div>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
            <div className="aspect-video bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center text-white text-6xl animate-pulse-subtle">
              💌
            </div>
            <p className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 text-center font-medium">
              Add a photo that captures a moment when you felt truly loved
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/counter"
            className="text-indigo-500 hover:text-indigo-700 transition-colors font-medium"
          >
            ← Previous
          </Link>
          <Link
            href="/valentine"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-playfair px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}
