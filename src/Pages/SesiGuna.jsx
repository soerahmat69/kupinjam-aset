import React from "react";
import { LayoutSesiGuna} from "../Layout/LayoutSesiGuna";
import { Sidebar } from "../Component/Sidebar";
import { Main } from "../Component/SesiGuna/Main";
import { DataTable } from "../Component/SesiGuna/DataTable";

export const SesiGuna = () => {
  document.title = "Sesi Guna";
  document.body.className = "bg-[#F0F0F0]";

  return (
    <LayoutSesiGuna>
      <Sidebar />
      <Main>
       <DataTable />
      </Main>
    </LayoutSesiGuna>
  );
};
