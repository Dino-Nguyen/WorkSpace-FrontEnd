import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../store/actions/auth';
import { toast } from 'react-toastify';
import './headerbar.css'

export const HeaderBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    dispatch(signOut(navigate, toast));
  };

  return (
    <div className='headerbar'>
      <div className='searchBox'>
        <input className='search' placeholder="Search..." />
      </div>
      <div className='btnSignOut'>
        <button type="button" onClick={signOutHandler}>
          Sign out
        </button>
      </div>
    </div>
  );
};
