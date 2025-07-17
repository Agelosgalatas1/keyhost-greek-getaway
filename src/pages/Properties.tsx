import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { ExternalLink, Phone, Mail } from "lucide-react";

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const properties = [
    {
      id: 1,
      title: "Παραδοσιακό Σπίτι στην Παλιά Πόλη",
      location: "Ναύπλιο",
      bedrooms: 2,
      guests: 4,
      description: "Αυθεντικό σπίτι με θέα στο κάστρο, στην καρδιά της παλιάς πόλης.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      airbnbLink: "https://www.airbnb.com/rooms/sample1",
      bookingLink: "https://www.booking.com/hotel/sample1"
    },
    {
      id: 2,
      title: "Σύγχρονο Διαμέρισμα με Θέα",
      location: "Ναύπλιο",
      bedrooms: 1,
      guests: 2,
      description: "Μοντέρνο διαμέρισμα με πανοραμική θέα στον Αργολικό κόλπο.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      airbnbLink: "https://www.airbnb.com/rooms/sample2",
      bookingLink: "https://www.booking.com/hotel/sample2"
    },
    {
      id: 3,
      title: "Βίλα κοντά στη Θάλασσα",
      location: "Ναύπλιο",
      bedrooms: 3,
      guests: 6,
      description: "Πολυτελής βίλα με πισίνα, 5 λεπτά από την παραλία.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      airbnbLink: "https://www.airbnb.com/rooms/sample3",
      bookingLink: "https://www.booking.com/hotel/sample3"
    },
    {
      id: 4,
      title: "Στούντιο στο Κέντρο",
      location: "Ναύπλιο",
      bedrooms: 0,
      guests: 2,
      description: "Άνετο στούντιο στο κέντρο, κοντά σε εστιατόρια και καφέ.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      airbnbLink: "https://www.airbnb.com/rooms/sample4",
      bookingLink: "https://www.booking.com/hotel/sample4"
    },
    {
      id: 5,
      title: "Μεζονέτα με Κήπο",
      location: "Ναύπλιο",
      bedrooms: 2,
      guests: 5,
      description: "Ευρύχωρη μεζονέτα με ιδιωτικό κήπο και BBQ.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      airbnbLink: "https://www.airbnb.com/rooms/sample5",
      bookingLink: "https://www.booking.com/hotel/sample5"
    },
    {
      id: 6,
      title: "Πολυτελές Διαμέρισμα στο Κέντρο",
      location: "Ναύπλιο",
      bedrooms: 2,
      guests: 4,
      description: "Πλήρως εξοπλισμένο διαμέρισμα με σύγχρονες ανέσεις.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      airbnbLink: "https://www.airbnb.com/rooms/sample6",
      bookingLink: "https://www.booking.com/hotel/sample6"
    },
    {
      id: 7,
      title: "Οικογενειακό Σπίτι με Αυλή",
      location: "Ναύπλιο",
      bedrooms: 3,
      guests: 8,
      description: "Ιδανικό για μεγάλες οικογένειες με μεγάλη αυλή και παιδική χαρά.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      airbnbLink: "https://www.airbnb.com/rooms/sample7",
      bookingLink: "https://www.booking.com/hotel/sample7"
    },
    {
      id: 8,
      title: "Ρομαντικό Καταφύγιο για Ζευγάρια",
      location: "Ναύπλιο",
      bedrooms: 1,
      guests: 2,
      description: "Άνετο και ρομαντικό χώρος με θέα στη θάλασσα.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      airbnbLink: "https://www.airbnb.com/rooms/sample8",
      bookingLink: "https://www.booking.com/hotel/sample8"
    },
    {
      id: 9,
      title: "Αρχοντικό με Ιστορία",
      location: "Ναύπλιο",
      bedrooms: 4,
      guests: 10,
      description: "Παραδοσιακό αρχοντικό με αυθεντική διακόσμηση και σύγχρονες ανέσεις.",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      airbnbLink: "https://www.airbnb.com/rooms/sample9",
      bookingLink: "https://www.booking.com/hotel/sample9"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Το Πελατολόγιό μας
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ανακαλύψτε την ποικιλία των ακινήτων που διαχειριζόμαστε στο Ναύπλιο. 
            Κάθε κατάλυμα προσφέρει μοναδικές εμπειρίες και άνεση στους επισκέπτες μας.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card 
                key={property.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProperty(property)}
              >
                <div className="aspect-video bg-muted">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {property.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {property.location} • {property.bedrooms > 0 ? `${property.bedrooms} υπνοδωμάτια` : 'Στούντιο'} • {property.guests} επισκέπτες
                  </p>
                  <p className="text-sm">
                    {property.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Modal */}
      <Dialog open={!!selectedProperty} onOpenChange={(open) => !open && setSelectedProperty(null)}>
        <DialogContent className="sm:max-w-[500px]">
          {selectedProperty && (
            <>
              <DialogHeader>
                <DialogTitle className="text-primary">
                  {selectedProperty.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={selectedProperty.image}
                    alt={selectedProperty.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <p className="text-muted-foreground mb-2">
                    {selectedProperty.location} • {selectedProperty.bedrooms > 0 ? `${selectedProperty.bedrooms} υπνοδωμάτια` : 'Στούντιο'} • {selectedProperty.guests} επισκέπτες
                  </p>
                  <p className="text-sm">
                    {selectedProperty.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Κάντε κράτηση:</h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => window.open(selectedProperty.airbnbLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Airbnb
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => window.open(selectedProperty.bookingLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Booking.com
                    </Button>
                  </div>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <div className="text-center space-y-3">
                    <h4 className="font-semibold text-primary">
                      Κάλεσε εδώ και πρόλαβε χαμηλές τιμές!
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-accent" />
                        <a 
                          href="tel:2752220223" 
                          className="text-accent hover:underline font-medium"
                        >
                          2752 220223
                        </a>
                      </div>
                      
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-accent" />
                        <a 
                          href="mailto:info@key-host.gr" 
                          className="text-accent hover:underline"
                        >
                          info@key-host.gr
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Properties;