import { Suspense } from "react";
import { ClientComponent } from "./_components/client-component";

// https://nextjs.org/docs/app/guides/single-page-applications#using-reacts-use-within-a-context-provider
// nextがspaと主張しているパターン、spa？
export default function Page() {
  return (
    <div>
      <h1>SPA pattern</h1>
      <p>This is a test page for Dummy JSON.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientComponent />
      </Suspense>
    </div>
  );
}
