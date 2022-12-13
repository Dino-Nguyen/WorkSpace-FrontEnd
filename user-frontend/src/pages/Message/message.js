import React from 'react';
import classes from './message.module.css';
import ChatBody from '../../components/chatBody/ChatBody';
import Sidebar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';

function Message({ sideBarVisibility, onSideBarShow }) {
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
      <div className={classes['main']}>
        <ChatBody />
      </div>
    </React.Fragment>
  );
}

export default Message;
