import { motion } from 'framer-motion';
import { IndianRupee, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Pricing = () => {
  const treatments = [
    { name: 'Invisible Aligners', price: '₹95,000', per: '' },
    { name: 'Dental Braces (Metal)', price: '₹35,000', per: 'onwards' },
    { name: 'Dental Braces (Ceramic)', price: '₹45,000', per: 'onwards' },
    { name: 'Root Canal Treatment (Anterior)', price: '₹4,000', per: 'onwards' },
    { name: 'Root Canal Treatment (Premolar)', price: '₹5,000', per: 'onwards' },
    { name: 'Root Canal Treatment (Molar)', price: '₹6,000', per: 'onwards' },
    { name: 'Wisdom Tooth Removal (Simple)', price: '₹4,000', per: 'onwards' },
    { name: 'Wisdom Tooth Removal (Surgical)', price: '₹8,000', per: 'onwards' },
    { name: 'Complete Dentures (Upper/Lower)', price: '₹25,000', per: 'onwards' },
    { name: 'Partial Dentures', price: '₹15,000', per: 'onwards' },
    { name: 'Teeth Whitening (In-office)', price: '₹10,000', per: 'onwards' },
    { name: 'Teeth Whitening (Home kit)', price: '₹8,000', per: 'onwards' },
    { name: 'Dental Implants (Single)', price: '₹25,000', per: 'onwards' },
    { name: 'Dental Implants (Multiple)', price: 'Call for quote', per: '' },
    { name: 'Porcelain Crown', price: '₹8,000', per: 'onwards' },
    { name: 'Zirconia Crown', price: '₹12,000', per: 'onwards' },
    { name: 'Dental Veneers (Per tooth)', price: '₹12,000', per: 'onwards' },
    { name: 'Teeth Scaling & Polishing', price: '₹1,500', per: 'onwards' },
    { name: 'Dental X-Ray (Digital)', price: '₹500', per: 'onwards' },
    { name: 'Panoramic X-Ray', price: '₹800', per: 'onwards' },
  ];

  const packages = [
    {
      title: 'Full Mouth Rehabilitation',
      description: 'Complete restoration of all teeth',
      price: '₹2,50,000 onwards',
      features: [
        'Comprehensive dental examination',
        'Multiple crowns and bridges',
        'Implants if needed',
        'Bite correction',
        'Follow-up consultations',
      ],
    },
    {
      title: 'All-on-4 Dental Implants',
      description: 'Full arch restoration with 4 implants',
      price: '₹3,00,000 onwards',
      features: [
        '4 dental implants per arch',
        'Temporary prosthesis',
        'Permanent fixed bridge',
        '5-year warranty on implants',
        'Regular follow-ups included',
      ],
    },
    {
      title: 'Smile Makeover Package',
      description: 'Complete cosmetic transformation',
      price: '₹80,000 onwards',
      features: [
        'Teeth whitening',
        'Veneers (4-6 teeth)',
        'Gum contouring if needed',
        'Digital smile design',
        'Before & after photos',
      ],
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
            Treatment Charges
          </motion.h1>
          <motion.p
            {...fadeIn}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Transparent, affordable pricing with no hidden costs
          </motion.p>
        </div>
      </section>

      {/* Individual Treatments */}
      <motion.section {...fadeIn} className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Individual Treatments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Card className="hover:shadow-medium transition-smooth bg-card">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-primary mb-2">
                          {treatment.name}
                        </h3>
                        <div className="flex items-baseline">
                          <IndianRupee className="w-4 h-4 text-accent mr-1 mt-0.5" />
                          <span className="text-xl font-bold text-accent">
                            {treatment.price.replace('₹', '')}
                          </span>
                          {treatment.per && (
                            <span className="text-xs text-muted-foreground ml-2">
                              {treatment.per}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Package Deals */}
      <motion.section {...fadeIn} className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
            Special Packages
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive treatment packages at discounted rates
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-hover transition-smooth bg-card border-2 hover:border-accent">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{pkg.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    <p className="text-3xl font-bold text-accent mt-4">{pkg.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section {...fadeIn} className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Need an Exact Quote?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us for a personalized treatment plan and accurate pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Request Quote
              </Button>
            </Link>
            <a href="tel:9866937777">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
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

export default Pricing;
