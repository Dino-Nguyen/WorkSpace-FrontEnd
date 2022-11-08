import React, { useState } from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from './utils/RequireAuth';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/dashboard';
import Timeline from './pages/Timeline/timeline';
import Tasks from './pages/Tasks/Tasks';
import TaskDetail from './pages/TaskDetail/TaskDetail';
import Settings from './pages/Settings/settings';
import Messages from './pages/Messages/Messages';
import Files from './pages/Files/files';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);

  return (
    <main className="App">
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />

        {/* public routes */}
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                sideBarVisibility={sideBarVisibility}
                onSideBarShow={setSideBarVisibility}
              />
            }
          />
          <Route
            path="timeline"
            element={
              <Timeline
                sideBarVisibility={sideBarVisibility}
                onSideBarShow={setSideBarVisibility}
              />
            }
          />
          <Route
            path="tasks"
            element={
              <Tasks
                sideBarVisibility={sideBarVisibility}
                onSideBarShow={setSideBarVisibility}
              />
            }
          />
          <Route
            path="tasks/:id"
            element={
              <TaskDetail
                sideBarVisibility={sideBarVisibility}
                onSideBarShow={setSideBarVisibility}
              />
            }
          />
          <Route
            path="settings"
            element={
              <Settings
                sideBarVisibility={sideBarVisibility}
                onSideBarShow={setSideBarVisibility}
              />
            }
          />
          <Route
            path="messages"
            element={
              <Messages
                sideBarVisibility={sideBarVisibility}
                onSideBarShow={setSideBarVisibility}
              />
            }
          />
          <Route
            path="files"
            element={
              <Files
                sideBarVisibility={sideBarVisibility}
                onSideBarShow={setSideBarVisibility}
              />
            }
          />
        </Route>

        {/* catch other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
