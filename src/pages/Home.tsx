import { Link } from 'react-router-dom';
import { Star, Users, MapPin, TrendingUp, Shield, Clock, CheckCircle, Sparkles, Camera } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-villa.jpg';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Διαχείριση Επισκεπτών",
      description: "24/7 εξυπηρέτηση επισκεπτών με πολυγλωσσική υποστήριξη για εξαιρετικές διαμονές και 5αστερες κριτικές."
    },
    {
      icon: Shield,
      title: "Επαγγελματικός Καθαρισμός",
      description: "Πιστοποιημένες ομάδες καθαρισμού που διατηρούν τα υψηλότερα πρότυπα υγιεινής με ελέγχους μετά από κάθε διαμονή."
    },
    {
      icon: TrendingUp,
      title: "Βελτιστοποίηση Εσόδων",
      description: "Αλγόριθμοι δυναμικής τιμολόγησης και ανάλυση αγοράς για μεγιστοποίηση των κερδών του ακινήτου σας."
    }
  ];

  const stats = [
    { number: "150+", label: "Ακίνητα υπό Διαχείριση" },
    { number: "98%", label: "Ικανοποίηση Επισκεπτών" },
    { number: "8", label: "Ελληνικά Νησιά" },
    { number: "24/7", label: "Διαθέσιμη Υποστήριξη" }
  ];

  const testimonials = [
    {
      name: "Μαρία Κώστα",
      location: "Ιδιοκτήτρια Βίλας Σαντορίνης",
      rating: 5,
      text: "Η Key-Host μετέτρεψε το ακίνητό μου σε κερδοφόρα επένδυση. Η προσοχή στη λεπτομέρεια και η εξυπηρέτηση είναι εξαιρετική."
    },
    {
      name: "Δημήτρης Παπαδόπουλος", 
      location: "Ιδιοκτήτης Διαμερίσματος Αθήνας",
      rating: 5,
      text: "Επαγγελματικοί, αξιόπιστοι και διαφανείς. Κερδίζω 40% περισσότερα από ό,τι όταν το διαχειριζόμουν μόνος μου, χωρίς κανένα πρόβλημα."
    },
    {
      name: "Έλενα Μιχάλη",
      location: "Ιδιοκτήτρια Ακινήτου Μυκόνου", 
      rating: 5,
      text: "Η καλύτερη απόφαση που πήρα ήταν να εμπιστευτώ την Key-Host. Χειρίζονται τα πάντα ενώ εγώ απολαμβάνω παθητικό εισόδημα."
    }
  ];

  const platforms = [
    { 
      name: "Airbnb", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      alt: "Airbnb Logo"
    },
    { 
      name: "Booking.com", 
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Booking-Logo.png",
      alt: "Booking.com Logo"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Το ακίνητό σου,
            <span className="block text-accent">η ευθύνη μας</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Αναλαμβάνουμε τα πάντα από την επικοινωνία με τους επισκέπτες μέχρι τον επαγγελματικό καθαρισμό. 
            Εσείς απλά συλλέγετε τα κέρδη.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton asChild size="xl" className="bg-accent hover:bg-accent/90 text-white border-0">
              <Link to="/submit-property">Ζήτησε Προσφορά</Link>
            </EnhancedButton>
            <EnhancedButton asChild variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary-dark-blue">
              <Link to="/services">Μάθε Περισσότερα</Link>
            </EnhancedButton>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Η Key-Host Χειρίζεται τα Πάντα — Εσείς Κερδίζετε Παθητικά
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Από τη βελτιστοποίηση της καταχώρησης του ακινήτου μέχρι την αναχώρηση των επισκεπτών, η ολοκληρωμένη υπηρεσία διαχείρισής μας 
            εξασφαλίζει μέγιστη πληρότητα και έσοδα διατηρώντας τα υψηλότερα πρότυπα φιλοξενίας.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Οι Βασικές μας Υπηρεσίες</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Τρεις πυλώνες επαγγελματικής διαχείρισης βραχυχρόνιων μισθώσεων που μεγιστοποιούν τις αποδόσεις σας
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Τι Λένε οι Ιδιοκτήτες Ακινήτων</h2>
            <p className="text-xl text-muted-foreground">
              Γίνετε μέλος των εκατοντάδων ικανοποιημένων ιδιοκτητών ακινήτων σε όλη την Ελλάδα
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Logos */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-muted-foreground">
            Καταχωρούμε το Ακίνητό σας σε Όλες τις Μεγάλες Πλατφόρμες
          </h2>
          <div className="flex justify-center items-center space-x-12 md:space-x-16">
            {platforms.map((platform, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <img 
                  src={platform.logo} 
                  alt={platform.alt}
                  className="h-8 md:h-10 w-auto object-contain"
                />
                <span className="text-sm font-medium text-muted-foreground">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Πακέτα Υπηρεσιών</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Επιλέξτε το πακέτο που ταιριάζει καλύτερα στις ανάγκες του ακινήτου σας
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Classic Package */}
            <Card className="relative overflow-hidden hover:shadow-elegant transition-shadow border-2">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Classic</h3>
                  <div className="text-4xl font-bold text-accent mb-2">20%</div>
                  <p className="text-muted-foreground">από τα μηνιαία έσοδα</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Καταχώρηση ακινήτου σε Airbnb και Booking.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Προώθηση ακινήτου στην κοινότητα της Key-Host για περισσότερες κρατήσεις</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Δυναμική τιμολόγηση</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Hosting / Υποδοχή επισκεπτών</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Επαγγελματικός καθαρισμός</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Υποστήριξη 24/7</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Διαχείριση λογιστικών</span>
                  </div>
                </div>
                
                <EnhancedButton asChild className="w-full">
                  <Link to="/submit-property">Επιλογή Classic</Link>
                </EnhancedButton>
              </CardContent>
            </Card>

            {/* Custom Package */}
            <Card className="relative overflow-hidden hover:shadow-elegant transition-shadow border-2 border-accent">
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent"></div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Custom</h3>
                  <div className="text-4xl font-bold text-accent mb-2">Προσαρμοσμένο</div>
                  <p className="text-muted-foreground">ανάλογα με τις ανάγκες σας</p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="text-center">
                    <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Επικοινωνήστε μαζί μας για εξειδικευμένη προσφορά ανάλογα με τις ανάγκες σας. 
                      Δημιουργούμε προσαρμοσμένα πακέτα υπηρεσιών που ταιριάζουν ακριβώς στο ακίνητό σας.
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-center text-sm text-muted-foreground">
                    <p>✓ Εξατομικευμένες υπηρεσίες</p>
                    <p>✓ Ευέλικτη τιμολόγηση</p>
                    <p>✓ Προσωπική συμβουλευτική</p>
                    <p>✓ Προτεραιότητα στην εξυπηρέτηση</p>
                  </div>
                </div>
                
                <EnhancedButton asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  <Link to="/contact">Επικοινωνία για Custom</Link>
                </EnhancedButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Έτοιμοι να Ξεκινήσετε να Κερδίζετε Παθητικό Εισόδημα;
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Γίνετε μέλος της αυξανόμενης κοινότητας ιδιοκτητών ακινήτων που ανακάλυψαν την ελευθερία του πραγματικά παθητικού εισοδήματος.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton asChild variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/submit-property">Υποβολή Ακινήτου</Link>
            </EnhancedButton>
            <EnhancedButton asChild variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Επικοινωνία</Link>
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;