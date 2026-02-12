import { useEffect, useRef } from 'react'

export default function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const numStars = 100
    const stars: HTMLDivElement[] = []

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div')
      star.style.position = 'absolute'
      star.style.backgroundColor = 'white'
      star.style.borderRadius = '50%'
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      const size = Math.random() * 2 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      const duration = Math.random() * 5 + 3
      star.style.animation = `twinkle ${duration}s infinite`
      container.appendChild(star)
      stars.push(star)
    }

    return () => {
      stars.forEach((s) => s.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
