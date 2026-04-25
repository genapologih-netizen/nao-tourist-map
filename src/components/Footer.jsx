export default function Footer() {
  return (
    <footer style={{
      padding: '48px 32px',
      borderTop: '1px solid rgba(26,58,107,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '24px',
    }}>
      <div>
        <span style={{
          fontFamily: 'Unbounded, sans-serif',
          fontWeight: 700,
          fontSize: '20px',
          color: '#f5a623',
        }}>
          НАО<span style={{ color: '#f0f4f8' }}> Туризм</span>
        </span>
        <p style={{
          marginTop: '8px',
          fontSize: '13px',
          color: '#4a6080',
          fontFamily: 'Golos Text, sans-serif',
        }}>
          Интерактивный гид по Ненецкому автономному округу
        </p>
      </div>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        {['Карта', 'Места', 'Категории', 'О регионе'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            color: '#4a6080',
            textDecoration: 'none',
            fontSize: '14px',
            fontFamily: 'Golos Text, sans-serif',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
          onMouseLeave={e => e.currentTarget.style.color = '#4a6080'}
          >
            {link}
          </a>
        ))}
      </div>

      <div style={{
        fontSize: '13px',
        color: '#2a3f5f',
        fontFamily: 'Golos Text, sans-serif',
      }}>
        © НАО Туризм 2024
      </div>
    </footer>
  )
}
