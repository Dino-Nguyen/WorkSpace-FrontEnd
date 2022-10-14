import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { HeaderBar } from './Components/HeaderBar/headerbar';
import {Menu} from './Components/Menu/menu'
import { DashBoard } from "./Components/Menu/DashBoard/dashboard";
import {TimeLine} from "./Components/Menu/TimeLine/timeline"
import { Task } from "./Components/Menu/Task/task"
import {Settings} from "./Components/Menu/Settings/settings"
import {Message} from "./Components/Menu/Message/message"
import {Files} from "./Components/Menu/Files/files"

function App() {
  return (
    <div className="App">
      
        <HeaderBar/>
        <Menu/>
        <Routes>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/timeline" element={<TimeLine/>}/>
            <Route path="/task" element={<Task/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/message" element={<Message/>}/>
            <Route path="/files" element={<Files/>}/>
        </Routes>
    </div>
  );
}

export default App;
