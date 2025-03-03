"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RolesTable } from "@/components/table-roles";
import { AddRoleModal } from "@/components/add-role-modal";

export default function RolesPage() {
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);

  // const addRole = (role) => {
  //   setRoles([...roles, role]);
  // };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Roles</h1>
        <Button onClick={() => setIsAddRoleModalOpen(true)}>Add Role</Button>
      </div>
      <RolesTable />
      <AddRoleModal
        isOpen={isAddRoleModalOpen}
        onClose={() => setIsAddRoleModalOpen(false)}
        //addRole={addRole}
      />
    </div>
  );
}
