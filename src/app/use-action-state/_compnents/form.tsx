"use client";

import { useActionState } from "react";
import { searchProducts } from "../_lib/actions";

export default function Form() {
  const [{ products, error }, action] = useActionState(searchProducts, {
    error: null,
    products: [],
  });

  console.log({ products, error });

  return (
    <>
      <form action={action}>
        <label htmlFor="query">
          Search Product:&nbsp;
          <input type="text" id="query" name="query" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {products != null &&
          products.length > 0 &&
          products.map((product) => <li key={product.id}>{product.title}</li>)}
      </ul>
    </>
  );
}
