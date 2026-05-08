import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "../components/UsersTable";
import { deleteUser } from "../lib/actions";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div>
      <div>User length: {users.length}</div>
      <UsersTable users={users} deleteUserAction={deleteUser} />
    </div>
  );
};

export default UsersPage;
