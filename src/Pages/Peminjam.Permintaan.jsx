import React, { useEffect } from "react";
import { LayoutPermintaan } from "../Layout/LayoutPermintaan";
import { Sidebar } from "../Component/Sidebar";
import { Main } from "../Component/Peminjam/Permintaan/Main";
import { DataTable } from "../Component/Peminjam/Permintaan/DataTable";
import { PeminjamSidebar } from "../Component/Peminjam.Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserSess } from "../App/Store/AuthSlice";
export const PeminjamPermintaan = () => {
  const { isSuccess, userses } = useSelector((state) => state.auth);

  document.title = "Peminjaman";
  document.body.className = "bg-[#F0F0F0]";
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(UserSess())
  },[])
  useEffect(()=>{
   
   
   
  },[])
  return (
    <LayoutPermintaan>
      <PeminjamSidebar />
      <Main>
        <DataTable  />
      </Main>
    </LayoutPermintaan>
  )
};
