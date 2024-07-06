import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DepartmentPage from "@/pages/DepartmentPage";
import ContactPage from "@/pages/ContactPage";
import ContactDetailsPage from "@/pages/ContactDetailsPage";
import NoMatchPage from "./pages/NoMatchPage";
import { SubjectUrls } from "./data/subjectUrls";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<Outlet />} />
      <Route path="/" index element={<HomePage />} />
      {SubjectUrls.map((subject) => {
        return (
          <Route
            key={subject}
            index
            path={`/${subject}`}
            element={<DepartmentPage />}
          />
        );
      })}
      <Route exact path="/:departmentId/:contactId" element={<ContactPage />} />
      <Route
        exact
        path="/:departmentId/:contactId/info"
        element={<ContactDetailsPage />}
      />
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  );
};

export default RoutesComponent;
