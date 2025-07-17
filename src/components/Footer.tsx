import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'Αρχική', href: '/' },
    { name: 'Γιατί Key-Host', href: '/about' },
    { name: 'Υπηρεσίες', href: '/services' },
    { name: 'Πελατολόγιο', href: '/properties' },
    { name: 'Επικοινωνία', href: '/contact' },
  ];

  const services = [
    'Διαχείριση Καταλυμάτων',
    'Hosting / Υποδοχή',
    'Επαγγελματικός Καθαρισμός',
    'Προώθηση',
    'Φωτογράφηση',
    'Social Media'
  ];

  return (
    <footer className="bg-primary-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/4fd096f0-e2d9-4c14-b82c-bdd90b12c71d.png" 
                alt="Key-Host Logo" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-sm">
              Το ακίνητό σας, η προτεραιότητά μας. Επαγγελματική διαχείριση βραχυχρόνιων μισθώσεων σε όλη την Ελλάδα.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild className="text-white/60 hover:text-accent p-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-white/60 hover:text-accent p-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-white/60 hover:text-accent p-2">
                <a href="https://wa.me/302752220223" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Υπηρεσίες</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Επικοινωνία</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <div>
                  <p className="text-white/80 text-sm">+30 275 222 0223</p>
                  <p className="text-white/60 text-xs">Δευτ-Παρ 9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <div>
                  <p className="text-white/80 text-sm">info@key-host.gr</p>
                  <p className="text-white/60 text-xs">24/7 υποστήριξη</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <div>
                  <p className="text-white/80 text-sm">Ελλάδα</p>
                  <p className="text-white/60 text-xs">Πανελλαδική εξυπηρέτηση</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Key-Host. Όλα τα δικαιώματα διατηρούνται.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
              Όροι Χρήσης
            </a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
              Πολιτική Απορρήτου
            </a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;