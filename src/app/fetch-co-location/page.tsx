import { fetchProducts } from "./_lib/fetcher";

export default async function FetchCoLocation() {
  const res = await fetch("https://dummyjson.com/test");
  const data = await res.json();

  console.log({ data });

  return (
    <>
      <ProductHeader />
      <ProductList />
      <ProductFooter />
    </>
  );
}

async function ProductHeader() {
  const res = await fetchProducts();

  return <div>TOTAL: {res.total}</div>;
}

async function ProductList() {
  const res = await fetchProducts();

  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {res.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </>
  );
}

async function ProductFooter() {
  const res = await fetchProducts();

  return <div>LIMIT:{res.limit}</div>;
}
