import React from "react";
import { LayoutUser } from "../Layout/LayoutUser";
import { Sidebar } from "../Component/Sidebar";
import { Main } from "../Component/User/Main";
import { DataTable } from "../Component/User/DataTable";

export const User = () => {
  document.title = "User";
  document.body.className = "bg-[#F0F0F0]";

  return (
    <LayoutUser>
      <Sidebar />
      <Main>
        <DataTable  />
      </Main>
    </LayoutUser>
  )
};
