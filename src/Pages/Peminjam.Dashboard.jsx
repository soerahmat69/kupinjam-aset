import React, { useEffect, useState } from "react";

import { LayoutHome } from "../Layout/LayoutHome";
 
import { Main } from "../Component/Peminjam/Dashboard/Main";
 
import { CardPieEmpty } from "../Component/Dashboard/CardPieEmpty";
import { PeminjamSidebar } from "../Component/Peminjam.Sidebar";

export const PeminjamDashboard = () => {
  document.title = "Beranda";
  document.body.className = "bg-[#F0F0F0]";

  return (
    <LayoutHome>
      <PeminjamSidebar />
      <Main>
       <CardPieEmpty></CardPieEmpty>
      </Main>
    </LayoutHome>
  );
};
