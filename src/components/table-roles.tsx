"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useEffect, useState } from "react";

type Role = {
  id: number;
  name: string;
};

export function RolesTable() {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5065/api/roles");
        const data: Role[] = await response.json();
        setRoles(data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="card">
      <DataTable
        value={roles}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ width: "50rem" }}
        sortMode="multiple"
      >
        <Column
          field="id"
          header="ID"
          style={{ width: "20%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po id-u"
        ></Column>
        <Column
          field="name"
          header="Naziv role"
          style={{ width: "80%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po roli"
        ></Column>
      </DataTable>
    </div>
  );
}
