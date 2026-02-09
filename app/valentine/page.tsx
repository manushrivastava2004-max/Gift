'use client'

import React from "react"

import Link from 'next/link'
import { ChevronLeft, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Valentine() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [nextId, setNextId] = useState(0)

  const handleHeartClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newHeart = {
      id: nextId,
      x: e.clientX,
      y: e.clientY,
    }
    setHearts((prev) => [...prev, newHeart])
    setNextId(nextId + 1)

    // Remove heart after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
    }, 1500)
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 overflow-hidden relative"
      onClick={handleHeartClick}
    >
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="fixed pointer-events-none animate-fade-in"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            animation: 'float 1.5s ease-out forwards',
          }}
        >
          <Heart
            className="w-8 h-8 text-red-500"
            fill="currentColor"
            style={{
              animation: 'slideUp 1.5s ease-out forwards',
            }}
          />
        </div>
      ))}

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-red-500 hover:text-red-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-7xl md:text-8xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 mb-4">
            Every Day
          </h1>
          <h2 className="text-4xl font-playfair text-red-500 mb-4">
            You're My Valentine
          </h2>
          <p className="text-lg text-gray-600">
            Not just on Valentine's Day, but every single day of my life
          </p>
        </div>

        {/* Main message */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-red-200/50 shadow-2xl">
            <div className="flex justify-center mb-6">
              <Heart className="w-12 h-12 text-red-500 animate-heartbeat" fill="currentColor" />
            </div>
            <p className="text-2xl font-playfair text-red-500 mb-6 text-center">
              The Most Beautiful Love Letter
            </p>
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <p>
                Darling, I choose you every single morning when I wake up. I choose you in the moments of doubt, in the storms, in the quiet peace of everyday life. You are not just a Valentine—you are my forever choice.
              </p>
              <p>
                Valentine's Day is beautiful, but it could never capture what you mean to me. Every 24 hours is a chance to love you deeper, to cherish you more, to show you just how much you matter. You are my daily miracle.
              </p>
              <p>
                Your love has changed my entire world. It's made me believe in forever, in soulmates, in the kind of love that stories are written about. You've shown me that the greatest love story is the one we're living right now.
              </p>
              <p>
                So today, and every day after, I celebrate you. I celebrate us. I celebrate the privilege of loving you with every fiber of my being.
              </p>
            </div>
          </div>
        </div>

        {/* Click interaction hint */}
        <div className="mb-12 animate-pulse-subtle text-center">
          <p className="text-sm text-red-400 italic">
            Click anywhere to send floating hearts 💕
          </p>
        </div>

       {/* Valentine photo section */}
<div className="mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">

    {/* IMAGE */}
    <img
      src="/images/valentine.jpg"
      alt="Us Being Happy Together"
      className="w-full aspect-video object-cover"
    />

    {/* Caption */}
    <p className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 text-center font-medium">
      Us, smiling through every season 💑
    </p>

  </div>
</div>

        {/* Message cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-100/50 hover:shadow-lg transition-all">
            <div className="text-center">
              <span className="text-3xl mb-2 block">💌</span>
              <p className="font-playfair font-bold text-red-500">Love Letters</p>
              <p className="text-sm text-gray-600 mt-2">Written daily in my heart</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-rose-100/50 hover:shadow-lg transition-all">
            <div className="text-center">
              <span className="text-3xl mb-2 block">🌹</span>
              <p className="font-playfair font-bold text-rose-500">Forever Blooming</p>
              <p className="text-sm text-gray-600 mt-2">Our love keeps growing</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-100/50 hover:shadow-lg transition-all">
            <div className="text-center">
              <span className="text-3xl mb-2 block">💎</span>
              <p className="font-playfair font-bold text-pink-500">Priceless</p>
              <p className="text-sm text-gray-600 mt-2">More precious than anything</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/feelings"
            className="text-red-500 hover:text-red-700 transition-colors font-medium"
          >
            ← Previous
          </Link>
          <Link
            href="/forever"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-playfair px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}
