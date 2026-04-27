import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stagger = {
  animate: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
}
const item = {
  initial: { y: 48, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY  = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* Parallax background */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-20%', zIndex: 0 }}>
        <div style={{
          width: '100%', height: '100%',
          background: 'linear-gradient(155deg, #F0F5FA 0%, #E4EEF7 28%, #D8E8F4 55%, #DDE9F2 78%, #EAF1F7 100%)',
        }} />
      </motion.div>

      {/* Soft floating blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
        <div className="float-anim" style={{
          position: 'absolute', top: '6%', left: '-5%',
          width: '680px', height: '420px',
          background: 'radial-gradient(ellipse, rgba(26,58,92,0.07) 0%, transparent 68%)',
          borderRadius: '50%', filter: 'blur(50px)',
        }} />
        <div className="float-anim" style={{
          position: 'absolute', top: '35%', right: '-8%',
          width: '560px', height: '340px',
          background: 'radial-gradient(ellipse, rgba(26,110,138,0.08) 0%, transparent 68%)',
          borderRadius: '50%', filter: 'blur(60px)', animationDelay: '-3s',
        }} />
        <div className="float-anim" style={{
          position: 'absolute', bottom: '8%', left: '18%',
          width: '740px', height: '280px',
          background: 'radial-gradient(ellipse, rgba(196,122,8,0.05) 0%, transparent 68%)',
          borderRadius: '50%', filter: 'blur(70px)', animationDelay: '-1.5s',
        }} />
        {/* Decorative large circle */}
        <div style={{
          position: 'absolute', top: '-15%', right: '-10%',
          width: '700px', height: '700px',
          border: '1px solid rgba(26,58,92,0.06)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', top: '-5%', right: '-3%',
          width: '480px', height: '480px',
          border: '1px solid rgba(26,58,92,0.04)',
          borderRadius: '50%',
        }} />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: fade, position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: '940px' }}
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={item}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '7px 20px',
            background: '#FEF3DC',
            border: '1px solid #F0C060',
            borderRadius: '100px',
            fontSize: '11px', fontWeight: 600, color: '#C47A08',
            letterSpacing: '2.5px', textTransform: 'uppercase',
            marginBottom: '36px', fontFamily: 'Golos Text, sans-serif',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C47A08', flexShrink: 0 }} />
            Ненецкий автономный округ
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          style={{
            fontFamily: 'Unbounded, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(36px, 7.5vw, 90px)',
            lineHeight: '1.02',
            letterSpacing: '-3px',
            marginBottom: '32px',
            color: '#0C1F35',
          }}
        >
          Самый{' '}
          <span className="aurora-text">северный</span>
          <br />
          уголок Европы
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            color: '#5C82A0',
            lineHeight: '1.8',
            maxWidth: '580px',
            margin: '0 auto 52px',
            fontFamily: 'Golos Text, sans-serif',
          }}
        >
          Бескрайняя тундра, северное сияние, уникальная культура ненцев.
          Откройте нетронутую природу и традиции Арктики.
        </motion.p>

        <motion.div variants={item} style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a
            href="#places"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(196,122,8,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '17px 44px',
              background: '#C47A08',
              color: '#FFFFFF', textDecoration: 'none', borderRadius: '14px',
              fontFamily: 'Unbounded, sans-serif', fontWeight: 700,
              fontSize: '13px', letterSpacing: '0.3px',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            Исследовать
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03, borderColor: '#1A3A5C', color: '#0C1F35' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '17px 44px',
              background: 'transparent', color: '#5C82A0',
              textDecoration: 'none', borderRadius: '14px',
              border: '1px solid #CDD8E4',
              fontFamily: 'Golos Text, sans-serif', fontWeight: 600, fontSize: '15px',
              transition: 'all 0.3s ease',
            }}
          >
            О регионе
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          style={{ marginTop: '110px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
        >
          <span style={{ fontSize: '10px', color: '#A8BFD0', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'Golos Text, sans-serif' }}>
            Прокрутите
          </span>
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '1px', height: '52px', background: 'linear-gradient(to bottom, #1A3A5C, transparent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
