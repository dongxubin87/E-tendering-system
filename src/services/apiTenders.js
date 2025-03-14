import supabase, { supabaseUrl } from "./supabase";
export async function getTenders() {
  const { data, error } = await supabase.from("tenders").select("*");

  if (error) {
    console.error(error);
    throw new Error("tenders could not be loaded");
  }

  return data;
}

export async function getTender(id) {
  const { data, error } = await supabase
    .from("tenders")
    .select("*, tenders(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Tender not found");
  }

  return data;
}

export async function createEditTender(newTender, id) {
  let query = supabase.from("tenders");

  if (!id) query = query.insert([{ ...newTender }]);

  if (id) query = query.update({ ...newTender }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Tender could not be created");
  }

  return data;
}

export async function deleteTender(id) {
  const { data, error } = await supabase.from("tenders").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Tender could not be deleted");
  }

  return data;
}
