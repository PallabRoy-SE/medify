import { Box } from "@mui/material";
import React from "react";
import MedNotice from "../../components/notice/MedNotice";
import MedNavbar from "../../components/navbar/MedNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";

const links = [
  { id: 1, label: "Find Doctors", to: "/doctors" },
  { id: 2, label: "Hospitals", to: "" },
  { id: 3, label: "Medicines", to: "" },
  { id: 4, label: "Surgeries", to: "" },
  { id: 5, label: "Software for Provider", to: "" },
  { id: 6, label: "Facilities", to: "" },
];

function Layout() {
  return (
    <Box component="main">
      <MedNotice />
      <MedNavbar links={links} />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Box>
  );
}

export default Layout;
