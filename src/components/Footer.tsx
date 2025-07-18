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
      <footer className="bg-primary text-black">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black">Key-Host</h3>
              <p className="text-black/80">
                Επαγγελματική διαχείριση βραχυχρόνιων μισθώσεων στην Ελλάδα
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
                <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
                <MessageCircle className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-black">Γρήγορες Συνδέσεις</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="text-black/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-black">Επικοινωνία</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-black/80 text-sm">Ναύπλιο, Ελλάδα</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-black/80 text-sm">‭2752 220223‬</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-black/80 text-sm">info@key-host.gr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-black/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-black/60 text-sm">
              © 2025 Key-Host. Όλα τα δικαιώματα προστατευμένα.
            </p>
            
            {/* Admin Section */}
            <div className="mt-4 md:mt-0">
              {isAdmin ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={signOut}
                  className="text-black/60 hover:text-black hover:bg-black/10"
                >
                  Admin Logout
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAdminLogin(true)}
                  className="text-black/60 hover:text-black hover:bg-black/10"
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