import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Sidebar from "./components/SideBar/SideBar";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import TimeLine from "./pages/TimeLine/Timeline";
import Task from "./pages/Task/Task";
import Settings from "./pages/Settings/Settings";
import Message from "./pages/Message/message.js";
import Files from "./pages/Files/Files";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [sideBarVisibility, setSideBarVisibility] = useState(false);

  return (
    <div className="App">
      {isAuthenticated && (
        <NavBar
          sideBarVisibility={sideBarVisibility}
          onSideBarShow={setSideBarVisibility}
        />
      )}
      {isAuthenticated && (
        <Sidebar
          sideBarVisibility={sideBarVisibility}
          onSideBarShow={setSideBarVisibility}
        />
      )}
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={<Dashboard sideBarVisibility={sideBarVisibility} />}
        />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/files" element={<Files />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
