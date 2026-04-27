import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Достопримечательности', href: '#places' },
  { label: 'Категории',             href: '#categories' },
  { label: 'О регионе',             href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 48px', height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.6)' : 'none',
        backgroundColor: scrolled ? 'rgba(242,246,250,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid #CDD8E4' : '1px solid transparent',
        transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '38px', height: '38px',
          background: '#1A3A5C',
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '18px', flexShrink: 0,
        }}>
          ❄
        </div>
        <span style={{
          fontFamily: 'Unbounded, sans-serif', fontWeight: 700,
          fontSize: '16px', color: '#0C1F35', letterSpacing: '-0.3px',
        }}>
          НАО <span style={{ color: '#C47A08' }}>Туризм</span>
        </span>
      </a>

      {/* Nav */}
      <nav style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
        {navLinks.map(link => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ color: '#0C1F35' }}
            style={{
              color: '#5C82A0', textDecoration: 'none',
              fontSize: '14px', fontWeight: 500,
              padding: '8px 16px', borderRadius: '8px',
              transition: 'color 0.2s ease',
              fontFamily: 'Golos Text, sans-serif',
            }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href="#places"
          whileHover={{ scale: 1.04, boxShadow: '0 4px 20px rgba(196,122,8,0.35)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            marginLeft: '10px', padding: '11px 26px',
            background: '#C47A08',
            color: '#FFFFFF', textDecoration: 'none',
            borderRadius: '11px', fontSize: '13px', fontWeight: 700,
            fontFamily: 'Unbounded, sans-serif', letterSpacing: '0.2px',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          Исследовать
        </motion.a>
      </nav>
    </motion.header>
  )
}
