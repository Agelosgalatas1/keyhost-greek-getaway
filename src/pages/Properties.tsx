import { useState } from 'react';
import { MapPin, Users, Star, Wifi, Car, Waves, Mountain, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Link } from 'react-router-dom';

const Properties = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedGuests, setSelectedGuests] = useState('all');

  const filters = [
    { id: 'all', label: 'Όλα τα Ακίνητα' },
    { id: 'santorini', label: 'Σαντορίνη' },
    { id: 'mykonos', label: 'Μύκονος' },
    { id: 'athens', label: 'Αθήνα' },
    { id: 'crete', label: 'Κρήτη' },
    { id: 'nafplio', label: 'Ναύπλιο' }
  ];

  const guestFilters = [
    { id: 'all', label: 'Όλοι' },
    { id: '1-2', label: '1-2 άτομα' },
    { id: '3-4', label: '3-4 άτομα' },
    { id: '5-8', label: '5-8 άτομα' },
    { id: '8+', label: '8+ άτομα' }
  ];

  const properties = [
    {
      id: 1,
      title: "Σαντορίνη Sunset Villa",
      location: "Οία, Σαντορίνη",
      type: "villa",
      guests: 6,
      rating: 4.9,
      reviews: 127,
      price: "€320",
      image: "/placeholder.svg",
      highlights: ["Θέα Ηλιοβασιλέματος", "Ιδιωτική Πισίνα", "5 λεπτά από Οία"],
      amenities: ["Wifi", "Parking", "Pool"],
      category: "santorini"
    },
    {
      id: 2,
      title: "Μύκονος Beach House",
      location: "Πλατύς Γιαλός, Μύκονος",
      type: "house",
      guests: 8,
      rating: 4.8,
      reviews: 89,
      price: "€450",
      image: "/placeholder.svg",
      highlights: ["Πρόσβαση στην Παραλία", "Σύγχρονη Διακόσμηση", "BBQ Area"],
      amenities: ["Wifi", "Beach Access", "Parking"],
      category: "mykonos"
    },
    {
      id: 3,
      title: "Αθήνα Central Loft",
      location: "Κολωνάκι, Αθήνα",
      type: "apartment",
      guests: 4,
      rating: 4.7,
      reviews: 203,
      price: "€150",
      image: "/placeholder.svg",
      highlights: ["Κέντρο Αθήνας", "Σύγχρονο Design", "Κοντά σε Μετρό"],
      amenities: ["Wifi", "Metro Access", "Rooftop"],
      category: "athens"
    },
    {
      id: 4,
      title: "Κρήτη Mountain Retreat",
      location: "Χανιά, Κρήτη",
      type: "villa",
      guests: 10,
      rating: 5.0,
      reviews: 45,
      price: "€280",
      image: "/placeholder.svg",
      highlights: ["Θέα Βουνού", "Παραδοσιακή Αρχιτεκτονική", "Ιδιωτικός Κήπος"],
      amenities: ["Wifi", "Garden", "Mountain View"],
      category: "crete"
    },
    {
      id: 5,
      title: "Ναύπλιο Historic House",
      location: "Παλιά Πόλη, Ναύπλιο",
      type: "house",
      guests: 6,
      rating: 4.8,
      reviews: 156,
      price: "€200",
      image: "/placeholder.svg",
      highlights: ["Ιστορικό Κέντρο", "Παραδοσιακή Διακόσμηση", "Θέα Κάστρου"],
      amenities: ["Wifi", "Historic", "Castle View"],
      category: "nafplio"
    },
    {
      id: 6,
      title: "Σαντορίνη Cave House",
      location: "Φηρά, Σαντορίνη",
      type: "cave house",
      guests: 2,
      rating: 4.9,
      reviews: 78,
      price: "€250",
      image: "/placeholder.svg",
      highlights: ["Παραδοσιακό Cave House", "Θέα Καλντέρας", "Ρομαντικό"],
      amenities: ["Wifi", "Caldera View", "Traditional"],
      category: "santorini"
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesLocation = selectedFilter === 'all' || property.category === selectedFilter;
    const matchesGuests = selectedGuests === 'all' || 
      (selectedGuests === '1-2' && property.guests <= 2) ||
      (selectedGuests === '3-4' && property.guests >= 3 && property.guests <= 4) ||
      (selectedGuests === '5-8' && property.guests >= 5 && property.guests <= 8) ||
      (selectedGuests === '8+' && property.guests > 8);
    
    return matchesLocation && matchesGuests;
  });

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'villa': return <Home className="h-4 w-4" />;
      case 'house': return <Home className="h-4 w-4" />;
      case 'apartment': return <Home className="h-4 w-4" />;
      default: return <Home className="h-4 w-4" />;
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch(amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="h-4 w-4" />;
      case 'parking': return <Car className="h-4 w-4" />;
      case 'beach access': return <Waves className="h-4 w-4" />;
      case 'mountain view': return <Mountain className="h-4 w-4" />;
      default: return <Star className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Το Πελατολόγιό μας
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Ανακαλύψτε τα εξαιρετικά ακίνητα που διαχειριζόμαστε σε όλη την Ελλάδα
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Location Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Περιοχή</label>
              <div className="flex flex-wrap gap-2">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFilter === filter.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Guests Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Αριθμός Επισκεπτών</label>
              <div className="flex flex-wrap gap-2">
                {guestFilters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedGuests(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedGuests === filter.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Βρέθηκαν {filteredProperties.length} ακίνητα
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <Card key={property.id} className="overflow-hidden hover:shadow-elegant transition-shadow group">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {getTypeIcon(property.type)}
                      <span className="ml-1 capitalize">{property.type}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      <Users className="h-3 w-3 mr-1" />
                      {property.guests}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{property.rating}</span>
                      <span className="text-sm text-muted-foreground">({property.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{property.location}</span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {property.highlights.slice(0, 2).map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      {property.amenities.slice(0, 3).map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          {getAmenityIcon(amenity)}
                          <span className="text-xs text-muted-foreground">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary">{property.price}</span>
                      <span className="text-sm text-muted-foreground">/βράδυ</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <Home className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Δεν βρέθηκαν ακίνητα</h3>
              <p className="text-muted-foreground">Δοκιμάστε να αλλάξετε τα φίλτρα αναζήτησης</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Θέλετε το Ακίνητό σας εδώ;
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Γίνετε μέλος του αυξανόμενου δικτύου επιτυχημένων ακινήτων που διαχειριζόμαστε.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton asChild variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/submit-property">Υποβολή Ακινήτου</Link>
            </EnhancedButton>
            <EnhancedButton asChild variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Μάθετε Περισσότερα</Link>
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;