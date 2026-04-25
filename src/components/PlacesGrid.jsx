import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const places = [
  {
    id: 1,
    title: 'Пустозёрск',
    description: 'Первый русский город за Полярным кругом, основан в 1499 году. Богатейшая история освоения Севера.',
    category: 'История',
    categoryColor: '#818cf8',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a5f 100%)',
    icon: '🏛',
    tags: ['XVI–XVII вв.', 'Археология'],
  },
  {
    id: 2,
    title: 'Тиманская тундра',
    description: 'Нетронутые просторы арктической тундры с уникальным биоразнообразием и традиционным оленеводством.',
    category: 'Природа',
    categoryColor: '#2dd4bf',
    gradient: 'linear-gradient(135deg, #052e16 0%, #064e3b 50%, #134e4a 100%)',
    icon: '🦌',
    tags: ['Оленеводство', 'Природа'],
  },
  {
    id: 3,
    title: 'Северное сияние',
    description: 'НАО — одно из лучших мест в России для наблюдения северного сияния с сентября по март.',
    category: 'Природа',
    categoryColor: '#2dd4bf',
    gradient: 'linear-gradient(135deg, #0a0f1e 0%, #1a1040 50%, #0d3344 100%)',
    icon: '🌌',
    tags: ['Сент–Март', 'Фотография'],
  },
  {
    id: 4,
    title: 'Этнографический музей',
    description: 'Уникальная коллекция артефактов ненецкого народа: одежда, орудия труда, предметы быта.',
    category: 'История',
    categoryColor: '#818cf8',
    gradient: 'linear-gradient(135deg, #1e1040 0%, #2d1b69 50%, #1a2755 100%)',
    icon: '🎭',
    tags: ['Нарьян-Мар', 'Культура'],
  },
  {
    id: 5,
    title: 'Рыбалка на Печоре',
    description: 'Один из лучших рыболовных регионов России. Семга, щука, хариус в экологически чистых водах.',
    category: 'Активный отдых',
    categoryColor: '#34d399',
    gradient: 'linear-gradient(135deg, #052e16 0%, #0f4c29 50%, #1a3a4a 100%)',
    icon: '🎣',
    tags: ['Лето', 'Рыбалка'],
  },
  {
    id: 6,
    title: 'Ненецкая кухня',
    description: 'Аутентичные блюда: строганина из нельмы, оленина по-ненецки, морошка. Вкус Арктики.',
    category: 'Гастрономия',
    categoryColor: '#f5a623',
    gradient: 'linear-gradient(135deg, #1c0a00 0%, #3d1f00 50%, #2a1500 100%)',
    icon: '🍽',
    tags: ['Рестораны', 'Традиции'],
  },
]

function PlaceCard({ place, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-hover"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#0d1f38',
        border: '1px solid rgba(26,58,107,0.4)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      {/* Image placeholder */}
      <div style={{
        height: '200px',
        background: place.gradient,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <span style={{ fontSize: '72px', opacity: 0.8, filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))' }}>
          {place.icon}
        </span>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 50%, rgba(13,31,56,0.8) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
        }}>
          <span style={{
            padding: '4px 12px',
            background: `${place.categoryColor}20`,
            border: `1px solid ${place.categoryColor}50`,
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: 600,
            color: place.categoryColor,
            fontFamily: 'Golos Text, sans-serif',
            backdropFilter: 'blur(8px)',
          }}>
            {place.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          color: '#f0f4f8',
          letterSpacing: '-0.3px',
        }}>
          {place.title}
        </h3>
        <p style={{
          color: '#94a3b8',
          fontSize: '14px',
          lineHeight: '1.6',
          fontFamily: 'Golos Text, sans-serif',
          flex: 1,
        }}>
          {place.description}
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {place.tags.map(tag => (
            <span key={tag} style={{
              padding: '3px 10px',
              background: 'rgba(26,58,107,0.5)',
              borderRadius: '6px',
              fontSize: '12px',
              color: '#64748b',
              fontFamily: 'Golos Text, sans-serif',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <motion.button
          whileHover={{ x: 4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            padding: '10px 0 0',
            cursor: 'pointer',
            color: place.categoryColor,
            fontFamily: 'Golos Text, sans-serif',
            fontWeight: 600,
            fontSize: '14px',
            borderTop: '1px solid rgba(26,58,107,0.4)',
          }}
        >
          Подробнее
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function PlacesGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="places" ref={ref} style={{ padding: '20px 32px 100px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}
      >
        <div>
          <span style={{
            display: 'inline-block',
            padding: '5px 14px',
            background: 'rgba(129,140,248,0.1)',
            border: '1px solid rgba(129,140,248,0.25)',
            borderRadius: '100px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#818cf8',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '16px',
            fontFamily: 'Golos Text, sans-serif',
          }}>
            Популярные места
          </span>
          <h2 style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(26px, 4vw, 40px)',
            color: '#f0f4f8',
            letterSpacing: '-0.8px',
          }}>
            Куда отправиться
          </h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: '12px 24px',
            background: 'transparent',
            border: '1px solid rgba(240,244,248,0.15)',
            borderRadius: '10px',
            color: '#94a3b8',
            cursor: 'pointer',
            fontFamily: 'Golos Text, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Все места →
        </motion.button>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        {places.map((place, i) => (
          <PlaceCard key={place.id} place={place} index={i} inView={inView} />
        ))}
      </div>
    </section>
  )
}
