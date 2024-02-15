import React from "react";

import { LayoutAssetDetail } from "../Layout/LayoutAsset";
import { Sidebar } from "../Component/Sidebar";
import { Main } from "../Component/Asset/AssetDetail/Main";
import { DataTable } from "../Component/Asset/AssetDetail/DataTable";

export const AssetDetail = () => {
  document.title = "Asset Detail";
  document.body.className = "bg-[#F0F0F0]";
  
  return (
    <LayoutAssetDetail>
      <Sidebar />
      <Main>
        <DataTable />
      </Main>
    </LayoutAssetDetail>
  );
};
