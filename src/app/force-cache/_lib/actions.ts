import { revalidatePath } from "next/cache";

export async function forceCacheAction() {
  "use server";
  revalidatePath("/force-cache");
  // redirect("/force-cache");しなくてもUIが更新されるように見えるな...あれ？
}
