import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { UserRole } from "@/lib/types";

export default function TableAutorizacija({
  autorizacije,
}: {
  autorizacije: UserRole[];
}) {
  return (
    <div className="card">
      <DataTable
        value={autorizacije}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        sortMode="multiple"
      >
        <Column
          field="userName"
          header="Zaposleni"
          style={{ width: "20%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po imenu"
        ></Column>
        <Column
          field="roleName"
          header="Naziv role"
          style={{ width: "20%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po roli"
        ></Column>
        <Column
          field="appName"
          header="Aplikacija"
          style={{ width: "20%" }}
          sortable
          filter
          filterPlaceholder="Pretraži po aplikaciji"
        ></Column>
      </DataTable>
    </div>
  );
}
