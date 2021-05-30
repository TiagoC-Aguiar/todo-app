import React, { useState, useEffect } from 'react';
import { FaList, FaPlus } from 'react-icons/fa'

import api from '../../services/api';
import TextInput from '../TextInput';

import './Sidebar.css';

function Sidebar() {
  const [lists, setLists] = useState([])
  const [isNewList, setIsNewList] = useState(false)
  const userId = localStorage.getItem('userId');
  
  useEffect(() => {
    async function handleLists() {
      await api.get('/lists', {
        headers: {
          authorization: userId
        }
      }).then(response => {
        setLists(response.data)
      });
    }
    handleLists();
  }, []);

  const getLists = lists.map(list => (
    <li key={list.id}>
      <FaList />
      <span className="list-title">
        {list.title}
      </span>
      <span className="list-count">22</span>
    </li>
  ));

  const handleNewList = (click = true) => {
    setIsNewList(click);
  };

  const handleNewListOff = () => {
    handleNewList(false);
  };

  return (
    <div className="sidebar-container">
      <div className="content">
        <ul>
          {getLists}
          <li onClick={handleNewList} style={style} onBlur={handleNewListOff}>
            {
              (!isNewList) ? (
                <>
                  <FaPlus />
                  <span className="add-list">
                    Nova lista
                  </span>
                </>
              ) : (
                <TextInput className="new-list" focus={true} />
              )
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

const style = {
  cursor: 'pointer',
};

export default Sidebar;
