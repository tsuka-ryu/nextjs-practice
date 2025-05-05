import { Suspense } from "react";
import { FetchComponents } from "./_components/fetch-component";

// dynamic-ioを試す
// https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_3_dynamicio

// dynamic-ioフラグを無効化してもビルド通るし、普通にsuspenseの動きになるな、これはstreaming ssrか
export default async function DynamicIoTest() {
  return (
    <div>
      <h1>Dummy JSON Test</h1>
      <p>This is a test page for Dummy JSON.</p>
      <Suspense fallback={<p>Loading...</p>}>
        <FetchComponents />
      </Suspense>
    </div>
  );
}
