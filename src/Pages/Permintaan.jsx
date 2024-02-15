import React from "react";
import { LayoutPermintaan } from "../Layout/LayoutPermintaan";
import { Sidebar } from "../Component/Sidebar";
import { Main } from "../Component/Permintaan/Main";
import { DataTable } from "../Component/Permintaan/DataTable";

export const Permintaan = () => {
  document.title = "Permintaan";
  document.body.className = "bg-[#F0F0F0]";

  return (
    <LayoutPermintaan>
      <Sidebar />
      <Main>
        <DataTable  />
      </Main>
    </LayoutPermintaan>
  )
};
