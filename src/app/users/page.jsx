import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "../components/UsersTable";
import { createUser, deleteUser } from "../lib/actions";
import { AddUserModal } from "../components/AddUserModal";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div>
      <div className="flex justify-between">
        <div>User length: {users.length}</div>
        <AddUserModal createUserAction={createUser} />
      </div>

      <UsersTable users={users} deleteUserAction={deleteUser} />
    </div>
  );
};

export default UsersPage;
