import React from 'react'

function Login() {
    return (
        <form>
           <h1>Login Form</h1>    
           <input type="text" placeholder="Username"/>        
           <input type="password" placeholder="Password"/>
           <button type="submit" value="Login"/>        
        </form>
    )
}

export default Login
