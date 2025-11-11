import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const FoodPartnerLogin = () => {
  return (
    <div className="auth-root">
      <div className="auth-card" role="region" aria-label="Food partner login">
        <div className="auth-header">
          <h2 className="auth-title">Partner sign in</h2>
        </div>
        <p className="auth-sub">Access your partner dashboard and manage listings.</p>

        <form className="auth-form" aria-label="partner-login-form">
          <div>
            <label htmlFor="email">Business email</label>
            <input id="email" className="auth-input" name="email" type="email" placeholder="partner@example.com" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" className="auth-input" name="password" type="password" placeholder="••••••••" />
          </div>

          <div className="auth-actions">
            <button type="button" className="btn btn-primary">Sign in</button>
            <button type="button" className="btn btn-ghost">Forgot?</button>
          </div>

          <div className="form-foot">New partner? <Link to="/food-partner/register" className="link">Create an account</Link></div>
        </form>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
