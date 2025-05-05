import { fetchUser } from "./_lib/fetch";

export default async function ParaFetchLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log("ParaFetchLayout");
  const res = await fetchUser(id);

  return (
    <section>
      <p>NAME:{res.firstName}</p>
      {children}
    </section>
  );
}
