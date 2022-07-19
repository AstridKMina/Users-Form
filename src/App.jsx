import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data))
  }, [])
  // console.log(users)


  const getUsers = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsers(res.data))
  }

  const selectUser = (user) => {
    setUserSelected(user)

  }

  const deleteUser = (id) => {
    alert(id)
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() =>
        getUsers());

  }

  const deselectUser = () => setUserSelected(null)



  return (
    <div className="App">
      <h1 className='name'>Users Form</h1>
      <hr />
      <div className='all'>
        <div className='form'>
          <UsersForm getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser} />
        </div>
        <div className='list'>
          <UsersList users={users} selectUser={selectUser} deleteUser={deleteUser} />
        </div>
      </div>
      <div className='burbujas'>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
      </div>
    </div>
  )
}

export default App
