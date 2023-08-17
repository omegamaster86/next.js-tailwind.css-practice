import AboutUs from './components/aboutus'
import Masthead from './components/masthead'
import ScrollObserver from './components/scroll-observer'
import Skills from './components/skills'
import Works from './components/works'
import TrustedBy from './components/trustedby'

export default function Home() {
  return (
    <ScrollObserver>
        <Masthead />
        <AboutUs/>
        <Skills/>
        <Works/>
        <TrustedBy/>
    </ScrollObserver>

  )
}
