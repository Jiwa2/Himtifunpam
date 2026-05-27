import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kpclztrjnmzfnvuedpmq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwY2x6dHJqbm16Zm52dWVkcG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MDczOTUsImV4cCI6MjA5NTM4MzM5NX0.VQ4u9CCnFiCVAscVYQodPNhqlXqL4avIwGIAmnSENTQ';

export const supabase = createClient(supabaseUrl, supabaseKey);