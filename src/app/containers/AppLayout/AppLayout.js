import React from "react";
import { Routes, Route } from "react-router-dom";
/* ------------- || Components Imports || ------------- */
import ProtectedRoute from "../../components/ProtectedRoute";
import Sidebar from "../SideBar";
/* ------------- || Pages Imports || ------------- */
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";

const AppLayout = () => {
  return (
    <div>
      <Sidebar />

      <div style={{ paddingLeft: "250px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppLayout;
