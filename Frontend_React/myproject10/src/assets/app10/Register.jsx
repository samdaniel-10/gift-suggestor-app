import '../app10_css/register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const[data1, setData1] = useState(null)
    const [error1, setError1] = useState(null);

    const [errormessage, setErrorMessage] = useState("")

    const[formdata, setFormData] = useState({
        fullname : "",
        email : "",
        mobile_no : "",
        username : "",
        password : "",
    })

    const [confirmPassword, setConfirmPassword] = useState("");

    const register_handlechange = (event)=>{
        setFormData({
            ...formdata,[event.target.name]:event.target.value
        })
    }

    const register_handlesubmit = (event)=>{
        event.preventDefault();

        if (formdata.password !== confirmPassword) {
            setErrorMessage("Password and Confirm Password do not match");
            return;
        }
        
        fetch("https://gift-suggestor-backend.onrender.com/register_1/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formdata)
        })

        .then((response) => {
            return response.json().then((info_data) => ({
                ok: response.ok,
                data: info_data
            }));
        })
        
        .then((result) => {

            setData1(result.data);

            if (result.ok) {

                setErrorMessage(result.data.message);  //------> alert("User Registered successfully");
                alert("User Registered Successfully")
                navigate("/login");

            } else {

                if (result.data.message === "Username already exists") {
                    setErrorMessage("Username already exists");
                }

            }

        })
        .catch((error) => {

            setError1(error.message);

        });
    }


  return (
    <>
        <div className='register-main1'>
            <div className='register-sub1'>
                <div>
                    <h1>🎁 Gift Suggestor</h1>
                    <p className='register-p'>Create your account and discover the perfect gift for every person and every occasion.</p>
                    <br />
                    <p className='register-row'>🎯 Personalized Gift Ideas</p>
                    <p className='register-row'>🎂 Occasion-Based Suggestions</p>
                    <p className='register-row'>💰 Gifts For Every Budget</p>
                    <p className='register-row'>❤️ Curated By Interests</p>
                </div>
            </div>
            <div className='register-sub2'>
              <div className='register-sub22'>
                  <h1>Create Account</h1>
                  <p>Join Gift Suggestor today</p>
                  <p className='register-error' style={{ display: errormessage ? "block" : "none" }}> {errormessage} </p>
                  <form style={{padding:"0", margin:"0"}} onSubmit={register_handlesubmit} >
                    <input type="text" name='fullname' onChange={register_handlechange} placeholder='Full Name' required/>
                    <input type="text" name='email' onChange={register_handlechange} placeholder='Email Address' required/>
                    <input type="text" name='mobile_no' onChange={register_handlechange} placeholder='Mobile Number' required/>
                    <input type="text" name='username' onChange={register_handlechange} placeholder='Username' required/>
                    <input type="text" name='password' onChange={register_handlechange} placeholder='Password' required/>
                    <input type="text" name='confirm_password' onChange={(event) => setConfirmPassword(event.target.value)} placeholder='Confirm Password' required/>
                    <input className="submit" type="submit" value="Register" required/>
                  </form>

                  <p className='register-login'>Already have an account? <Link to="/login">Login</Link></p> 
              </div>
            </div>
        </div>
    
    </>
  )
}

export default Register