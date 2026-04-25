import { motion } from 'framer-motion'

const stagger = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
}

const item = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #02080f 0%, #0a1628 25%, #0d2144 55%, #0f3a4a 80%, #082820 100%)',
      }}
    >
      {/* Aurora background blobs */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden'
      }}>
        <div className="float-anim" style={{
          position: 'absolute',
          top: '15%', left: '10%',
          width: '500px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(45,212,191,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }} />
        <div className="float-anim" style={{
          position: 'absolute',
          top: '40%', right: '5%',
          width: '400px', height: '250px',
          background: 'radial-gradient(ellipse, rgba(129,140,248,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animationDelay: '-3s',
        }} />
        <div className="float-anim" style={{
          position: 'absolute',
          bottom: '10%', left: '30%',
          width: '600px', height: '200px',
          background: 'radial-gradient(ellipse, rgba(245,166,35,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animationDelay: '-1.5s',
        }} />

        {/* Stars */}
        {[...Array(40)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            background: 'white',
            borderRadius: '50%',
            top: Math.random() * 70 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.6 + 0.1,
          }} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '860px',
        }}
      >
        <motion.div variants={item}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(245,166,35,0.12)',
            border: '1px solid rgba(245,166,35,0.3)',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: 600,
            color: '#f5a623',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '28px',
            fontFamily: 'Golos Text, sans-serif',
          }}>
            Ненецкий автономный округ
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(36px, 7vw, 80px)',
            lineHeight: '1.05',
            letterSpacing: '-2px',
            marginBottom: '28px',
            color: '#f0f4f8',
          }}
        >
          Откройте{' '}
          <span className="aurora-text">Ненецкий</span>
          <br />
          автономный округ
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#94a3b8',
            lineHeight: '1.7',
            maxWidth: '560px',
            margin: '0 auto 40px',
            fontFamily: 'Golos Text, sans-serif',
          }}
        >
          Бескрайняя тундра, северное сияние, уникальная культура ненцев.
          Исследуйте самый северный регион Европы через интерактивную карту.
        </motion.p>

        <motion.div variants={item} style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a
            href="#map"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(245,166,35,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #f5a623, #fbbf24)',
              color: '#0a1628',
              textDecoration: 'none',
              borderRadius: '14px',
              fontFamily: 'Unbounded, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.3px',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Открыть карту
          </motion.a>
          <motion.a
            href="#places"
            whileHover={{ scale: 1.05, borderColor: 'rgba(45,212,191,0.6)', color: '#2dd4bf' }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              background: 'transparent',
              color: '#f0f4f8',
              textDecoration: 'none',
              borderRadius: '14px',
              border: '1px solid rgba(240,244,248,0.2)',
              fontFamily: 'Golos Text, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              transition: 'border-color 0.3s ease, color 0.3s ease',
            }}
          >
            Смотреть места →
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <span style={{ fontSize: '11px', color: '#4a6080', letterSpacing: '2px', textTransform: 'uppercase' }}>Прокрутите</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #4a6080, transparent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
