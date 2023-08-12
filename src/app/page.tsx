import AboutUs from './components/aboutus'
import Masthead from './components/masthead'
import ScrollObserver from './components/scroll-observer'
import Skills from './components/skills'

export default function Home() {
  return (
    <ScrollObserver>
        <Masthead />
        <AboutUs/>
        <Skills/>
    </ScrollObserver>

  )
}
