import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { UserRole } from "@/lib/types";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { DeleteIcon } from "lucide-react";
import { removeUserAuth } from "@/lib/functions";

const actionBodyTemplate = (rowData: any) => {
  return (
    <Button
      onClick={() => removeUserAuth(rowData.id)}
    >
      <DeleteIcon color="red" />
    </Button>
  );
};

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
        selectionMode={"single"}
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
        <Column
          body={actionBodyTemplate}
          exportable={false}
          header="Akcija"
         //style={{ minWidth: "20%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
