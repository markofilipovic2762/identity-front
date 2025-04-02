"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { UserRole } from "@/lib/types";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { DeleteIcon, Trash2Icon } from "lucide-react";
import { removeUserAuth } from "@/lib/functions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const actionBodyTemplate = (rowData: any) => {
  return (
    <Button className="flex items-center justify-center"
      onClick={() => {
        Swal.fire({
          title: `Izbrisati autorizaciju za ad: ${rowData.userName} rola: ${rowData.roleName} aplikacija: ${rowData.appName}?`,
          //text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Da, izbrisi autorizaciju!",
        }).then((result) => {
          if (result.isConfirmed) {
            removeUserAuth(rowData.id);
            Swal.fire({
              title: "Izbrisano!",
              text: `ad: ${rowData.userName} rola: ${rowData.roleName} aplikacija: ${rowData.appName}`,
              icon: "success",
              timer: 2000,
            });
          }
        });
      }}
    >
      <Trash2Icon color="red" />
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
          style={{ width: "10%" }}
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
          header="Izbrisi"
          style={{ width: "10%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
