
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://jrstlcsbeexhdcszjnsi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impyc3RsY3NiZWV4aGRjc3pqbnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwODA3NjIsImV4cCI6MjAyNTY1Njc2Mn0.iIJG6DX1gBeAi6vxO3FKVPWmLuje3yblQ_PsUswty7g')

export default supabase;