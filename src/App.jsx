import { useState, useEffect } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateinfo, setUpdateinfo] = useState()
  const [formclose, setformclose] = useState(true)


 
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


    const handleOPenForm = () => {
      setformclose(false)
    }

  return (
    
      <div className='App'>
        <header className="app_header">
          <h1 className='app-title'>USERS</h1>
          <button onClick={handleOPenForm} className="app_btn">create new user <i class='bx bx-add-to-queue'></i></button>
        </header>
         <FormUser
          createNewUser={createNewUser}
          updateinfo={updateinfo}
          updateUsrId={updateUsrId}
          setUpdateinfo={setUpdateinfo}
          setformclose={setformclose}
          formclose={formclose}
        />
        <div className="user-container">
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
