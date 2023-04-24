import "../src/style/UserCard.css"
import { useState, useEffect } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateinfo, setUpdateinfo] = useState()


 
  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserByTd, 
    updateUsrId
  } = useUserCrud()

  useEffect(() =>{
    getAllUsers()
  }, [])


  return (
    
      <div className='App'>
        <h1>USER</h1>
        <FormUser
          createNewUser={createNewUser}
          updateinfo={updateinfo}
          updateUsrId={updateUsrId}
          setUpdateinfo={setUpdateinfo}
        />
        <div>
          {
            users?.map(user =>(
              <UserCard
              key={user.id}
              user={user}
              deleteUserByTd={deleteUserByTd}
              setUpdateinfo={setUpdateinfo}
              />
            ))
          }
        </div>
      </div>
        
  )
}

export default App
