import React, { useEffect, useState } from "react";

import { LayoutHome } from "../Layout/LayoutHome";

import { Main } from "../Component/Driver/Dashboard/Main";

import { CardPerjalanan } from "../Component/Driver/Dashboard/CardPerjalanan";
import { PeminjamSidebar } from "../Component/Peminjam.Sidebar";
import { DriverSidebar } from "../Component/Driver.Sidebar";
import { MDashboardPergi } from "../Component/Driver/Dashboard/MDashboardPergi";
export const DriverDashboard = () => {
  document.title = "Dashboard";
  document.body.className = "bg-[#F0F0F0]";

  return (
    <LayoutHome>
      <DriverSidebar />
      <Main>
        <CardPerjalanan />
      </Main>
    </LayoutHome>
  );
};
