// https://dummyjson.com/docs
// fetchのテスト

// Route (app)                                 Size  First Load JS
// ┌ ○ /                                    5.76 kB         107 kB
// ├ ○ /_not-found                            977 B         102 kB
// ├ ○ /composition-pattern                   349 B         101 kB
// ├ ƒ /dynamic-apis                          164 B         101 kB
// ├ ○ /fetch-co-location                     164 B         101 kB
// ├ ● /para-fetch-static/[id]                164 B         101 kB
// ├   ├ /para-fetch-static/1
// ├   ├ /para-fetch-static/2
// ├   └ /para-fetch-static/3
// ├ ƒ /para-fetch/[id]                       164 B         101 kB
// ├ ○ /test                                  164 B         101 kB
// ├ ○ /test-delay                            164 B         101 kB
// ├ ƒ /test-dynamic                          164 B         101 kB
// ├ ƒ /todo-page-presentation                164 B         101 kB
// └ ○ /use-action-state                      707 B         102 kB
// + First Load JS shared by all             101 kB
//   ├ chunks/4bd1b696-76f17ac3823161e1.js  53.2 kB
//   ├ chunks/684-c6bffd623d1c3e30.js       45.9 kB
//   └ other shared chunks (total)           1.9 kB

// ○  (Static)   prerendered as static content
// ●  (SSG)      prerendered as static HTML (uses generateStaticParams)
// ƒ  (Dynamic)  server-rendered on demand

export default async function DummyJSONTest() {
  const res = await fetch("https://dummyjson.com/test", {
    // 🚨Dynamic Renderingにするために`"no-store"`を明示
    cache: "no-store",
  });
  const data = await res.json();

  console.log({ data });

  return (
    <div>
      <h1>Dummy JSON Test</h1>
      <p>This is a test page for Dummy JSON.</p>
      <p>{data.status}</p>
    </div>
  );
}
