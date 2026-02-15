"use client"

import { useEffect, useRef, useState } from "react"

interface TransparentLogoProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  /** Apply enhanced styling: drop shadow, glow, and subtle lift */
  enhanced?: boolean
  /** Variant for different contexts: "hero" | "nav" | "footer" */
  variant?: "hero" | "nav" | "footer"
}

export function TransparentLogo({
  src,
  alt,
  className = "",
  width,
  height,
  enhanced = false,
  variant = "footer",
}: TransparentLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dataUrl, setDataUrl] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      setDimensions({ w: img.naturalWidth, h: img.naturalHeight })

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Sample background color from corner pixels
      const bgR = data[0]
      const bgG = data[1]
      const bgB = data[2]

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        // Calculate color distance from background
        const dist = Math.sqrt(
          (r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2
        )

        // Threshold-based transparency with smooth anti-aliased edge
        const threshold = 45
        const feather = 30

        if (dist < threshold) {
          // Fully transparent for near-background pixels
          data[i + 3] = 0
        } else if (dist < threshold + feather) {
          // Smooth feathering zone for anti-aliased edges
          const alpha = ((dist - threshold) / feather) * 255
          data[i + 3] = Math.round(alpha)
        }
        // else: keep original alpha (fully opaque)
      }

      ctx.putImageData(imageData, 0, 0)
      setDataUrl(canvas.toDataURL("image/png"))
    }
    img.src = src
  }, [src])

  const enhancedStyles =
    enhanced && variant === "hero"
      ? {
        filter:
          "drop-shadow(0 0 24px hsl(142 76% 56% / 0.3)) drop-shadow(0 0 48px hsl(142 76% 56% / 0.15)) drop-shadow(0 4px 12px rgba(0,0,0,0.08))",
      }
      : enhanced && variant === "nav"
        ? {
          filter:
            "drop-shadow(0 2px 8px hsl(142 76% 56% / 0.2)) drop-shadow(0 1px 3px rgba(0,0,0,0.06))",
          transition: "filter 0.2s ease, transform 0.2s ease",
        }
        : enhanced && variant === "footer"
          ? {
            filter:
              "drop-shadow(0 2px 6px hsl(142 76% 56% / 0.15)) drop-shadow(0 1px 2px rgba(0,0,0,0.04))",
          }
          : undefined

  return (
    <>
      <canvas ref={canvasRef} className="hidden" aria-hidden="true" />
      {dataUrl ? (
        <img
          src={dataUrl}
          alt={alt}
          width={width || dimensions.w}
          height={height || dimensions.h}
          className={`${className} ${enhanced && variant === "nav" ? "hover:scale-105" : ""}`}
          style={enhancedStyles}
          draggable={false}
        />
      ) : (
        // Invisible placeholder to prevent layout shift
        <div
          className={className}
          style={{ width: width || "auto", height: height || "auto" }}
          aria-hidden="true"
        />
      )}
    </>
  )
}
