import React, { useState } from 'react'
import '../app10_css/wedding.css'
import { useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'



const Wedding = () => {

    const navigate = useNavigate()
    const { gifts, error, getGiftSuggestions } = useFetch(navigate);

    const [weddingdata, setWeddingData] = useState({
        wedding_budget: "",
        wedding_gift_type: "",
        wedding_category: "",
        wedding_gift_preferences: ""
    })


    const wedding_handlechange = (event) => {
        setWeddingData({
            ...weddingdata,
            [event.target.name]: event.target.value
        });
    }

    const wedding_handlesubmit = (event) => {
        event.preventDefault();
        getGiftSuggestions(
            'https://gift-suggestor-backend.onrender.com/wedding_1/',
            weddingdata,
            "/weddinggift"
        );
    };

    return (
        <>
            <div className='wedding-maindiv'>
                <nav className="navbar navbar-expand-md custom-navbar">
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
                    <h1>💍 Wedding Gift Suggestor</h1>
                    <h4 className='wedding-para'>Enter your preferences below and we'll suggest suitable wedding gifts based on your choices.</h4>
                    <form className='wedding-subdiv' onSubmit={wedding_handlesubmit}>

                        <label htmlFor="budget">Budget <span>*</span></label>
                        <select name="wedding_budget" onChange={wedding_handlechange} id="budget" required>
                            <option value="">Select Budget</option>
                            <option value="Below ₹1,000">Below &#8377;1,000</option>
                            <option value="₹1,000 to ₹2,500">&#8377;1,000 to &#8377;2,500</option>
                            <option value="₹2,500 to ₹5,000">&#8377;2,500 to &#8377;5,000</option>
                            <option value="₹5,000 to ₹10,000">&#8377;5,000 to &#8377;10,000</option>
                            <option value="Above ₹10,000">Above &#8377;10,000</option>
                        </select>

                        <label htmlFor="gift type">Gift Type <span>*</span></label>
                        <select name="wedding_gift_type" onChange={wedding_handlechange} id="gift type" required>
                            <option value="">Select Gift Type</option>
                            <option value="Useful">Useful</option>
                            <option value="Personalized">Personalized</option>
                            <option value="Romantic">Romantic</option>
                            <option value="Traditional">Traditional</option>
                            <option value="Others">Others</option>
                        </select>

                        <label htmlFor="category">Category <span>*</span></label>
                        <select name="wedding_category" onChange={wedding_handlechange} id="category" required>
                            <option value="">Select Category</option>
                            <option value="Home and Kitchen">Home & Kitchen</option>
                            <option value="Fashion & Accessories">Fashion & Accessories</option>
                            <option value="Travel">Travel</option>
                            <option value="Others">Others</option>
                        </select>

                        <label htmlFor="gift preferences">Gift Preferences <span>*</span></label>
                        <select name="wedding_gift_preferences" onChange={wedding_handlechange} id="gift preferences" required>
                            <option value="">Select Gift Preference</option>
                            <option value="Practical">Practical</option>
                            <option value="Memorable">Memorable</option>
                            <option value="Unique">Unique</option>
                            <option value="Luxury">Luxury</option>
                            <option value="CoupleOriented">Couple-Oriented</option>
                            <option value="Others">Others</option>
                        </select>

                        <button> 💍 check for gift suggestions</button>

                    </form>
                </main>

                <footer>
                    <p>© 2026 Gift Suggestor. All rights reserved.</p>
                </footer>
            </div>



        </>
    )
}

export default Wedding