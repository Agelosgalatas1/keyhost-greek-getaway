import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
const Footer = () => {
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
  return <footer className="bg-primary-dark-blue text-white">
      
    </footer>;
};
export default Footer;