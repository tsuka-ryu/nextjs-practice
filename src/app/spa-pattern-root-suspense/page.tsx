// import { Suspense } from "react";
import { ClientComponent } from "./_components/client-component";

// suspenseのfallbackを設定していないので、root layoutのfallbackが表示される
export default function Page() {
  return (
    <div>
      <h1>SPA pattern</h1>
      <p>This is a test page for Dummy JSON.</p>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <ClientComponent />
      {/* </Suspense> */}
    </div>
  );
}
