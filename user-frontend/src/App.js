import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { HeaderBar } from './Components/HeaderBar/headerbar';
import { Menu } from './Components/Menu/menu';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import DashBoard from './pages/DashBoard/dashboard';
import TimeLine from './pages/TimeLine/timeline';
import Task from './pages/Task/task';
import Settings from './pages/Settings/settings';
import Message from './pages/Message/message';
import Files from './pages/Files/files';
import NotFound from './pages/NotFound/NotFound';
import { Navigate } from 'react-router-dom';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      {isAuthenticated && <HeaderBar />}
      {isAuthenticated && <Menu />}
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/task" element={<Task />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/message" element={<Message />} />
        <Route path="/files" element={<Files />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
