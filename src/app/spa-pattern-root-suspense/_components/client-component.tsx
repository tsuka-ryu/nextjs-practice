"use client";

import { useUser } from "@/app/_lib/recipes-provider";
import { use } from "react";

export function ClientComponent() {
  const { userPromise } = useUser();
  const user = use(userPromise);

  return <div>{JSON.stringify(user.recipes[0])}</div>;
}
