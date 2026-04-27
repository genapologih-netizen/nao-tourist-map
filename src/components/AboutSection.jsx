import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'

const stats = [
  { value: '176 726', unit: 'км²',  label: 'Площадь территории' },
  { value: '−40°C',  unit: '',     label: 'Зима в тундре'       },
  { value: '1499',   unit: '',     label: 'Год освоения'        },
  { value: '44 500', unit: 'чел.', label: 'Население'           },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const { isMobile } = useBreakpoint()

  return (
    <section id="about" ref={ref} style={{
      padding: isMobile ? '60px 20px' : '100px 48px',
      background: '#E8EFF6',
      borderTop: '1px solid #CDD8E4',
      borderBottom: '1px solid #CDD8E4',
    }}>
      <div style={{
        maxWidth: '1340px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '48px' : '80px',
        alignItems: 'center',
      }}>

        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{
              display: 'inline-block', padding: '5px 16px',
              background: '#EAF3F0', border: '1px solid #B8D8D0',
              borderRadius: '100px',
              fontSize: '11px', fontWeight: 600, color: '#1A6050',
              letterSpacing: '2.5px', textTransform: 'uppercase',
              marginBottom: '24px', fontFamily: 'Golos Text, sans-serif',
            }}>
              О регионе
            </span>
          </motion.div>
          <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Unbounded, sans-serif', fontWeight: 800,
                fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#0C1F35',
                letterSpacing: '-1px', lineHeight: '1.12',
              }}
            >
              Край на краю&nbsp;земли
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: '#4A6E90', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px', fontFamily: 'Golos Text, sans-serif' }}
          >
            Ненецкий автономный округ — самый малонаселённый регион России. Большую часть
            занимает тундра, тайга и арктические пустыни. Здесь живут коренные народы —
            ненцы, которые сохраняют традиционный уклад жизни, оленеводство и самобытную культуру.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: '#7A98B4', fontSize: '15px', lineHeight: '1.75', fontFamily: 'Golos Text, sans-serif' }}
          >
            Регион богат нефтью и газом, но сохраняет нетронутую природу: здесь гнездятся
            редкие птицы, водятся белые медведи и моржи на побережье Баренцева моря.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 20 : 0 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '30px 24px', background: '#FFFFFF', border: '1px solid #CDD8E4', borderRadius: '18px' }}
            >
              <div style={{
                fontFamily: 'Unbounded, sans-serif', fontWeight: 900,
                fontSize: '28px', color: '#C47A08',
                letterSpacing: '-0.5px', lineHeight: 1, marginBottom: '6px',
              }}>
                {stat.value}
                {stat.unit && <span style={{ fontSize: '14px', marginLeft: '4px' }}>{stat.unit}</span>}
              </div>
              <div style={{ fontSize: '13px', color: '#7A98B4', fontFamily: 'Golos Text, sans-serif', lineHeight: '1.4', marginTop: '10px' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
