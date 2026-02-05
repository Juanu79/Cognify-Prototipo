// Este archivo se encarga de crear la conexión con Supabase

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aqtlygxiuzlguriwdnlj.supabase.co";
const supabaseKey = "sb_publishable_ExsSnxoyM6Gpz8-g6CYsdw_DIIdeMWH";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);