"use client"

interface SafeImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  width?: number
  height?: number
}

export default function SafeImage({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc,
  width,
  height 
}: SafeImageProps) {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc) {
      e.currentTarget.src = fallbackSrc
    } else {
      // Generate avatar fallback based on the alt text
      const name = alt.replace(/[^a-zA-Z ]/g, "").trim()
      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3b82f6&color=fff${width ? `&size=${width}` : ''}`
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      width={width}
      height={height}
    />
  )
}
