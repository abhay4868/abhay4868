"use client"

import { useEffect, useState } from "react"

export default function Banner2() {
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const fullText = 'System.out.println("Hello, Universe!");'

  useEffect(() => {
    setMounted(true)

    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative h-96 bg-gradient-to-r from-gray-900 via-purple-900/30 to-gray-900 overflow-hidden">
      {/* Coffee Steam Animation */}
      <div className="absolute top-8 right-12">
        <div className="relative">
          <div className="w-16 h-20 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-full" />
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${i * 4 - 4}px`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {["{}", "()", "[]", "<>", "//"].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-cosmic-purple/20 text-2xl font-mono animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Constellation Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="constellation" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" className="animate-twinkle" />
              <circle cx="80" cy="40" r="1" fill="white" className="animate-twinkle" style={{ animationDelay: "1s" }} />
              <circle cx="50" cy="70" r="1" fill="white" className="animate-twinkle" style={{ animationDelay: "2s" }} />
              <line x1="20" y1="20" x2="80" y2="40" stroke="white" strokeWidth="0.5" opacity="0.3" />
              <line x1="80" y1="40" x2="50" y2="70" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-between px-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white">{"Abhay"}</h1>
            <p className="text-cosmic-blue text-lg">{"Software Engineer & Coffee Connoisseur"}</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-cosmic-purple/30">
            <div className="text-green-400 font-mono text-sm mb-2">{"// Brewing code with passion"}</div>
            <div className="text-white font-mono">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="bg-cosmic-orange/20 px-3 py-1 rounded-full border border-cosmic-orange/30">
              {"☕ Coffee Driven"}
            </span>
            <span className="bg-cosmic-purple/20 px-3 py-1 rounded-full border border-cosmic-purple/30">
              {"☕ Java Expert"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
