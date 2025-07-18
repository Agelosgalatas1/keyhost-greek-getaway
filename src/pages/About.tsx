import { Link } from 'react-router-dom';
import { Users, Heart, Award, Target, CheckCircle, TrendingUp } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Mediterranean Hospitality",
      description: "We bring the warmth and care of Greek hospitality to every guest interaction, ensuring memorable experiences."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Highest standards in property management, cleaning, and guest services. Quality is never compromised."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on maximizing your property's revenue potential through data-driven strategies and market expertise."
    }
  ];

  const whyChooseUs = [
    {
      title: "Τοπική Εξειδίκευση στην Αγορά",
      description: "Η ομάδα μας κατανοεί σε βάθος το τοπίο των βραχυχρόνιων μισθώσεων στην Ελλάδα — από τις εποχικές τάσεις τιμών μέχρι τη νομοθεσία και τις προσδοκίες των επισκεπτών. Αυτή η γνώση σας βοηθά να τιμολογείτε ανταγωνιστικά, να αποφεύγετε ακριβά λάθη και να πετυχαίνετε υψηλές πληρότητες όλο τον χρόνο."
    },
    {
      title: "Υποστήριξη Επισκεπτών 24/7",
      description: "Οι επισκέπτες σας μπορούν να επικοινωνούν μαζί μας οποιαδήποτε στιγμή — μέρα ή νύχτα — για θέματα check-in, επείγουσες βλάβες ή απλές απορίες. Δεν θα ξαναξυπνήσετε ποτέ για ένα επείγον τηλεφώνημα ούτε θα περάσετε τα βράδια σας λύνοντας προβλήματα από απόσταση."
    },
    {
      title: "Επαγγελματική Παρουσίαση",
      description: "Κάθε ακίνητο αποκτά επαγγελματική φωτογράφιση, επιμελημένη διαμόρφωση και περιγραφές που ξεχωρίζουν. Αυτή η προσοχή στη λεπτομέρεια προσελκύει ποιοτικούς επισκέπτες, δικαιολογεί υψηλότερες τιμές και φέρνει περισσότερες θετικές κριτικές."
    },
    {
      title: "Revenue Optimization",
      description: "We adjust your pricing daily based on real-time data — seasonality, local events, competitor rates, and booking demand. This data-driven approach consistently outperforms static pricing, often increasing revenue by 15-25%."
    },
    {
      title: "Maintenance & Repairs Network",
      description: "Our trusted network of local cleaners, technicians, and tradespeople keeps your property in pristine condition. From routine maintenance to emergency repairs, we handle everything without requiring your time or presence."
    },
    {
      title: "Transparent Reporting",
      description: "Receive clear monthly reports covering bookings, revenue, expenses, and property updates. You'll always know exactly how your investment is performing without having to track countless details yourself."
    },
    {
      title: "Legal & Tax Support",
      description: "We help you navigate Greece's short-term rental regulations, tax obligations, and required documentation. Stay compliant with local laws while we handle the paperwork, permits, and government reporting."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Σχετικά με Εμάς
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Η Key Host ιδρύθηκε το 2024 με σκοπό να απλοποιήσει τη βραχυχρόνια μίσθωση για ιδιοκτήτες ακινήτων. Προσφέρουμε πλήρη διαχείριση Airbnb, μετατρέποντας τα ακίνητα σε σταθερές πηγές εισοδήματος χωρίς καθόλου κόπο για τον ιδιοκτήτη. Η βάση μας είναι στο Ναύπλιο, αλλά εξυπηρετούμε ακίνητα σε όλη την Ελλάδα.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">2024</div>
                  <p className="text-muted-foreground">Founded</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">25+</div>
                  <p className="text-muted-foreground">Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Key Host?</h2>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-muted/30 rounded-lg">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our diverse team combines local knowledge, international experience, and genuine passion for hospitality to deliver exceptional results.
          </p>
          
          <div className="bg-background rounded-lg p-8 shadow-elegant">
            <Users className="h-16 w-16 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Professional Team of 15</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From property managers and guest coordinators to cleaning teams and maintenance specialists, 
              every team member is carefully selected and trained to uphold our standards of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join the growing community of property owners who have discovered the freedom of truly passive income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton asChild variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/submit-property">Submit Your Property</Link>
            </EnhancedButton>
            <EnhancedButton asChild variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;