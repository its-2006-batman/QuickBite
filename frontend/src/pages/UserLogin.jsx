import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const UserLogin = () => {
  return (
    <div className="auth-root">
      <div className="auth-card" role="region" aria-label="User login">
        <div className="auth-header">
          <h2 className="auth-title">Welcome back</h2>
        </div>
        <p className="auth-sub">Sign in to continue to your account.</p>

        <form className="auth-form" aria-label="user-login-form">
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" className="auth-input" name="email" type="email" placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" className="auth-input" name="password" type="password" placeholder="••••••••" />
          </div>

          <div className="auth-actions">
            <button type="button" className="btn btn-primary">Sign in</button>
            <button type="button" className="btn btn-ghost">Forgot?</button>
          </div>

          <div className="form-foot">No account? <Link to="/user/register" className="link">Create one</Link></div>
        </form>
      </div>
    </div>
  )
}

export default UserLogin
