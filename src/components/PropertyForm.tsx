import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Upload, X, Plus } from 'lucide-react';

interface PropertyFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  property?: any;
}

interface PropertyForm {
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  guests: number;
  price: number;
  property_type: string;
  category: string;
}

export const PropertyForm = ({ isOpen, onClose, onSuccess, property }: PropertyFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [amenities, setAmenities] = useState<string[]>(property?.amenities || []);
  const [highlights, setHighlights] = useState<string[]>(property?.highlights || []);
  const [newAmenity, setNewAmenity] = useState('');
  const [newHighlight, setNewHighlight] = useState('');
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<PropertyForm>({
    defaultValues: property ? {
      title: property.title,
      location: property.location,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      description: property.description,
      guests: property.guests,
      price: property.price,
      property_type: property.property_type,
      category: property.category,
    } : undefined
  });

  const uploadImages = async (files: File[]): Promise<string[]> => {
    const uploadPromises = files.map(async (file) => {
      const fileName = `${Date.now()}-${file.name}`;
      const { data, error } = await supabase.storage
        .from('property-images')
        .upload(fileName, file);

      if (error) throw error;
      
      const { data: { publicUrl } } = supabase.storage
        .from('property-images')
        .getPublicUrl(fileName);

      return publicUrl;
    });

    return Promise.all(uploadPromises);
  };

  const onSubmit = async (data: PropertyForm) => {
    setIsLoading(true);
    try {
      let imageUrls: string[] = property?.images || [];
      
      if (images.length > 0) {
        imageUrls = await uploadImages(images);
      }

      const propertyData = {
        ...data,
        images: imageUrls,
        amenities,
        highlights,
      };

      // Get admin credentials from localStorage
      const adminEmail = localStorage.getItem('adminEmail');
      const adminPassword = localStorage.getItem('adminPassword');

      if (!adminEmail || !adminPassword) {
        throw new Error('Admin credentials not found. Please log in again.');
      }

      if (property) {
        // Update property via edge function
        const { data: result, error } = await supabase.functions.invoke('update-property', {
          body: {
            adminEmail,
            adminPassword,
            propertyId: property.id,
            propertyData
          }
        });

        if (error) throw error;
        if (result.error) throw new Error(result.error);

        toast({
          title: "Property Updated",
          description: "Property has been successfully updated",
        });
      } else {
        // Add property via edge function
        const { data: result, error } = await supabase.functions.invoke('add-property', {
          body: {
            adminEmail,
            adminPassword,
            propertyData
          }
        });

        if (error) throw error;
        if (result.error) throw new Error(result.error);

        toast({
          title: "Property Added",
          description: "New property has been successfully added",
        });
      }
      
      reset();
      setImages([]);
      setAmenities([]);
      setHighlights([]);
      onSuccess();
      onClose();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save property",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).slice(0, 10);
      setImages(selectedFiles);
    }
  };

  const addAmenity = () => {
    if (newAmenity.trim() && !amenities.includes(newAmenity.trim())) {
      setAmenities([...amenities, newAmenity.trim()]);
      setNewAmenity('');
    }
  };

  const removeAmenity = (index: number) => {
    setAmenities(amenities.filter((_, i) => i !== index));
  };

  const addHighlight = () => {
    if (newHighlight.trim() && !highlights.includes(newHighlight.trim())) {
      setHighlights([...highlights, newHighlight.trim()]);
      setNewHighlight('');
    }
  };

  const removeHighlight = (index: number) => {
    setHighlights(highlights.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {property ? 'Edit Property' : 'Add New Property'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Property Title *</Label>
              <Input
                id="title"
                {...register('title', { required: 'Title is required' })}
                placeholder="Beautiful Villa in Santorini"
              />
              {errors.title && (
                <p className="text-sm text-destructive">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                {...register('location', { required: 'Location is required' })}
                placeholder="Oia, Santorini"
              />
              {errors.location && (
                <p className="text-sm text-destructive">{errors.location.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms *</Label>
              <Input
                id="bedrooms"
                type="number"
                min="1"
                {...register('bedrooms', { 
                  required: 'Bedrooms is required',
                  valueAsNumber: true,
                  min: 1
                })}
              />
              {errors.bedrooms && (
                <p className="text-sm text-destructive">{errors.bedrooms.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms *</Label>
              <Input
                id="bathrooms"
                type="number"
                min="1"
                {...register('bathrooms', { 
                  required: 'Bathrooms is required',
                  valueAsNumber: true,
                  min: 1
                })}
              />
              {errors.bathrooms && (
                <p className="text-sm text-destructive">{errors.bathrooms.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Guests *</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                {...register('guests', { 
                  required: 'Number of guests is required',
                  valueAsNumber: true,
                  min: 1
                })}
              />
              {errors.guests && (
                <p className="text-sm text-destructive">{errors.guests.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price (€/night)</Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                {...register('price', { 
                  valueAsNumber: true,
                  min: 0
                })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="property_type">Property Type</Label>
              <Select onValueChange={(value) => setValue('property_type', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="cave house">Cave House</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={(value) => setValue('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="santorini">Santorini</SelectItem>
                  <SelectItem value="mykonos">Mykonos</SelectItem>
                  <SelectItem value="athens">Athens</SelectItem>
                  <SelectItem value="crete">Crete</SelectItem>
                  <SelectItem value="nafplio">Nafplio</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="Describe the property..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>Images (up to 10)</Label>
            <div className="flex items-center justify-center w-full">
              <label htmlFor="images" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PNG, JPG or JPEG (MAX. 10 files)</p>
                </div>
                <input 
                  id="images" 
                  type="file" 
                  className="hidden" 
                  multiple 
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            {images.length > 0 && (
              <p className="text-sm text-muted-foreground">{images.length} files selected</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Amenities</Label>
            <div className="flex gap-2">
              <Input
                value={newAmenity}
                onChange={(e) => setNewAmenity(e.target.value)}
                placeholder="Add amenity..."
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addAmenity())}
              />
              <Button type="button" onClick={addAmenity} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-1 bg-muted px-2 py-1 rounded">
                  <span className="text-sm">{amenity}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeAmenity(index)}
                    className="h-auto p-0 w-4 h-4"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Highlights</Label>
            <div className="flex gap-2">
              <Input
                value={newHighlight}
                onChange={(e) => setNewHighlight(e.target.value)}
                placeholder="Add highlight..."
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addHighlight())}
              />
              <Button type="button" onClick={addHighlight} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-1 bg-muted px-2 py-1 rounded">
                  <span className="text-sm">{highlight}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeHighlight(index)}
                    className="h-auto p-0 w-4 h-4"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? 'Saving...' : property ? 'Update Property' : 'Add Property'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};