import { fetchUser } from "../_lib/fetch";

export async function UserInfo() {
  const res = await fetchUser();

  return <div>Name:{res.firstName}</div>;
}
