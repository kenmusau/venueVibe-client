import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SpacesManagement({newSpace}) {

    const [datas, setDatas] = useState([])

    useEffect(()=>{
        fetch("https://venuevibe-server.onrender.com/spaces")
        .then(resp => resp.json())
        .then(cont => setDatas(cont))
        
    },[newSpace])
    console.log(newSpace)
    console.log(datas)
    
    
    const data = [
        {
            image: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: false
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: true
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: false
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: true
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: false
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: false
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1688410479265-391776c574a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            name: "The sanctuary",
            location: "Santa Ana, Illinois 85486 ",
            status: true
        },
    ]
    
    // console.log(data)
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate("/add-space")
    }

  return (
    <div className='spacesManage'>
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
    <div className='admin-spaces-display'>
        <h3>Spaces Management</h3>
        <button onClick={handleNavigate}>Add<img src="https://www.svgrepo.com/show/529027/home-1.svg"/></button>
        <div className='space-div'>
            {datas.map(space=>{
                return(
                <div className='card'>
                    <img src={space.image}/>
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