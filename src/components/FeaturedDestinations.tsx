
import { MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    id: 1,
    name: 'Great Mosque of Djenné',
    location: 'Mali',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'The largest mud-brick building in the world, showcasing unique Sudano-Sahelian architecture.',
    duration: '45 min',
    views: '2.3M'
  },
  {
    id: 2,
    name: 'Victoria Falls',
    location: 'Zambia & Zimbabwe',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'One of the largest waterfalls in the world, known locally as "The Smoke That Thunders".',
    duration: '32 min',
    views: '4.1M'
  },
  {
    id: 3,
    name: 'Serengeti Migration',
    location: 'Tanzania',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Witness the greatest wildlife spectacle on Earth as millions of animals migrate.',
    duration: '28 min',
    views: '5.7M'
  },
  {
    id: 4,
    name: 'Stone Town Zanzibar',
    location: 'Tanzania',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A UNESCO World Heritage Site rich in history, culture, and Swahili architecture.',
    duration: '38 min',
    views: '1.9M'
  },
  {
    id: 5,
    name: 'Sahara Desert',
    location: 'Morocco',
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Experience the vastness and beauty of the world\'s largest hot desert.',
    duration: '52 min',
    views: '3.2M'
  },
  {
    id: 6,
    name: 'Table Mountain',
    location: 'South Africa',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Cape Town\'s iconic flat-topped mountain offering breathtaking panoramic views.',
    duration: '41 min',
    views: '2.8M'
  }
];

const FeaturedDestinations = () => {
  return (
    <section id="explore" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Africa's most captivating locations through our immersive video stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {destination.views}
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{destination.location}</span>
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {destination.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-200"
                >
                  Watch Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
            Explore All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
