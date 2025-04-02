"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ApplicationsTable } from "@/components/table-apps";
import { AddApplicationModal } from "@/components/add-application-modal";
import { Application } from "@/lib/types";
import { addApplication, fetchApplications } from "@/lib/functions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import api from "@/lib/api";

const SwalReact = withReactContent(Swal);

export default function ApplicationsPage() {
  const [isAddApplicationModalOpen, setIsAddApplicationModalOpen] =
    useState(false);
  const [aplikacije, setAplikacije] = useState<Application[]>([]);

  useEffect(() => {
    fetchApplications().then((data) => setAplikacije(data));
  }, []);

  const dodajAplikaciju = async (ime: string) => {
    const response = await addApplication(ime);
    if (response) {
      SwalReact.fire({
        title: "Uspesno dodata aplikacija",
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
      <div className="flex justify-normal gap-8 items-center mb-4">
        <h1 className="text-2xl font-semibold">Aplikacije</h1>
        <Button
          className="ml-4 bg-gray-600 border-2 border-transparent hover:border-red-400 shadow-black shadow-md p-4 text-xl"
          onClick={() => setIsAddApplicationModalOpen(true)}
        >
          Dodaj aplikaciju
        </Button>
      </div>
      <ApplicationsTable aplikacije={aplikacije} />
      <AddApplicationModal
        isOpen={isAddApplicationModalOpen}
        onClose={() => setIsAddApplicationModalOpen(false)}
        addApplication={dodajAplikaciju}
      />
    </div>
  );
}
