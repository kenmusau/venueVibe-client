import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserManagement() {

  const users = [
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
        <ul>
            <li>
                <a href='/home/dashboard' >
                    <div className='dashboard-icon'>
                        <img src='https://thenounproject.com/api/private/icons/4036046/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0' />
                        <label>Dashboard</label>
                    </div>
                </a>
            </li>
            <li>
                <a href='/users'>
                    <div className='users-icon'>
                        <img src='https://thenounproject.com/api/private/icons/216108/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'/>
                        <label>Users</label>
                    </div>
                </a>
            </li>
            <li>
                <a href='/spaces'>
                    <div className='spaces-icon'>
                        <img src="https://static.thenounproject.com/png/5460319-200.png"/>
                        <label>Spaces</label>
                    </div>
                </a>
            </li>
        </ul>
      </div>
      <div className='second'>
            <div className='second-header'>
                <h1>User Management</h1>
                <button onClick={handleNavigate}>Add<img src="https://thenounproject.com/api/private/icons/2522721/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"/></button>
            </div>
            <div className='trial'>
                {users.map(user =>{
                    return(
                    <div className='user-card'>
                        <img src={user.image} alt=""/>
                        <div className='details'>
                            <p>{user.name}</p>
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