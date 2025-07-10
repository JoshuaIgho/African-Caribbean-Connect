import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CulturalStories from '@/components/CulturalStories';

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="py-20">
          <div className="container mx-auto px-4 text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Cultural Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse yourself in the rich traditions, ceremonies, and cultural heritage that define Africa's diverse communities.
            </p>
          </div>
        </div>
        <CulturalStories />
      </main>
      <Footer />
    </div>
  );
};

export default Stories;