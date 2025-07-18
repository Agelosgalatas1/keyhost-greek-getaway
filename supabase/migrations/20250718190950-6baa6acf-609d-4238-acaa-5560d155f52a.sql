-- Create admin account for agelosgalatas@gmail.com
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