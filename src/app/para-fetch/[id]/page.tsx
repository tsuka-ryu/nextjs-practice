import { fetchComment, fetchPost, fetchUser, preFetchUser } from "./_lib/fetch";

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
