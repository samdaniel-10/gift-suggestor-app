import React, { useState } from 'react'
import '../app10_css/anniversary.css'
import { useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'


const Anniversary = () => {

    const navigate = useNavigate()
    const { gifts, error, getGiftSuggestions } = useFetch(navigate);

    const [anniversarydata, setAnniversaryData] = useState({
        anniversary_budget: "",
        anniversary_gift_type: "",
        anniversary_category: "",
        anniversary_gift_preferences: ""
    })


    const anniversary_handlechange = (event) => {
        setAnniversaryData({
            ...anniversarydata,
            [event.target.name]: event.target.value
        });
    }

    const anniversary_handlesubmit = (event) => {
        event.preventDefault();
        getGiftSuggestions(
            'https://gift-suggestor-backend.onrender.com/anniversary_1/',
            anniversarydata,
            "/anniversarygift"
        );
    };

    return (
        <>
            <div className='anniversary-maindiv'>
                <nav className="navbar navbar-expand-md custom-navbar sticky-top">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="#">Gift Suggestor 🎁</a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarMenu"
                            aria-controls="navbarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/homepage">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Settings</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Profile</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>

                <main>
                    <h1>💐 Anniversary Gift Suggestor</h1>
                    <h4 className='anniversary-para'>Enter the details below to get suitable Anniversary gift suggestions.</h4>
                    <form className='anniversary-subdiv' onSubmit={anniversary_handlesubmit}>

                        <label htmlFor="budget">Budget <span>*</span></label>
                        <select name="anniversary_budget" onChange={anniversary_handlechange} id="budget" required>
                            <option value="">Select Budget</option>
                            <option value="Below ₹1,000">Below &#8377;1,000</option>
                            <option value="₹1,000 to ₹2,500">&#8377;1,000 to &#8377;2,500</option>
                            <option value="₹2,500 to ₹5,000">&#8377;2,500 to &#8377;5,000</option>
                            <option value="₹5,000 to ₹10,000">&#8377;5,000 to &#8377;10,000</option>
                            <option value="Above ₹10,000">Above &#8377;10,000</option>
                        </select>

                        <label htmlFor="gift type">Gift Type <span>*</span></label>
                        <select name="anniversary_gift_type" onChange={anniversary_handlechange} id="gift type" required>
                            <option value="">Select Gift Type</option>
                            <option value="Romantic">Romantic</option>
                            <option value="Personalized">Personalized</option>
                            <option value="Useful">Useful</option>
                            <option value="Traditional">Traditional</option>
                            <option value="Decorative">Others</option>
                        </select>

                        <label htmlFor="gift preferences">Gift Preferences <span>*</span></label>
                        <select name="anniversary_gift_preferences" onChange={anniversary_handlechange} id="gift preferences" required>
                            <option value=""> Select Gift Preferences</option>
                            <option value="Romantic">Romantic</option>
                            <option value="Memorable">Memorable</option>
                            <option value="Practical">Practical</option>
                            <option value="Unique">Unique</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Traditional">Traditional</option>
                        </select>

                        <label htmlFor="category">Category <span>*</span></label>
                        <select name="anniversary_category" onChange={anniversary_handlechange} id="category" required>
                            <option value="">Select Category</option>
                            <option value="Jewellery & Accessories">Jewellery & Accessories</option>
                            <option value="Personalized Gifts">Personalized Gifts</option>
                            <option value="Home & Decor">Home & Decor</option>
                            <option value="Flowers & Plants">Flowers & Plants</option>
                            <option value="Gadgets & Electronics">Gadgets & Electronics</option>
                        </select>



                        <button> 💐 check for gift suggestions</button>

                    </form>
                </main>

                <footer>
                    <p>© 2026 Gift Suggestor. All rights reserved.</p>
                </footer>
            </div>



        </>
    )
}

export default Anniversary