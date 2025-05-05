// https://dummyjson.com/docs
// fetchのテスト

export const dynamic = "force-dynamic";

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

// Route (app)                                 Size  First Load JS
// ┌ ○ /                                    5.76 kB         107 kB
// ├ ○ /_not-found                            977 B         102 kB
// ├ ○ /composition-pattern                   349 B         101 kB
// ├ ƒ /dynamic-apis                          166 B         101 kB
// ├ ○ /fetch-co-location                     166 B         101 kB
// ├ ● /para-fetch-static/[id]                166 B         101 kB
// ├   ├ /para-fetch-static/1
// ├   ├ /para-fetch-static/2
// ├   └ /para-fetch-static/3
// ├ ƒ /para-fetch/[id]                       166 B         101 kB
// ├ ○ /test                                  166 B         101 kB
// ├ ○ /test-delay                            166 B         101 kB
// ├ ƒ /test-delay-dynamic                    166 B         101 kB
// ├ ƒ /test-dynamic                          166 B         101 kB
// ├ ƒ /todo-page-presentation                166 B         101 kB
// └ ○ /use-action-state                      707 B         102 kB
// + First Load JS shared by all             101 kB
//   ├ chunks/4bd1b696-76f17ac3823161e1.js  53.2 kB
//   ├ chunks/684-c6bffd623d1c3e30.js       45.9 kB
//   └ other shared chunks (total)           1.9 kB

// ○  (Static)   prerendered as static content
// ●  (SSG)      prerendered as static HTML (uses generateStaticParams)
// ƒ  (Dynamic)  server-rendered on demand
