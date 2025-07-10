
import { Play, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <MapPin className="w-6 h-6 text-amber-400 mr-2" />
          <span className="text-amber-200 font-medium tracking-wide">Discover Africa's Hidden Gems</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight animate-fade-in">
          Africa{' '}
          <span className="text-gradient bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
            Untold
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Journey through breathtaking landscapes, rich cultural traditions, and historical treasures 
          that reveal the true spirit of Africa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold flex items-center gap-2 transform hover:scale-105 transition-all duration-200"
          >
            <Play className="w-5 h-5" />
            Watch the Journey
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
          >
            Explore Stories
          </Button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">50+</div>
            <div className="text-gray-300">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">100+</div>
            <div className="text-gray-300">Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400">25+</div>
            <div className="text-gray-300">Countries</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
