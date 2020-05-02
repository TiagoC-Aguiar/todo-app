import React from 'react'

import './Login.css'

function Login() {

  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="login-container">
      <div className="content">
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button type="submit" onClick={onSubmit}>Entrar</button>
        </form>

      </div>
    </div>
  )
}

export default Login
