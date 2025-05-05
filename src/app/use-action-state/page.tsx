import Form from "./_compnents/form";

export default async function UseActionState() {
  const res = await fetch("https://dummyjson.com/test");
  const data = await res.json();

  return (
    <div>
      <p>{data.status}</p>
      <Form />
    </div>
  );
}
