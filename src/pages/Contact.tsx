import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} >
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt">
       <div className="">
          <div className="container mx-auto px-4 text-center ">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            </p>  
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
    </motion.div>
  );
};

export default ContactPage;