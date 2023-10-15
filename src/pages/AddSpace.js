import React from 'react'

function AddSpace() {
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
            <form className='add-user-form'>
                <label>First name:    
                <input/>
                </label>
                <label>Last Name:
                    <input/>
                </label>
                <label>Avatar:
                    <input/>
                </label>
                <label>Email:
                    <input/>
                </label>
                <label>Spaces Name:
                    <input/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddSpace