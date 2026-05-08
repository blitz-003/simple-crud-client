import { getUserById } from "@/app/lib/data";
import React from "react";

const UserEditPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  return <div>Editing user: {user.name}</div>;
};

export default UserEditPage;
