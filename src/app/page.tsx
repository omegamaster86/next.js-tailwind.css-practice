import AboutUs from './components/aboutus'
import Masthead from './components/masthead'
import ScrollObserver from './components/scroll-observer'
import Skills from './components/skills'
import Works from './components/works'

export default function Home() {
  return (
    <ScrollObserver>
        <Masthead />
        <AboutUs/>
        <Skills/>
        <Works/>
    </ScrollObserver>

  )
}
