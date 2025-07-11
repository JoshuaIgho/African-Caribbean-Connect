import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Abouts from '@/components/About';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';

const About = () => {
  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
    <div className="min-h-screen bg-background">
      <Header />
      
<Abouts />
        <Testimonials />
      <Footer />
    </div>
    </motion.div>
  );
};

export default Abouts;