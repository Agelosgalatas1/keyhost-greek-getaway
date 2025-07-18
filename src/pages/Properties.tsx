import { useState, useEffect } from 'react';
import { MapPin, Users, Star, Wifi, Car, Waves, Mountain, Home, Plus, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { PropertyForm } from '@/components/PropertyForm';
import { useToast } from '@/hooks/use-toast';

const Properties = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedGuests, setSelectedGuests] = useState('all');
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const { isAdmin } = useAuth();
  const { toast } = useToast();

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

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load properties",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProperty = async (id: string) => {
    if (!confirm('Are you sure you want to delete this property?')) return;

    try {
      const { error } = await supabase
        .from('properties')
        .update({ is_active: false })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Property Deleted",
        description: "Property has been successfully deleted",
      });
      
      fetchProperties();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete property",
        variant: "destructive",
      });
    }
  };

  const handleEditProperty = (property: any) => {
    setEditingProperty(property);
    setShowPropertyForm(true);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Το Πελατολόγιό μας
          </h1>
          <p className="text-xl md:text-2xl text-black/90 max-w-3xl mx-auto">
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
          {/* Admin Controls */}
          {isAdmin && (
            <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-primary">Admin Panel</h3>
                <Button onClick={() => setShowPropertyForm(true)} className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add New Property
                </Button>
              </div>
            </div>
          )}

          <div className="mb-8 flex items-center justify-between">
            <p className="text-muted-foreground">
              {loading ? 'Loading...' : `Βρέθηκαν ${filteredProperties.length} ακίνητα`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <Card key={property.id} className="overflow-hidden hover:shadow-elegant transition-shadow group">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={property.images?.[0] || "/placeholder.svg"} 
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {getTypeIcon(property.property_type)}
                      <span className="ml-1 capitalize">{property.property_type}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      <Users className="h-3 w-3 mr-1" />
                      {property.guests}
                    </Badge>
                  </div>
                  
                  {/* Admin Controls */}
                  {isAdmin && (
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleEditProperty(property)}
                        className="bg-background/90 text-foreground hover:bg-background"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteProperty(property.id)}
                        className="bg-destructive/90 hover:bg-destructive"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{property.rating || 0}</span>
                      <span className="text-sm text-muted-foreground">({property.reviews || 0})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{property.location}</span>
                  </div>

                  <div className="space-y-3 mb-4">
                    {property.highlights && property.highlights.length > 0 && (
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
                    )}

                    {property.amenities && property.amenities.length > 0 && (
                      <div className="flex items-center space-x-2">
                        {property.amenities.slice(0, 3).map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-1">
                            {getAmenityIcon(amenity)}
                            <span className="text-xs text-muted-foreground">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary">
                        {property.price ? `€${property.price}` : 'Price on request'}
                      </span>
                      {property.price && (
                        <span className="text-sm text-muted-foreground">/βράδυ</span>
                      )}
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
            <EnhancedButton asChild variant="outline" size="xl" className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
              <Link to="/submit-property">Υποβολή Ακινήτου</Link>
            </EnhancedButton>
            <EnhancedButton asChild variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Μάθετε Περισσότερα</Link>
            </EnhancedButton>
          </div>
        </div>
      </section>

      {/* Property Form Modal */}
      <PropertyForm
        isOpen={showPropertyForm}
        onClose={() => {
          setShowPropertyForm(false);
          setEditingProperty(null);
        }}
        onSuccess={() => {
          fetchProperties();
          setEditingProperty(null);
        }}
        property={editingProperty}
      />
    </div>
  );
};

export default Properties;