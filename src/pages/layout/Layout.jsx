import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import MedNotice from "../../components/notice/MedNotice";
import MedNavbar from "../../components/navbar/MedNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import { getNavItems } from "../../services/genericService";
import Hospitals from "../hospitals/Hospitals";
import MyBookings from "../my-bookings/MyBookings";
import { ReactComponent as Faq } from "../../assets/faq/faq.svg";
import { ReactComponent as Downloads } from "../../assets/downloads/downloads.svg";
import { ReactComponent as Footer } from "../../assets/footer.svg";
import { colors } from "../../theme/variables";

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
        <Route path="my-bookings" Component={MyBookings} />
        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>
      <Box component="section" backgroundColor={colors.white}>
        <Container component="section" maxWidth="lg">
          <Faq />
        </Container>
      </Box>
      <Container
        component="section"
        maxWidth="lg"
        sx={{ pt: 4, position: "relative", zIndex: -1 }}
      >
        <Downloads />
      </Container>
      <Box component="section" backgroundColor={colors.secondary} mt="-5rem">
        <Container component="section" maxWidth="lg">
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
