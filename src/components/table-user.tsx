"use client";
import { AppAndRoleResponse, User, UserAndRoleResponse } from "@/lib/types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export function UserTable({ lista }: { lista: AppAndRoleResponse[] }) {
  return (
    <div className="card">
      <DataTable
        value={lista}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ width: "50rem" }}
        sortMode="multiple"
        selectionMode={"single"}
        //onRowClick={(event) => }
      >
        <Column
          field="appName"
          header="APLIKACIJA"
          style={{ width: "50%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po aplikaciji"
        ></Column>
        <Column
          field="roleName"
          header="ROLA"
          style={{ width: "50%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po roli"
        ></Column>
      </DataTable>
    </div>
  );
}
