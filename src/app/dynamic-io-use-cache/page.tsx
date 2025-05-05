import { FetchComponents } from "./_components/fetch-component";

// dynamic-ioを試す
// https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_3_dynamicio

// use cacheを使うので、staticになっている
export default async function DynamicIoTest() {
  return (
    <div>
      <h1>Dummy JSON Test</h1>
      <p>This is a test page for Dummy JSON.</p>
      <FetchComponents />
    </div>
  );
}
