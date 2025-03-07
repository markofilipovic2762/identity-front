import { UsersTable } from "@/components/table-users";
import { getUsers } from "@/lib/functions";
import React from "react";

const KorisniciPage = async () => {
  const data = await getUsers();
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Lista korisnika sa dodeljenim ulogama
      </h1>
      <UsersTable usersList={data} />
    </div>
  );
};

export default KorisniciPage;
