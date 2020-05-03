import React from 'react'
import { FiMenu } from 'react-icons/fi'

import './Header.css'

function Header() {
  return (
    <div className="header">
      <FiMenu color="#FFF" size={30} />
      <h1>Todo-List</h1>
    </div>
  )
}

export default Header
