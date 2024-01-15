import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dasboard";
import Pricing from "./components/Pricing";
import Admin from "./components/Admin";
import Super from "./components/Super";
import { useState } from "react";
import AppContext from "./AppContext";
function App() {
  const [service, setService] = useState("");
  const [id, setId] = useState("");
  return (
    <>
      <AppContext.Provider value={{ service, setService, id, setId }}>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/super" element={<Super />}></Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
