import React from 'react'
import { useNavigate } from 'react-router-dom'

function SpacesManagement() {

    const data = [
        {
            img: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: false
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: true
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: false
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: true
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: false
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: false
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: true
        },
    ]

    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate("/add-space")
    }
    
  return (
    <div className='spacesManage'>
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
    <div className='admin-spaces-display'>
        <h3>Spaces Management</h3>
        <button onClick={handleNavigate}>Add</button>
        <div className='space-div'>
            {data.map(space=>{
                return(
                <div className='card'>
                    <img src={space.img}/>
                    <div>
                        <h3>{space.name}</h3>
                        <p>{space.location}</p>
                        <p>Status: {space.status ? <i>Vaccant</i> : <i>Occupied</i>}</p>
                    </div>
                </div>
            )})}
        </div>
    </div>
</div>
  )
}

export default SpacesManagement