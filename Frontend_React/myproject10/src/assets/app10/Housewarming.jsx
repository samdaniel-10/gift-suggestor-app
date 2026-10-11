import React, { useState } from 'react'
import '../app10_css/housewarming.css'
import { useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'



const Housewarming = () => {

    const navigate = useNavigate()
    const { gifts, error, getGiftSuggestions } = useFetch(navigate);

    const [housewarmingdata, setHousewarmingData] = useState({
        housewarming_budget: "",
        housewarming_gift_type: "",
        housewarming_category: "",
        housewarming_gift_preferences: ""
    })


    const housewarming_handlechange = (event) => {
        setHousewarmingData({
            ...housewarmingdata,
            [event.target.name]: event.target.value
        });
    }

    const housewarming_handlesubmit = (event) => {
        event.preventDefault();
        getGiftSuggestions(
            'https://gift-suggestor-backend.onrender.com/housewarming_1/',
            housewarmingdata,
            "/housewarminggift"
        );
    };

    return (
        <>
            <div className='housewarming-maindiv'>
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
                    <h1>🏠 Housewarming Gift Suggestor</h1>
                    <h4 className='housewarming-para'>Enter the details below to get suitable Housewarming gift suggestions.</h4>
                    <form className='housewarming-subdiv' onSubmit={housewarming_handlesubmit}>

                        <label htmlFor="budget">Budget <span>*</span></label>
                        <select name="housewarming_budget" onChange={housewarming_handlechange} id="budget" required>
                            <option value="">Select Budget</option>
                            <option value="Below ₹1,000">Below &#8377;1,000</option>
                            <option value="₹1,000 to ₹2,500">&#8377;1,000 to &#8377;2,500</option>
                            <option value="₹2,500 to ₹5,000">&#8377;2,500 to &#8377;5,000</option>
                            <option value="₹5,000 to ₹10,000">&#8377;5,000 to &#8377;10,000</option>
                            <option value="Above ₹10,000">Above &#8377;10,000</option>
                        </select>

                        <label htmlFor="gift type">Gift Type <span>*</span></label>
                        <select name="housewarming_gift_type" onChange={housewarming_handlechange} id="gift type" required>
                            <option value="">Select Gift Type</option>
                            <option value="Useful">Useful</option>
                            <option value="Personalized">Personalized</option>
                            <option value="Traditional">Traditional</option>
                            <option value="Decorative">Decorative</option>
                            <option value="Others">Others</option>
                        </select>

                        <label htmlFor="category">Category <span>*</span></label>
                        <select name="housewarming_category" onChange={housewarming_handlechange} id="category" required>
                            <option value="">Select Category</option>
                            <option value="Home & Kitchen">Home & Kitchen</option>
                            <option value="Home Decor">Home Decor</option>
                            <option value="Plants & Gardening">Plants & Gardening</option>
                            <option value="Appliances & Electronics">Appliances & Electronics</option>
                        </select>

                        <label htmlFor="gift preferences">Gift Preferences <span>*</span></label>
                        <select name="housewarming_gift_preferences" onChange={housewarming_handlechange} id="gift preferences" required>
                            <option value="">Select Gift Preference</option>
                            <option value="Practical">Practical</option>
                            <option value="Memorable">Memorable</option>
                            <option value="Unique">Unique</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Traditional">Traditional</option>
                            <option value="Others">Others</option>
                        </select>

                        <button> 🏠 check for gift suggestions</button>

                    </form>
                </main>

                <footer>
                    <p>© 2026 Gift Suggestor. All rights reserved.</p>
                </footer>
            </div>



        </>
    )
}

export default Housewarming