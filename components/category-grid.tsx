"use client"

import Image from "next/image"
import { ChevronLeft } from "lucide-react"

const categories = [
  { 
    id: "laptop", 
    label: "Laptop/Phone", 
    tracking: true,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop",
  },
  { 
    id: "rolex", 
    label: "Rolex", 
    tracking: true,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=200&h=200&fit=crop",
  },
  { 
    id: "camera", 
    label: "Camera", 
    tracking: false,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop",
  },
  { 
    id: "drone", 
    label: "Drone", 
    tracking: false,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=200&h=200&fit=crop",
  },
]

export function CategoryGrid() {
  return (
    <div 
      className="rounded-2xl p-5 space-y-4"
      style={{
        background: "linear-gradient(180deg, rgba(20, 10, 35, 0.7) 0%, rgba(15, 8, 28, 0.8) 100%)",
        border: "1px solid rgba(168, 85, 247, 0.2)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <button 
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{
            background: "rgba(168, 85, 247, 0.15)",
            border: "1px solid rgba(168, 85, 247, 0.2)",
          }}
        >
          <ChevronLeft className="h-4 w-4 text-purple-400" />
        </button>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-white">Deep Dual Column</h2>
        </div>
      </div>

      {/* Vault subtitle */}
      <div className="text-center">
        <h3 className="text-base font-medium text-purple-300/80">Your Smart Vault</h3>
        <p className="text-xs text-purple-300/50 mt-1">Track and manage your collectibles</p>
      </div>

      {/* Category Grid - 2x2 */}
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-xl overflow-hidden"
            style={{
              background: "rgba(250, 245, 255, 0.95)",
              border: "1px solid rgba(168, 85, 247, 0.15)",
            }}
          >
            {/* Image */}
            <div className="relative aspect-square bg-white">
              <Image
                src={category.image}
                alt={category.label}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Info */}
            <div className="p-3 space-y-1">
              <span className="text-sm font-medium text-gray-900">{category.label}</span>
              
              {/* Mini chart */}
              <div className="flex h-6 items-end gap-0.5">
                {[35, 55, 25, 70, 45, 60, 40, 80, 50, 65].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{ 
                      height: `${height}%`,
                      background: i > 6 ? "#a855f7" : "rgba(168, 85, 247, 0.4)",
                    }}
                  />
                ))}
              </div>
              
              {/* Tracking status */}
              {category.tracking && (
                <div className="flex items-center gap-1.5 pt-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] text-green-600 font-medium">Price tracking: active</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
