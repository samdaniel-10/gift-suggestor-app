import React, { useState } from 'react'
import '../app10_css/babyshower.css'
import { useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'


const Babyshower = () => {

    const navigate = useNavigate()
    const { gifts, error, getGiftSuggestions } = useFetch(navigate);

    const [babyshowerdata, setBabyshowerData] = useState({
        babyshower_budget: "",
        babyshower_gift_type: "",
        babyshower_category: "",
        babyshower_gift_preferences: ""
    })


    const babyshower_handlechange = (event) => {
        setBabyshowerData({
            ...babyshowerdata,
            [event.target.name]: event.target.value
        });
    }

    const babyshower_handlesubmit = (event) => {
        event.preventDefault();
        getGiftSuggestions(
            'https://gift-suggestor-backend.onrender.com/babyshower_1/',
            babyshowerdata,
            "/babyshowergift"
        );
    };

    return (
        <>
            <div className='babyshower-maindiv'>
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
                    <h1>🍼 Babyshower Gift Suggestor</h1>
                    <h4 className='babyshower-para'>Select your preferences to get a suitable baby shower gift suggestion.</h4>
                    <form className='babyshower-subdiv' onSubmit={babyshower_handlesubmit}>

                        <label htmlFor="budget">Budget <span>*</span></label>
                        <select name="babyshower_budget" onChange={babyshower_handlechange} id="budget" required>
                            <option value="">Select Budget</option>
                            <option value="Below ₹500">Below &#8377;500</option>
                            <option value="₹500 to ₹1,000">&#8377;500 to &#8377;1,000</option>
                            <option value="₹1,000 to ₹2,500">₹1,000 to ₹2,500</option>
                            <option value="₹2,500 to ₹5,000">₹2,500 to ₹5,000</option>
                            <option value="Above ₹5,000">Above ₹5,000</option>
                        </select>

                        <label htmlFor="gift type">Gift Type <span>*</span></label>
                        <select name="babyshower_gift_type" onChange={babyshower_handlechange} id="gift type" required>
                            <option value="">Select Gift Type</option>
                            <option value="Useful">Useful</option>
                            <option value="Personalized">Personalized</option>
                            <option value="Handmade">Handmade</option>
                            <option value="Celebration">Celebration</option>

                        </select>

                        <label htmlFor="category">Category <span>*</span></label>
                        <select name="babyshower_category" onChange={babyshower_handlechange} id="category" required>
                            <option value="">Select Category</option>
                            <option value="Baby Clothing">Baby Clothing</option>
                            <option value="Baby Care">Baby Care</option>
                            <option value="Toys & Games">Toys & Games</option>
                            <option value="Nursery & Decor">Nursery & Decor</option>
                            <option value="Mom & Baby">Mom & Baby</option>
                        </select>

                        <label htmlFor="gift preferences">Gift Preferences <span>*</span></label>
                        <select name="babyshower_gift_preferences" onChange={babyshower_handlechange} id="gift preferences" required>
                            <option value="">Select Gift Preference</option>
                            <option value="Practical">Practical</option>
                            <option value="Cute">Cute</option>
                            <option value="Personalized">Personalized</option>
                            <option value="Creative">Creative</option>
                        </select>

                        <button> 🍼 check for gift suggestions</button>

                    </form>
                </main>

                <footer>
                    <p>© 2026 Gift Suggestor. All rights reserved.</p>
                </footer>
            </div>



        </>
    )
}

export default Babyshower