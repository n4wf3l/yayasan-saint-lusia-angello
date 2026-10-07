import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { StickyDonate } from './components/StickyDonate'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Impact } from './sections/Impact'
import { Children } from './sections/Children'
import { DailyLife } from './sections/DailyLife'
import { Team } from './sections/Team'
import { Mission } from './sections/Mission'
import { Donate } from './sections/Donate'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Impact />
        <Children />
        <DailyLife />
        <Team />
        <Mission />
        <Donate />
        <Contact />
      </main>
      <Footer />
      <StickyDonate />
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  )
}
