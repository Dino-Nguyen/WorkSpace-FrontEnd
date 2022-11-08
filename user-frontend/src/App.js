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
import Dashboard from "./pages/Dashboard/dashboard";
import TimeLine from "./pages/Timeline/timeline";
import Task from "./pages/Task/task";
import Settings from "./pages/Settings/settings";
import Message from "./pages/Message/message";
import Files from "./pages/Files/files";
import NotFound from "./pages/NotFound/NotFound";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane,faSmile,faLocation,faVoicemail} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faPaperPlane,faSmile,faLocation,faVoicemail)

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
