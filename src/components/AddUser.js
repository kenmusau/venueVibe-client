import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { error } from 'console'

function AddUser({setNewUser}) {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/users")
    }

    const handleFormSubmit = (formValues) => {

        fetch("https://venuevibe-server.onrender.com/clients",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formValues),
        })
        .then(response => {
            if(!response.ok){
                throw new Error("An error occured")
            }
            return response.json()
        })
        .then(data => setNewUser(data))
        // console.log(formValues)
    }
    const { register, handleSubmit} = useForm()
  return (
    <div className='admin'>
        <div className='first-add-user'>
          <a id="company-name" href='/'><h1><span>Venue</span>vibe</h1></a> 
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
      <div className='user-form'>
        <button onClick={handleNavigate}><img id='back-icon' src='https://thenounproject.com/api/private/icons/5582223/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'/>Back</button>
        <div className='add-user-div'>
            <h3>Submit details to save user </h3>
            <form className='add-user-form' onSubmit={handleSubmit(handleFormSubmit)}>
                <label>First name:    
                <input {...register("first_name")}/>
                </label>
                <label>Last Name:
                    <input {...register("last_name")}/>
                </label>
                <label>Avatar:
                    <input type='file' {...register("profile_picture")}/>
                </label>
                <label>Email:
                    <input {...register("email")}/>
                </label>
                <label>Spaces Name:
                    <input {...register("first_name")}/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser