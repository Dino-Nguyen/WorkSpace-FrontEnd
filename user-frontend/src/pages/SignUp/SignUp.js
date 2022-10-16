import { useState } from 'react';

export default function SignUp() {
  const initialState = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    fullName: '',
  };

  const [input, setInput] = useState(initialState);

  const inputChangeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const signUpHandler = () => {};

  return (
    <form onSubmit={signUpHandler}>
      <h1>Sign Up</h1>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={input.username}
          name="username"
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={input.email}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={input.password}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="repeatPassword">re-Password: </label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          value={input.repeatPassword}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Full Name: </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={input.fullName}
          onChange={inputChangeHandler}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}
