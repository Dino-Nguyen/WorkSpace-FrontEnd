import React from "react";
import "./message.css";
import ChatBody from "../../components/chatBody/ChatBody";
import Sidebar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Message({ sideBarVisibility, onSideBarShow }) {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="main">
      <NavBar
        sideBarVisibility={sideBarVisibility}
        onSideBarShow={onSideBarShow}
      />
      <div className="main-chat">
        <Sidebar
          sideBarVisibility={sideBarVisibility}
          onSideBarShow={onSideBarShow}
        />
        <ChatBody />
      </div>
    </div>
  );
}

export default Message;
