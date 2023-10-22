import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function UserManagement({newUser}) {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch("https://venuevibe-server.onrender.com/clients")
    .then(resp => resp.json())
    .then(cont => setUsers(cont))
},[newUser])


  const user = [
    {
        image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        name: "Alvin Gikunju",
        email: "alvingikunju@gmail.com",
    },
    {
        image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        name: "Alvin Gikunju",
        email: "alvingikunju@gmail.com",
    },
    {
        image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        name: "Alvin Gikunju",
        email: "alvingikunju@gmail.com",
    },
    {
        image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        name: "Alvin Gikunju",
        email: "alvingikunju@gmail.com",
    }
]

const navigate = useNavigate()
const handleNavigate = () =>{
  navigate("/add-user")
}
  return (
    <div className='user-manage'>
      <div className='first'>
        <a href='/'><h1><span>Venue</span>vibe</h1></a> 
        <div className='panel-div'>
            <div>
                <a href='/dashboard' >
                    <div className='dashboard-icon'>
                        <img src='https://www.svgrepo.com/show/459911/dashboard.svg' />
                        <label>Dashboard</label>
                    </div>
                </a>
            </div>
            <div>
                <a href='/users'>
                    <div className='users-icon'>
                        <img src='https://www.svgrepo.com/show/473461/users.svg'/>
                        <label>Users</label>
                    </div>
                </a>
            </div>
            <div>
                <a href='/spaces'>
                    <div className='spaces-icon'>
                        <img src="https://static.thenounproject.com/png/5460319-200.png"/>
                        <label>Spaces</label>
                    </div>
                </a>
            </div>
        </div>
        <div>
            <div className='logout-icon'>
                <img src="https://static.thenounproject.com/png/1150920-200.png"/>
                <label>logout</label>
            </div>
          </div>
      </div>
      <div className='second'>
            <div className='second-header'>
                <h1>User Management</h1>
                <button onClick={handleNavigate}>Add<img src="https://www.svgrepo.com/show/472057/users-plus.svg"/></button>
            </div>
            <div className='trial'>
                {users.map(user =>{
                    return(
                    <div className='user-card'>
                        <img src={user.image} alt=""/>
                        <div className='details'>
                            <p>{user.first_name} {user.last_name}</p>
                            <p id='email'>{user.email}</p>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    </div>
  )
}

export default UserManagement