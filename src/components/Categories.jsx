import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'

const cats = [
  { icon: '🏔', label: 'Природа',        count: '24 места',     accent: '#1A6050', bg: '#EAF3F0', border: '#B8D8D0' },
  { icon: '🏛', label: 'История',        count: '12 объектов',  accent: '#1A3A5C', bg: '#EAF0F7', border: '#B8CBDE' },
  { icon: '🍽', label: 'Гастрономия',    count: '18 заведений', accent: '#C47A08', bg: '#FEF3DC', border: '#F0C060' },
  { icon: '🏕', label: 'Активный отдых', count: '9 маршрутов',  accent: '#1A5030', bg: '#EAF2EC', border: '#B8D4BC' },
  { icon: '🏨', label: 'Проживание',     count: '15 объектов',  accent: '#5C2A6A', bg: '#F2EBF7', border: '#CCB8DA' },
  { icon: '🦌', label: 'Этнотуризм',     count: '7 программ',   accent: '#7A3A10', bg: '#F7EDE8', border: '#DAC0B0' },
]

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const { isMobile } = useBreakpoint()

  return (
    <section id="categories" ref={ref} style={{
      padding: isMobile ? '60px 20px' : '100px 48px',
      width: '100%', boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: '1340px', margin: '0 auto' }}>

        <div style={{ marginBottom: '52px' }}>
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{
              display: 'inline-block', padding: '5px 16px',
              background: '#FEF3DC', border: '1px solid #F0C060',
              borderRadius: '100px',
              fontSize: '11px', fontWeight: 600, color: '#C47A08',
              letterSpacing: '2.5px', textTransform: 'uppercase',
              marginBottom: '18px', fontFamily: 'Golos Text, sans-serif',
            }}>
              Категории
            </span>
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 2.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Unbounded, sans-serif', fontWeight: 800,
                fontSize: 'clamp(26px, 4vw, 42px)', color: '#0C1F35', letterSpacing: '-0.8px',
              }}
            >
              Чем заняться в НАО
            </motion.h2>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fill, minmax(190px, 1fr))',
          gap: isMobile ? '12px' : '16px',
        }}>
          {cats.map((cat, i) => (
            <motion.button
              key={cat.label}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, y: -5 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '13px', padding: isMobile ? '22px 14px' : '30px 20px',
                background: cat.bg, border: `1px solid ${cat.border}`,
                borderRadius: '20px', cursor: 'pointer',
                transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 10px 32px rgba(26,58,92,0.1)`
                e.currentTarget.style.borderColor = cat.accent + '80'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = cat.border
              }}
            >
              <span style={{ fontSize: isMobile ? '30px' : '38px', lineHeight: 1 }}>{cat.icon}</span>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Unbounded, sans-serif', fontWeight: 600,
                  fontSize: isMobile ? '12px' : '13px', color: '#0C1F35', marginBottom: '5px',
                }}>
                  {cat.label}
                </div>
                <div style={{ fontSize: '12px', color: cat.accent, fontFamily: 'Golos Text, sans-serif', fontWeight: 500 }}>
                  {cat.count}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
