"use server";

export async function fetchRecipes() {
  const res = await fetch("https://dummyjson.com/recipes");
  return res.json();
}
