// import { notFound } from "next/navigation";

export default async function ErrorServerComponent() {
  const res = await fetch("https://dummyjson.com/http/404/Hello_Peter");
  const data = await res.json();

  console.log({ data });

  // fetchは200以外でもthrowされるわけじゃないので、画面表示で別に困ることないのでは...？
  //   if (!res.ok) {
  // notFound();
  //     throw new Error("not found");
  //   }

  return (
    <div>
      <h1>Dummy JSON Test</h1>
      <p>This is a test page for Dummy JSON.</p>
      <p>{data.status}</p>
      {data.status === 404 && <p style={{ color: "red" }}>404 is Here!</p>}
    </div>
  );
}
