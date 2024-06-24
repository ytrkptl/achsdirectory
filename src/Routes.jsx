/* eslint-disable react/prop-types */
import { Route, Routes, Outlet } from "react-router-dom";
// import AdminSignIn from "./components/Admin/AdminSignIn";
import Home from "./Home";

const RoutesComponent = ({ searchfield }) => {
  return (
    <Routes>
      <Route element={<Outlet />} />
      <Route path="*" index element={<Home searchfield={searchfield} />} />
      {/* <Route path="/admin" element={<AdminSignIn />} /> */}
    </Routes>
  );
};

export default RoutesComponent;
