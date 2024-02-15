import React from "react";
import { LayoutSistem } from "../Layout/LayoutSistem";
import { Sidebar } from "../Component/Sidebar";
import { Main } from "../Component/Sistem/Main";
import { DataTable } from "../Component/Sistem/DataTable";

export const Sistem = () => {
  document.title = "Sistem";
  document.body.className = "bg-[#F0F0F0]";

  return (
    <LayoutSistem>
      <Sidebar />
      <Main>
       <DataTable />
      </Main>
    </LayoutSistem>
  );
};
