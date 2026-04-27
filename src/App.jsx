import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Categories from './components/Categories'
import PlacesGrid from './components/PlacesGrid'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#060e1a' }}>
      <Navbar />
      <Hero />
      <Highlights />
      <Categories />
      <PlacesGrid />
      <AboutSection />
      <Footer />
    </div>
  )
}
