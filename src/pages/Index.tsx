
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import CulturalStories from '@/components/CulturalStories';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedDestinations />
      <CulturalStories />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
