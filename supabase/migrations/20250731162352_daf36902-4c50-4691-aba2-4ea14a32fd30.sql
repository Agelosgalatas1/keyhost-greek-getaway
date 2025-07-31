-- Update function search paths for security
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.authenticate_admin(admin_email text, admin_password text)
RETURNS TABLE(user_id uuid, email text, is_active boolean)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $function$
  SELECT 
    a.user_id,
    a.email,
    a.is_active
  FROM public.admin_users a 
  WHERE a.email = admin_email 
    AND a.password = admin_password 
    AND a.is_active = true;
$function$;

CREATE OR REPLACE FUNCTION public.is_admin(user_uuid uuid)
RETURNS boolean
LANGUAGE sql
STABLE 
SECURITY DEFINER
SET search_path = public
AS $function$
  SELECT EXISTS (
    SELECT 1 
    FROM public.admin_users 
    WHERE user_id = user_uuid 
    AND is_active = true
  )
$function$;