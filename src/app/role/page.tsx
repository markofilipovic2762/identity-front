"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { RolesTable } from "@/components/table-roles";
import { AddRoleModal } from "@/components/add-role-modal";
import { addRole } from "@/lib/functions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SwalReact = withReactContent(Swal);

export default function RolesPage() {
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);

  const dodajRolu = async (ime: string) => {
    const response = await addRole(ime);
    if (response) {
      SwalReact.fire({
        title: "Uspesno dodata rola",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div>
      <div className="flex justify-start gap-10 items-center mb-4">
        <h1 className="text-2xl font-semibold">Role</h1>
        <Button
          className="ml-4 bg-gray-600 border-2 border-transparent hover:border-red-400 shadow-black text-gray-100 shadow-md p-2 text-xl"
          onClick={() => setIsAddRoleModalOpen(true)}
        >
          Dodaj rolu
        </Button>
      </div>
      <RolesTable />
      <AddRoleModal
        isOpen={isAddRoleModalOpen}
        onClose={() => setIsAddRoleModalOpen(false)}
        addRole={dodajRolu}
      />
    </div>
  );
}
