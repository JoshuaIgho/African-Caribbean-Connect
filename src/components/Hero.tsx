import React from "react";
import CountUpModule from "react-countup";
const CountUp = (CountUpModule as any).default || CountUpModule;
import { Play, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-black opacity-50 " />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <MapPin className="w-6 h-6 text-amber-400 mr-2 " />
            <span className="font-lexend text-amber-200 font-medium tracking-wide text-xs xs:text-sm sm:text-base md:text-lg">
              Discover Africa's Hidden Gems
            </span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight animate-fade-in">
            African <span className="text-gradient">Grounds Connect</span>
          </h1>

          <p className="font-lexend text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in mt-4 xs:mt-6 sm:mt-10 md:mt-14 px-4 xs:px-2 sm:px-0">
            Journey through breathtaking landscapes, rich cultural traditions,
            and historical treasures that reveal the true spirit of Africa.
          </p>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in mt-6 xs:mt-8 sm:mt-12 md:mt-14 px-4 sm:px-0">
            <a href="/explore" className="w-full xs:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full xs:w-auto bg-white hover:bg-zinc-200 text-xs xs:text-sm sm:text-base md:text-lg hover:text-primary hover:border-white text-primary px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-200"
              >
                <Play className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5" />
                <span className="hidden xs:inline">Watch the Journey</span>
                <span className="xs:hidden">Watch</span>
              </Button>
            </a>

            <div className="group inline-block rounded-md transition-all duration-300 bg-transparent hover:bg-[linear-gradient(135deg,_hsl(var(--accent))_0%,_hsl(var(--primary))_100%)] w-full xs:w-auto">
              <a href="/stories" className="w-full xs:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full xs:w-auto bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent border-amber-400 hover:border-amber-500 text-xs xs:text-sm sm:text-base md:text-lg px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4"
                >
                  <Play className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5" />
                  <span className="hidden xs:inline">Explore Stories</span>
                  <span className="xs:hidden">Explore</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 xs:gap-6 sm:gap-8 mt-8 xs:mt-12 sm:mt-16 md:mt-20 animate-fade-in px-4 sm:px-0">
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-amber-400">
                <CountUp end={50} duration={3} />+
              </div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl font-medium md:font-normal">
                Destinations
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-amber-400">
                <CountUp end={100} duration={3} />+
              </div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl font-medium md:font-normal">
                Stories
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-amber-400">
                <CountUp end={25} duration={3} />+
              </div>
              <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl font-medium md:font-normal">
                Countries
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#explore">
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </a>
      </section>
    </motion.div>
  );
};

export default Hero;
