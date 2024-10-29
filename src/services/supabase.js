/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://avakokpldvkzixibbhrs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2YWtva3BsZHZreml4aWJiaHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwOTYzNTgsImV4cCI6MjA0MjY3MjM1OH0.KoZ3bXuWASjnsl-UGRQdyo8wBlNxQIYxpvNQUOUzFI4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
