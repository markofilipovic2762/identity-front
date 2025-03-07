"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TableUsers from "@/components/table-autorizacija";
import { AssignRoleModal } from "@/components/assign-role-modal";
import { AddUserRole, Application, Role, UserRole } from "@/lib/types";
import {
  fetchRoles,
  fetchApplications,
  addUserRole,
  fetchUserRoles,
} from "@/lib/functions";

export default function AutorizacijaPage() {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [role, setRole] = useState<Role[]>([]);
  const [aplikacije, setAplikacije] = useState<Application[]>([]);
  const [autorizacije, setAutorizacije] = useState<UserRole[]>([]);

  useEffect(() => {
    fetchUserRoles().then((data) => setAutorizacije(data));
    fetchRoles().then((data) => setRole(data));
    fetchApplications().then((data) => setAplikacije(data));
  }, []);

  console.log(autorizacije);

  const assignRole = async (data: AddUserRole) => {
    const newUserRole: UserRole = await addUserRole(data);
    setAutorizacije((prev) => [...prev, newUserRole]);
    window.location.reload();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        {/* <h1 className="text-2xl font-bold">Users</h1> */}
        <Button
          className="ml-4 bg-gray-600 border-2 border-transparent hover:border-red-400 shadow-black shadow-md p-4 text-xl"
          onClick={() => setIsAddUserModalOpen(true)}
        >
          Autorizuj
        </Button>
      </div>
      <TableUsers autorizacije={autorizacije} />
      {/* <UsersTable users={users} removeRole={removeRole} /> */}
      <AssignRoleModal
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        applications={aplikacije}
        roles={role}
        assignRole={assignRole}
      />
    </div>
  );
}
