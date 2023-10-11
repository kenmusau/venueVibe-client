import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Signup({ onSave }) {

    const { register, handleSubmit } = useForm()

    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        username: "",
        profile_picture: ""
    })

    const { first_name, last_name, email, password, username, profile_picture } = inputs;

    // const [firstName, setFirstName] = useState("")
    // const [secondName, setSecondName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [category, setCategory] = useState("")

    function handleInputs(e){
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value,
        })
    }

    function handleFormSubmit(formValues){
        // fetch("",{
        //     method: "POST",
        //     body: JSON.stringify(inputs),
        //     headers:{
        //         "Content-Type": "application/json"
        //     }, 
        // })
        // .then(resp => resp.json)
        onSave(formValues)
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
                            </div>
                            <div>
                                <input
                                {...register("last_name")}
                                />
                                <label  className='lastname'>Last Name</label>
                            </div>
                        </div>
                        <div className='user-preference'>
                                <div className='username-input'>
                                    <input {...register("username")}/>
                                    <label className='username'>Username</label>  
                                </div>
                                <div className='picture-div'>
                                    <input {...register("profile_picture")} type='file'/>
                                    <label className='profile-picture'>Profile Picture</label>  
                                </div>
                        </div>
                        <div className='email-div'>
                            <input
                                {...register("email")}       
                            />
                            <label className='email'>Email</label>  
                        </div>
                            <div className='password-div'>
                                <input
                                {...register("password")}
                                />
                                <label className='password'>Password</label>  
                            </div>
                        <button className='signup-button'>Create Account</button>
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