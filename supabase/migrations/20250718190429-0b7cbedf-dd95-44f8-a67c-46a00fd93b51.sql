-- Fix the infinite recursion issue in admin_users RLS policy
-- Drop the existing problematic policy
DROP POLICY IF EXISTS "Admins can view admin users" ON public.admin_users;

-- Create a security definer function to check admin status without recursion
CREATE OR REPLACE FUNCTION public.is_admin(user_uuid uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.admin_users 
    WHERE user_id = user_uuid 
    AND is_active = true
  )
$$;

-- Create new RLS policy using the security definer function
CREATE POLICY "Admins can view admin users" ON public.admin_users
  FOR SELECT
  TO authenticated
  USING (public.is_admin(auth.uid()));

-- Update the properties policy to use the same function
DROP POLICY IF EXISTS "Admins can manage properties" ON public.properties;

CREATE POLICY "Admins can manage properties" ON public.properties
  FOR ALL
  TO authenticated
  USING (public.is_admin(auth.uid()))
  WITH CHECK (public.is_admin(auth.uid()));

-- Insert some sample properties for demonstration
INSERT INTO public.properties (
  title, 
  location, 
  property_type, 
  category,
  bedrooms, 
  bathrooms, 
  guests, 
  price, 
  description,
  amenities,
  highlights,
  images,
  rating,
  reviews
) VALUES 
(
  'Luxury Villa with Sea View',
  'Santorini, Greece',
  'villa',
  'santorini',
  3,
  2,
  6,
  250.00,
  'Beautiful luxury villa with stunning sea views and modern amenities.',
  ARRAY['WiFi', 'Air Conditioning', 'Pool', 'Sea View', 'Parking'],
  ARRAY['Sea View', 'Private Pool', 'Modern Design'],
  ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
  4.8,
  24
),
(
  'Cozy Apartment in Old Town',
  'Nafplio, Greece', 
  'apartment',
  'nafplio',
  2,
  1,
  4,
  120.00,
  'Charming apartment in the heart of Nafplio''s historic old town.',
  ARRAY['WiFi', 'Air Conditioning', 'Balcony', 'Historic Location'],
  ARRAY['Old Town Location', 'Traditional Architecture', 'Walking Distance to Everything'],
  ARRAY['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
  4.6,
  18
),
(
  'Modern Beach House',
  'Mykonos, Greece',
  'house',
  'mykonos', 
  4,
  3,
  8,
  400.00,
  'Contemporary beach house with direct beach access and panoramic views.',
  ARRAY['WiFi', 'Beach Access', 'Air Conditioning', 'Outdoor Kitchen', 'Parking'],
  ARRAY['Beach Access', 'Panoramic Views', 'Modern Amenities'],
  ARRAY['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
  4.9,
  32
),
(
  'Traditional Stone House',
  'Crete, Greece',
  'house', 
  'crete',
  2,
  2,
  4,
  150.00,
  'Authentic Cretan stone house surrounded by olive groves.',
  ARRAY['WiFi', 'Garden', 'Mountain View', 'Traditional Architecture'],
  ARRAY['Authentic Architecture', 'Peaceful Location', 'Olive Grove Setting'],
  ARRAY['https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
  4.7,
  15
),
(
  'Urban Loft in City Center',
  'Athens, Greece',
  'apartment',
  'athens',
  1,
  1,
  2,
  95.00,
  'Modern loft apartment in the heart of Athens, close to all attractions.',
  ARRAY['WiFi', 'Air Conditioning', 'City Center', 'Metro Access'],
  ARRAY['City Center Location', 'Modern Design', 'Metro Access'],
  ARRAY['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
  4.5,
  22
);