import React, { useState, useEffect } from 'react'
import { FaList } from 'react-icons/fa'

import api from '../../services/api'

import './Sidebar.css'

function Sidebar() {
  const [lists, setLists] = useState([])
  const userId = localStorage.getItem('userId')

  async function handleLists() {
    await api.get('/lists', {
      headers: {
        authorization: userId
      }
    }).then(response => {
      setLists(response.data)
    })

  }   

  useEffect(() => {
    handleLists()
  }, [])

  const getLists = lists.map(list => (
    <li key={list.id}>
      <FaList /> 
      <span className="list-title">
        {list.title}
      </span>
      <span className="list-count">22</span>
    </li>
  ))

  return (
    <div className="sidebar-container">
      <div className="content">
        <ul>
          {lists.map(list => (
            <li key={list.id}>
              <FaList /> 
              <span className="list-title">
                {list.title}
              </span>
              <span className="list-count">22</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
