"use client";
import { UserAndRoleResponse } from "@/lib/types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export function AppTable({
  aplikacijaList,
}: {
  aplikacijaList: UserAndRoleResponse[];
}) {
  return (
    <div className="card">
      <DataTable
        value={aplikacijaList}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ width: "50rem" }}
        sortMode="multiple"
        selectionMode={"single"}
      >
        <Column
          field="userId"
          header="ID"
          style={{ width: "20%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po id-u"
        ></Column>
        <Column
          field="userName"
          header="Naziv korisnika"
          style={{ width: "40%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po korisniku"
        ></Column>
        <Column
          field="roleName"
          header="Rola"
          style={{ width: "40%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po roli"
        ></Column>
      </DataTable>
    </div>
  );
}
