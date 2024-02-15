import React, { useEffect } from "react";
import { LayoutAuth } from "../Layout/LayoutAuth";
import { FormLogin } from "../Component/Auth/FormLogin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserSess, reset } from "../App/Store/AuthSlice";
export const Auth = () => {

  // const { } = useSelector((state) => state.auth);
  document.title = "Login";
  document.body.className = "bg-[#F0F0F0]";
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isSuccess, userses } = useSelector((state) => state.auth);


 
  return (
 
        <LayoutAuth>
          <FormLogin />
        </LayoutAuth>

  );
};
