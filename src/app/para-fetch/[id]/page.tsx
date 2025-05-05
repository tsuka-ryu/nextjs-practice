import { fetchComment, fetchPost } from "./_lib/fetch";

export default async function ParaFetchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log({ id });

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

  return <div>COMMENT: {res.body}</div>;
}
