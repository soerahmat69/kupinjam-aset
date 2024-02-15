import { Navigate } from "react-router-dom";
import { Auth } from "../../Pages/Auth";
import { Dashboard } from "../../Pages/Dashboard";
import { Permintaan } from "../../Pages/Permintaan";
import { Perawatan } from "../../Pages/Perawatan";
import { Asset } from "../../Pages/Asset";
import { SesiGuna } from "../../Pages/SesiGuna";
import { User } from "../../Pages/User";
import { AssetDetail } from "../../Pages/AssetDetail";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSess } from "../Store/AuthSlice";
import { reset } from "../Store/AuthSlice";
import React from "react";
import { Sistem } from "../../Pages/Sistem";
import { PeminjamDashboard } from "../../Pages/Peminjam.Dashboard";
import { PeminjamPermintaan } from "../../Pages/Peminjam.Permintaan";
import { PageNotFound } from "../../Pages/PageNotFound";
import { DriverDashboard, SopirDashboard } from "../../Pages/Driver.Dashboard";
import { Keberangkatan } from "../../Pages/Driver.Keberangkatan";
import { Exportpdf } from "../Exportpdf";

const PrivateRoute = ({
  element,
  RoleState,
  RoleAllowed,
  isAuthenticated,
  fallbackPath,
}) => {
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      if (RoleState?.jabatan[0].role === RoleAllowed) {
        setRedirectPath(null);
      } else {
        setRedirectPath("/404");
      }
    } else {
      setRedirectPath(fallbackPath);
    }
  }, [isAuthenticated, RoleState, RoleAllowed, fallbackPath]);

  return redirectPath ? <Navigate to={redirectPath} replace /> : element;
};

export const Routes = () => {
  const [UserRole, setUserRol] = useState("");
  const { isSuccess, userses, isLoading } = useSelector((state) => state.auth);
  const { isSuccessLogin } = useSelector((state) => state.authLogin);
  const dispatch = useDispatch();

  useEffect(() => {
  
      dispatch(UserSess());
  
  }, [isSuccessLogin]);

  function Authen() {
 
      if (isSuccess && userses != null && userses?.jabatan[0].role === "admin") {
        return <Navigate to={"/admin/dashboard"} replace />;
      } else if (isSuccess && userses?.jabatan[0].role === "karyawan") {
        return <Navigate to={"/dashboard"} replace/>;
      } else if (isSuccess && userses?.jabatan[0].role === "pengemudi") {
        return <Navigate to={"/driver/dashboard"} replace/>;
      }
      return <Auth />;
  }
  return [
    {
      path: "/",
      element: Authen(),
    },
    {
      path: "/admin/dashboard",
      element: (
        <PrivateRoute
          element={<Dashboard />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"admin"}
          fallbackPath={"/"}
        />
      ),
    },
    {
      path: "/admin/permintaan",
      element: (
        <PrivateRoute
          element={<Permintaan />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"admin"}
          fallbackPath={"/"}
        />
      ),
    },
    {
      path: "/admin/perawatan",
      element: <Perawatan />,
    },
    {
      path: "/admin/asset",
      element: (
        <PrivateRoute
          element={<Asset />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"admin"}
          fallbackPath={"/"}
        />
      ),
    },
    {
      path: "/admin/sesiguna",
      element: (
        <PrivateRoute
          element={<SesiGuna />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"admin"}
          fallbackPath={"/"}
        />
      ),
    },
    {
      path: "/admin/sistem",
      element: (
        <PrivateRoute
          element={<Sistem />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"admin"}
          fallbackPath={"/"}
        />
      ),
    },
    {
      path: "/admin/user",
      element: (
        <PrivateRoute
          element={<User />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"admin"}
          fallbackPath={"/"}
        />
      ),
    },

    {
      path: "/admin/asset/:id",
      element: (
        <PrivateRoute
          element={<AssetDetail />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"admin"}
          fallbackPath={"/"}
        />
      ),
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute
          element={<PeminjamDashboard />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"karyawan"}
          fallbackPath={"/"}
        />
      ),
    },
    {
      path: "/permintaan",
      element: (
        <PrivateRoute
          element={<PeminjamPermintaan />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"karyawan"}
          fallbackPath={"/"}
        />
      ),
    },
    {
      path: "/driver/dashboard",
      element: (
        <PrivateRoute
          element={<DriverDashboard />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"pengemudi"}
          fallbackPath={"/"}
        />
      ), 
      
    },
    {
      path: "/driver/keberangkatan",
      element: (
        <PrivateRoute
          element={<Keberangkatan />}
          isAuthenticated={isSuccess}
          RoleState={userses}
          RoleAllowed={"pengemudi"}
          fallbackPath={"/"}
        />
      ), 
      
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/admin/exportpdf",
      element: <Exportpdf />, 
      
    },
  ];
};
