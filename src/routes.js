import { Route, Routes, Navigate } from "react-router-dom";
import Rank from "./pages/Rank.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Home from "./pages/Home.js";
import { useContext } from "react";
import { UserContext } from "./context/user.context.js";

export default function MyRoutes() {
  const { user } = useContext(UserContext);
  const isAuth = user !== null;

  return (
    <Routes>
      <Route path="/" element={<Rank />} />
      <Route
        path="/login"
        element={isAuth ? <Navigate to="/home" /> : <Login />}
      />
      <Route
        path="/register"
        element={isAuth ? <Navigate to="/home" /> : <Register />}
      />
      <Route
        path="/home"
        element={isAuth ? <Home /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
