import { supabase } from "@/lib/supabaseClient";

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from("pratos")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
}
