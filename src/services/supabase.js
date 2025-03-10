import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rjdcgvqtdrbfuzqyohdt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZGNndnF0ZHJiZnV6cXlvaGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzODA4NjQsImV4cCI6MjA1Njk1Njg2NH0.DEH3YnIacXwNQOgfS-PcyccU8_2WhItHRMNTZar8rK8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
