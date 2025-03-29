import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GetEntry from "../components/addCompany/GetEntry";
import AddEntry from "../components/addCompany/AddEntry";
const RouterMain = () => {
  const route = createBrowserRouter([
    { path: "/", element: <GetEntry/> },
    { path: "/add", element: <AddEntry/> },
    { path: "/edit/:id", element: "edit company page" },
  ]);
  return (
    <>
    <RouterProvider router={route}></RouterProvider>
      {/* <Router>
        <Routes>
          <Route path="/" element={<GetEntry />} />
        </Routes>
      </Router> */}
    </>
  );
};

export default RouterMain;
