import React, { useState } from 'react'

function Signup() {

    const [inputs, setInputs] = useState({
        firstName: "",
        secondName: "",
        email: "",
        password: "",
        category: ""
    })

    const { firstName, secondName, email, password, category } = inputs;

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

    function handleSubmit(e){
        e.preventDefault()

        fetch("",{
            method: "POST",
            body: JSON.stringify(inputs),
            headers:{
                "Content-Type": "application/json"
            }, 
        })
        .then(resp => resp.json)
    }

  return (
    <div className='signup'>
        <div className='left'>
    	    <h1><span>Venue</span>vibe</h1>
        </div>
        <div className='right'>
            <h2>Create Account</h2> 
            <div className='signup-form'>
                <form onSubmit={handleSubmit}>
                    <div className='form'>
                        <div className='names'>
                        <input
                        className='first-input'
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleInputs}
                        />
                        <label className='firstname'>First Name</label>
                        <input
                        name='secondName'
                        value={secondName}
                        type="text"
                        onChange={handleInputs}
                        />
                        <label  className='secondname'>Second Name</label>
                        </div>
                        <div className='email-div'>
                            <input
                            value={email}
                            name='email'
                            type='email'
                            required
                            onChange={handleInputs}

                            />
                            <label className='email'>Email</label>  
                        </div>
                        <div className='password-div'>
                            <input
                            value={password}
                            name='password'
                            type="password"
                            required
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