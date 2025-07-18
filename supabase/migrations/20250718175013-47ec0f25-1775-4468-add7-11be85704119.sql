-- Create properties table
CREATE TABLE public.properties (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  bedrooms INTEGER NOT NULL DEFAULT 1,
  bathrooms INTEGER NOT NULL DEFAULT 1,
  description TEXT,
  guests INTEGER NOT NULL DEFAULT 2,
  price DECIMAL(10,2),
  images TEXT[],
  amenities TEXT[],
  highlights TEXT[],
  property_type TEXT DEFAULT 'house',
  category TEXT,
  rating DECIMAL(2,1) DEFAULT 0.0,
  reviews INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create admin users table 
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on properties
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;

-- Enable RLS on admin_users
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Properties policies - public read, admin write
CREATE POLICY "Anyone can view active properties" 
ON public.properties 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Admins can manage properties" 
ON public.properties 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid() AND is_active = true
  )
);

-- Admin users policies
CREATE POLICY "Admins can view admin users" 
ON public.admin_users 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid() AND is_active = true
  )
);

-- Storage bucket for property images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('property-images', 'property-images', true);

-- Storage policies for property images
CREATE POLICY "Anyone can view property images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'property-images');

CREATE POLICY "Admins can upload property images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'property-images' AND 
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid() AND is_active = true
  )
);

CREATE POLICY "Admins can update property images" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'property-images' AND 
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid() AND is_active = true
  )
);

CREATE POLICY "Admins can delete property images" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'property-images' AND 
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid() AND is_active = true
  )
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_properties_updated_at
  BEFORE UPDATE ON public.properties
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data into properties table
INSERT INTO public.properties (title, location, bedrooms, bathrooms, description, guests, price, amenities, highlights, property_type, category, rating, reviews) VALUES
('Σαντορίνη Sunset Villa', 'Οία, Σαντορίνη', 3, 2, 'Εκπληκτική βίλα με θέα στο ηλιοβασίλεμα', 6, 320.00, ARRAY['Wifi', 'Parking', 'Pool'], ARRAY['Θέα Ηλιοβασιλέματος', 'Ιδιωτική Πισίνα', '5 λεπτά από Οία'], 'villa', 'santorini', 4.9, 127),
('Μύκονος Beach House', 'Πλατύς Γιαλός, Μύκονος', 4, 3, 'Σύγχρονο σπίτι δίπλα στη θάλασσα', 8, 450.00, ARRAY['Wifi', 'Beach Access', 'Parking'], ARRAY['Πρόσβαση στην Παραλία', 'Σύγχρονη Διακόσμηση', 'BBQ Area'], 'house', 'mykonos', 4.8, 89),
('Αθήνα Central Loft', 'Κολωνάκι, Αθήνα', 2, 1, 'Μοντέρνο loft στο κέντρο της Αθήνας', 4, 150.00, ARRAY['Wifi', 'Metro Access', 'Rooftop'], ARRAY['Κέντρο Αθήνας', 'Σύγχρονο Design', 'Κοντά σε Μετρό'], 'apartment', 'athens', 4.7, 203),
('Κρήτη Mountain Retreat', 'Χανιά, Κρήτη', 5, 4, 'Παραδοσιακό σπίτι με θέα βουνό', 10, 280.00, ARRAY['Wifi', 'Garden', 'Mountain View'], ARRAY['Θέα Βουνού', 'Παραδοσιακή Αρχιτεκτονική', 'Ιδιωτικός Κήπος'], 'villa', 'crete', 5.0, 45),
('Ναύπλιο Historic House', 'Παλιά Πόλη, Ναύπλιο', 3, 2, 'Ιστορικό σπίτι στην παλιά πόλη', 6, 200.00, ARRAY['Wifi', 'Historic', 'Castle View'], ARRAY['Ιστορικό Κέντρο', 'Παραδοσιακή Διακόσμηση', 'Θέα Κάστρου'], 'house', 'nafplio', 4.8, 156),
('Σαντορίνη Cave House', 'Φηρά, Σαντορίνη', 1, 1, 'Παραδοσιακό σπηλαίικο σπίτι', 2, 250.00, ARRAY['Wifi', 'Caldera View', 'Traditional'], ARRAY['Παραδοσιακό Cave House', 'Θέα Καλντέρας', 'Ρομαντικό'], 'cave house', 'santorini', 4.9, 78);