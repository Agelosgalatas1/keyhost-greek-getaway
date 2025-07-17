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
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        {/* Logo */}
        <div className="absolute top-8 left-8 z-20">
          <img 
            src="/lovable-uploads/4fd096f0-e2d9-4c14-b82c-bdd90b12c71d.png" 
            alt="Key-Host Logo" 
            className="h-16 w-auto"
          />
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
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg"
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
            Πελατολόγιο
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Εκατοντάδες διανυκτερεύσεις κάθε μήνα. Ικανοποιημένοι ιδιοκτήτες στο Ναύπλιο.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Παραδοσιακό σπίτι Ναύπλιο"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Παραδοσιακό Σπίτι στην Παλιά Πόλη
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Ναύπλιο • 2 υπνοδωμάτια • 4 επισκέπτες
                </p>
                <p className="text-sm">
                  Αυθεντικό σπίτι με θέα στο κάστρο, στην καρδιά της παλιάς πόλης.
                </p>
              </CardContent>
            </Card>

            {/* Property 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Διαμέρισμα με θέα"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Σύγχρονο Διαμέρισμα με Θέα
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Ναύπλιο • 1 υπνοδωμάτιο • 2 επισκέπτες
                </p>
                <p className="text-sm">
                  Μοντέρνο διαμέρισμα με πανοραμική θέα στον Αργολικό κόλπο.
                </p>
              </CardContent>
            </Card>

            {/* Property 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Βίλα κοντά στη θάλασσα"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Βίλα κοντά στη Θάλασσα
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Ναύπλιο • 3 υπνοδωμάτια • 6 επισκέπτες
                </p>
                <p className="text-sm">
                  Πολυτελής βίλα με πισίνα, 5 λεπτά από την παραλία.
                </p>
              </CardContent>
            </Card>

            {/* Property 4 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Στούντιο στο κέντρο"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Στούντιο στο Κέντρο
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Ναύπλιο • Στούντιο • 2 επισκέπτες
                </p>
                <p className="text-sm">
                  Άνετο στούντιο στο κέντρο, κοντά σε εστιατόρια και καφέ.
                </p>
              </CardContent>
            </Card>

            {/* Property 5 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Μεζονέτα με κήπο"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Μεζονέτα με Κήπο
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Ναύπλιο • 2 υπνοδωμάτια • 5 επισκέπτες
                </p>
                <p className="text-sm">
                  Ευρύχωρη μεζονέτα με ιδιωτικό κήπο και BBQ.
                </p>
              </CardContent>
            </Card>
          </div>
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
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
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
                  <p className="text-muted-foreground">2752 220223</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">info@key-host.gr</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-primary mb-4">Ακολουθήστε μας</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/keyhost.gr?igsh=MXZnNDdwYjZpc2I4Nw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/172Qy7dNAJ/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
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
