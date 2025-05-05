import { connection } from "next/server";

export async function LeafComponent({ status }: { status: string }) {
  await connection();

  return <p>{status}</p>;
}

// dynamicになった
// Route (app)                                 Size  First Load JS
// ┌ ○ /                                    5.76 kB         107 kB
// ├ ○ /_not-found                            977 B         102 kB
// ├ ○ /composition-pattern                   349 B         101 kB
// ├ ƒ /dynamic-apis                          168 B         101 kB
// ├ ○ /fetch-co-location                     168 B         101 kB
// ├ ● /para-fetch-static/[id]                168 B         101 kB
// ├   ├ /para-fetch-static/1
// ├   ├ /para-fetch-static/2
// ├   └ /para-fetch-static/3
// ├ ƒ /para-fetch/[id]                       168 B         101 kB
// ├ ○ /test                                  168 B         101 kB
// ├ ƒ /test-connection                       168 B         101 kB
// ├ ○ /test-delay                            168 B         101 kB
// ├ ƒ /test-delay-dynamic                    168 B         101 kB
// ├ ƒ /test-dynamic                          168 B         101 kB
// ├ ƒ /todo-page-presentation                168 B         101 kB
// └ ○ /use-action-state                      707 B         102 kB
// + First Load JS shared by all             101 kB
//   ├ chunks/4bd1b696-76f17ac3823161e1.js  53.2 kB
//   ├ chunks/684-c6bffd623d1c3e30.js       45.9 kB
//   └ other shared chunks (total)           1.9 kB

// ○  (Static)   prerendered as static content
// ●  (SSG)      prerendered as static HTML (uses generateStaticParams)
// ƒ  (Dynamic)  server-rendered on demand
