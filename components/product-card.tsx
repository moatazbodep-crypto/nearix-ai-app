"use client"

import Image from "next/image"
import { Sparkles } from "lucide-react"

interface ProductCardProps {
  name: string
  description: string
  currentPrice: number
  wasPrice: number
  savings: number
  image: string
  aiRecommendation?: string
}

export function ProductCard({
  name,
  description,
  currentPrice,
  wasPrice,
  savings,
  image,
  aiRecommendation,
}: ProductCardProps) {
  return (
    <div 
      className="overflow-hidden rounded-2xl"
      style={{
        background: "linear-gradient(180deg, rgba(250, 245, 255, 0.95) 0%, rgba(243, 232, 255, 0.9) 100%)",
        border: "1px solid rgba(168, 85, 247, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
      }}
    >
      {/* Product Image - light background */}
      <div className="relative aspect-square overflow-hidden bg-white/80 p-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Product Info - dark text on light background */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-3 gap-2 text-center py-2 border-t border-purple-200/50">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Current Price
            </p>
            <p className="text-base font-bold text-gray-900">
              ${currentPrice.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Was
            </p>
            <p className="text-base font-medium text-gray-400 line-through">
              ${wasPrice.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Savings
            </p>
            <p className="text-base font-bold text-green-600">%{savings}</p>
          </div>
        </div>

        {/* AI Recommendation */}
        {aiRecommendation && (
          <div className="flex items-center gap-2 rounded-lg bg-purple-100 px-3 py-2">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-xs text-purple-800 font-medium">
              Nearix AI: {aiRecommendation}
            </span>
          </div>
        )}

        {/* Action Button */}
        <button className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:shadow-purple-500/50 active:scale-[0.98]">
          Add to Vault
        </button>
      </div>
    </div>
  )
}
