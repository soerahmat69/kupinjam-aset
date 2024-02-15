import React, { useEffect } from "react";
import { LayoutPermintaan } from "../Layout/LayoutPermintaan";
import { Main } from "../Component/Driver/Keberangkatan/Main";
import { DataTable } from "../Component/Driver/Keberangkatan/DataTable";
import { DriverSidebar } from "../Component/Driver.Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserSess } from "../App/Store/AuthSlice";
export const Keberangkatan = () => {
  const { isSuccess, userses } = useSelector((state) => state.auth);

  document.title = "Keberangkatan";
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
      <DriverSidebar />
      <Main>
        <DataTable  />
      </Main>
    </LayoutPermintaan>
  )
};
