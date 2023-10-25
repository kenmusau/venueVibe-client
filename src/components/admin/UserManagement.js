import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function UserManagement({userRef, newUser}) {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch("https://venuevibe-server.onrender.com/clients")
    .then(resp => resp.json())
    .then(cont => setUsers(cont))
},[newUser])


function handleLogout(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out from the site!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#262d2d',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch("https://venuevibe-server.onrender.com/adminlogout",{
                method: "DELETE",
            })
            .then(response => {
                if (response.ok) {
                    userRef.current = null;
                } else {
                    console.error("Logout failed:", response.statusText);
                }
            })
            .catch(error => {
                // Handle network errors
                console.error("Logout error:", error);
            });
            Swal.fire(
                'Logged out!',
                'Your have been succesfully logged out.',
                'success'
                )
                setTimeout(()=>{
                    navigate("/");
                },[1500])
            }

      })


}

const navigate = useNavigate()
const handleNavigate = () =>{
  navigate("/add-user")
}
  return (
    <div className='user-manage'>
       <div className="first">
        <a id="company-name" href="/">
        <h1 className="sidebar-logo">
          Venue<span>Vibe</span>
        </h1>
        </a>
        <div className="panel-div">
          <div>
            <a href="/dashboard">
              <div className="dashboard-icon">
                <svg
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  id="dashboard"
                  class="icon glyph"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect x="2" y="2" width="9" height="11" rx="2"></rect>
                    <rect x="13" y="2" width="9" height="7" rx="2"></rect>
                    <rect x="2" y="15" width="9" height="7" rx="2"></rect>
                    <rect x="13" y="11" width="9" height="11" rx="2"></rect>
                  </g>
                </svg>
                <label>Dashboard</label>
              </div>
            </a>
          </div>
          <div>
            <a href="/users">
              <div className="users-icon">
                <svg
                  fill="#ffffff"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>users</title>{" "}
                    <path d="M16 21.916c-4.797 0.020-8.806 3.369-9.837 7.856l-0.013 0.068c-0.011 0.048-0.017 0.103-0.017 0.16 0 0.414 0.336 0.75 0.75 0.75 0.357 0 0.656-0.25 0.731-0.585l0.001-0.005c0.875-3.885 4.297-6.744 8.386-6.744s7.511 2.859 8.375 6.687l0.011 0.057c0.076 0.34 0.374 0.59 0.732 0.59 0 0 0.001 0 0.001 0h-0c0.057-0 0.112-0.007 0.165-0.019l-0.005 0.001c0.34-0.076 0.59-0.375 0.59-0.733 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005c-1.045-4.554-5.055-7.903-9.849-7.924h-0.002zM9.164 10.602c0 0 0 0 0 0 2.582 0 4.676-2.093 4.676-4.676s-2.093-4.676-4.676-4.676c-2.582 0-4.676 2.093-4.676 4.676v0c0.003 2.581 2.095 4.673 4.675 4.676h0zM9.164 2.75c0 0 0 0 0 0 1.754 0 3.176 1.422 3.176 3.176s-1.422 3.176-3.176 3.176c-1.754 0-3.176-1.422-3.176-3.176v0c0.002-1.753 1.423-3.174 3.175-3.176h0zM22.926 10.602c2.582 0 4.676-2.093 4.676-4.676s-2.093-4.676-4.676-4.676c-2.582 0-4.676 2.093-4.676 4.676v0c0.003 2.581 2.095 4.673 4.675 4.676h0zM22.926 2.75c1.754 0 3.176 1.422 3.176 3.176s-1.422 3.176-3.176 3.176c-1.754 0-3.176-1.422-3.176-3.176v0c0.002-1.753 1.423-3.174 3.176-3.176h0zM30.822 19.84c-0.878-3.894-4.308-6.759-8.406-6.759-0.423 0-0.839 0.031-1.246 0.089l0.046-0.006c-0.049 0.012-0.092 0.028-0.133 0.047l0.004-0.002c-0.751-2.129-2.745-3.627-5.089-3.627-2.334 0-4.321 1.485-5.068 3.561l-0.012 0.038c-0.017-0.004-0.030-0.014-0.047-0.017-0.359-0.053-0.773-0.084-1.195-0.084-0.002 0-0.005 0-0.007 0h0c-4.092 0.018-7.511 2.874-8.392 6.701l-0.011 0.058c-0.011 0.048-0.017 0.103-0.017 0.16 0 0.414 0.336 0.75 0.75 0.75 0.357 0 0.656-0.25 0.731-0.585l0.001-0.005c0.737-3.207 3.56-5.565 6.937-5.579h0.002c0.335 0 0.664 0.024 0.985 0.070l-0.037-0.004c-0.008 0.119-0.036 0.232-0.036 0.354 0.006 2.987 2.429 5.406 5.417 5.406s5.411-2.419 5.416-5.406v-0.001c0-0.12-0.028-0.233-0.036-0.352 0.016-0.002 0.031 0.005 0.047 0.001 0.294-0.044 0.634-0.068 0.98-0.068 0.004 0 0.007 0 0.011 0h-0.001c3.379 0.013 6.203 2.371 6.93 5.531l0.009 0.048c0.076 0.34 0.375 0.589 0.732 0.59h0c0.057-0 0.112-0.007 0.165-0.019l-0.005 0.001c0.34-0.076 0.59-0.375 0.59-0.733 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005zM16 18.916c-0 0-0 0-0.001 0-2.163 0-3.917-1.753-3.917-3.917s1.754-3.917 3.917-3.917c2.163 0 3.917 1.754 3.917 3.917 0 0 0 0 0 0.001v-0c-0.003 2.162-1.754 3.913-3.916 3.916h-0z"></path>{" "}
                  </g>
                </svg>
                <label>Users</label>
              </div>
            </a>
          </div>
          <div>
            <a href="/AdminSpaces">
              <div className="spaces-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M16.5 22.5H18.75C19.1478 22.5 19.5294 22.342 19.8107 22.0607C20.092 21.7794 20.25 21.3978 20.25 21V13.5"
                      stroke="#71717A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.5 22.5H5.25C4.85218 22.5 4.47064 22.342 4.18934 22.0607C3.90804 21.7794 3.75 21.3978 3.75 21V13.5"
                      stroke="#71717A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M0.75 12.129L10.939 1.939C11.0783 1.79961 11.2437 1.68904 11.4258 1.61359C11.6078 1.53815 11.8029 1.49932 12 1.49932C12.1971 1.49932 12.3922 1.53815 12.5742 1.61359C12.7563 1.68904 12.9217 1.79961 13.061 1.939L23.122 12"
                      stroke="#71717A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12 12C13.2426 12 14.25 10.9926 14.25 9.75C14.25 8.50736 13.2426 7.5 12 7.5C10.7574 7.5 9.75 8.50736 9.75 9.75C9.75 10.9926 10.7574 12 12 12Z"
                      stroke="#71717A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12 13.5C11.0054 13.5 10.0516 13.8951 9.34835 14.5983C8.64509 15.3016 8.25 16.2554 8.25 17.25V18H9.75L10.5 22.5H13.5L14.25 18H15.75V17.25C15.75 16.2554 15.3549 15.3016 14.6517 14.5983C13.9484 13.8951 12.9946 13.5 12 13.5Z"
                      stroke="#71717A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <label>Spaces</label>
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="logout-icon" onClick={handleLogout}>
            <img src="https://static.thenounproject.com/png/1150920-200.png" />
            <label>logout</label>
          </div>
        </div>
      </div>
      <div className='second'>
            <div className='second-header'>
                <h1>User Management</h1>
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