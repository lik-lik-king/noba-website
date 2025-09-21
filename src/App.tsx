import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Mission } from './components/Mission'
import { PlayerSpotlights } from './components/PlayerSpotlights'
import { Programs } from './components/Programs'
import { Testimonials } from './components/Testimonials'
import { Registration } from './components/Registration'
import { Footer } from './components/Footer'

export default function App () {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <Hero />
        <Mission />
        <PlayerSpotlights />
        <Programs />
        <Testimonials />
        <Registration />
      </main>
      <Footer />
    </div>
  )
}
