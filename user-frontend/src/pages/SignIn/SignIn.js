import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../store/actions/auth';
import { toast } from 'react-toastify';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailInputChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(signIn(payload, navigate, toast));
  };

  return (
    <form onSubmit={signInHandler}>
      <h1>Sign In</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailInputChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={passwordInputChangeHandler}
        />
      </div>
      <button type="submit">Sign In</button>
      <button
        type="button"
        onClick={() => {
          navigate('/sign-up');
        }}>
        Sign Up
      </button>
    </form>
  );
}
