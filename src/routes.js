import { Route, Routes } from "react-router-dom";
import Rank from "./pages/Rank.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Home from "./pages/Home.js";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Rank />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
