-- First, clear any existing admin user record with this email
DELETE FROM public.admin_users WHERE email = 'agelosgalatas@gmail.com';

-- Create a simple admin authentication check function that doesn't rely on Supabase Auth
-- We'll modify the admin login to use direct database authentication instead
CREATE OR REPLACE FUNCTION public.authenticate_admin(admin_email text, admin_password text)
RETURNS TABLE(
  user_id uuid,
  email text,
  is_active boolean
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    a.user_id,
    a.email,
    a.is_active
  FROM public.admin_users a 
  WHERE a.email = admin_email 
    AND a.password = admin_password 
    AND a.is_active = true;
$$;

-- Insert the admin user again
INSERT INTO public.admin_users (
  user_id,
  email, 
  password,
  is_active
) VALUES (
  gen_random_uuid(),
  'agelosgalatas@gmail.com',
  'sg251340',
  true
);