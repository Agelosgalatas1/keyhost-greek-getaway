import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Upload, X, CheckCircle, Home, Users, MapPin, Phone, Mail, MessageSquare, ExternalLink } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyLocation: string;
  propertyType: string;
  squareMeters: string;
  maxGuests: string;
  listingLink: string;
  notes: string;
}

const SubmitProperty = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    propertyLocation: '',
    propertyType: '',
    squareMeters: '',
    maxGuests: '',
    listingLink: '',
    notes: ''
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const propertyTypes = [
    'Apartment',
    'Villa',
    'House',
    'Studio',
    'Maisonette',
    'Loft',
    'Traditional House',
    'Other'
  ];

  const greekLocations = [
    'Athens',
    'Thessaloniki',
    'Mykonos',
    'Santorini',
    'Crete - Chania',
    'Crete - Heraklion',
    'Rhodes',
    'Corfu',
    'Paros',
    'Naxos',
    'Zakynthos',
    'Skiathos',
    'Other Greek Island',
    'Other Location'
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (photos.length + files.length > 5) {
      toast({
        title: "Too many photos",
        description: "You can upload maximum 5 photos",
        variant: "destructive"
      });
      return;
    }
    setPhotos(prev => [...prev, ...files]);
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data for EmailJS
      const templateParams = {
        to_email: 'info@keyhost.gr',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        property_location: formData.propertyLocation,
        property_type: formData.propertyType,
        square_meters: formData.squareMeters,
        max_guests: formData.maxGuests,
        listing_link: formData.listingLink || 'Not provided',
        notes: formData.notes || 'No additional notes',
        photos_count: photos.length,
        submission_date: new Date().toLocaleDateString()
      };

      await emailjs.send(
        'service_f6b8jha',
        'template_fr5zztm',
        templateParams,
        'DmcIKnUBTd1nEGEkl'
      );

      toast({
        title: "Property submitted successfully!",
        description: "We'll contact you within 24 hours to discuss your property."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyLocation: '',
        propertyType: '',
        squareMeters: '',
        maxGuests: '',
        listingLink: '',
        notes: ''
      });
      setPhotos([]);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Υποβολή Ακινήτου
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Πείτε μας λίγα λόγια για το ακίνητό σας και θα σας προσφέρουμε μια δωρεάν ανάλυση του εισοδηματικού του δυναμικού.
          </p>
        </div>
      </section>


      {/* Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Φόρμα Υποβολής Ακινήτου</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Users className="h-5 w-5 mr-2 text-accent" />
                    Προσωπικές Πληροφορίες
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Όνομα *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Διεύθυνση Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Τηλέφωνο *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      placeholder="+30 123 456 7890"
                    />
                  </div>
                </div>

                {/* Property Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <Home className="h-5 w-5 mr-2 text-accent" />
                    Πληροφορίες Ακινήτου
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyLocation">Τοποθεσία Ακινήτου *</Label>
                      <Select value={formData.propertyLocation} onValueChange={(value) => handleInputChange('propertyLocation', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          {greekLocations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="propertyType">Τύπος Ακινήτου *</Label>
                      <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          {propertyTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="squareMeters">Τετραγωνικά Μέτρα *</Label>
                      <Input
                        id="squareMeters"
                        type="number"
                        value={formData.squareMeters}
                        onChange={(e) => handleInputChange('squareMeters', e.target.value)}
                        required
                        placeholder="e.g. 75"
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxGuests">Μέγιστος Αριθμός Επισκεπτών *</Label>
                      <Input
                        id="maxGuests"
                        type="number"
                        value={formData.maxGuests}
                        onChange={(e) => handleInputChange('maxGuests', e.target.value)}
                        required
                        placeholder="e.g. 4"
                      />
                    </div>
                  </div>
                </div>

                {/* Photo Upload */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Φωτογραφίες Ακινήτου</h3>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop your property photos
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG up to 10MB each
                      </p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                      id="photoUpload"
                    />
                    <Label htmlFor="photoUpload" className="cursor-pointer">
                      <EnhancedButton type="button" variant="outline" className="mt-4">
                        Choose Photos
                      </EnhancedButton>
                    </Label>
                  </div>
                  
                  {photos.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(photo)}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/80"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Additional Notes */}
                <div>
                  <Label htmlFor="notes">Πρόσθετες Σημειώσεις (Προαιρετικό)</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Tell us anything else about your property, special features, or questions you have..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <EnhancedButton
                    type="submit"
                    variant="hero"
                    size="xl"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Submitting...' : 'Υποβολή ακινήτου για ανάλυση'}
                  </EnhancedButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Alternatives */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Προτιμάτε να μιλήσουμε απευθείας;</h2>
          <p className="text-muted-foreground mb-8">
            Η ομάδα μας είναι έτοιμη να συζητήσει το ακίνητό σας και να απαντήσει σε τυχόν ερωτήσεις σας.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-elegant transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Καλέστε μας</h3>
                <p className="text-muted-foreground text-sm mb-3">Mon-Fri 9AM-6PM</p>
                <p className="font-medium">‭2752 220223‬</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-elegant transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Στείλτε μας Email</h3>
                <p className="text-muted-foreground text-sm mb-3">24/7 Response</p>
                <p className="font-medium">info@keyhost.gr</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitProperty;