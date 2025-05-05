"use server";

import { cookies } from "next/headers";

export async function updateCookie() {
  const cookieStore = await cookies();
  const random = Math.floor(Math.random() * 100);
  cookieStore.set("random", random.toString());
}
