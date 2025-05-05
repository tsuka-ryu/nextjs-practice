import { cookies } from "next/headers";
import { ComponentA } from "./_components/a";
import { ComponentB } from "./_components/b";
import { Form } from "./_components/form";

export default async function Page() {
  const cookieStore = await cookies();
  const random = cookieStore.get("random");
  console.log(random);

  return (
    <>
      <ComponentA />
      <ComponentB />
      <Form />
    </>
  );
}
