import React, { useState } from 'react';

import UserTable from './tables/Usertable'
import AddUserForm from './forms/AddUserForm'


import ListProducts from './products/ListProducts'

const App = () => {

  const userData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(userData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        <h2>Lista de Produtos</h2>
        <ListProducts />
          {/* <AddUserForm addUser={addUser} /> */}
        </div>
        <div className="flex-large">
          {/* <UserTable users={users} deleteUser={deleteUser} /> */}
        </div>
      </div>
    </div>
  )
}

export default App;
