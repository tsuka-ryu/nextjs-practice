import { fetchComment, fetchPost, fetchUser, preFetchUser } from "./_lib/fetch";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

// ちゃんとなった
// Route (app)                                 Size  First Load JS
// ┌ ○ /                                    5.76 kB         107 kB
// ├ ○ /_not-found                            977 B         102 kB
// ├ ○ /composition-pattern                   349 B         101 kB
// ├ ƒ /dynamic-apis                          161 B         101 kB
// ├ ○ /fetch-co-location                     161 B         101 kB
// ├ ● /para-fetch-static/[id]                161 B         101 kB
// ├   ├ /para-fetch-static/1
// ├   ├ /para-fetch-static/2
// ├   └ /para-fetch-static/3
// ├ ƒ /para-fetch/[id]                       161 B         101 kB
// ├ ○ /test                                  161 B         101 kB
// ├ ○ /test-delay                            161 B         101 kB
// ├ ƒ /todo-page-presentation                161 B         101 kB
// └ ○ /use-action-state                      707 B         102 kB
// + First Load JS shared by all             101 kB
//   ├ chunks/4bd1b696-76f17ac3823161e1.js  53.2 kB
//   ├ chunks/684-c6bffd623d1c3e30.js       45.9 kB
//   └ other shared chunks (total)           1.9 kB

// ○  (Static)   prerendered as static content
// ●  (SSG)      prerendered as static HTML (uses generateStaticParams)
// ƒ  (Dynamic)  server-rendered on demand

// paramなのでdynamic renderingになっているけど、generateStaticParams()を使うと、static renderingになる
export default async function ParaFetchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log({ id });

  preFetchUser(`${Number(id) + 1}`);

  return (
    <div>
      <PostBody postId={id} />
      <Comments postId={id} />
    </div>
  );
}

async function PostBody({ postId }: { postId: string }) {
  const res = await fetchPost(postId);

  return <div>TITLE:{res.title}</div>;
}

async function Comments({ postId }: { postId: string }) {
  const res = await fetchComment(postId);
  const user = await fetchUser(`${Number(postId) + 1}`);

  return (
    <>
      <div>COMMENT: {res.body}</div>
      <div>USER: {user.firstName}</div>
    </>
  );
}
