import { cookies } from "next/headers";

// cookiesを使ってるのでdynamic renderingになる
export default async function Page() {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get("myCookie")?.value;

  return (
    <div>
      <h1>Dynamic APIs</h1>
      <p>Cookie value: {cookieValue}</p>
    </div>
  );
}
