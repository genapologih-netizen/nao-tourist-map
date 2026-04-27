import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  { num: '01', tag: 'Природа',    tagBg: '#EAF3F0', tagColor: '#1A6050', borderHover: '#A8D4CC' },
  { num: '02', tag: 'История',    tagBg: '#EAF0F7', tagColor: '#1A3A5C', borderHover: '#A8BFDA' },
  { num: '03', tag: 'Этнотуризм', tagBg: '#FEF3DC', tagColor: '#C47A08', borderHover: '#F0C060' },
]

function PhotoPlaceholder() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
      opacity: 0.45,
    }}>
      <div style={{
        width: '60px', height: '60px',
        border: '1.5px dashed #A8BFD0',
        borderRadius: '16px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#A8BFD0',
      }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="3"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
      </div>
      <span style={{ fontSize: '11px', color: '#A8BFD0', fontFamily: 'Golos Text, sans-serif', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
        Добавить фото
      </span>
    </div>
  )
}

export default function Highlights() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} style={{ padding: '100px 48px 0', maxWidth: '1340px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '52px' }}
      >
        <span style={{
          display: 'inline-block', padding: '5px 16px',
          background: '#FEF3DC', border: '1px solid #F0C060',
          borderRadius: '100px',
          fontSize: '11px', fontWeight: 600, color: '#C47A08',
          letterSpacing: '2.5px', textTransform: 'uppercase',
          marginBottom: '18px', fontFamily: 'Golos Text, sans-serif',
        }}>
          Главные достопримечательности
        </span>
        <h2 style={{
          fontFamily: 'Unbounded, sans-serif', fontWeight: 800,
          fontSize: 'clamp(26px, 4vw, 46px)', color: '#0C1F35',
          letterSpacing: '-1px', lineHeight: '1.1',
        }}>
          Топ места НАО
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '22px' }}>
        {items.map((it, i) => (
          <motion.div
            key={it.num}
            initial={{ opacity: 0, y: 70 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            style={{
              borderRadius: '22px', overflow: 'hidden',
              border: '1px solid #CDD8E4',
              cursor: 'pointer', background: '#FFFFFF',
              transition: 'box-shadow 0.35s ease, border-color 0.35s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 20px 56px rgba(26,58,92,0.12)'
              e.currentTarget.style.borderColor = it.borderHover
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#CDD8E4'
            }}
          >
            {/* Image zone */}
            <div style={{
              height: '290px',
              background: '#EBF0F6',
              position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {/* dashed inset border */}
              <div style={{
                position: 'absolute', inset: '16px',
                border: '1.5px dashed #CDD8E4',
                borderRadius: '14px',
                pointerEvents: 'none',
              }} />

              {/* bg number */}
              <span style={{
                position: 'absolute', top: '20px', left: '24px',
                fontFamily: 'Unbounded, sans-serif', fontWeight: 900,
                fontSize: '72px', color: 'rgba(26,58,92,0.05)',
                lineHeight: 1, letterSpacing: '-4px', userSelect: 'none',
              }}>
                {it.num}
              </span>

              <PhotoPlaceholder />

              {/* tag */}
              <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                <span style={{
                  padding: '5px 14px',
                  background: it.tagBg,
                  border: `1px solid ${it.borderHover}`,
                  borderRadius: '100px',
                  fontSize: '11px', fontWeight: 600, color: it.tagColor,
                  fontFamily: 'Golos Text, sans-serif',
                }}>
                  {it.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '28px 28px 30px' }}>
              {/* Title placeholder */}
              <div style={{
                height: '22px', width: '58%',
                background: '#E8EFF6',
                borderRadius: '8px', marginBottom: '14px',
              }} />
              {/* Description lines */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '24px' }}>
                <div style={{ height: '13px', width: '100%', background: '#EEF3F8', borderRadius: '5px' }} />
                <div style={{ height: '13px', width: '82%',  background: '#EEF3F8', borderRadius: '5px' }} />
                <div style={{ height: '13px', width: '65%',  background: '#EEF3F8', borderRadius: '5px' }} />
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: '#A8BFD0',
                fontFamily: 'Golos Text, sans-serif', fontWeight: 500, fontSize: '13px',
              }}>
                Не заполнено
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
