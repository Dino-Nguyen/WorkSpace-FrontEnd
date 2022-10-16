import { authActions } from '../slices/auth';
import setBearerToken from '../../utils/axios';
import axios from 'axios';

export const signIn = (payload, navigate, toast) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      try {
        const response = await axios.post('sign-in', payload);
        return response.data;
      } catch (error) {
        toast.error(error.response.data.message, { theme: 'dark' });
        throw new Error(error.response.data.message);
      }
    };

    try {
      const { user, message } = await sendRequest();
      localStorage.setItem('token', user.token);
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(authActions.signIn(user));
      setBearerToken(user.token);
      toast.success(message, { theme: 'dark' });
      if (message) navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
};

export const signOut = (navigate, toast) => {
  return (dispatch) => {
    setBearerToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    dispatch(authActions.signOut());
    navigate('/');
    toast.success('Successfully sign out.', { theme: 'dark' });
  };
};

export const signUp = async (
  { username, email, password, repeatPassword, fullName },
  dispatch,
) => {
  if (password !== repeatPassword) {
    alert('Password do not match!');
  } else {
    try {
      const res = await axios.post('/sign-up', {
        username,
        email,
        password,
        repeatPassword,
        fullName,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
};
