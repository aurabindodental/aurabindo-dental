import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const FAQs = () => {
  const faqs = [
    {
      question: 'What to Look For When Choosing a Dentist?',
      answer:
        'Look at qualifications, experience, clinic location, equipment, services offered, fees, patient reviews, and emergency handling. Visiting the clinic helps you judge comfort and confidence.',
    },
    {
      question: 'Why are you seeing a dentist?',
      answer:
        'Your reason guides the type of dentist you need—general, cosmetic, pediatric, periodontist, orthodontist, prosthodontist, or oral surgeon.',
    },
    {
      question:
        'If you’re concerned about your family’s oral health, should you choose a general dentist?',
      answer:
        'Yes. General dentists handle routine family dental care like checkups, fillings, and cleanings.',
    },
    {
      question:
        'Do general dentists use the titles “cosmetic dentist” or “family dentistry”?',
      answer:
        'Yes, but these are not official specialties; they describe services the dentist offers.',
    },
    {
      question: 'If you have young children, do you need a pedodontist?',
      answer:
        'Yes. A pedodontist specializes in child dental care, behavior management, and developing mouths.',
    },
    {
      question:
        'If you’re older, should you choose a dentist who offers bridges or dentures?',
      answer:
        'Yes. A prosthodontist specializes in dentures, bridges, and complex restorations.',
    },
    {
      question:
        'If you’re concerned about your smile or teeth stains, should you choose a cosmetic dentist?',
      answer:
        'Yes. For whitening, veneers, bonding, and smile makeovers.',
    },
    {
      question:
        'If you’re in pain because of gum disease, should you see a periodontist, endodontist, or oral surgeon?',
      answer:
        'Yes. These specialists treat gum infections, root canal issues, or surgical problems.',
    },
    {
      question:
        'If you want correction of crooked or forward teeth, do you need an orthodontist?',
      answer: 'Yes. Orthodontists straighten teeth using braces or aligners.',
    },
    {
      question: 'What location is convenient for you?',
      answer:
        'Choose based on whether you visit from home, work, or after school for your kids.',
    },
    {
      question: 'Will you go to appointments in the morning from home or after work?',
      answer: 'This helps decide if the clinic should be closer to home or office.',
    },
    {
      question: 'Will you take your children to the dentist during school hours or after school?',
      answer: 'This helps narrow down suitable clinic timings.',
    },
    {
      question: 'How long has the dentist been practicing?',
      answer:
        'More experience usually means better diagnostic ability and smoother treatment.',
    },
    {
      question: 'What type of education and certifications does the dentist have?',
      answer: 'Dentists must have BDS/MDS, and specialists have additional training.',
    },
    {
      question: 'What type of equipment does the practice have?',
      answer:
        'Advanced equipment means safer, more accurate, and more comfortable treatment.',
    },
    {
      question: 'What type of procedures do they perform?',
      answer: 'Always check whether they offer the treatments you specifically need.',
    },
    {
      question: 'How do they educate patients about oral health?',
      answer:
        'Good clinics explain hygiene, treatment steps, and preventive care clearly.',
    },
    {
      question: 'What are their hours?',
      answer: 'Choose a clinic with working hours that match your schedule.',
    },
    {
      question: 'How do they handle emergency situations?',
      answer:
        'Ask whether they offer urgent care for pain, swelling, or accidents.',
    },
    {
      question: 'What are their fees?',
      answer: 'Fees vary by clinic, location, and procedure. Check costs before deciding.',
    },
    {
      question: 'Who recommends their practice?',
      answer:
        'Ask friends, family, neighbors, or look at testimonials from real patients to understand the dentist’s reputation.',
    },
    {
      question: 'Why is it important to visit a dentist regularly?',
      answer:
        'Regular visits prevent dental problems, detect issues early, reduce costs long-term, and protect overall health.',
    },
    {
      question: 'How do regular dental check-ups help you?',
      answer:
        'They remove plaque and tartar, prevent gum disease, detect cavities early, and keep your smile healthy.',
    },
    {
      question: 'How do healthy teeth help you eat healthy?',
      answer:
        'Strong teeth allow you to chew a wide variety of nutritious foods, supporting better overall health.',
    },
    {
      question: 'How does seeing a dentist help keep you healthy?',
      answer:
        'Poor oral health links to gum infections, heart issues, and systemic diseases. Regular care prevents these complications.',
    },
    {
      question: 'How does seeing a dentist help keep your baby healthy?',
      answer:
        'Treating gum infections in pregnant women reduces the risk of premature birth and low birth weight.',
    },
    {
      question: 'How does early detection of oral cancer help?',
      answer:
        'Early detection makes oral cancer highly treatable and improves survival chances.',
    },
    {
      question: 'Why do diseased teeth look and smell bad?',
      answer:
        'Infections, cavities, and gum disease cause bad breath, discoloration, and unpleasant appearance.',
    },
    {
      question: 'How to choose dental implant specialists?',
      answer:
        'Choose trained surgical specialists with proven implant experience, not general practitioners with short courses.',
    },
    {
      question: 'What’s your specialty?',
      answer:
        'This should be asked to know whether the doctor is trained in implants, surgery, periodontics, prosthodontics, etc.',
    },
    {
      question: 'How much experience do you have in dental implant surgery?',
      answer:
        'Ask how many implant cases they’ve done, how often they perform them, and success rates.',
    },
    {
      question: 'How many implant cases have you performed and how often?',
      answer:
        'The answer tells you their surgical experience and skill level.',
    },
    {
      question: 'What continuing education or scientific contributions do you have?',
      answer:
        'Specialists who stay updated with research provide safer, higher-quality treatment.',
    },
    {
      question: 'What training do you have in treating implant complications?',
      answer:
        'Skilled surgeons know how to manage nerve injury, infection, sinus issues, and implant failure.',
    },
    {
      question: 'Can I speak to your previous implant patients?',
      answer:
        'Yes, this helps you understand real outcomes and patient satisfaction.',
    },
    {
      question: 'How much does your staff know about dental implant surgery?',
      answer:
        'Well-trained staff improve safety, planning, sterilization, and follow-up care.',
    },
    {
      question: 'Do you have photos of successful implant procedures?',
      answer:
        'Before-and-after photos show treatment quality and real results.',
    },
    {
      question: 'What does an endodontist do?',
      answer:
        'They specialize in treating tooth pulp issues, root canals, dental trauma, and infections inside the tooth.',
    },
    {
      question: 'How to choose an endodontist?',
      answer:
        'Look for one using advanced technology like digital imaging, microscopes, and updated pain-reduction techniques.',
    },
    {
      question: 'What does a periodontist do?',
      answer:
        'They treat gum disease, gum inflammation, bone loss, deep cleaning, gum surgeries, and implant-related issues.',
    },
    {
      question: 'How to choose a periodontist?',
      answer:
        'Choose one who uses updated equipment, modern surgical techniques, and patient-friendly procedures for best results.',
    },
    {
      question: 'What does a pedodontist do?',
      answer:
        'They examine, treat, and prevent dental issues in infants, children, and adolescents, including space maintainers and oral hygiene education.',
    },
    {
      question: 'How to choose a pedodontist?',
      answer:
        'Ask about their child-handling techniques, comfort measures, equipment designed for kids, and educational support for parents.',
    },
    {
      question: 'What does an orthodontist do?',
      answer:
        'Orthodontists diagnose and treat misaligned teeth and jaws using braces, aligners, retainers, and other appliances.',
    },
    {
      question: 'How to choose an orthodontist?',
      answer:
        'Check if they use modern technology, offer various alignment options, have patient education materials, and provide flexible payment plans.',
    },
    {
      question: 'What does a prosthodontist do?',
      answer:
        'They replace and restore missing teeth using dentures, crowns, implants, and bridges, especially in complex reconstruction cases.',
    },
    {
      question: 'How to choose a prosthodontist?',
      answer:
        'Ask if they use modern restorative technology, provide long-term maintenance guidance, and offer cost-effective treatment plans.',
    },
    {
      question: 'What does an oral surgeon do?',
      answer:
        'Oral surgeons perform extractions, jaw surgeries, facial trauma repairs, TMJ treatment, and surgical cancer-related procedures.',
    },
    {
      question: 'How to choose an oral surgeon?',
      answer:
        'Ask your dentist for referrals, check their surgical experience, and confirm they use advanced equipment and safe anesthesia practices.',
    },
    {
      question: 'Why did my teeth change color?',
      answer:
        'Stains occur due to food, drinks, tobacco, age, trauma, medications, and thinning enamel exposing yellow dentin.',
    },
    {
      question: 'How does teeth whitening work?',
      answer:
        'Whitening uses hydrogen peroxide or carbamide peroxide to break down stains, making teeth appear lighter.',
    },
    {
      question: 'Does whitening work on all teeth?',
      answer:
        'No. It works best on yellowish teeth and does not whiten crowns, fillings, or teeth stained by injury or certain medications.',
    },
    {
      question: 'What are my whitening options?',
      answer:
        'Stain-removal toothpaste, in-office bleaching, dentist-provided home trays, and over-the-counter whitening products.',
    },
    {
      question: 'Are there any side effects from teeth whitening?',
      answer:
        'Common effects are temporary tooth sensitivity and mild gum irritation.',
    },
    {
      question: 'Can I whiten a single tooth that has been root-filled?',
      answer:
        'Yes. The dentist can place whitening material inside the tooth to lighten it internally.',
    },
    {
      question: 'When might tooth whitening not work?',
      answer:
        'It doesn’t work on artificial teeth (crowns/veneers), deep stains from medication, or gray/black discoloration.',
    },
    {
      question: 'How long will my teeth stay whiter?',
      answer:
        'Results usually last up to three years, depending on lifestyle habits like smoking and diet.',
    },
    {
      question: 'How can I look after my teeth once they’ve been whitened?',
      answer:
        'Avoid stain-causing foods, reduce smoking, brush twice daily, floss, and visit your dentist regularly.',
    },
    {
      question: 'How do I treat sensitive teeth after whitening?',
      answer:
        'Use sensitivity toothpaste, avoid whitening for a few days, chew gum to increase saliva, and allow teeth to recover.',
    },
    {
      question:
        'What are the pros and cons of laser teeth whitening compared to tray whitening?',
      answer:
        'Laser whitening works faster but can increase sensitivity and cost more. Trays cost less, last longer, and can achieve the same results over time.',
    },
    {
  question: 'What should I look for when choosing a dentist?',
  answer: 'Look for a dentist who matches your oral health needs, has good experience, uses modern equipment, fits your location and schedule, and has positive patient reviews.',
},
{
  question: 'Why do I need to visit a dentist regularly?',
  answer: 'Regular visits help prevent dental problems, detect issues early, maintain good oral hygiene, and support your overall health.',
},
{
  question: 'What are the benefits of regular dental appointments?',
  answer: 'They help identify problems early, prevent plaque buildup, support healthy eating, reduce health risks, protect pregnant women, prevent bad breath, and help detect oral cancer early.',
},
{
  question: 'Why should I consider a general dentist?',
  answer: 'General dentists handle routine checkups, cleanings, fillings, crowns, bridges, and preventive care for all age groups.',
},
{
  question: 'When should I choose a pedodontist?',
  answer: 'Choose a pedodontist for children’s dental care because they specialize in young, developing teeth and child-friendly treatment methods.',
},
{
  question: 'When should I see a prosthodontist?',
  answer: 'See a prosthodontist if you need dentures, bridges, or complex restoration for missing or damaged teeth.',
},
{
  question: 'When should I see a cosmetic dentist?',
  answer: 'Visit a cosmetic dentist if you want to whiten your teeth, improve your smile, fix chips, close gaps, or enhance tooth appearance.',
},
{
  question: 'When should I see a periodontist?',
  answer: 'A periodontist is needed for gum disease, bone loss, inflammation, persistent bad breath, or implant-related gum procedures.',
},
{
  question: 'When should I see an endodontist?',
  answer: 'See an endodontist for root canals, pulp infections, dental trauma, or tooth discoloration caused by internal damage.',
},
{
  question: 'When should I see an orthodontist?',
  answer: 'An orthodontist treats crooked teeth, crowding, spacing issues, and bite problems using braces or aligners.',
},
{
  question: 'What location factors should I consider when choosing a dentist?',
  answer: 'Choose a clinic close to home or work and one with appointment times that fit your daily routine.',
},
{
  question: 'What information should I know before selecting a dental clinic?',
  answer: 'Ask about experience, education, equipment, procedures offered, clinic hours, emergency support, fees, and insurance.',
},
{
  question: 'How do I evaluate a dentist’s reputation?',
  answer: 'Check patient testimonials, online reviews, and recommendations from family or friends.',
},
{
  question: 'Why is early detection of dental issues important?',
  answer: 'Early detection prevents pain, avoids complications, reduces treatment cost, and increases treatment success.',
},
{
  question: 'How do I choose a dental implant specialist?',
  answer: 'Choose someone with surgical training, strong implant experience, knowledge of complications, and positive patient outcomes.',
},
{
  question: 'Why does experience matter for dental implant surgery?',
  answer: 'Experienced specialists diagnose accurately, follow correct surgical techniques, and manage complications better, improving success rates.',
},
{
  question: 'What questions should I ask before getting dental implants?',
  answer: 'Ask about their specialty, number of implant cases, complication training, patient references, and before/after photos.',
},
{
  question: 'What does an endodontist do?',
  answer: 'An endodontist treats issues inside the tooth such as pulp infections, performs root canals, manages trauma, and treats discoloration.',
},
{
  question: 'How do I choose an endodontist?',
  answer: 'Choose one who uses advanced tools like microscopes and digital imaging and follows modern pain-reducing techniques.',
},
{
  question: 'What does a periodontist do?',
  answer: 'A periodontist treats gum disease, infections, bone loss, and performs gum surgeries and implant procedures.',
},
{
  question: 'How do I choose a periodontist?',
  answer: 'Select a specialist who uses modern equipment and clearly explains treatment plans for gum and bone issues.',
},
{
  question: 'What does a pedodontist do?',
  answer: 'A pedodontist provides dental care for children, treats cavities, guides tooth alignment, and educates parents and kids.',
},
{
  question: 'How do I choose a pedodontist?',
  answer: 'Look for a child-friendly clinic, gentle treatment methods, and additional education material for kids.',
},
{
  question: 'What does an orthodontist do?',
  answer: 'An orthodontist corrects misaligned teeth and bite issues using braces, retainers, and aligners.',
},
{
  question: 'How do I choose an orthodontist?',
  answer: 'Ask about treatment technology, payment plans, options for aligners or braces, and patient education resources.',
},
{
  question: 'Why do teeth change color?',
  answer: 'Teeth darken due to coffee, tea, wine, tobacco, aging, trauma, and certain medications.',
},
{
  question: 'How does teeth whitening work?',
  answer: 'Whitening uses peroxide-based agents that break stains into smaller particles, making teeth appear brighter.',
},
{
  question: 'Does whitening work for everyone?',
  answer: 'Whitening works best on yellow teeth. It is less effective on brown or gray teeth and does not whiten crowns or fillings.',
},
{
  question: 'What whitening options are available?',
  answer: 'Options include whitening toothpaste, in-office bleaching, custom trays from the dentist, and over-the-counter kits.',
},
{
  question: 'Are there side effects from teeth whitening?',
  answer: 'Some people experience temporary sensitivity or gum irritation. Overuse can harm enamel, so follow your dentist’s instructions.',
},
{
  question: 'What is tooth bonding?',
  answer: 'Bonding uses tooth-colored composite resin to fix chips, gaps, cracks, or improve tooth appearance in a single visit.',
},
{
  question: 'What are the benefits of bonding?',
  answer: 'Bonding preserves enamel, looks natural, is affordable, durable, and can be modified later if needed.',
},
{
  question: 'What are dental veneers?',
  answer: 'Veneers are thin porcelain shells placed on the front of teeth to improve appearance with long-lasting, natural-looking results.',
},
{
  question: 'What problems can veneers fix?',
  answer: 'Veneers correct stains, chips, cracks, small gaps, and mild misalignment to enhance your smile.',
}
  ];

  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            {...fadeIn}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Everything you need to know about dental care and treatments
          </motion.p>
        </div>
      </section>

      {/* FAQs Accordion */}
      <motion.section {...fadeIn} className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={(v) => setOpenItem(v as string | undefined)}
            className="space-y-4"
          >
            {faqs.map((faq, index) => {
              const id = `item-${index}`;
              return (
                <AccordionItem
                  key={index}
                  value={id}
                  className="bg-card rounded-lg px-6 shadow-soft hover:shadow-medium transition-smooth"
                >
                  <AccordionTrigger
                    isOpen={openItem === id}
                    className="text-left text-lg font-semibold text-primary hover:text-accent"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section {...fadeIn} className="py-16 px-4 bg-accent/5">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team is here to help. Contact us anytime for personalized answers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9866937777">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg text-lg font-semibold transition-smooth shadow-medium hover:shadow-hover">
                Call: 9866937777
              </button>
            </a>
            <a href="mailto:aurobindodental@gmail.com">
              <button className="border-2 border-accent text-accent hover:bg-accent/10 px-8 py-3 rounded-lg text-lg font-semibold transition-smooth">
                Email Us
              </button>
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default FAQs;
