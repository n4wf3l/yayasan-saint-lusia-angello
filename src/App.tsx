import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Mission } from './sections/Mission'
import { Team } from './sections/Team'
import { DailyLife } from './sections/DailyLife'
import { Impact } from './sections/Impact'
import { Donate } from './sections/Donate'
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
        <DailyLife />
        <Impact />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
