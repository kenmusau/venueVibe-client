import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useNavigate } from 'react-router';
import { PulseLoader } from 'react-spinners';


const schema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    username: z.string(),
    profile_picture: z.string().url(),
    password: z.string()
})
function Signup({ setUser }) {

    const navigate = useNavigate()
    const [showLoader, setShowLoader] = useState(false)
    const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(schema)})
    const { errors } = formState

    function handleFormSubmit(formValues){

        console.log(formValues.email)
        const formData = {
            username: formValues.username,
            first_name: formValues.first_name,
            last_name: formValues.last_name,
            email: formValues.email,
            profile_picture: formValues.profile_picture,
            password: formValues.password
        }
        fetch("https://venuevibe-server.onrender.com/clientSignup",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(formData),
        })
        .then(response => {
            // if (!response.ok){
            //     throw new Error("Login failed")
            // }
            return response.json()
        })
        .then(response =>{
            console.log(response)
            navigate("/dashboard")
        })
        .catch((error) => {
            // Handle the error here
            console.error("Fetch error:", error);
          });
        // console.log(formValues)
    }

    useEffect(()=>{
        setTimeout(()=>{
            setShowLoader(false)
        },4000)
    },[showLoader, navigate])

  return (
    <div className='signup'>
        {showLoader && (
        <div className="loader-overlay">
          <PulseLoader
            color={'#262d2d'}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
        <div className='left'>
    	    <h1><span>Venue</span>vibe</h1>
        </div>
        <div className='right'>
            <h2>Create Account</h2> 
            <div className='signup-form'>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className='form'>
                        <div className='names'>
                            <div>
                                <input
                                className='first-input'
                                type="text"
                                {...register("first_name")}
                                />
                                <label className='firstname'>First Name</label>
                                <small style={{color: "red"}}>{errors.first_name?.message}</small>
                            </div>
                            <div>
                                <input
                                {...register("last_name")}
                                />
                                <label  className='lastname'>Last Name</label>
                                <small style={{color: "red"}}>{errors.last_name?.message}</small>
                            </div>
                        </div>
                        <div className='user-preference'>
                                <div className='username-input'>
                                    <input {...register("username")}/>
                                    <label className='username'>Username</label>  
                                    <small style={{color: "red"}}>{errors.username?.message}</small>
                                </div>
                                <div className='picture-div'>
                                    <input {...register("profile_picture")} />
                                    <label className='profile-picture'>Profile Picture</label>  
                                    <small style={{color: "red"}}>{errors.profile_picture?.message}</small>
                                </div>
                        </div>
                        <div className='email-div'>
                            <input
                                {...register("email")}       
                            />
                            <label className='email'>Email</label>  
                            <small style={{color: "red"}}>{errors.email?.message}</small>
                        </div>
                        <div className='password-div'>
                            <input
                            {...register("password")} type='password'
                            />
                            <label className='password'>Password</label> 
                            <small style={{color: "red"}}>{errors.password?.message}</small>
                        </div>
                        <button className='signup-button' type='submit'>Create Account</button>
                    </div>
                </form>
                <p className='have-account'>Already have an account? <a href="/login">login</a></p>
            </div>
            <div className='or'>
                <hr/>OR<hr/>
            </div>
            <div className='social-login'>
                <div className='google'><a href=''>Signup with Google</a></div>
                <div className='facebook'><a href=''>Signup with Facebook</a></div>
            </div>
        </div>
    </div>
  )
}

export default Signup