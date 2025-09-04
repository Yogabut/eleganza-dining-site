import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal border-t border-border/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Eleganza
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Experience the finest Italian cuisine in an atmosphere of 
              sophisticated elegance. Every meal is a celebration of tradition 
              and innovation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-muted-foreground">
                    Via della Eleganza 123<br />
                    00186 Roma, Italy
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="font-body text-muted-foreground">
                  +39 06 1234 5678
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="font-body text-muted-foreground">
                  info@ristoranteeleganza.it
                </p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-1">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Opening Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Monday - Thursday</span>
                    <span className="font-body text-foreground font-medium">6:00 PM - 10:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Friday - Saturday</span>
                    <span className="font-body text-foreground font-medium">6:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-muted-foreground">Sunday</span>
                    <span className="font-body text-foreground font-medium">5:30 PM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Menu', href: '#menu' },
                { name: 'Reservations', href: '#reservation' },
                { name: 'Private Events', href: '#' },
                { name: 'Gift Cards', href: '#' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-muted-foreground text-sm">
            © 2024 Ristorante Eleganza. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              className="font-body text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="font-body text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;