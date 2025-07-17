import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-villa.jpg";
import {
  Home,
  Users,
  Sparkles,
  TrendingUp,
  Camera,
  Share2,
  Palette,
  Calculator,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Σας ευχαριστούμε!",
      description: "Το μήνυμά σας στάλθηκε επιτυχώς. Θα επικοινωνήσουμε σύντομα μαζί σας.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Home,
      title: "Διαχείριση Καταλυμάτων",
      description: "Καταχώρηση, κρατήσεις, επικοινωνία και πληρότητα.",
    },
    {
      icon: Users,
      title: "Υποδοχή Επισκεπτών (Hosting)",
      description: "Καλωσόρισμα και 24/7 εξυπηρέτηση.",
    },
    {
      icon: Sparkles,
      title: "Καθαρισμός",
      description: "Πριν/μετά από κάθε διαμονή με ποιοτικά υλικά.",
    },
    {
      icon: TrendingUp,
      title: "Προώθηση Καταλύματος",
      description: "Airbnb, Booking, SEO, δυνατές φωτογραφίες.",
    },
    {
      icon: Camera,
      title: "Φωτογράφηση",
      description: "Επαγγελματικές εικόνες για ελκυστικές καταχωρήσεις.",
    },
    {
      icon: Share2,
      title: "Διαχείριση Social Media",
      description: "Περιεχόμενο, captions, παρουσία σε IG/Facebook.",
    },
    {
      icon: Palette,
      title: "Προτάσεις Design / Ανακαίνισης",
      description: "Αναβάθμιση αισθητικής, αγορά εξοπλισμού.",
    },
    {
      icon: Calculator,
      title: "Διαχείριση Λογιστικών",
      description: "Φορολογική συμμόρφωση, ακρίβεια και οικονομία χρόνου.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Το ακίνητό σου, η ευθύνη μας
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Διαχείριση Airbnb, χωρίς άγχος και χωρίς κόπο
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 text-lg"
          >
            Ζήτησε προσφορά
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Οι Υπηρεσίες μας
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Η Ιστορία μας
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Η Key-Host γεννήθηκε στον Ναύπλιο με στόχο να φέρει επαγγελματισμό και 
              διαφάνεια στον κόσμο των βραχυχρόνιων μισθώσεων. Ξεκινώντας από ένα διαμέρισμα, 
              μεγαλώσαμε με βάση την εμπιστοσύνη, την προσωπική εξυπηρέτηση και την αγάπη 
              για την φιλοξενία. Σήμερα διαχειριζόμαστε δεκάδες ακίνητα με σκοπό να 
              προσφέρουμε στους ιδιοκτήτες μας σταθερό εισόδημα — χωρίς άγχος.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Πελατολόγιο
          </h2>
          <p className="text-xl text-muted-foreground">
            Εκατοντάδες διανυκτερεύσεις κάθε μήνα. Ικανοποιημένοι ιδιοκτήτες σε 
            Ναύπλιο, Αθήνα και δημοφιλείς προορισμούς.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
            Επικοινωνία
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Ονοματεπώνυμο</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Τηλέφωνο</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Μήνυμα</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent-hover">
                    Αποστολή
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Διεύθυνση</h3>
                  <p className="text-muted-foreground">Εγίου 43, Ναύπλιο</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Τηλέφωνο</h3>
                  <p className="text-muted-foreground">+30 123 456 7890</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">info@key-host.gr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
