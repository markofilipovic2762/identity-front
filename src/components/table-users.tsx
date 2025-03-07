"use client";
import { User, UserAndRoleResponse } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export function UsersTable({ usersList }: { usersList: User[] }) {
  const router = useRouter();
  return (
    <div className="card">
      <DataTable
        value={usersList}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ width: "50rem" }}
        sortMode="multiple"
        selectionMode={"single"}
        onRowClick={(event) => router.push(`/user/${event.data.id}`)}
        className="hover:cursor-pointer"
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
          field="ad"
          header="Ad nalog"
          style={{ width: "40%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po ad-u"
        ></Column>
        <Column
          field="name"
          header="Ime"
          style={{ width: "40%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po nazivu"
        ></Column>
      </DataTable>
    </div>
  );
}
