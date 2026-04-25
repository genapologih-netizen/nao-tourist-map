import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MapSection from './components/MapSection'
import Categories from './components/Categories'
import PlacesGrid from './components/PlacesGrid'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a1628' }}>
      <Navbar />
      <Hero />
      <MapSection />
      <Categories />
      <PlacesGrid />
      <AboutSection />
      <Footer />
    </div>
  )
}
