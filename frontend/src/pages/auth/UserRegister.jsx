import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response=await axios.post('http://localhost:3000/api/auth/user/register', {
      fullName: firstName + ' ' + lastName,
      email: email,
      password: password
    },{
      withCredentials: true
    })

    console.log(response.data);

    navigate('/home');
  };


  return (
    <div className="auth-root">
      <div className="auth-card" role="region" aria-label="User registration">
        <div className="auth-header">
          <h2 className="auth-title">Create your account</h2>
        </div>
        <p className="auth-sub">Simple, secure sign up for users.</p>

  <form className="auth-form" aria-label="user-register-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First name</label>
            <input id="firstName" className="auth-input" name="firstName" placeholder="Jane" />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" className="auth-input" name="lastName" placeholder="Doe" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" className="auth-input" name="email" type="email" placeholder="you@example.com" />
          </div>

          

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" className="auth-input" name="password" type="password" placeholder="••••••••" />
          </div>

          <div className="auth-actions">
            <button type="submit" className="btn btn-primary">Create account</button>
            <button type="button" className="btn btn-ghost">Cancel</button>
          </div>

          <div className="form-foot">Already have an account? <Link to="/user/login" className="link">Sign in</Link></div>
        </form>
      </div>
    </div>
  )
}

export default UserRegister
