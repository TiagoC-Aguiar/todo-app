import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function onSubmit(e) {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', { email, password })
      localStorage.setItem('userId', response.data[0].id)
      localStorage.setItem('userName', response.data[0].name)

      // console.log(response.data[0])

      history.push(`/tasks/${response.data[1].id}`)
    } catch(err) {
      alert('Login ou senha inválidos.')
    }

  }

  return (
    <div className="login-container">
      <div className="content">
        <form>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" onClick={onSubmit}>Entrar</button>
        </form>

      </div>
    </div>
  )
}

export default Login
