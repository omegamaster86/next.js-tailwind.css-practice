import AboutUs from './components/aboutus'
import Masthead from './components/masthead'
import ScrollObserver from './components/scroll-observer'
import Skills from './components/skills'
import Works from './components/works'
import TrustedBy from './components/trustedby'
import SizeObserver from './components/size-observer'
import ContactUs from './components/contactus'
import Footer from './components/footer'

export default function Home() {
  return (
    <SizeObserver>
      <ScrollObserver>
          <Masthead />
          <AboutUs/>
          <Skills/>
          <Works/>
          <TrustedBy/>
          <ContactUs />
          <Footer/>
      </ScrollObserver>
    </SizeObserver>
  )
}
