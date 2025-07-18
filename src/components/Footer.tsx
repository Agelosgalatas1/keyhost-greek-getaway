import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { AdminLogin } from './AdminLogin';
import { useAuth } from '@/hooks/useAuth';

const Footer = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const { isAdmin, signOut } = useAuth();

  const quickLinks = [{
    name: 'Αρχική',
    href: '/'
  }, {
    name: 'Γιατί Key-Host',
    href: '/about'
  }, {
    name: 'Υπηρεσίες',
    href: '/services'
  }, {
    name: 'Πελατολόγιο',
    href: '/properties'
  }, {
    name: 'Επικοινωνία',
    href: '/contact'
  }];
  
  const services = ['Διαχείριση Καταλυμάτων', 'Hosting / Υποδοχή', 'Επαγγελματικός Καθαρισμός', 'Προώθηση', 'Φωτογράφηση', 'Social Media'];
  
  return (
    <>
      <footer className="bg-primary-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-turquoise">Key-Host</h3>
              <p className="text-white/80">
                Επαγγελματική διαχείριση βραχυχρόνιων μισθώσεων στην Ελλάδα
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 hover:text-primary-turquoise cursor-pointer transition-colors" />
                <Facebook className="h-5 w-5 hover:text-primary-turquoise cursor-pointer transition-colors" />
                <MessageCircle className="h-5 w-5 hover:text-primary-turquoise cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Γρήγορες Συνδέσεις</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="text-white/80 hover:text-primary-turquoise transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Υπηρεσίες</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-white/80 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Επικοινωνία</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary-turquoise" />
                  <span className="text-white/80 text-sm">Αθήνα, Ελλάδα</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary-turquoise" />
                  <span className="text-white/80 text-sm">+30 210 123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary-turquoise" />
                  <span className="text-white/80 text-sm">info@key-host.gr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Key-Host. Όλα τα δικαιώματα προστατευμένα.
            </p>
            
            {/* Admin Section */}
            <div className="mt-4 md:mt-0">
              {isAdmin ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={signOut}
                  className="text-white/60 hover:text-white hover:bg-white/10"
                >
                  Admin Logout
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAdminLogin(true)}
                  className="text-white/60 hover:text-white hover:bg-white/10"
                >
                  <Settings className="h-4 w-4 mr-1" />
                  Admin
                </Button>
              )}
            </div>
          </div>
        </div>
      </footer>

      <AdminLogin
        isOpen={showAdminLogin}
        onClose={() => setShowAdminLogin(false)}
        onLoginSuccess={() => {}}
      />
    </>
  );
};
export default Footer;