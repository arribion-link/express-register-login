import Header from "../components/partials/Header.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register.jsx";
import User from "../pages/User";
import Admin from "../pages/Admin";

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ["/login", "/register"]; // Optional: hide header on auth pages

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
