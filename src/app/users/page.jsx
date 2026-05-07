import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "../components/UsersTable";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div>
      <div>User length: {users.length}</div>
      <UsersTable users={users} />
    </div>
  );
};

export default UsersPage;
