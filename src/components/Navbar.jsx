import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Карта', href: '#map' },
  { label: 'Места', href: '#places' },
  { label: 'Категории', href: '#categories' },
  { label: 'О регионе', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 32px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        backgroundColor: scrolled ? 'rgba(10,22,40,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(26,58,107,0.4)' : 'none',
        transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease',
      }}
    >
      <a href="#" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          color: '#f5a623',
          letterSpacing: '-0.5px',
        }}>
          НАО<span style={{ color: '#f0f4f8' }}> Туризм</span>
        </span>
      </a>

      <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {navLinks.map(link => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ color: '#f5a623' }}
            style={{
              color: '#94a3b8',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'color 0.2s ease',
              fontFamily: 'Golos Text, sans-serif',
            }}
          >
            {link.label}
          </motion.a>
        ))}
        <motion.a
          href="#map"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            marginLeft: '8px',
            padding: '10px 20px',
            background: 'linear-gradient(135deg, #f5a623, #fbbf24)',
            color: '#0a1628',
            textDecoration: 'none',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: 700,
            fontFamily: 'Unbounded, sans-serif',
            letterSpacing: '0.3px',
          }}
        >
          Открыть карту
        </motion.a>
      </nav>
    </motion.header>
  )
}
