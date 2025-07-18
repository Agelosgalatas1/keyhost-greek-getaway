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
      title: "Βελτιστοποίηση Εσόδων",
      description: "Ρυθμίζουμε δυναμικά τις τιμές σας καθημερινά, με βάση δεδομένα σε πραγματικό χρόνο — εποχικότητα, τοπικά events, τιμές ανταγωνισμού και τη ζήτηση κρατήσεων. Αυτή η στρατηγική βασισμένη στα δεδομένα ξεπερνά σταθερές τιμές, αυξάνοντας συχνά τα έσοδα κατά 15–25%."
    },
    {
      title: "Δίκτυο Συντήρησης & Επισκευών",
      description: "Η αξιόπιστη ομάδα μας από τοπικά συνεργεία καθαρισμού, τεχνικούς και επαγγελματίες φροντίζει το ακίνητό σας να παραμένει σε άριστη κατάσταση. Από τη συντήρηση ρουτίνας μέχρι επείγουσες επισκευές — αναλαμβάνουμε τα πάντα, χωρίς να απαιτείται η παρουσία ή ο χρόνος σας."
    },
    {
      title: "Διαφάνεια & Αναφορές",
      description: "Λαμβάνετε μηνιαίες αναφορές με σαφή στοιχεία για κρατήσεις, έσοδα, έξοδα και ενημερώσεις για το ακίνητό σας. Έτσι, γνωρίζετε πάντα πώς αποδίδει η επένδυσή σας — χωρίς να χρειάζεται να παρακολουθείτε κάθε λεπτομέρεια μόνοι σας."
    },
    {
      title: "Νομική & Φορολογική Υποστήριξη",
      description: "Σας βοηθάμε να πλοηγηθείτε στο νομοθετικό και φορολογικό πλαίσιο της βραχυχρόνιας μίσθωσης στην Ελλάδα. Φροντίζουμε για τα απαραίτητα έγγραφα, τις άδειες και τις δηλώσεις προς το κράτος, ώστε να είστε πλήρως νόμιμοι — χωρίς να μπλέκεστε με τη γραφειοκρατία."
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