'use client'

import Link from 'next/link'
import { ChevronLeft, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Forever() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-purple-50 to-pink-50 flex items-center justify-center overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {isLoaded && [...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            <Heart className="w-6 h-6 text-fuchsia-400" fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-fuchsia-500 hover:text-fuchsia-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      <div
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Main heading */}
        <div className="mb-12 animate-slide-up">
          <h1 className="text-7xl md:text-8xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 mb-6">
            Forever &
            <br />
            Always
          </h1>
          <p className="text-2xl font-playfair text-fuchsia-500">
            You Are Deeply Loved
          </p>
        </div>

        {/* Main message */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border-2 border-fuchsia-200/50 shadow-2xl">
            <div className="mb-8 flex justify-center">
              <Heart className="w-16 h-16 text-fuchsia-500 animate-heartbeat" fill="currentColor" />
            </div>

            <p className="text-3xl font-playfair font-bold text-fuchsia-500 mb-8">
              A Promise to You
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <p>
                I promise to love you with all that I am, through every season of life. In moments of joy and in times of struggle, I choose you—not just today, but forever.
              </p>

              <p>
                You are seen, you are valued, you are cherished beyond measure. Your dreams matter to me. Your happiness is my mission. Your heart is safe with me.
              </p>

              <p>
                I promise to hold your hand when you're scared, to celebrate you when you're proud, to lift you up when you fall. I promise to be your biggest cheerleader, your greatest supporter, your truest love.
              </p>

              <p>
                This is not just a moment—this is forever. Every sunrise, every sunset, every quiet moment in between will be filled with my love for you.
              </p>

              <p className="text-fuchsia-500 font-semibold text-xl pt-4">
                You are my greatest adventure, my most beautiful dream come true.
              </p>
            </div>
          </div>
        </div>

               {/* Forever photo section */}
<div className="mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
    
    {/* IMAGE */}
    <img
      src="/images/forever.jpg"
      alt="Our Forever"
      className="w-full aspect-video object-cover"
    />

    {/* Caption */}
    <div className="p-8 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white text-center">
      <p className="text-lg font-medium">
        This is our forever moment 💕
      </p>
      <p className="text-sm mt-2 opacity-90">
        Today, tomorrow, and always — us.
      </p>
    </div>

  </div>
</div>


        {/* Final message box */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.9s' }}>
          <div className="bg-gradient-to-r from-fuchsia-100/80 to-purple-100/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-fuchsia-200/50">
            <p className="text-xl font-playfair italic text-fuchsia-600">
              "In you, I found my home, my peace, and my forever. You are my answer to every wish, every prayer, every dream I've ever had. Thank you for choosing to build this beautiful life with me."
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4 animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <Link
            href="/"
            className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-playfair text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Return to Home 💫
          </Link>
          <p className="text-gray-500 text-sm italic">
            This website is our love story. Feel free to come back and relive these moments anytime.
          </p>
        </div>
      </div>
    </div>
  )
}
