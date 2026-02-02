import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Define a recursive mock builder that can handle chaining
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockBuilder: any = {
  select: () => mockBuilder,
  order: () => Promise.resolve({ data: [], error: null }),
  insert: () => Promise.resolve({ data: null, error: null }),
  delete: () => mockBuilder,
  eq: () => Promise.resolve({ data: null, error: null }),
  single: () => Promise.resolve({ data: null, error: null }),
};

let client;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Using mock client.');
  // Create a minimal mock that satisfies AuthContext and Dashboard usage
  client = {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: () => Promise.resolve({ error: new Error('Mock client - cannot sign up') }),
      signInWithPassword: () => Promise.resolve({ error: new Error('Mock client - cannot sign in') }),
      signOut: () => Promise.resolve({ error: null }),
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    from: (_table: string) => mockBuilder
  };
} else {
  client = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = client;
