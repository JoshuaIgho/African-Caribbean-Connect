import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';

const Culture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="py-20">
          <div className="container mx-auto px-4 text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              African Culture
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the vibrant traditions, art, music, and customs that have shaped Africa for millennia.
            </p>
          </div>
        </div>
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Culture;