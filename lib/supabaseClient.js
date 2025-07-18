import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xlwxgkwaammuhfvlknzk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhsd3hna3dhYW1tdWhmdmxrbnprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMjc5ODUsImV4cCI6MjA2NjcwMzk4NX0.fFkTmlTaQaisuVweVEdkuPk9cx_jG0FAx0Gl6y8vg7w'

export const supabase = createClient(supabaseUrl, supabaseKey)
