import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './CreateBoardForm.module.scss';
import boardApi from '../../store/actions/api/board';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CreateBoardForm({
  newBoardFormVisibility,
  onNewBoardFormShow,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [boardTitle, setBoardTitle] = useState('');
  const [boardStatus, setBoardStatus] = useState('public');

  const closeCreateBoardFormHandler = () => {
    onNewBoardFormShow(false);
  };

  const createBoardHandler = (e) => {
    e.preventDefault();
    const payload = { title: boardTitle, status: boardStatus };
    boardApi.createBoard(payload).then((data) => {
      toast.success(data.message, { theme: 'colored' });
      navigate(`${location.pathname}/${data.newBoard._id}`);
    });
  };

  const boardTitleHandler = (e) => {
    setBoardTitle(e.target.value);
  };

  const boardStatusHandler = (e) => {
    setBoardStatus(e.target.value);
  };

  return (
    newBoardFormVisibility && (
      <>
        {ReactDOM.createPortal(
          <div
            className={classes['backdrop']}
            onClick={closeCreateBoardFormHandler}></div>,
          document.getElementById('backdrop-root'),
        )}
        <form
          className={classes['new-board-form']}
          onSubmit={createBoardHandler}>
          <div className={classes['new-board-form--header']}>
            <h2>New Workspace</h2>
          </div>
          <div className={classes['new-board-form--body']}>
            <label htmlFor="board-title">Board title *</label>
            <input
              type="text"
              id="board-title"
              autoComplete="off"
              value={boardTitle}
              onChange={boardTitleHandler}
            />
            <label htmlFor="board-status">Visibility</label>
            <select defaultValue={boardStatus} onChange={boardStatusHandler}>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div className={classes['new-board-form--footer']}>
            <button onClick={closeCreateBoardFormHandler} type="button">
              Cancel
            </button>
            <button type="submit">Create Workspace</button>
          </div>
        </form>
      </>
    )
  );
}
