import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    username: z.string(),
    profile_picture: z.string().url(),
    password: z.string()
})
function Signup({ setUser }) {

    const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(schema)})
    const { errors } = formState

    function handleFormSubmit(formValues){
        fetch("https://venuevibe-server.onrender.com/clientSignup",{
            method: "POST",
            body: JSON.stringify(formValues),
            headers:{
                "Content-Type": "application/json"
            }, 
        })
        .then(response => {
            // if (!response.ok){
            //     throw new Error("Login failed")
            // }
            return response.json()
        })
        .then(response =>{
            console.log(formValues)
        })
        .catch((error) => {
            // Handle the error here
            console.error("Fetch error:", error);
          });
        // console.log(formValues)
    }

  return (
    <div className='signup'>
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