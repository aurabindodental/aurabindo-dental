import { motion } from 'framer-motion';
import { Activity, Baby, Smile, Sparkles, Shield, Scissors, Crown, Bone, FileText } from 'lucide-react';
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

const Treatments = () => {
  const specialties = [
    {
      icon: Activity,
      name: 'Endodontics',
      description:
        'Endodontics is the branch of dentistry concerning dental pulp and tissues surrounding the roots of a tooth. Our endodontists specialize in root canal treatments, saving teeth that would otherwise need extraction. We use advanced techniques including rotary endodontics and digital imaging for precise, comfortable treatment.',
    },
    {
      icon: Baby,
      name: 'Pedodontics',
      description:
        "Pedodontics (Pediatric Dentistry) focuses on children's oral health from infancy through adolescence. Our pedodontists create a friendly, comfortable environment for young patients. We provide preventive care, cavity treatments, fluoride applications, sealants, and education on proper oral hygiene habits for lifelong dental health.",
    },
    {
      icon: Smile,
      name: 'Orthodontics',
      description:
        'Orthodontics corrects teeth and jaw alignment issues using braces, clear aligners, and other appliances. Our orthodontists treat overbites, underbites, crossbites, gaps, and crowding. We offer metal braces, ceramic braces, and invisible aligners to suit your lifestyle and aesthetic preferences.',
    },
    {
      icon: Sparkles,
      name: 'Cosmetic Dentistry',
      description:
        'Cosmetic dentistry enhances the appearance of your smile. We offer teeth whitening, veneers, bonding, contouring, and smile makeovers. Our cosmetic procedures combine artistry with dental science to create beautiful, natural-looking results that boost your confidence.',
    },
    {
      icon: Shield,
      name: 'Periodontics',
      description:
        'Periodontics treats gum disease and maintains the supporting structures of teeth. Our periodontists provide scaling, root planing, gum grafting, pocket reduction surgery, and dental implant placement. We focus on preventing, diagnosing, and treating gum inflammation and disease.',
    },
    {
      icon: Scissors,
      name: 'Oral and Maxillofacial Surgery',
      description:
        'Oral surgery addresses complex dental and facial conditions. We perform wisdom tooth extractions, dental implant surgery, jaw surgery, corrective jaw surgery, facial trauma treatment, and surgical treatment of oral pathology. Our surgeons use advanced techniques for optimal outcomes.',
    },
    {
      icon: Crown,
      name: 'Prosthodontics',
      description:
        'Prosthodontics restores and replaces damaged or missing teeth. Our prosthodontists specialize in crowns, bridges, dentures, veneers, and implant-supported restorations. We create functional, aesthetic solutions tailored to your specific needs using the latest materials and techniques.',
    },
    {
      icon: Bone,
      name: 'Dental Implants',
      description:
        'Dental implants are permanent tooth replacements that look, feel, and function like natural teeth. We use titanium implants that fuse with your jawbone, providing a stable foundation for crowns, bridges, or dentures. Implants prevent bone loss and maintain facial structure.',
    },
    {
      icon: FileText,
      name: 'Oral Medicine & Radiology',
      description:
        'Oral Medicine diagnoses and treats oral diseases, including oral cancer screening, mouth ulcers, oral infections, and temporomandibular joint (TMJ) disorders. Our radiology services include digital x-rays, panoramic imaging, and CBCT scans for accurate diagnosis and treatment planning.',
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
            Comprehensive Dental Treatments
          </motion.h1>
          <motion.p
            {...fadeIn}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Expert care across all dental specialties under one roof
          </motion.p>
        </div>
      </section>

      {/* Specialties Grid */}
      <motion.section {...fadeIn} className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-hover transition-smooth bg-card group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                      <specialty.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{specialty.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{specialty.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section {...fadeIn} className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a consultation with our experts who will guide you to the right treatment
          </p>
          <a href="tel:9866937777">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-smooth shadow-medium hover:shadow-hover">
              Book Consultation
            </button>
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Treatments;
