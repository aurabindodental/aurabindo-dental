import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Read the Apps Script URL from environment (Vite: VITE_SHEET_URL)
    // Read Web3Forms config from environment
    const WEB3FORMS_URL = (import.meta as any).env?.VITE_WEB3FORMS_URL;
    const WEB3FORMS_KEY = (import.meta as any).env?.VITE_WEB3FORMS_KEY;

    if (!WEB3FORMS_URL || !WEB3FORMS_KEY) {
      toast({
        title: 'Configuration error',
        description:
          'Contact form is not configured. Please set VITE_WEB3FORMS_URL and VITE_WEB3FORMS_KEY in your environment.',
      });
      return;
    }

    const payload = {
      access_key: WEB3FORMS_KEY,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    } as Record<string, any>;

    setIsSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Try to parse the JSON response; Web3Forms returns { success: true, ... }
      const data = await res.json().catch(() => null);

      if (res.ok && data && data.success) {
        toast({
          title: 'Message Sent!',
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const errMsg = (data && data.message) || `Request failed with status ${res.status}`;
        toast({
          title: 'Unable to send message',
          description: errMsg,
        });
      }
    } catch (err: any) {
      toast({
        title: 'Unable to send message',
        description:
          err?.message || 'Something went wrong sending your message. Please call or email us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Flat no-503, 5th Floor, MVS Heights, Vinayaka Nagar, Khanamet, Madhapur, Hyderabad – 500081, Telangana',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: (
        <div className="flex flex-col space-y-1">
          <a href="tel:9866937777" className="hover:text-accent transition-smooth">
            9866937777
          </a>
          <a href="tel:9032018887" className="hover:text-accent transition-smooth">
            9032018887
          </a>
        </div>
      ),
    },
    {
      icon: Mail,
      title: 'Email',
      content: (
        <a
          href="mailto:aurobindodental@gmail.com"
          className="hover:text-accent transition-smooth"
        >
          aurobindodental@gmail.com
        </a>
      ),
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Sat: 10:00 AM - 8:00 PM\nSunday: By Appointment',
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
            Contact Us
          </motion.h1>
          <motion.p
            {...fadeIn}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Get in touch with us for appointments, queries, or emergencies
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <motion.section {...fadeIn} className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-hover transition-smooth bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{info.title}</h3>
                    <div className="text-sm text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Map */}
      <motion.section {...fadeIn} className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-medium bg-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your dental concern..."
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="shadow-medium bg-card overflow-hidden">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0727803631985!2d78.38413227462844!3d17.456230300819254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9110a71e42b7%3A0xbcfe68895118eb4a!2sMVS%20Heights!5e0!3m2!1sen!2sin!4v1764575034808!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aurobindo Dental Hospital Location"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Emergency Contact */}
      <motion.section {...fadeIn} className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Dental Emergency?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Call us immediately for urgent dental care
          </p>
          <a href="tel:9866937777">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-lg px-8">
              Emergency: 9866937777
            </Button>
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Contact;
