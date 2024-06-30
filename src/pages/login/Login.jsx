import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'


const Login = () => {
  const [formMode, setFormMode] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(false)

  const userAuth = async (event) => {
    event.preventDefault();
    setLoading(true)
      if (formMode === 'Sign In') {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
      setLoading(false)
  };

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt='Logo' />
      <div className='login-form'>
        <h1>{formMode}</h1>
        {error && <p className='error-message'>{error}</p>}
        <form onSubmit={userAuth}>
          {formMode === 'Sign Up' && (
            <div className='form-group'>
              <label htmlFor='name'>Your Name</label>
              <input
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder='Your name'
              />
            </div>
          )}
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Password'
            />
          </div>
          <button type='submit'>{formMode}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {formMode === 'Sign In' ? (
            <p>
              New to Netflix?{' '}
              <span onClick={() => setFormMode('Sign Up')}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={() => setFormMode('Sign In')}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
