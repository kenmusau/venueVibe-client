import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/profile")
  }
  return (
    <div className='admin'>
      <div className='first'>
          <a id="company-name" href='/'><h1><span>Venue</span>vibe</h1></a> 
          <div className='panel-div'>
              <div>
                  <a href='/dashboard' >
                      <div className='dashboard-icon'>
                        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="dashboard" class="icon glyph" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect x="2" y="2" width="9" height="11" rx="2"></rect><rect x="13" y="2" width="9" height="7" rx="2"></rect><rect x="2" y="15" width="9" height="7" rx="2"></rect><rect x="13" y="11" width="9" height="11" rx="2"></rect></g></svg>
                          <img src='https://www.svgrepo.com/show/459911/dashboard.svg' />
                          <label>Dashboard</label>
                      </div>
                  </a>
              </div>
              <div>
                  <a href='/users'>
                      <div className='users-icon'>
                          <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>users</title> <path d="M16 21.916c-4.797 0.020-8.806 3.369-9.837 7.856l-0.013 0.068c-0.011 0.048-0.017 0.103-0.017 0.16 0 0.414 0.336 0.75 0.75 0.75 0.357 0 0.656-0.25 0.731-0.585l0.001-0.005c0.875-3.885 4.297-6.744 8.386-6.744s7.511 2.859 8.375 6.687l0.011 0.057c0.076 0.34 0.374 0.59 0.732 0.59 0 0 0.001 0 0.001 0h-0c0.057-0 0.112-0.007 0.165-0.019l-0.005 0.001c0.34-0.076 0.59-0.375 0.59-0.733 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005c-1.045-4.554-5.055-7.903-9.849-7.924h-0.002zM9.164 10.602c0 0 0 0 0 0 2.582 0 4.676-2.093 4.676-4.676s-2.093-4.676-4.676-4.676c-2.582 0-4.676 2.093-4.676 4.676v0c0.003 2.581 2.095 4.673 4.675 4.676h0zM9.164 2.75c0 0 0 0 0 0 1.754 0 3.176 1.422 3.176 3.176s-1.422 3.176-3.176 3.176c-1.754 0-3.176-1.422-3.176-3.176v0c0.002-1.753 1.423-3.174 3.175-3.176h0zM22.926 10.602c2.582 0 4.676-2.093 4.676-4.676s-2.093-4.676-4.676-4.676c-2.582 0-4.676 2.093-4.676 4.676v0c0.003 2.581 2.095 4.673 4.675 4.676h0zM22.926 2.75c1.754 0 3.176 1.422 3.176 3.176s-1.422 3.176-3.176 3.176c-1.754 0-3.176-1.422-3.176-3.176v0c0.002-1.753 1.423-3.174 3.176-3.176h0zM30.822 19.84c-0.878-3.894-4.308-6.759-8.406-6.759-0.423 0-0.839 0.031-1.246 0.089l0.046-0.006c-0.049 0.012-0.092 0.028-0.133 0.047l0.004-0.002c-0.751-2.129-2.745-3.627-5.089-3.627-2.334 0-4.321 1.485-5.068 3.561l-0.012 0.038c-0.017-0.004-0.030-0.014-0.047-0.017-0.359-0.053-0.773-0.084-1.195-0.084-0.002 0-0.005 0-0.007 0h0c-4.092 0.018-7.511 2.874-8.392 6.701l-0.011 0.058c-0.011 0.048-0.017 0.103-0.017 0.16 0 0.414 0.336 0.75 0.75 0.75 0.357 0 0.656-0.25 0.731-0.585l0.001-0.005c0.737-3.207 3.56-5.565 6.937-5.579h0.002c0.335 0 0.664 0.024 0.985 0.070l-0.037-0.004c-0.008 0.119-0.036 0.232-0.036 0.354 0.006 2.987 2.429 5.406 5.417 5.406s5.411-2.419 5.416-5.406v-0.001c0-0.12-0.028-0.233-0.036-0.352 0.016-0.002 0.031 0.005 0.047 0.001 0.294-0.044 0.634-0.068 0.98-0.068 0.004 0 0.007 0 0.011 0h-0.001c3.379 0.013 6.203 2.371 6.93 5.531l0.009 0.048c0.076 0.34 0.375 0.589 0.732 0.59h0c0.057-0 0.112-0.007 0.165-0.019l-0.005 0.001c0.34-0.076 0.59-0.375 0.59-0.733 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005zM16 18.916c-0 0-0 0-0.001 0-2.163 0-3.917-1.753-3.917-3.917s1.754-3.917 3.917-3.917c2.163 0 3.917 1.754 3.917 3.917 0 0 0 0 0 0.001v-0c-0.003 2.162-1.754 3.913-3.916 3.916h-0z"></path> </g></svg>
                          <label>Users</label>
                      </div>
                  </a>
              </div>
              <div>
                  <a href='/spaces'>
                      <div className='spaces-icon'>
                      <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 44.93 44.929" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M44.373,20.481L26.194,2.302c-2.057-2.058-5.404-2.058-7.459,0L0.556,20.481c-0.741,0.741-0.741,1.942,0,2.683 c0.741,0.741,1.943,0.741,2.684,0L21.417,4.986c0.56-0.559,1.533-0.559,2.093,0l18.18,18.18c0.369,0.37,0.855,0.556,1.341,0.556 s0.972-0.187,1.342-0.556C45.114,22.424,45.114,21.222,44.373,20.481z"></path> <path d="M23.358,8.503c-0.491-0.491-1.29-0.491-1.781,0L6.24,23.848c-0.236,0.236-0.36,0.556-0.36,0.889v16.674 c0,1.508,1.204,2.76,2.71,2.76h27.749c1.507,0,2.743-1.252,2.743-2.76V24.738c0-0.333-0.14-0.652-0.375-0.889L23.358,8.503z M30.866,31.622c-0.113,0.113-5.629,5.604-7.662,7.625c-0.409,0.407-1.072,0.407-1.481,0c-2.032-2.021-7.548-7.511-7.661-7.625 c-2.325-2.324-2.325-6.094,0-8.418c2.319-2.317,6.076-2.323,8.401-0.017c2.326-2.307,6.083-2.302,8.401,0.017 C33.19,25.528,33.19,29.297,30.866,31.622z"></path> </g> </g> </g></svg>
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