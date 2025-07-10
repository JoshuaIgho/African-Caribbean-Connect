
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stories = [
  {
    id: 1,
    title: 'Traditional Maasai Warriors',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Discover the rich traditions and ceremonies of the Maasai people in Kenya and Tanzania.',
    date: 'March 15, 2024',
    views: '1.2M',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Ancient Ethiopian Churches',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Explore the magnificent rock-hewn churches of Lalibela, carved directly into solid rock.',
    date: 'March 10, 2024',
    views: '980K',
    readTime: '12 min read'
  },
  {
    id: 3,
    title: 'West African Drumming',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Experience the powerful rhythms and cultural significance of traditional West African percussion.',
    date: 'March 5, 2024',
    views: '750K',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Berber Nomad Life',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Journey with Berber nomads through the Sahara and learn about their ancient way of life.',
    date: 'February 28, 2024',
    views: '1.5M',
    readTime: '10 min read'
  }
];

CulturalStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Cultural Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive deep into Africa's rich cultural heritage through our latest video documentaries
          </p>
        </div>

        {/* Featured Story */}
        <div className="relative mb-16">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-96">
                <img
                  src={stories[currentIndex].image}
                  alt={stories[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {stories[currentIndex].category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {stories[currentIndex].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {stories[currentIndex].views}
                  </div>
                  <span>{stories[currentIndex].readTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-4">
                  {stories[currentIndex].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {stories[currentIndex].excerpt}
                </p>
                
                <div className="flex gap-4">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Watch Now
                  </Button>
                  <Button variant="outline">
                    Read Article
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto bg-white/90 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto bg-white/90 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-accent' : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.slice(0, 3).map((story, index) => (
            <Card key={story.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                    {story.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{story.date}</span>
                  <span>•</span>
                  <span>{story.readTime}</span>
                  <span>•</span>
                  <span>{story.views} views</span>
                </div>
                
                <h3 className="text-lg font-playfair font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                  {story.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {story.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CulturalStories;
