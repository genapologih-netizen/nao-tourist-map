import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '176 726', unit: 'км²', label: 'Площадь территории' },
  { value: '−40°C', unit: '', label: 'Зима в тундре' },
  { value: '1499', unit: '', label: 'Год освоения' },
  { value: '44 500', unit: 'чел.', label: 'Население' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{
      padding: '100px 32px',
      background: 'linear-gradient(180deg, transparent 0%, rgba(13,33,68,0.4) 50%, transparent 100%)',
      borderTop: '1px solid rgba(26,58,107,0.3)',
      borderBottom: '1px solid rgba(26,58,107,0.3)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span style={{
            display: 'inline-block',
            padding: '5px 14px',
            background: 'rgba(45,212,191,0.1)',
            border: '1px solid rgba(45,212,191,0.25)',
            borderRadius: '100px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#2dd4bf',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '24px',
            fontFamily: 'Golos Text, sans-serif',
          }}>
            О регионе
          </span>
          <h2 style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(26px, 3.5vw, 42px)',
            color: '#f0f4f8',
            letterSpacing: '-1px',
            lineHeight: '1.15',
            marginBottom: '24px',
          }}>
            Край на краю земли
          </h2>
          <p style={{
            color: '#94a3b8',
            fontSize: '16px',
            lineHeight: '1.75',
            marginBottom: '20px',
            fontFamily: 'Golos Text, sans-serif',
          }}>
            Ненецкий автономный округ — самый малонаселённый регион России. Большую часть занимает тундра, тайга и арктические пустыни. Здесь живут коренные народы — ненцы, которые сохраняют традиционный уклад жизни, оленеводство и самобытную культуру.
          </p>
          <p style={{
            color: '#64748b',
            fontSize: '15px',
            lineHeight: '1.7',
            fontFamily: 'Golos Text, sans-serif',
          }}>
            Регион богат нефтью и газом, но сохраняет нетронутую природу: здесь гнездятся редкие птицы, водятся белые медведи и моржи на побережье Баренцева моря.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '28px 24px',
                background: 'rgba(13,33,68,0.6)',
                border: '1px solid rgba(26,58,107,0.4)',
                borderRadius: '16px',
              }}
            >
              <div style={{
                fontFamily: 'Unbounded, sans-serif',
                fontWeight: 900,
                fontSize: '26px',
                color: '#f5a623',
                letterSpacing: '-0.5px',
                lineHeight: '1',
                marginBottom: '4px',
              }}>
                {stat.value}
                {stat.unit && <span style={{ fontSize: '14px', color: '#f5a623', marginLeft: '4px' }}>{stat.unit}</span>}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#64748b',
                fontFamily: 'Golos Text, sans-serif',
                lineHeight: '1.4',
                marginTop: '8px',
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
