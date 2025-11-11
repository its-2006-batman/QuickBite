import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const UserRegister = () => {
  return (
    <div className="auth-root">
      <div className="auth-card" role="region" aria-label="User registration">
        <div className="auth-header">
          <h2 className="auth-title">Create your account</h2>
        </div>
        <p className="auth-sub">Simple, secure sign up for users.</p>

        <form className="auth-form" aria-label="user-register-form">
          <div>
            <label htmlFor="name">Full name</label>
            <input id="name" className="auth-input" name="name" placeholder="Jane Doe" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" className="auth-input" name="email" type="email" placeholder="you@example.com" />
          </div>

          <div>
            <label htmlFor="contact">Contact phone</label>
            <input id="contact" className="auth-input" name="contact" type="tel" placeholder="+1 555 555 5555" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" className="auth-input" name="password" type="password" placeholder="••••••••" />
          </div>

          <div className="auth-actions">
            <button type="button" className="btn btn-primary">Create account</button>
            <button type="button" className="btn btn-ghost">Cancel</button>
          </div>

          <div className="form-foot">Already have an account? <Link to="/user/login" className="link">Sign in</Link></div>
        </form>
      </div>
    </div>
  )
}

export default UserRegister
