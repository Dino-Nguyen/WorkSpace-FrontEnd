import React, { useEffect, useState } from 'react';
import boardApi from '../../store/actions/api/board';
import clsx from 'clsx';
import classes from './BoardsList.module.scss';
import { useNavigate, generatePath, useLocation } from 'react-router-dom';

export default function BoardsList({ onNewBoardFormShow }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [yourBoards, setYourBoards] = useState([]);
  const [invitedBoards, setInvitedBoards] = useState([]);

  useEffect(() => {
    boardApi.fetchAllYoursBoards().then((data) => {
      setYourBoards(data.yourBoards);
    });
  }, []);

  const toBoardDetail = (id) => {
    const path = generatePath(`${location.pathname}/:id`, { id });
    navigate(path);
  };

  useEffect(() => {
    boardApi.fetchAllInvitedBoards().then((data) => {
      setInvitedBoards(data.invitedBoards);
    });
  }, []);

  const showCreateBoardFormHandler = () => {
    onNewBoardFormShow(true);
  };

  return (
    <React.Fragment>
      <div className={clsx(classes['your-boards--container'])}>
        <h3>Your Workspace</h3>
        <div className={clsx(classes['your-boards'])}>
          {yourBoards &&
            yourBoards.map((board) => (
              <article
                key={board._id}
                onClick={() => {
                  toBoardDetail(board._id);
                }}
                className={clsx(classes['your-boards--item'])}>
                <p>{board.title}</p>
              </article>
            ))}
          <button onClick={showCreateBoardFormHandler}>Create New Board</button>
        </div>
      </div>
      <div className={clsx(classes['guest-boards--container'])}>
        <h3>Guest Boards</h3>
        <div className={clsx(classes['guest-boards'])}>
          {invitedBoards &&
            invitedBoards.map((board) => (
              <article
                key={board._id}
                onClick={() => {
                  toBoardDetail(board._id);
                }}
                className={clsx(classes['guest-boards--item'])}>
                <p>{board.title}</p>
              </article>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}
