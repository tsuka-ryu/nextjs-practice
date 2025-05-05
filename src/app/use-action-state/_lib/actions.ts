"use server";

type Product = {
  id: number;
  title: string;
  category: string;
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function searchProducts(
  _prevState: { error: string | null; products: Product[] | null },
  formData: FormData
): Promise<{ error: string | null; products: Product[] | null }> {
  const query = formData.get("query") as string;
  console.log({ query });
  //   const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const res = await fetch("https://dummyjson.com/http/404/Hello_Peter");
  const data = await res.json();

  if (!res.ok) {
    return { error: data.message, products: null };
  }

  const { products } = data as ProductResponse;

  return { error: null, products };
}
