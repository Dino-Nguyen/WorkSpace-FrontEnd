import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

import React from "react";

const ChatContent = () => {
  const messagesEndRef = useRef(null);
  const [chatBox,setChatBox] = useState('')

  const [chatItems, setChatItems] = useState([
    {
      key: 1,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      type: "",
      msg: "Hi How are you?",
    },
    {
      key: 2,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      type: "other",
      msg: "hello I am fine.",
    },
    {
      key: 3,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      type: "",
      msg: "Nice to mmet you",
    },
    {
      key: 4,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      type: "other",
      msg: "Nice to meet you too",
    },
    {
      key: 5,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      type: "",
      msg: "I want to talk to you about our next project",
    },
    {
      key: 6,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      type: "other",
      msg: "yes ",
    },
    {
      key: 7,
      image:
        "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      type: "other",
      msg: "yes ",
    },
  ]);



  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom()
  }, [chatBox]);

  const handleSubmit = () => {
    if (chatBox !== "") {
      const updateChat = [{
        key: 8,
        type: "",
        msg: chatBox,
        image:
          "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
      }]
      setChatItems( chatItems => ([...chatItems,...updateChat]));
      scrollToBottom();
      setChatBox("");
    }
  }


  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
            />
            <p>insert name</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chatItems.map((items) => {
            return (<ChatItem
              // animationDelay={index + 2}
              key={items.key}
              user={items.type ? items.type : "me"}
              msg={items.msg}
              image={items.image}
            />)
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <FontAwesomeIcon icon="fa-voicemail" />
          </button>
          <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit()
          }} className="formInput">
          <input
            type="text"
            placeholder="Type a message here"
            onChange={(e)=>setChatBox( e.target.value)}
            value={chatBox}
            className="inputBox"
          />
          </form>
          <div>

          <button className="btnSendMsg" id="sendMsgBtn">
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
          </button>
          <button className="btnSendMsg" id="sendMsgBtn">
            <FontAwesomeIcon icon="fa-smile" />
          </button>
          <button className="btnSendMsg" id="sendMsgBtn">
            <FontAwesomeIcon icon="fa-location" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
