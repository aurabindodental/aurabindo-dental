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
      <section className="pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1
            {...fadeIn}
            className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6"
          >
            About Aurobindo Dental Hospital
          </motion.h1>
          <motion.p
            {...fadeIn}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            We have all 21+ years experienced Dentists working with us.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <motion.section {...fadeIn} className="py-8 md:py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <Card className="bg-card shadow-soft hover:shadow-medium transition-smooth aspect-square flex flex-col justify-center">
              <CardContent className="p-3 md:p-6 text-center flex flex-col items-center justify-center h-full">
                <Award className="w-8 h-8 md:w-12 md:h-12 text-accent mx-auto mb-2 md:mb-4" />
                <h3 className="text-sm md:text-xl font-bold text-primary mb-1 md:mb-2 leading-tight">21+ Years Experience</h3>
                <p className="text-xs md:text-base text-muted-foreground line-clamp-3">
                  Every dentist on our team brings over 21 years of professional expertise
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft hover:shadow-medium transition-smooth aspect-square flex flex-col justify-center">
              <CardContent className="p-3 md:p-6 text-center flex flex-col items-center justify-center h-full">
                <GraduationCap className="w-8 h-8 md:w-12 md:h-12 text-accent mx-auto mb-2 md:mb-4" />
                <h3 className="text-sm md:text-xl font-bold text-primary mb-1 md:mb-2 leading-tight">MDS Qualified</h3>
                <p className="text-xs md:text-base text-muted-foreground line-clamp-3">
                  All our consultants hold Master of Dental Surgery degrees
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft hover:shadow-medium transition-smooth aspect-square flex flex-col justify-center col-span-2 md:col-span-1 max-w-[calc(50%-0.5rem)] md:max-w-none mx-auto w-full">
              <CardContent className="p-3 md:p-6 text-center flex flex-col items-center justify-center h-full">
                <Users className="w-8 h-8 md:w-12 md:h-12 text-accent mx-auto mb-2 md:mb-4" />
                <h3 className="text-sm md:text-xl font-bold text-primary mb-1 md:mb-2 leading-tight">Specialized Care</h3>
                <p className="text-xs md:text-base text-muted-foreground line-clamp-3">
                  Dedicated specialists for every dental treatment need
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Doctors Section */}
      <motion.section {...fadeIn} className="py-10 md:py-16 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-secondary mb-3 md:mb-4">
            Our Expert Consultants
          </h2>
          <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
            Meet our team of highly qualified and experienced dental specialists
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-hover transition-smooth bg-card h-full">
                  <div className="relative h-40 md:h-64 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-3 md:p-6">
                    <h3 className="text-base md:text-xl font-bold text-primary mb-1">{doctor.name}</h3>
                    <p className="text-xs md:text-sm font-semibold text-accent mb-1 md:mb-2">{doctor.degree}</p>
                    <p className="text-xs md:text-base text-muted-foreground line-clamp-2 md:line-clamp-none">{doctor.specialty}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section {...fadeIn} className="py-10 md:py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-secondary mb-8 md:mb-12">
            Our Commitment
          </h2>

          <div className="space-y-6 md:space-y-8">
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
