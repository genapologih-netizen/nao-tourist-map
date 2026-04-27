import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '176 726', unit: 'км²', label: 'Площадь территории' },
  { value: '−40°C',  unit: '',    label: 'Зима в тундре'       },
  { value: '1499',   unit: '',    label: 'Год освоения'        },
  { value: '44 500', unit: 'чел.', label: 'Население'          },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={ref} style={{
      padding: '100px 48px',
      background: '#E8EFF6',
      borderTop: '1px solid #CDD8E4',
      borderBottom: '1px solid #CDD8E4',
    }}>
      <div style={{ maxWidth: '1340px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
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
          <h2 style={{
            fontFamily: 'Unbounded, sans-serif', fontWeight: 800,
            fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#0C1F35',
            letterSpacing: '-1px', lineHeight: '1.12', marginBottom: '28px',
          }}>
            Край на краю&nbsp;земли
          </h2>
          <p style={{
            color: '#4A6E90', fontSize: '16px', lineHeight: '1.8',
            marginBottom: '20px', fontFamily: 'Golos Text, sans-serif',
          }}>
            Ненецкий автономный округ — самый малонаселённый регион России. Большую часть
            занимает тундра, тайга и арктические пустыни. Здесь живут коренные народы —
            ненцы, которые сохраняют традиционный уклад жизни, оленеводство и самобытную культуру.
          </p>
          <p style={{
            color: '#7A98B4', fontSize: '15px', lineHeight: '1.75',
            fontFamily: 'Golos Text, sans-serif',
          }}>
            Регион богат нефтью и газом, но сохраняет нетронутую природу: здесь гнездятся
            редкие птицы, водятся белые медведи и моржи на побережье Баренцева моря.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.28 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '30px 24px',
                background: '#FFFFFF',
                border: '1px solid #CDD8E4',
                borderRadius: '18px',
              }}
            >
              <div style={{
                fontFamily: 'Unbounded, sans-serif', fontWeight: 900,
                fontSize: '28px', color: '#C47A08',
                letterSpacing: '-0.5px', lineHeight: 1, marginBottom: '6px',
              }}>
                {stat.value}
                {stat.unit && <span style={{ fontSize: '14px', marginLeft: '4px' }}>{stat.unit}</span>}
              </div>
              <div style={{
                fontSize: '13px', color: '#7A98B4',
                fontFamily: 'Golos Text, sans-serif', lineHeight: '1.4', marginTop: '10px',
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
