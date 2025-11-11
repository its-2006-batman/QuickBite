import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
  return (
    <div className="auth-root">
      <div className="auth-card" role="region" aria-label="Food partner registration">
        <div className="auth-header">
          <h2 className="auth-title">Partner sign up</h2>
        </div>
        <p className="auth-sub">Register your food business to start listing items.</p>

        <form className="auth-form" aria-label="partner-register-form">
          <div>
            <label htmlFor="business">Business name</label>
            <input id="business" className="auth-input" name="business" placeholder="Tasty Bites" />
          </div>

          <div>
            <label htmlFor="owner">Owner name</label>
            <input id="owner" className="auth-input" name="owner" placeholder="Jane Doe" />
          </div>

          <div>
            <label htmlFor="contact">Contact phone</label>
            <input id="contact" className="auth-input" name="contact" type="tel" placeholder="+1 555 555 5555" />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <input id="address" className="auth-input" name="address" placeholder="123 Market St, City" />
          </div>


          <div>
            <label htmlFor="email">Business email</label>
            <input id="email" className="auth-input" name="email" type="email" placeholder="partner@example.com" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" className="auth-input" name="password" type="password" placeholder="••••••••" />
          </div>

          <div className="auth-actions">
            <button type="button" className="btn btn-primary">Create account</button>
            <button type="button" className="btn btn-ghost">Cancel</button>
          </div>

          <div className="form-foot">Already registered? <Link to="/food-partner/login" className="link">Sign in</Link></div>
        </form>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
