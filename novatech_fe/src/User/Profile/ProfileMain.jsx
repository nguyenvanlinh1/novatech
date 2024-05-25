import { Grid } from "@mui/material";
import React from "react";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routerProfile";
import Info from "./Info";
import History from "./History";
import SignIn from "../Auth/Signin";
import Address from "./Address";
import Support from "./Support";

const ProfileMain = () => {
  return (
    <Grid container mt={14}>
      <Grid item xs={4}>
        <Profile routes={routes} />
      </Grid>
      <Grid item xs={8}>
        <Routes>
          <Route path="/info" element={<Info />} />
          <Route path="/" element={<Info />} />
          <Route path="/history" element={<History />} />
          <Route path="/address" element={<Address />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default ProfileMain;
