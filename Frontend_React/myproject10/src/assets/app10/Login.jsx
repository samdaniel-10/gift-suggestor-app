import React, { useState } from 'react'
import '../app10_css/login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    const [logindata, setLoginData] = useState({
        login_username : "",
        login_password : ""
    })

    const [receivemsg, setReceiveMsg] = useState("")
    const [error2, setError2] = useState(null)
    const [loginerrormessage, setLoginErrorMessage] = useState("")

     

    const Login_handlechange = (event)=>{
        setLoginData({
            ...logindata, [event.target.name]:event.target.value
        })
    }

    const Login_handlesubmit= (event)=>{
        event.preventDefault();
        fetch('https://sam1100.pythonanywhere.com/login_1/',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(logindata)
        })
        
        .then((response) => {
            return response.json().then((login_data) => ({
                ok: response.ok,
                data: login_data
            }));
        })

        .then((result) =>{

            if(result.ok){
                setReceiveMsg(result.data.message)
                navigate('/homepage')
            }

            else{
                setReceiveMsg(result.data.message)
                setLoginErrorMessage(result.data.message)
                console.log(result.data.message)
            }
        })

        .catch((error) => {
             
            setError2(error.message);

        });
    }
    

    return (
        <>
            <div className='login-maindiv'>
                <div className='login-subdiv'>
                    <h2>🎁  🎀  🎉</h2>
                    <h1>Gift Suggestor</h1>
                    <p>Login to get personalized gift suggestions based on your preferences.</p>
                    <p className='login-error' style={{display: loginerrormessage ? "block" : "none"}}> {loginerrormessage} </p>
                    <form onSubmit={Login_handlesubmit}>
                        <input type="text" onChange={Login_handlechange} name="login_username" id="" placeholder="Enter Username" />
                        <input type="password" onChange={Login_handlechange} name="login_password" id="" placeholder='Enter Password' />
                        <button className='login-button'>Login</button>
                    </form>
                    <div className='login-subdiv2'>
                        <Link to='/forgotpassword'>Forgot password?</Link>
                        <Link to="/register">Register</Link>
                    </div>
                    <p>
                        Find the perfect gift for birthdays, weddings, anniversaries, housewarmings, baby showers, farewells and more.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login