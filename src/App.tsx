import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Mission } from './sections/Mission'
import { Team } from './sections/Team'
import { Programs } from './sections/Programs'
import { DailyLife } from './sections/DailyLife'
import { Impact } from './sections/Impact'
import { YouTubeSection } from './sections/YouTube'
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
        <Team />
        <Programs />
        <DailyLife />
        <Impact />
        <YouTubeSection />
        <Donate />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
