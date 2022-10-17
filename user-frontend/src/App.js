import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { HeaderBar } from './components/HeaderBar/headerbar';
import { Menu } from './components/Menu/menu';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import DashBoard from './pages/DashBoard/dashboard';
import TimeLine from './pages/TimeLine/timeline';
import Task from './pages/Task/task';
import Settings from './pages/Settings/settings';
import Message from './pages/Message/message';
import Files from './pages/Files/files';
import NotFound from './pages/NotFound/NotFound';

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
