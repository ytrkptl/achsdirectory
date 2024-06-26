import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";

const RoutesComponent = ({ searchfield }) => {
  return (
    <Routes>
      <Route element={<Outlet />} />
      <Route path="*" index element={<Home searchfield={searchfield} />} />
    </Routes>
  );
};

export default RoutesComponent;
