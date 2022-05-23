import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import DenseAppBar from "./components/VerticalTabs";
import TabPanel from "./components/VerticalTabs";
import VerticalTabs from "./components/VerticalTabs";
import ComplexGrid from "./components/ComplexGrid";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/verticaltabs" element={<VerticalTabs />} />
          <Route path="/complexgrid" element={<ComplexGrid />} />

        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;