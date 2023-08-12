import AboutUs from './components/aboutus'
import Masthead from './components/masthead'
import ScrollObserver from './components/scroll-observer'

export default function Home() {
  return (
    <ScrollObserver>
        <Masthead />
        <AboutUs/>
    </ScrollObserver>

  )
}
