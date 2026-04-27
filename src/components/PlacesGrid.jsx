import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useBreakpoint } from '../hooks/useBreakpoint'

const CAT_META = {
  'История':        { accent: '#1A3A5C', bg: '#EAF0F7', border: '#B8CBDE', imgBg: '#D8E5F0', icon: '🏛' },
  'Природа':        { accent: '#1A6050', bg: '#EAF3F0', border: '#B8D8D0', imgBg: '#CCE6E0', icon: '🌿' },
  'Гастрономия':    { accent: '#C47A08', bg: '#FEF3DC', border: '#F0C060', imgBg: '#FAE4A8', icon: '🍽' },
  'Активный отдых': { accent: '#1A5030', bg: '#EAF2EC', border: '#B8D4BC', imgBg: '#C8E0CC', icon: '🎣' },
  'Проживание':     { accent: '#5C2A6A', bg: '#F2EBF7', border: '#CCB8DA', imgBg: '#E0C8EC', icon: '🏨' },
  'Этнотуризм':     { accent: '#7A3A10', bg: '#F7EDE8', border: '#DAC0B0', imgBg: '#EAD4C4', icon: '🦌' },
}

const places = [
  { id: 1, title: 'Пустозёрск',           category: 'История',        desc: 'Первый русский город за Полярным кругом, основан в 1499 году. Богатейшая история освоения Севера.',                  tags: ['XVI–XVII вв.', 'Археология']  },
  { id: 2, title: 'Тиманская тундра',      category: 'Природа',        desc: 'Нетронутые просторы арктической тундры с уникальным биоразнообразием и традиционным оленеводством.',               tags: ['Оленеводство', 'Природа']      },
  { id: 3, title: 'Северное сияние',       category: 'Природа',        desc: 'НАО — одно из лучших мест для наблюдения северного сияния с сентября по март.',                                    tags: ['Сент–Март', 'Фотография']     },
  { id: 4, title: 'Этнографический музей', category: 'История',        desc: 'Уникальная коллекция артефактов ненецкого народа: одежда, орудия труда, предметы быта.',                           tags: ['Нарьян-Мар', 'Культура']       },
  { id: 5, title: 'Рыбалка на Печоре',     category: 'Активный отдых', desc: 'Один из лучших рыболовных регионов России. Сёмга, щука, хариус в экологически чистых водах.',                     tags: ['Лето', 'Рыбалка']              },
  { id: 6, title: 'Ненецкая кухня',        category: 'Гастрономия',    desc: 'Аутентичные блюда: строганина из нельмы, оленина по-ненецки, морошка. Вкус Арктики.',                             tags: ['Рестораны', 'Традиции']        },
  { id: 7, category: 'Этнотуризм',     empty: true },
  { id: 8, category: 'Проживание',     empty: true },
  { id: 9, category: 'Активный отдых', empty: true },
]

function EmptyCard({ category, index, inView }) {
  const m = CAT_META[category] || { accent: '#5C82A0', bg: '#EEF3F8', border: '#CDD8E4', imgBg: '#E0EBF5' }
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: '20px', overflow: 'hidden',
        background: '#FAFCFE', border: '1.5px dashed #CDD8E4',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{
        height: '210px', background: m.imgBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', opacity: 0.5 }}>
          <div style={{
            width: '50px', height: '50px',
            border: '1.5px dashed #A8BFD0', borderRadius: '14px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#A8BFD0',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
          </div>
          <span style={{ fontSize: '11px', color: '#A8BFD0', fontFamily: 'Golos Text, sans-serif', letterSpacing: '1px' }}>
            Добавить фото
          </span>
        </div>
        <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
          <span style={{
            padding: '4px 12px', background: m.bg, border: `1px solid ${m.border}`,
            borderRadius: '100px', fontSize: '11px', fontWeight: 600, color: m.accent,
            fontFamily: 'Golos Text, sans-serif',
          }}>
            {category}
          </span>
        </div>
      </div>
      <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ height: '18px', width: '55%', background: '#E8EFF6', borderRadius: '6px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
          <div style={{ height: '12px', width: '100%', background: '#EEF3F8', borderRadius: '4px' }} />
          <div style={{ height: '12px', width: '82%',  background: '#EEF3F8', borderRadius: '4px' }} />
          <div style={{ height: '12px', width: '65%',  background: '#EEF3F8', borderRadius: '4px' }} />
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ height: '22px', width: '58px', background: '#E8EFF6', borderRadius: '6px' }} />
          <div style={{ height: '22px', width: '48px', background: '#E8EFF6', borderRadius: '6px' }} />
        </div>
        <div style={{ borderTop: '1px solid #E0E8F0', paddingTop: '14px', color: '#A8BFD0', fontFamily: 'Golos Text, sans-serif', fontSize: '12px', letterSpacing: '0.5px' }}>
          — Не заполнено —
        </div>
      </div>
    </motion.div>
  )
}

function PlaceCard({ place, index, inView }) {
  const m = CAT_META[place.category] || { accent: '#1A3A5C', bg: '#EAF0F7', border: '#B8CBDE', imgBg: '#D8E5F0', icon: '📍' }
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{
        borderRadius: '20px', overflow: 'hidden',
        background: '#FFFFFF', border: '1px solid #CDD8E4',
        display: 'flex', flexDirection: 'column', cursor: 'pointer',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(26,58,92,0.12)'
        e.currentTarget.style.borderColor = m.border
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = '#CDD8E4'
      }}
    >
      <div style={{
        height: '210px', background: m.imgBg, position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        <span style={{ fontSize: '68px', opacity: 0.6 }}>{m.icon}</span>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 40%, ${m.imgBg}CC 100%)` }} />
        <div style={{ position: 'absolute', top: '14px', right: '14px' }}>
          <span style={{
            padding: '4px 12px', background: m.bg, border: `1px solid ${m.border}`,
            borderRadius: '100px', fontSize: '11px', fontWeight: 600, color: m.accent,
            fontFamily: 'Golos Text, sans-serif',
          }}>
            {place.category}
          </span>
        </div>
      </div>
      <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h3 style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 700, fontSize: '16px', color: '#0C1F35', letterSpacing: '-0.3px' }}>
          {place.title}
        </h3>
        <p style={{ color: '#5C82A0', fontSize: '14px', lineHeight: '1.65', fontFamily: 'Golos Text, sans-serif', flex: 1 }}>
          {place.desc}
        </p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {place.tags.map(tag => (
            <span key={tag} style={{ padding: '3px 10px', background: '#EEF3F8', borderRadius: '6px', fontSize: '11px', color: '#5C82A0', fontFamily: 'Golos Text, sans-serif' }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #E0E8F0', paddingTop: '14px', marginTop: '2px' }}>
          <motion.div
            whileHover={{ x: 4 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: m.accent, fontFamily: 'Golos Text, sans-serif', fontWeight: 600, fontSize: '13px', cursor: 'pointer' }}
          >
            Подробнее
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PlacesGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  const { isMobile } = useBreakpoint()

  return (
    <section id="places" ref={ref} style={{
      padding: isMobile ? '0 20px 60px' : '0 48px 100px',
      maxWidth: '1340px', margin: '0 auto',
      width: '100%', boxSizing: 'border-box',
    }}>

      <div style={{ marginBottom: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{
              display: 'inline-block', padding: '5px 16px',
              background: '#EAF0F7', border: '1px solid #B8CBDE',
              borderRadius: '100px', fontSize: '11px', fontWeight: 600, color: '#1A3A5C',
              letterSpacing: '2.5px', textTransform: 'uppercase',
              marginBottom: '16px', fontFamily: 'Golos Text, sans-serif',
            }}>
              Популярные места
            </span>
          </motion.div>
          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 2.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'Unbounded, sans-serif', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 42px)', color: '#0C1F35', letterSpacing: '-0.8px' }}
            >
              Куда отправиться
            </motion.h2>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.03, borderColor: '#1A3A5C', color: '#0C1F35' }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: '12px 26px', background: 'transparent',
            border: '1px solid #CDD8E4', borderRadius: '10px', color: '#5C82A0',
            cursor: 'pointer', fontFamily: 'Golos Text, sans-serif',
            fontSize: '14px', fontWeight: 500,
            transition: 'border-color 0.2s ease, color 0.2s ease',
          }}
        >
          Все места →
        </motion.button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {places.map((place, i) =>
          place.empty
            ? <EmptyCard key={place.id} category={place.category} index={i} inView={inView} />
            : <PlaceCard key={place.id} place={place} index={i} inView={inView} />
        )}
      </div>
    </section>
  )
}
