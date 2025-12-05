import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroCarousel from '@/components/HeroCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  const treatments = [
    { name: 'Invisible Aligners', price: '₹95,000', link: '/pricing' },
    { name: 'Dental Braces', price: '₹35,000 onwards', link: '/pricing' },
    { name: 'Root Canal Treatment', price: '₹4,000 onwards', link: '/pricing' },
    { name: 'Wisdom Tooth Removal', price: '₹4,000 onwards', link: '/pricing' },
    { name: 'Dental Implants', price: '₹25,000 onwards', link: '/pricing' },
    { name: 'Teeth Whitening', price: '₹10,000 onwards', link: '/pricing' },
  ];

  const reasons = [
    {
      icon: Award,
      title: '21+ Years Experience',
      description: 'All our dentists have over 21 years of professional experience',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Specialized dentists for every dental need under one roof',
    },
    {
      icon: Shield,
      title: 'Safe & Advanced',
      description: 'Latest technology and strict safety protocols',
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Convenient appointment slots to fit your schedule',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="mt-20 pb-6 md:pb-12">
        <HeroCarousel />
      </section>

      {/* Welcome Section */}
      <motion.section {...fadeIn} className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Welcome to Aurobindo Dental Hospital
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aurobindo Dental Hospital is one of the best dental hospitals in Madhapur, Hyderabad,
            India. Our team includes dentists with 21+ years of experience. We provide all dental
            treatments at an affordable cost including Invisible Aligners, Dental Braces, Root Canal
            Treatments, Wisdom Tooth Removal, Dentures, Teeth Whitening, and many more.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                Book an Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section {...fadeIn} className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-hover transition-smooth bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Treatments */}
      <motion.section {...fadeIn} className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Key Treatments
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive dental care with transparent pricing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card className="hover:shadow-hover transition-smooth bg-card h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{treatment.name}</h3>
                    <p className="text-2xl font-bold text-accent mb-4">{treatment.price}</p>
                    <Link to={treatment.link}>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/treatments">
              <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90">
                View All Treatments
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section {...fadeIn} className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Priya Sharma',
                text: 'Excellent service! Dr. Sarala performed my root canal with zero pain. Highly recommend.',
                rating: 5,
              },
              {
                name: 'Rajesh Kumar',
                text: 'Got my braces done here. Very affordable and the results are amazing. Thank you team!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section {...fadeIn} className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your appointment today and experience world-class dental care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
                Book Appointment
              </Button>
            </Link>
            <a href="tel:9866937777">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-accent text-accent hover:bg-accent/10"
              >
                Call: 9866937777
              </Button>
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Index;
