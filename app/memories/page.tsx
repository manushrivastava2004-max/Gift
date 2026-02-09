'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Memories() {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([])

  useEffect(() => {
    const timers = [0, 1, 2, 3, 4].map((i) =>
      setTimeout(() => {
        setVisibleMilestones((prev) => [...prev, i])
      }, i * 300)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const milestones = [
    { year: 'The Beginning', description: 'The day our hearts first connected', icon: '💫' },
    { year: 'First Adventure', description: 'Exploring the world together', icon: '✈️' },
    { year: 'Growing Together', description: 'Building dreams side by side', icon: '🌱' },
    { year: 'Forever Promise', description: 'Knowing you are my forever', icon: '💍' },
    { year: 'Today & Always', description: 'Still falling in love every day', icon: '❤️' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute -bottom-8 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Back button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-purple-500 hover:text-purple-700 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
            Our Story
          </h1>
          <p className="text-lg text-gray-600">
            Like a tree growing stronger with each passing season, our love has blossomed
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                visibleMilestones.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="flex gap-6 items-start">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-purple-300 flex items-center justify-center text-2xl shadow-lg animate-pulse-subtle">
                    {milestone.icon}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-1 h-12 bg-gradient-to-b from-purple-300 to-transparent -translate-x-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow pt-2">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <h3 className="text-2xl font-playfair font-bold text-purple-500 mb-2">
                      {milestone.year}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Memory image section */}
<div className="mt-16 animate-slide-up">
  <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-100/50 shadow-2xl">
    
    {/* IMAGE */}
    <img
      src="/images/memory.jpg"
      alt="Our Memory"
      className="w-full aspect-video object-cover"
    />

    {/* Text */}
    <div className="p-8 text-center">
      <h3 className="text-2xl font-playfair font-bold text-purple-500 mb-2">
        Our Growing Tree of Love 🌳
      </h3>
      <p className="text-gray-600">
        Every memory is a branch, every moment a leaf — together we keep growing stronger.
      </p>
    </div>

  </div>
</div>

        {/* Navigation */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            href="/welcome"
            className="text-purple-500 hover:text-purple-700 transition-colors font-medium"
          >
            ← Previous
          </Link>
          <Link
            href="/counter"
            className="bg-gradient-to-r from-purple-400 to-pink-500 text-white font-playfair px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}
