
import { Heart, Globe, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Stories',
      description: 'We share genuine stories from local communities, preserving their voices and perspectives.'
    },
    {
      icon: Globe,
      title: 'Cultural Bridge',
      description: 'Connecting Africa to the world by showcasing its diverse heritage and modern innovations.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Working directly with local communities to ensure respectful and accurate representation.'
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'Professional storytelling that meets international standards while honoring local traditions.'
    }
  ];

  return (
    <section id="culture" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              About Africa Untold
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              We are passionate storytellers dedicated to unveiling the hidden gems of Africa. 
              Our mission is to showcase the continent's rich cultural heritage, breathtaking landscapes, 
              and inspiring stories that often go untold.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through immersive video content and authentic narratives, we bridge cultures and 
              create understanding between Africa and the global community. Every story we tell 
              is crafted with respect, authenticity, and a deep appreciation for the diverse 
              cultures that make Africa extraordinary.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">10M+</div>
                <div className="text-muted-foreground">Video Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">500K+</div>
                <div className="text-muted-foreground">Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-muted-foreground">Countries Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-muted-foreground">Stories Shared</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="African cultural celebration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Award Winning</div>
                    <div className="text-sm text-muted-foreground">Documentary Series</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-playfair font-bold text-center text-primary mb-12">
            Our Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-playfair font-semibold text-primary mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
