import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Mission } from './sections/Mission'
import { Programs } from './sections/Programs'
import { Impact } from './sections/Impact'
import { Donate } from './sections/Donate'
import { Gallery } from './sections/Gallery'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Mission />
        <Programs />
        <Impact />
        <Donate />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
