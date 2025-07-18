import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lpwbaezdunuhjunhwrsy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2JhZXpkdW51aGp1bmh3cnN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MzAzNzMsImV4cCI6MjA2ODQwNjM3M30.WZSBDfVm_HOwOZzwQuT_rFdkIf7YiyU-gqrtgpCbro8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function createSupabaseClient() {
  return supabase;
}
