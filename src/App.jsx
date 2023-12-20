import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import "./App.css";
import { AddLinks } from "./components/links/addLinks/AddLinks";
import Profile from "./components/Profile/Profile";
import Preview from "./components/Preview/Preview";
import Header from "./components/Profile/Header/Header";
import { useState } from "react";
import PrivateRoute from "../src/components/authentication/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      {pathname !== "/login" &&
      pathname !== "/signup" &&
      pathname !== "/Preview" ? (
        <Header />
      ) : null}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/addLinks"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<AddLinks />}
            />
          }
        />
        <Route
          path="/Profile"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<Profile />}
            />
          }
        />
        <Route
          path="/preview"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={<Preview />}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
