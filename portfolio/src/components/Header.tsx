import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' }
  ]

  function isActive(path: string) {
    return location.pathname === path
  }

  return (
    <header className="relative z-20 shadow-purple">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link
          to="/"
          className="font-display text-2xl text-lavender hover:text-pink transition-colors"
        >
          Lisa Werner
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-lg transition-colors ${
                  isActive(link.to)
                    ? 'text-pink'
                    : 'text-lavender hover:text-pink'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="text-lg transition-colors hover:text-pink">
            <a href="https://github.com/LisaWerner856" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-lavender hover:text-pink transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-6 bg-dark-purple/80 backdrop-blur-sm">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-lg transition-colors ${
                  isActive(link.to)
                    ? 'text-pink'
                    : 'text-lavender hover:text-pink'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="text-lg transition-colors hover:text-pink">
            <a href="https://github.com/LisaWerner856" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
