
import { useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import { Routes } from './App/Routes/Route';
import { UserSess ,reset} from './App/Store/AuthSlice';

export const App = () => {
  const dispatch = useDispatch()
  const { userses, isError, isSuccess } = useSelector((state) => state.auth);
  const routing = useRoutes(Routes(isSuccess));
  return (
    <>
      {routing}
    </>
  );
}
