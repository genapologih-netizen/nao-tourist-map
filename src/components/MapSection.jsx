import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'

const places = [
  {
    id: 1,
    name: 'Нарьян-Мар',
    coords: [67.638, 53.007],
    description: 'Столица НАО. Административный центр региона на берегу реки Печора.',
    category: 'Города',
  },
  {
    id: 2,
    name: 'Пустозёрск',
    coords: [67.46, 52.67],
    description: 'Первый русский город за Полярным кругом (1499). Историческое место.',
    category: 'История',
  },
  {
    id: 3,
    name: 'Нарьян-Марский аэропорт',
    coords: [67.640, 53.120],
    description: 'Главные ворота округа. Регулярные рейсы из Москвы и Архангельска.',
    category: 'Инфраструктура',
  },
  {
    id: 4,
    name: 'Тиманская тундра',
    coords: [67.9, 52.2],
    description: 'Бескрайние просторы тундры. Место обитания северных оленей.',
    category: 'Природа',
  },
  {
    id: 5,
    name: 'Река Печора',
    coords: [67.3, 53.4],
    description: 'Одна из крупнейших рек европейской части России. Богата рыбой.',
    category: 'Природа',
  },
]

function createCustomIcon(color = '#f5a623') {
  return L.divIcon({
    html: `
      <div style="
        width: 28px; height: 28px;
        background: ${color};
        border: 3px solid rgba(255,255,255,0.9);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 4px 15px rgba(0,0,0,0.4), 0 0 20px ${color}60;
      "></div>
    `,
    className: 'pulse-marker',
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -30],
  })
}

const categoryColors = {
  'Города': '#f5a623',
  'История': '#818cf8',
  'Природа': '#2dd4bf',
  'Инфраструктура': '#94a3b8',
}

export default function MapSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="map" ref={ref} style={{
      padding: '100px 0 0',
      position: 'relative',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', padding: '0 24px', marginBottom: '48px' }}
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
          marginBottom: '20px',
          fontFamily: 'Golos Text, sans-serif',
        }}>
          Интерактивная карта
        </span>
        <h2 style={{
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(28px, 5vw, 48px)',
          color: '#f0f4f8',
          marginBottom: '16px',
          letterSpacing: '-1px',
        }}>
          Исследуйте регион
        </h2>
        <p style={{
          color: '#94a3b8',
          fontSize: '17px',
          maxWidth: '480px',
          margin: '0 auto',
          fontFamily: 'Golos Text, sans-serif',
          lineHeight: '1.6',
        }}>
          Кликните на метку чтобы узнать подробнее о месте
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          margin: '0 32px',
          borderRadius: '24px',
          overflow: 'hidden',
          border: '1px solid rgba(26,58,107,0.5)',
          boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(45,212,191,0.1)',
          position: 'relative',
        }}
      >
        <MapContainer
          center={[67.638, 53.007]}
          zoom={9}
          style={{ height: '520px', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© OpenStreetMap contributors'
          />
          {places.map(place => (
            <div key={place.id}>
              <Marker
                position={place.coords}
                icon={createCustomIcon(categoryColors[place.category] || '#f5a623')}
              >
                <Popup>
                  <div style={{ padding: '4px', minWidth: '180px' }}>
                    <div style={{
                      display: 'inline-block',
                      padding: '2px 10px',
                      background: `${categoryColors[place.category]}22`,
                      border: `1px solid ${categoryColors[place.category]}55`,
                      borderRadius: '100px',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: categoryColors[place.category] || '#f5a623',
                      marginBottom: '8px',
                      letterSpacing: '0.5px',
                    }}>
                      {place.category}
                    </div>
                    <h3 style={{
                      fontFamily: 'Unbounded, sans-serif',
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#f0f4f8',
                      margin: '0 0 8px',
                    }}>
                      {place.name}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: '#94a3b8',
                      lineHeight: '1.5',
                      margin: 0,
                    }}>
                      {place.description}
                    </p>
                  </div>
                </Popup>
              </Marker>
              <Circle
                center={place.coords}
                radius={3000}
                pathOptions={{
                  color: categoryColors[place.category] || '#f5a623',
                  fillColor: categoryColors[place.category] || '#f5a623',
                  fillOpacity: 0.06,
                  weight: 1,
                  opacity: 0.3,
                }}
              />
            </div>
          ))}
        </MapContainer>

        {/* Map legend */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          zIndex: 1000,
          background: 'rgba(10,22,40,0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(26,58,107,0.5)',
          borderRadius: '12px',
          padding: '12px 16px',
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          {Object.entries(categoryColors).map(([cat, color]) => (
            <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '10px', height: '10px',
                background: color,
                borderRadius: '50%',
              }} />
              <span style={{ fontSize: '12px', color: '#94a3b8', fontFamily: 'Golos Text, sans-serif' }}>{cat}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
