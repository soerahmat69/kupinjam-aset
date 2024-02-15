import React, { useEffect, useState } from "react";

import { LayoutHome } from "../Layout/LayoutHome";
import { Sidebar } from "../Component/Sidebar";
import { Main } from "../Component/Dashboard/Main";
import { CardPie } from "../Component/Dashboard/CardPie";
import { CardPieEmpty } from "../Component/Dashboard/CardPieEmpty";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserSess, reset } from "../App/Store/AuthSlice";
import axios from "axios";
import { setPunchStatus } from "../App/Store/PunchData";

export const Dashboard = () => {
  const { isSuccess, userses } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [DataVis, setDataVis] = useState([]);
  const {Punchstatus} = useSelector( state=> state.punchh)


  document.title = "Dashboard";
  document.body.className = "bg-[#F0F0F0]";

  const getVisPie = async () => {
   
    await axios.get(`http://localhost:8080/admin/visualpie`).then((res) => {
      setDataVis(res.data.data);
    });
  };
  useEffect(() => {

    getVisPie();
  }, []);
  return (
    <LayoutHome>
      <Sidebar />
      <Main>
        {DataVis &&
          DataVis.map((res) => {
            return (
              <>
                <CardPie
                  titlePie={res.title}
                  LabelsData={res.name_param}
                  dataArray={res.count}
                  IdVispie={res._id}
                />
              </>
            );
          })}

        {DataVis && DataVis.length <= 0 ? (
          <>
            <CardPieEmpty />
            <CardPieEmpty />
            <CardPieEmpty />
          </>
        ) : DataVis.length <= 1 ? (
          <>
            <CardPieEmpty />
            <CardPieEmpty />
          </>
        ) : DataVis.length <= 2 ? (
          <CardPieEmpty />
        ) : (
          ""
        )}
      </Main>
    </LayoutHome>
  );
};
