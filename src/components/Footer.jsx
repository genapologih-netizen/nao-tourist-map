const cols = [
  {
    title: 'Навигация',
    links: [
      { label: 'Достопримечательности', href: '#places' },
      { label: 'Категории',             href: '#categories' },
      { label: 'О регионе',             href: '#about' },
    ],
  },
  {
    title: 'Категории',
    links: [
      { label: 'Природа',    href: '#categories' },
      { label: 'История',    href: '#categories' },
      { label: 'Этнотуризм',href: '#categories' },
      { label: 'Гастрономия',href: '#categories' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'info@turizm-nao.ru', href: '#' },
      { label: 'Нарьян-Мар, НАО',    href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer id="footer" style={{
      background: '#0C1F35',
      padding: '64px 48px 40px',
    }}>
      <div style={{ maxWidth: '1340px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: '40px', marginBottom: '56px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '38px', height: '38px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px',
              }}>
                ❄
              </div>
              <span style={{
                fontFamily: 'Unbounded, sans-serif', fontWeight: 700,
                fontSize: '16px', color: '#FFFFFF',
              }}>
                НАО <span style={{ color: '#C47A08' }}>Туризм</span>
              </span>
            </div>
            <p style={{
              fontSize: '14px', color: '#4A6E90', lineHeight: '1.7',
              fontFamily: 'Golos Text, sans-serif', maxWidth: '260px',
            }}>
              Интерактивный гид по Ненецкому автономному округу — самому северному уголку Европы.
            </p>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: '11px', fontWeight: 600, color: '#2A5A84',
                letterSpacing: '2px', textTransform: 'uppercase',
                fontFamily: 'Golos Text, sans-serif', marginBottom: '20px',
              }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{ color: '#3A5A78', textDecoration: 'none', fontSize: '14px', fontFamily: 'Golos Text, sans-serif', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#8AAAC4'}
                    onMouseLeave={e => e.currentTarget.style.color = '#3A5A78'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{ fontSize: '13px', color: '#2A5A84', fontFamily: 'Golos Text, sans-serif' }}>
            © 2025 НАО Туризм. Все права защищены.
          </span>
          <span style={{ fontSize: '12px', color: '#1E3A5C', fontFamily: 'Golos Text, sans-serif' }}>
            Ненецкий автономный округ, Россия
          </span>
        </div>
      </div>
    </footer>
  )
}
