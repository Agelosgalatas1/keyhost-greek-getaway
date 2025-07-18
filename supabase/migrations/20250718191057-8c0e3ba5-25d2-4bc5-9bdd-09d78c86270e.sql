-- Check if there's a foreign key constraint and drop it if it exists
-- Then create the admin account

-- Drop foreign key constraint if it exists
DO $$ 
BEGIN
    -- Check if the constraint exists and drop it
    IF EXISTS (
        SELECT 1 
        FROM information_schema.table_constraints 
        WHERE constraint_name LIKE '%admin_users_user_id_fkey%'
        AND table_name = 'admin_users'
    ) THEN
        ALTER TABLE public.admin_users DROP CONSTRAINT admin_users_user_id_fkey;
    END IF;
END $$;

-- Now insert the admin user
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