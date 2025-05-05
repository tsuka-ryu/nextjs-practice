export async function FetchComponents() {
  "use cache";

  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  console.log({ data });

  return <p>{data.total}</p>;
}
