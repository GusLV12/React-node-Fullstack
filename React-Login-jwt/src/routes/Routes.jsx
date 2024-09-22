import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Test } from "../views";
import PrivateRoute from "./Privaterouter";

export const RoutesViews = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Test /></PrivateRoute>} />
      </Routes>
  );
};
