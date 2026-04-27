import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'

const navLinks = [
  { label: 'Достопримечательности', href: '#places' },
  { label: 'Категории',             href: '#categories' },
  { label: 'О регионе',             href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile } = useBreakpoint()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  const frosted = scrolled || menuOpen

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: isMobile ? '0 20px' : '0 48px', height: '68px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          backdropFilter: frosted ? 'blur(24px) saturate(1.6)' : 'none',
          backgroundColor: frosted ? 'rgba(242,246,250,0.95)' : 'transparent',
          borderBottom: frosted ? '1px solid #CDD8E4' : '1px solid transparent',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
        }}
      >
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px', background: '#1A3A5C',
            borderRadius: '10px', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '16px', flexShrink: 0,
          }}>❄</div>
          <span style={{
            fontFamily: 'Unbounded, sans-serif', fontWeight: 700,
            fontSize: isMobile ? '14px' : '16px', color: '#0C1F35', letterSpacing: '-0.3px',
          }}>
            НАО <span style={{ color: '#C47A08' }}>Туризм</span>
          </span>
        </a>

        {!isMobile ? (
          <nav style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
            {navLinks.map(link => (
              <motion.a key={link.href} href={link.href} whileHover={{ color: '#0C1F35' }}
                style={{
                  color: '#5C82A0', textDecoration: 'none', fontSize: '14px',
                  fontWeight: 500, padding: '8px 16px', borderRadius: '8px',
                  transition: 'color 0.2s ease', fontFamily: 'Golos Text, sans-serif',
                }}
              >{link.label}</motion.a>
            ))}
            <motion.a href="#places"
              whileHover={{ scale: 1.04, boxShadow: '0 4px 20px rgba(196,122,8,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                marginLeft: '10px', padding: '11px 26px', background: '#C47A08',
                color: '#FFFFFF', textDecoration: 'none', borderRadius: '11px',
                fontSize: '13px', fontWeight: 700, fontFamily: 'Unbounded, sans-serif',
                letterSpacing: '0.2px', transition: 'box-shadow 0.3s ease',
              }}
            >Исследовать</motion.a>
          </nav>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.a href="#places" whileTap={{ scale: 0.97 }}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: '9px 18px', background: '#C47A08',
                color: '#FFFFFF', textDecoration: 'none', borderRadius: '10px',
                fontSize: '12px', fontWeight: 700, fontFamily: 'Unbounded, sans-serif',
              }}
            >Исследовать</motion.a>
            <motion.button
              onClick={() => setMenuOpen(o => !o)}
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '6px', display: 'flex', flexDirection: 'column',
                gap: '5px', alignItems: 'flex-end',
              }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28 }}
                style={{ display: 'block', height: '2px', width: '22px', background: '#1A3A5C', borderRadius: '2px' }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'block', height: '2px', width: '16px', background: '#1A3A5C', borderRadius: '2px' }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.28 }}
                style={{ display: 'block', height: '2px', width: '22px', background: '#1A3A5C', borderRadius: '2px' }}
              />
            </motion.button>
          </div>
        )}
      </motion.header>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              position: 'fixed', top: '68px', left: 0, right: 0,
              background: 'rgba(242,246,250,0.98)',
              backdropFilter: 'blur(28px)',
              borderBottom: '1px solid #CDD8E4',
              zIndex: 99, padding: '24px 20px 32px',
              display: 'flex', flexDirection: 'column', gap: '4px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.32 }}
                style={{
                  color: '#1A3A5C', textDecoration: 'none',
                  fontSize: '20px', fontWeight: 600, padding: '16px 4px',
                  borderBottom: '1px solid #E8EFF6',
                  fontFamily: 'Golos Text, sans-serif',
                }}
              >{link.label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
