import React from 'react'

function Profile() {
  return (
    <div className='profile'>
      <div className='first'>
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
      <div className='profile-display'>
        <img src="https://images.unsplash.com/photo-1696383145456-a58cc98f26e7?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt=''/>
        <h2>Alvin Gikunju</h2>
        <small>alvingikunju@gmail.com</small>
        <small>password</small>
      </div>
    </div>
  )
}

export default Profile