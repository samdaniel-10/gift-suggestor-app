import '../app10_css/forgotpassword.css'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>
            <div className='forgotpassword-maindiv'>
                <div className='forgotpassword-subdiv'>
                    <div>
                        <h1>🔒</h1>
                    </div>
                    <h1>Forgot Password</h1>
                    <p className='forgotpassword-p'>No worries — enter your username and choose a new password to regain access to your account.</p>
                    <label htmlFor="username">Username</label> <input type="text" id='username' placeholder='Enter your username'/>
                    <label htmlFor="password">New Password</label> <input type="text" id='password' placeholder='Enter your new password' />
                    <label htmlFor="confirm_password">Confirm Password</label> <input type="text" id='confirm_password' placeholder='Confirm password' />
                    <input type="submit" className='forgotpassword-submit' value="Reset Password" />
                    <p className='forgotpassword-para'>Tip: choose a password that's at least 8 characters long and mixes letters, numbers, and symbols.</p>
                    <p className='forgotpassword-login'>Remembered your password? <a href="#"><Link to='/login'> Back to Login</Link></a></p>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
