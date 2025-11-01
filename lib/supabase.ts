import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Client-side Supabase client (uses anon key)
// Only create client if environment variables are available
// This prevents build-time errors when env vars are not available during static generation
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key') // Placeholder to prevent build errors

// Server-side Supabase client (uses service role key - bypasses RLS)
// This should only be used in server-side API routes
export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!url || !anonKey) {
    throw new Error(
      'Missing Supabase environment variables. Please check your environment configuration.'
    )
  }
  
  if (!serviceRoleKey) {
    // Fallback to anon key if service role key is not set
    return createClient(url, anonKey)
  }
  
  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

