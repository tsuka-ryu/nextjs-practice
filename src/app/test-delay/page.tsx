// https://dummyjson.com/docs
// fetchのテスト

export default async function DummyJSONTest() {
  const res = await fetch("https://dummyjson.com/test/?delay=1000");
  const data = await res.json();

  console.log({ data });

  return (
    <div>
      <h1>Dummy JSON Delay Test</h1>
      <p>This is a test page for Dummy JSON.</p>
      <p>{data.status}</p>
    </div>
  );
}
