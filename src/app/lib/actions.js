export async function deleteUser(userId) {
  "use server";

  const res = await fetch(`http://localhost:5000/users/${userId}`, {
    method: "DELETE",
  });

  const data = await res.json();
  return data;

  // Verify the user owns this resource before deleting
  // Mutate data
  // Revalidate cache
}
