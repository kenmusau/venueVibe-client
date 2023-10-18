import React from 'react'
import { useForm } from 'react-hook-form'

function AddSpace() {

    const {register, handleSubmit} = useForm()

    const handleFormSubmit = (formValues) =>{
        fetch("https://venuevibe-server.onrender.com/spaces",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
        })
        .then(response => {
            if(!response.ok){
                throw new Error("An error occured")
            }
            return response.json()
        })
        .then(data => console.log(data))
    }
  return (
    <div className='add-space'>
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
        <div className='user-form'>
        <button>back</button>
        <div className='add-user-div'>
            <h3>Submit details to save user </h3>
            <form className='add-user-form' onClick={handleSubmit(handleFormSubmit)}>
                <label>Space name:    
                <input {...register("name")}/>
                </label>
                <label>Space Location:
                    <input  {...register("last_name")}/>
                </label>
                <label>Image:
                    <input {...register("profile_picture")}/>
                </label>
                <label>Price per hour:
                    <input {...register("price")}/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddSpace