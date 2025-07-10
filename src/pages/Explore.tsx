import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedDestinations from '@/components/FeaturedDestinations';

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="py-20">
          <div className="container mx-auto px-4 text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Explore Africa
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the hidden gems, historical sites, and breathtaking landscapes that make Africa truly extraordinary.
            </p>
          </div>
        </div>
        <FeaturedDestinations />
      </main>
      <Footer />
    </div>
  );
};

export default Explore;