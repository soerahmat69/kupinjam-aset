import React, { useEffect, useState } from "react";
import { LayoutAsset } from "../Layout/LayoutAsset";
import { Sidebar } from "../Component/Sidebar";
import { Main } from "../Component/Asset/Main";

import { AssetCard } from "../Component/Asset/AssetCard";
import axios from "axios";

export const Asset = () => {
  const [data, setdata] = useState([]);
  document.title = "Asset";
  document.body.className = "bg-[#F0F0F0]";
  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/asset`)
      .then((res) => {
        const oV = res.data.data;
       
        setdata(oV);
      })
      .catch((res) => {});
  }, []);
  return (
    <LayoutAsset>
      <Sidebar />
      <Main>
        {data &&
          data.map((res) => {
            console.log(res)
            return (
              <AssetCard
              id={res._id}
                NamaMobil={res.nama_kendaraan}
                PLatNomor={res.plat_nomor}
                JumKM={res.km}
                JumTerpakai={res.count}
                status={res.status}
                assetPath={res.assetPath}
              />
            );
          })}
      </Main>
    </LayoutAsset>
  );
};
