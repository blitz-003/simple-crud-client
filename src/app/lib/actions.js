import { revalidatePath } from "next/cache";

export async function deleteUser(userId) {
  "use server";

  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "DELETE",
  });

  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }
  return data;

  // Verify the user owns this resource before deleting
  // Mutate data
  // Revalidate cache
}
