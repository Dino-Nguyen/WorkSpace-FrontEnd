import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../store/actions/auth';
import { toast } from 'react-toastify';

export const HeaderBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    dispatch(signOut(navigate, toast));
  };

  return (
    <div>
      <div>
        <input placeholder="search..." />
      </div>
      <div>
        <button type="button" onClick={signOutHandler}>
          Sign out
        </button>
      </div>
    </div>
  );
};
