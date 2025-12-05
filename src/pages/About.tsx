import { motion } from 'framer-motion';
import { Award, GraduationCap, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Card, CardContent } from '@/components/ui/card';
import doctor1 from '@/assets/doctor-1.jpg';
import doctor2 from '@/assets/doctor-2.jpg';
import doctor3 from '@/assets/doctor-3.jpg';
import doctor4 from '@/assets/doctor-4.jpg';
import doctor5 from '@/assets/doctor-5.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => {
  const doctors = [
    {
      name: 'Dr. B. Sarala Kumari',
      degree: 'MDS',
      specialty: 'Prosthodontist, Implantologist & TMD Specialist',
      image: doctor1,
    },
    {
      name: 'Dr. Ch. Dharmendra',
      degree: 'MDS',
      specialty: 'Orthodontist',
      image: doctor2,
    },
    {
      name: 'Dr. P. Sandhya',
      degree: 'MDS',
      specialty: 'Endodontist',
      image: doctor3,
    },
    {
      name: 'Dr. Ashwin',
      degree: 'MDS',
      specialty: 'Oral Surgeon and Implantologist',
      image: doctor4,
    },
    {
      name: 'Dr. Lavanya',
      degree: 'MDS',
      specialty: 'Periodontist',
      image: doctor5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            About Aurobindo Dental Hospital
          </motion.h1>
          <motion.p
            {...fadeIn}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We have all 21+ years experienced Dentists working with us.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section {...fadeIn} className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">21+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Every dentist on our team brings over 21 years of professional expertise
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">MDS Qualified</h3>
                <p className="text-muted-foreground">
                  All our consultants hold Master of Dental Surgery degrees
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Specialized Care</h3>
                <p className="text-muted-foreground">
                  Dedicated specialists for every dental treatment need
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Doctors Section */}
      <motion.section {...fadeIn} className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Our Expert Consultants
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced dental specialists
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-hover transition-smooth bg-card h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-1">{doctor.name}</h3>
                    <p className="text-sm font-semibold text-accent mb-2">{doctor.degree}</p>
                    <p className="text-muted-foreground">{doctor.specialty}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section {...fadeIn} className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Our Commitment
          </h2>

          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-3">Quality Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Aurobindo Dental Hospital, we prioritize the highest standards of dental care.
                Our specialists use advanced technology and proven techniques to ensure safe,
                effective, and comfortable treatments for every patient.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-3">Affordable Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe everyone deserves access to quality dental care. That's why we offer
                comprehensive treatments at transparent, affordable prices without compromising on
                quality or safety.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-3">Patient-Centered Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your comfort and satisfaction are our top priorities. We take the time to understand
                your needs, explain treatment options clearly, and work with you to achieve your
                dental health goals.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About;
