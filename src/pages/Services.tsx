import { Link } from 'react-router-dom';
import { Home, MessageSquare, DollarSign, Sparkles, Wrench, FileText, Camera } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';
const Services = () => {
  const services = [{
    icon: Home,
    title: "Δημιουργία & Βελτιστοποίηση Καταχωρήσεων",
    description: "Επαγγελματική δημιουργία καταχωρήσεων σε όλες τις μεγάλες πλατφόρμες (Airbnb, Booking κ.λπ.) με βελτιστοποίηση SEO, για μέγιστη προβολή, υψηλότερες κρατήσεις και καλύτερη κατάταξη στα αποτελέσματα αναζήτησης."
  }, {
    icon: MessageSquare,
    title: "Υποστήριξη Επισκεπτών 24/7",
    description: "Αδιάλειπτη επικοινωνία και υποστήριξη επισκεπτών σε πολλές γλώσσες."
  }, {
    icon: DollarSign,
    title: "Δυναμική Τιμολόγηση & Βελτιστοποίηση Εσόδων",
    description: "Στρατηγικές τιμολόγησης με τεχνητή νοημοσύνη για τη μέγιστη αξιοποίηση του εισοδηματικού δυναμικού του ακινήτου σας."
  }, {
    icon: Sparkles,
    title: "Επαγγελματικός Καθαρισμός & Προετοιμασία Ακινήτου",
    description: "Λεπτομερής καθαρισμός και προετοιμασία του ακινήτου μεταξύ κάθε διαμονής επισκεπτών."
  }, {
    icon: Wrench,
    title: "Συντήρηση & Επισκευές Ακινήτου",
    description: "Προληπτική συντήρηση και άμεση ανταπόκριση σε οποιοδήποτε πρόβλημα του ακινήτου."
  }, {
    icon: FileText,
    title: "Αναφορές Ιδιοκτητών & Αναλύσεις",
    description: "Αναλυτικές αναφορές και διαφανής οικονομική διαχείριση."
  }, {
    icon: Camera,
    title: "Επαγγελματική Φωτογράφιση Ακινήτου",
    description: "Υψηλής ποιότητας φωτογραφίες που αναδεικνύουν το ακίνητό σας και ενισχύουν την ελκυστικότητά του στις κρατήσεις."
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25+</div>
              <p className="text-lg text-muted-foreground">Ακίνητα υπό Διαχείριση</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-lg text-muted-foreground">Ικανοποίηση Επισκεπτών</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <p className="text-lg text-muted-foreground">Διαθέσιμη Υποστήριξη</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Οι υπηρεσίες μας</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

    </div>;
};
export default Services;