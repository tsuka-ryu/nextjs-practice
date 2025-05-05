export async function fetchUser(): Promise<{ firstName: string }> {
  const res = await fetch(`https://dummyjson.com/users/1/?delay=5000`);
  const data = await res.json();

  return data;
}
