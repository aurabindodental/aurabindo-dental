import { motion } from 'framer-motion';
import { Plane, DollarSign, Award, Building, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Card, CardContent } from '@/components/ui/card';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const DentalTourism = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Save up to 50-70% compared to dental costs in Western countries',
    },
    {
      icon: Award,
      title: 'Expert Dentists',
      description: 'Highly qualified specialists with 21+ years of experience',
    },
    {
      icon: Building,
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment and international hygiene standards',
    },
    {
      icon: Plane,
      title: 'Convenient Location',
      description: 'Hyderabad offers excellent connectivity and tourist attractions',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Contact',
      description:
        'Reach out to us via email, phone, or WhatsApp. Share your dental concerns and requirements.',
    },
    {
      step: '2',
      title: 'Documentation',
      description:
        'Send us your dental X-rays, medical history, and treatment expectations for initial assessment.',
    },
    {
      step: '3',
      title: 'Treatment Plan',
      description:
        'Receive a detailed treatment plan with cost estimates, timeline, and procedure details.',
    },
    {
      step: '4',
      title: 'Arrival & Welcome',
      description:
        'Upon arrival in Hyderabad, we assist with local transportation and accommodation recommendations.',
    },
    {
      step: '5',
      title: 'Treatment Phase',
      description:
        'Begin your dental treatment with our expert team in a comfortable, modern facility.',
    },
    {
      step: '6',
      title: 'Recovery & Follow-up',
      description:
        'Post-treatment care instructions and follow-up consultations to ensure optimal results.',
    },
    {
      step: '7',
      title: 'Departure',
      description:
        'Complete your treatment, receive all records, and depart with a healthy smile.',
    },
    {
      step: '8',
      title: 'Ongoing Support',
      description:
        'Stay connected for remote follow-ups and any questions after returning home.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            {...fadeIn}
            className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6"
          >
            Dental Tourism in Hyderabad
          </motion.h1>
          <motion.p
            {...fadeIn}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            World-class dental care at affordable prices in the heart of India
          </motion.p>
        </div>
      </section>

      {/* What is Dental Tourism */}
      <motion.section {...fadeIn} className="py-8 md:py-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-4 md:mb-6 text-center">
            What is Dental Tourism?
          </h2>
          <div className="bg-card p-8 rounded-xl shadow-soft">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dental tourism is the practice of traveling to another country for dental care at a
              fraction of the cost you would pay in your home country, while maintaining the same
              or higher quality standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              India, particularly Hyderabad, has become a premier destination for dental tourism due
              to its combination of highly skilled dentists, advanced medical infrastructure,
              affordable costs, and rich cultural experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Patients from around the world choose dental tourism to access procedures like dental
              implants, full mouth rehabilitation, cosmetic dentistry, and orthodontics at
              significantly reduced prices without compromising on quality.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why Hyderabad */}
      <motion.section {...fadeIn} className="py-8 md:py-12 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-secondary mb-8 md:mb-12">
            Why Choose Hyderabad?
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-hover transition-smooth bg-card aspect-square flex flex-col justify-center">
                  <CardContent className="p-3 md:p-6 text-center flex flex-col items-center justify-center h-full">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 flex-shrink-0">
                      <benefit.icon className="w-5 h-5 md:w-8 md:h-8 text-accent" />
                    </div>
                    <h3 className="text-xs md:text-xl font-bold text-primary mb-1 md:mb-2 leading-tight">{benefit.title}</h3>
                    <p className="text-[10px] md:text-base text-muted-foreground line-clamp-3">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Flow */}
      <motion.section {...fadeIn} className="py-10 md:py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-secondary mb-8 md:mb-12">
            Your Dental Tourism Journey
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-medium transition-smooth bg-card flex flex-col justify-center">
                  <CardContent className="p-3 md:p-5 flex flex-col h-full justify-between text-center items-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center mb-2 md:mb-4 flex-shrink-0">
                      <span className="text-sm md:text-xl font-bold text-accent-foreground">
                        {item.step}
                      </span>
                    </div>
                    <div className="flex-1 w-full">
                      <h3 className="text-xs md:text-xl font-bold text-primary mb-1 md:mb-2 leading-tight">{item.title}</h3>
                      <p className="text-[10px] md:text-base text-muted-foreground line-clamp-4 md:line-clamp-none">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section {...fadeIn} className="py-10 md:py-16 bg-accent/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
            Ready to Start Your Dental Tourism Journey?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
            Contact us today to discuss your dental needs and plan your visit to Hyderabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:aurobindodental@gmail.com">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-smooth shadow-medium hover:shadow-hover">
                Email Us
              </button>
            </a>
            <a href="tel:9866937777">
              <button className="border-2 border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-lg text-lg font-semibold transition-smooth">
                Call: 9866937777
              </button>
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default DentalTourism;
