import "server-only";

export async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products/?limit=10");
  const data = await res.json();

  console.log("fetch!");

  return data;
}
