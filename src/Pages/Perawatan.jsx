import React from "react";
import { LayoutPerawatan } from "../Layout/LayoutPerawatan";
import { Sidebar } from "../Component/Sidebar";
import { Main } from "../Component/Perawatan/Main";
import { DataTable } from "../Component/Perawatan/DataTable";

export const Perawatan = () => {
  document.title = "Perawatan";
  document.body.className = "bg-[#F0F0F0]";

  return (
    <LayoutPerawatan>
      <Sidebar />
      <Main>
        <DataTable  />
      </Main>
    </LayoutPerawatan>
  )
};
