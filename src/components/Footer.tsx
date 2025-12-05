import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {/* About Section */}
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-bold text-primary mb-4">About Aurobindo Dental</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Best dental clinic in Madhapur, providing affordable treatments such as braces,
              implants, root canal, crowns, dentures, whitening, aligners, zirconia crowns, and
              more. All with 21+ years experienced dentists.
            </p>
          </div>

          {/* Quick Links */}
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/treatments"
                  className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  Dental Treatments
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                >
                  Treatment Charges
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-bold text-primary mb-4">Our Treatments</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Invisible Aligners, Dental Braces, Root Canal, Wisdom Tooth Removal, Dental Implants,
              Teeth Whitening, Dentures, Crowns & Bridges, Veneers, Full Mouth Rehabilitation...
            </p>
            <Link
              to="/treatments"
              className="text-sm text-accent hover:underline font-medium inline-block"
            >
              Read More →
            </Link>
          </div>

          {/* Contact Info */}
          <div className="h-full flex flex-col">
            <h3 className="text-lg font-bold text-primary mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-accent" />
                <span>
                  Flat no-503, 5th Floor, MVS Heights, Vinayaka Nagar, Khanamet, Madhapur,
                  Hyderabad – 500081
                </span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 text-accent" />
                <div className="flex flex-col">
                  <a href="tel:9866937777" className="hover:text-accent transition-smooth">
                    9866937777
                  </a>
                  <a href="tel:9032018887" className="hover:text-accent transition-smooth">
                    9032018887
                  </a>
                </div>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 text-accent" />
                <a
                  href="mailto:aurobindodental@gmail.com"
                  className="hover:text-accent transition-smooth"
                >
                  aurobindodental@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 mt-4">
              <a
                href="https://www.facebook.com/aurobindodental"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aurobindo Dental Facebook"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/aurobindodentalhospital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aurobindo Dental Instagram"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/dentalaurobindo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aurobindo Dental X (Twitter)"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/aurobindodentalhospital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aurobindo Dental LinkedIn"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aurobindo Dental Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
