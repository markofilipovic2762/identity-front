"use client";
import { Application } from "@/lib/types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export function ApplicationsTable({ aplikacije }: { aplikacije: Application[] }) {
  
  return (
    <div className="card">
      <DataTable
        value={aplikacije}
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
          header="Naziv aplikacije"
          style={{ width: "80%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po aplikaciji"
        ></Column>
      </DataTable>
    </div>
  );
}
