import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  { icon: '🏔', label: 'Природа', count: '24 места', color: '#2dd4bf', bg: 'rgba(45,212,191,0.08)' },
  { icon: '🏛', label: 'История', count: '12 объектов', color: '#818cf8', bg: 'rgba(129,140,248,0.08)' },
  { icon: '🍽', label: 'Гастрономия', count: '18 заведений', color: '#f5a623', bg: 'rgba(245,166,35,0.08)' },
  { icon: '🏕', label: 'Активный отдых', count: '9 маршрутов', color: '#34d399', bg: 'rgba(52,211,153,0.08)' },
  { icon: '🏨', label: 'Проживание', count: '15 объектов', color: '#f472b6', bg: 'rgba(244,114,182,0.08)' },
  { icon: '🦌', label: 'Этнотуризм', count: '7 программ', color: '#fb923c', bg: 'rgba(251,146,60,0.08)' },
]

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="categories" ref={ref} style={{ padding: '100px 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ padding: '0 32px', marginBottom: '48px' }}
      >
        <span style={{
          display: 'inline-block',
          padding: '5px 14px',
          background: 'rgba(245,166,35,0.1)',
          border: '1px solid rgba(245,166,35,0.25)',
          borderRadius: '100px',
          fontSize: '12px',
          fontWeight: 600,
          color: '#f5a623',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '16px',
          fontFamily: 'Golos Text, sans-serif',
        }}>
          Категории
        </span>
        <h2 style={{
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(26px, 4vw, 40px)',
          color: '#f0f4f8',
          letterSpacing: '-0.8px',
        }}>
          Чем заняться в НАО
        </h2>
      </motion.div>

      <div
        className="scroll-hide"
        style={{
          display: 'flex',
          gap: '16px',
          padding: '8px 32px 24px',
          overflowX: 'auto',
        }}
      >
        {categories.map((cat, i) => (
          <motion.button
            key={cat.label}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.97 }}
            style={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              padding: '24px 28px',
              background: cat.bg,
              border: `1px solid ${cat.color}30`,
              borderRadius: '20px',
              cursor: 'pointer',
              minWidth: '150px',
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = cat.color + '80'
              e.currentTarget.style.boxShadow = `0 8px 30px ${cat.color}20`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = cat.color + '30'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span style={{ fontSize: '36px', lineHeight: 1 }}>{cat.icon}</span>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Unbounded, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                color: '#f0f4f8',
                marginBottom: '4px',
              }}>
                {cat.label}
              </div>
              <div style={{
                fontSize: '12px',
                color: cat.color,
                fontFamily: 'Golos Text, sans-serif',
              }}>
                {cat.count}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
