import { getUserById } from "@/app/lib/data";
import React from "react";

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUserById(userId);
  console.log(user);
  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default UserDetailPage;
