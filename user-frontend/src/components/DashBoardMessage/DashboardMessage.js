import React from 'react';
import { Avatar } from '@mui/material';
import classes from './DashboardMessage.module.scss';

export default function DashboardMessage() {
  return (
    <div className={classes['chat--container']}>
      <div className={classes['chat']}>
        <Avatar className={classes['chat--avatar']} />
        <div className={classes['chat--content']}>
          <h4>Chat name</h4>
          <p>Latest Message</p>
        </div>
      </div>
      <div className={classes['chat']}>
        <Avatar className={classes['chat--avatar']} />
        <div className={classes['chat--content']}>
          <h4>Chat name</h4>
          <p>Latest Message</p>
        </div>
      </div>
      <div className={classes['chat']}>
        <Avatar className={classes['chat--avatar']} />
        <div className={classes['chat--content']}>
          <h4>Chat name</h4>
          <p>Latest Message</p>
        </div>
      </div>
      <div className={classes['chat']}>
        <Avatar className={classes['chat--avatar']} />
        <div className={classes['chat--content']}>
          <h4>Chat name</h4>
          <p>Latest Message</p>
        </div>
      </div>
    </div>
  );
}
