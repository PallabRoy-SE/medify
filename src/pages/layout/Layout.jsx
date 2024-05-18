import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import MedNotice from "../../components/notice/MedNotice";
import MedNavbar from "../../components/navbar/MedNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import { getNavItems } from "../../services/genericService";
import Hospitals from "../hospitals/Hospitals";

function Layout() {
  const [routes, setRoutes] = useState([]);

  const loadRoutes = async () => {
    try {
      const resRoutes = await getNavItems();
      setRoutes(() => [...resRoutes]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadRoutes();
  }, []);
  return (
    <Box component="main">
      <MedNotice />
      <MedNavbar links={routes} />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="hospitals" Component={Hospitals} />
        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>
    </Box>
  );
}

export default Layout;
