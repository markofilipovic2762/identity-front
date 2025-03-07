"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { RolesTable } from "@/components/table-roles";
import { AddRoleModal } from "@/components/add-role-modal";

export default function RolesPage() {
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);

  // const addRole = (role) => {
  //   setRoles([...roles, role]);
  // };

  return (
    <div>
      <div className="flex justify-start gap-10 items-center mb-4">
        <h1 className="text-2xl font-semibold">Role</h1>
        <Button
          label="Dodaj rolu"
          severity="success"
          text
          raised
          className="text-red-400 p-2 hover:animate-bounce"

          onClick={() => setIsAddRoleModalOpen(true)}
        />
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
