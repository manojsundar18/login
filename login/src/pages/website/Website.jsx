import React, { useState } from 'react';
import Login from '../login/Login';
import Signup from '../signup/Signup';
const Website = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='web-container'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {isLogin ? <Login /> : <Signup />}
      <p>
        {isLogin
          ? "Don't have an account? "
          : 'Already have an account? '}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign up' : 'Login'}
        </button>
      </p>
    </div>
  );
};
export default Website;