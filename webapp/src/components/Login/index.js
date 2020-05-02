import React from 'react'

import './Login.css'

function Login() {
  return (
    <div className="login-container">
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login
