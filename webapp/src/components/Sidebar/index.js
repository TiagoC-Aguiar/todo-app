import React, { useState, useEffect } from 'react'
import { FaList, FaPlus } from 'react-icons/fa'

import api from '../../services/api'

import './Sidebar.css'

function Sidebar() {
  const [lists, setLists] = useState([])
  const [isNewList, setIsNewList] = useState(false)
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

  // const createList() {
    
  // }

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
          <li onClick={() => setIsNewList(true)} style={{cursor: 'auto'}} onBlur={() => setIsNewList(false)}>
            {(!isNewList) ? 
            <>
            <FaPlus />
            <span className="add-list">
              Nova lista
            </span>
            </>
            : 
            <input type="text" className="new-list" autoFocus />
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
