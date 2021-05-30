import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../services/api';
import TextInput from '../TextInput';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function onSubmit(e) {
    e.preventDefault()

    try {
      const { data } = await api.post('/sessions', { email, password });
      const { id, name } = data[0];
      localStorage.setItem('userId', id);
      localStorage.setItem('userName', name);
      history.push(`/tasks/${id}`);
    } catch(err) {
      alert('Login ou senha inválidos.');
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-container">
      <div className="content">
        <form>
          <TextInput 
            type={'email'} 
            placeholder={"E-mail"} 
            value={email} 
            change={handleEmail}
            focus={true}
            required={true}
          />
          <TextInput 
            type={'password'} 
            placeholder={"Senha"} 
            value={password} 
            change={handlePassword}            
            required={true}
          />
          {/* <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={handleEmail}
            autoFocus
            required
          /> */}
          {/* <input 
            type="password" 
            placeholder="Senha" 
            value={password}
            onChange={handlePassword}
            required
          /> */}
          <button type="submit" onClick={onSubmit}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
