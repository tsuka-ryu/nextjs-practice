import "server-only";

export async function fetchPost(id: string): Promise<{ title: string }> {
  const res = await fetch(`https://dummyjson.com/posts/${id}/?delay=1000`);
  const data = await res.json();

  console.log("fetchPost!");
  console.log({ data });

  return data;
}

export async function fetchComment(id: string): Promise<{ body: string }> {
  const res = await fetch(`https://dummyjson.com/comments/${id}/?delay=1000`);
  const data = await res.json();

  console.log("fetchComment!");
  console.log({ data });

  return data;
}

export async function fetchUser(id: string): Promise<{ firstName: string }> {
  const res = await fetch(`https://dummyjson.com/users/${id}/?delay=1000`);
  const data = await res.json();

  console.log("fetchUser!");
  console.log({ data });

  return data;
}
