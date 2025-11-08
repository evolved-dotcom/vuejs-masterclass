import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  import.meta.env.VITE_CLIENT_ID,
  import.meta.env.VITE_CLIENT_SECRET,
);

console.log(import.meta.env.VITE_MI_VARIABLE);
