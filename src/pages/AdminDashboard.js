import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

function AdminDashboard() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/profile")
  }
  return (
    <div className='admin'>
    <div className='first'>
          <a href='/'><h1><span>Venue</span>vibe</h1></a> 
          <ul>
              <div>
                  <a href='/dashboard' >
                      <div className='dashboard-icon'>
                          <img src='https://thenounproject.com/api/private/icons/4036046/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0' />
                          <label>Dashboard</label>
                      </div>
                  </a>
              </div>
              <div>
                  <a href='/users'>
                      <div className='users-icon'>
                          <img src='https://thenounproject.com/api/private/icons/216108/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0'/>
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
          </ul>
          <div>
            <div className='logout-icon'>
                <img src="https://static.thenounproject.com/png/1150920-200.png"/>
                <label>logout</label>
            </div>
          </div>
      </div>
      {/* CENTER */}
      <div className='center'>
            <div className='welcome'>
                <h3>Welcome back, Warren Wade</h3>
                <p>Today is Mon, 20th Sept 2023</p>
            </div>
            <div className='stats'>
                <div className='spaces-stats'>
                    <div className='spaces-text'>
                        <h2>Spaces Stats</h2>
                        <small>view all</small>
                    </div>
                    <p>Occupied spaces: <span id="span-occupied">50</span></p>
                    <p>Vacant spaces: <span id="span-vacant">25</span></p>
                </div>
                <div className='users-stats'>
                    <div className='users-text'>
                        <h2>Users Stats</h2>
                        <small>view all</small>
                    </div>
                    <p>Active users: <span id="span-occupied">20</span></p>
                    <p>New users: <span id="span-vacant">10</span></p>
                </div>
            </div>
            <div className='requests'>
                <h3>Open Maintenance Request</h3>
                <div className='list'>
                    <img src='https://media.istockphoto.com/id/1192648836/photo/young-happy-woman-in-an-airplane-cabin.webp?b=1&s=170667a&w=0&k=20&c=0dJXvw38imDjUKc7_lwttWgfpFjpzrUbbalmIhUmebU='/>
                    <p>Esther Howard</p>
                    <p>Plumbing - Leakage</p>
                </div>
                <div className='list'>
                    <img src=''/>
                    <p>Esther Howard</p>
                    <p>Plumbing - Leakage</p>
                </div>
                <div>

                </div>
            </div>
        </div>
        {/* LAST */}
        <div className='last'>
            <div className='last-div'>
                <div className='details-button'>
                    <div className='about-div'>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='name-gmail'>
                            <small>Warren Wade</small>
                            <small>wade.warren@gmail.com</small>
                        </div>
                        <img src='https://media.istockphoto.com/id/1192648836/photo/young-happy-woman-in-an-airplane-cabin.webp?b=1&s=170667a&w=0&k=20&c=0dJXvw38imDjUKc7_lwttWgfpFjpzrUbbalmIhUmebU='/>
                    </div>
                    <button onClick={handleNavigate}>View Profile</button>
                </div>
                <div className='income'>
                    <h2>Income</h2>
                    <h1>$34.1K</h1>
                </div>
                <div className='profits'>
                    <h2>Profits</h2>
                    <h1>$34.1K</h1>
                </div>
            </div>
        </div>
  </div>
  )
}

export default AdminDashboard