import React, { useState, useEffect } from 'react';
import Card from './Card';
import './App.css';

const Cardlist = () => {
  const [searchInput, setSearchInput] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <div className="fixed-container">
        <h1 className="cardlist-title">Robo Friends</h1>
        <div className="search-box">
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Search robots..."
          />
        </div>
      </div>
      <div className="cardlist-container">
        <div className="card-list">
          {filteredUsers.map(user => (
            <Card key={user.id} name={user.name} id={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardlist;