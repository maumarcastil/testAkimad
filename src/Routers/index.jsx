import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import UserDetails from "../pages/UserDetails";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/userDetails" element={<UserDetails />} />
    </Routes>
  );
};

export default RootRouter;
