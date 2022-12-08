import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Sidebar from '../../components/SideBar/SideBar';
import ChatBody from '../../components/chatBody/ChatBody';
import classes from './Message.module.scss';

export default function Messages({ sideBarVisibility, onSideBarShow }) {
  return (
    <React.Fragment>
      <NavBar
        sideBarVisibility={sideBarVisibility}
        onSideBarShow={onSideBarShow}
      />
      <Sidebar
        sideBarVisibility={sideBarVisibility}
        onSideBarShow={onSideBarShow}
      />
      <div className={classes['message-container']}>
        <ChatBody />
      </div>
    </React.Fragment>
  );
}
