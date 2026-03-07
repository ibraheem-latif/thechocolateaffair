import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Occasions from './components/Occasions';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Occasions />
        <Products />
        <HowItWorks />
        <About />
        <Testimonials />
        <InstagramFeed />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
