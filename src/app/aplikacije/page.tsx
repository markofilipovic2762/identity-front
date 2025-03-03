"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ApplicationsTable } from "@/components/table-apps";
import { AddApplicationModal } from "@/components/add-application-modal";
import { Application } from "@/lib/types";
import { fetchApplications } from "@/lib/functions";

export default function ApplicationsPage() {
  const [isAddApplicationModalOpen, setIsAddApplicationModalOpen] =
    useState(false);
  const [aplikacije, setAplikacije] = useState<Application[]>([]);

  useEffect(() => {
    fetchApplications().then((data) => setAplikacije(data));
  }, []);

  const addApplication = (app: Application) => {
    setAplikacije([...aplikacije, app]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Aplikacije</h1>
        <Button onClick={() => setIsAddApplicationModalOpen(true)}>
          Add Application
        </Button>
      </div>
      <ApplicationsTable aplikacije={aplikacije} />
      <AddApplicationModal
        isOpen={isAddApplicationModalOpen}
        onClose={() => setIsAddApplicationModalOpen(false)}
        addApplication={addApplication}
      />
    </div>
  );
}
