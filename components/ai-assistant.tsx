"use client"

import { useState } from "react"
import { Send, Mic, Search, ChevronLeft, Home, Building, Car, Smartphone } from "lucide-react"

const suggestedQueries = [
  "What is on the actual invitation?",
  "Low, minimal suggests",
  "convertkocus AI datis",
]

const categories = [
  { id: "electronics", label: "Electronics", icon: Smartphone },
  { id: "cars", label: "Cars", icon: Car },
  { id: "realestate", label: "Real Estate", icon: Building },
  { id: "home", label: "Home", icon: Home },
]

export function AIAssistant() {
  const [query, setQuery] = useState("")
  const [isListening, setIsListening] = useState(false)

  return (
    <div className="space-y-5">
      {/* Header */}
      <div 
        className="rounded-2xl p-5"
        style={{
          background: "linear-gradient(180deg, rgba(20, 10, 35, 0.7) 0%, rgba(15, 8, 28, 0.8) 100%)",
          border: "1px solid rgba(168, 85, 247, 0.2)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <button 
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{
              background: "rgba(168, 85, 247, 0.15)",
              border: "1px solid rgba(168, 85, 247, 0.2)",
            }}
          >
            <ChevronLeft className="h-4 w-4 text-purple-400" />
          </button>
          <h2 className="text-lg font-semibold text-white">AI Smart Search</h2>
        </div>

        {/* Search Input */}
        <div 
          className="rounded-xl p-3 mb-4"
          style={{
            background: "rgba(10, 5, 20, 0.6)",
            border: "1px solid rgba(168, 85, 247, 0.15)",
          }}
        >
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-purple-400/60" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 bg-transparent text-sm text-white placeholder-purple-300/40 outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all"
                style={{
                  background: "rgba(168, 85, 247, 0.15)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                }}
              >
                <Icon className="h-4 w-4 text-purple-400" />
                <span className="text-purple-200">{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Subtitle */}
        <p className="text-center text-xs text-purple-300/50 mt-4">
          Search intelligently with AI assistance
        </p>
      </div>

      {/* Map View */}
      <div 
        className="relative rounded-2xl overflow-hidden h-48"
        style={{
          background: "linear-gradient(180deg, rgba(20, 10, 35, 0.8) 0%, rgba(15, 8, 28, 0.9) 100%)",
          border: "1px solid rgba(168, 85, 247, 0.2)",
        }}
      >
        {/* Radar/map visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Concentric circles */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border border-purple-500/20"
              style={{
                width: `${i * 25}%`,
                height: `${i * 25}%`,
              }}
            />
          ))}
          {/* Radar sweep */}
          <div 
            className="absolute w-1/2 h-px origin-left animate-spin"
            style={{
              background: "linear-gradient(90deg, rgba(168, 85, 247, 0.6) 0%, transparent 100%)",
              animationDuration: "4s",
            }}
          />
          {/* Center dot */}
          <div className="h-3 w-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
        </div>
        
        {/* Data points */}
        <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-purple-400">
          <div className="absolute inset-0 animate-ping rounded-full bg-purple-400" />
        </div>
        <div className="absolute right-1/3 bottom-1/3 h-2 w-2 rounded-full bg-violet-400">
          <div className="absolute inset-0 animate-ping rounded-full bg-violet-400" style={{ animationDelay: "0.5s" }} />
        </div>
        <div className="absolute right-1/4 top-1/3 h-1.5 w-1.5 rounded-full bg-purple-300">
          <div className="absolute inset-0 animate-ping rounded-full bg-purple-300" style={{ animationDelay: "1s" }} />
        </div>

        <div className="absolute bottom-3 left-3 text-sm font-medium text-purple-300/80">
          Map View
        </div>
        <div className="absolute bottom-3 right-3 text-xs text-purple-300/50">
          Active Locations
        </div>
      </div>

      {/* Suggested Queries */}
      <div className="space-y-2">
        {suggestedQueries.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => setQuery(suggestion)}
            className="block w-full rounded-xl px-4 py-3 text-left text-sm text-purple-200/70 transition-all"
            style={{
              background: "rgba(20, 10, 35, 0.5)",
              border: "1px solid rgba(168, 85, 247, 0.15)",
            }}
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <div 
        className="flex items-center gap-3 rounded-xl p-3"
        style={{
          background: "rgba(15, 8, 28, 0.8)",
          border: "1px solid rgba(168, 85, 247, 0.2)",
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="...AI Nearix"
          className="flex-1 bg-transparent text-sm text-white placeholder-purple-300/40 outline-none"
        />
        <button
          onClick={() => setIsListening(!isListening)}
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
            isListening
              ? "bg-purple-500 text-white"
              : "bg-purple-500/20 text-purple-400"
          }`}
        >
          <Mic className="h-4 w-4" />
        </button>
        <button 
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
            boxShadow: "0 4px 15px rgba(168, 85, 247, 0.4)",
          }}
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
