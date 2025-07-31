import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PropertyData {
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  description?: string;
  guests: number;
  price?: number;
  property_type?: string;
  category?: string;
  images?: string[];
  amenities?: string[];
  highlights?: string[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { adminEmail, adminPassword, propertyData }: { 
      adminEmail: string; 
      adminPassword: string; 
      propertyData: PropertyData;
    } = await req.json();

    console.log('Authenticating admin:', adminEmail);

    // Authenticate admin
    const { data: adminData, error: adminError } = await supabase
      .rpc('authenticate_admin', {
        admin_email: adminEmail,
        admin_password: adminPassword
      });

    if (adminError || !adminData || adminData.length === 0) {
      console.error('Admin authentication failed:', adminError);
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    console.log('Admin authenticated successfully');

    // Insert property using service role (bypasses RLS)
    const { data: property, error: propertyError } = await supabase
      .from('properties')
      .insert([propertyData])
      .select()
      .single();

    if (propertyError) {
      console.error('Error inserting property:', propertyError);
      return new Response(
        JSON.stringify({ error: propertyError.message }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    console.log('Property inserted successfully:', property);

    return new Response(
      JSON.stringify({ success: true, property }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error('Error in add-property function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);