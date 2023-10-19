import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
// import { response } from 'express';

const schema = z.object({
    email: z.string().email(),
    password: z.string()
});

function Login({onSave}) {

    const { register, formState, handleSubmit} = useForm({ resolver: zodResolver(schema)})

    const {errors} = formState

    function handleFormSubmit(formValues){
        if (formValues.first_name == ""){
        fetch("https://venuevibe-server.onrender.com/adminlogin")
        .then(response =>{
            if (!response.ok){
                throw new Error("Login failed")
            }
            return response.json()
        })
        .then(response =>{
            onSave(formValues)
            console.log(formValues)
        })
        }

        fetch("https://venuevibe-server.onrender.com/clientLogin")
        .then(response => {
            if (!response.ok){
                throw new Error("Login failed")
            }
            return response.json()
        })
        .then(response =>{
            onSave(formValues)
        })
        }

  return (
    <div className='login'>
        <div className='wrapper'>
            <div className='venuevibe'>
                <h1><span>Venue</span>vibe</h1>
            </div>
            <div className='wrapper-div'>
            <h2>LOGIN</h2>
            <form className='login-inputs' onSubmit={handleSubmit(handleFormSubmit)}>
                <div className='input-divs'>
                    <input className='first-input' {...register("email")}   />
                    <p style={{color: "red"}}>{errors.email?.message}</p>
                </div>
                <div className='input-divs'>
                    <input name="password" {...register("password")} autocomplete="off"/>
                    <p>{errors.password?.message}</p>
                </div>
                <button className='login-button' type='submit'>LOGIN</button>
            </form>  
            <div className='lower-login'>
                <div className='button-and-text'>
                    <p>Don't have an account? <a href="/signup">signup</a></p>
                </div>
            </div>
            </div>
            <img src='https://static.thenounproject.com/png/4556645-200.png'/>
        </div>
    </div>
  )
}

export default Login