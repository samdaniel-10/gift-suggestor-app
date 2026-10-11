import React, { useState } from 'react'
import '../app10_css/farewellretirement.css'
import { useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'



const FarewellRetirement = () => {

    const navigate = useNavigate()
    const { gifts, error, getGiftSuggestions } = useFetch(navigate);

    const [farewellretirementdata, setFarewellRetirementData] = useState({
        farewellretirement_occassion_type: "",
        farewellretirement_budget: "",
        farewellretirement_gift_type: "",
        farewellretirement_category: "",
        farewellretirement_gift_preferences: ""
    })


    const farewellretirement_handlechange = (event) => {
        setFarewellRetirementData({
            ...farewellretirementdata,
            [event.target.name]: event.target.value
        });
    }

    const farewellretirement_handlesubmit = (event) => {
        event.preventDefault();
        getGiftSuggestions(
            'https://gift-suggestor-backend.onrender.com/farewellretirement_1/',
            farewellretirementdata,
            "/farewellretirementgift"
        );
    };

    return (
        <>
            <div className='farewellretirement-maindiv'>
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
                    <h1>👋 Farewell / Retirement Gift Suggestor</h1>
                    <h4 className='farewellretirement-para'>Select your preferences to get a suitable farewell or retirement gift suggestion.</h4>
                    <form className='farewellretirement-subdiv' onSubmit={farewellretirement_handlesubmit}>

                        <label htmlFor="occasion_type">Occasion Type <span>*</span></label>
                        <select name="farewellretirement_occassion_type" onChange={farewellretirement_handlechange} id="occasion_type" required>
                            <option value="">Select Occasion</option>
                            <option value="Farewell">Farewell</option>
                            <option value="Retirement">Retirement</option>
                        </select>

                        <label htmlFor="budget">Budget <span>*</span></label>
                        <select name="farewellretirement_budget" onChange={farewellretirement_handlechange} id="budget" required>
                            <option value="">Select Budget</option>
                            <option value="Below ₹500">Below &#8377;500</option>
                            <option value="₹500 to ₹1,000">&#8377;500 to &#8377;1,000</option>
                            <option value="₹1,000 to ₹2,500">₹1,000 to ₹2,500</option>
                            <option value="₹2,500 to ₹5,000">₹2,500 to ₹5,000</option>
                            <option value="Above ₹5,000">Above ₹5,000</option>
                        </select>

                        <label htmlFor="gift type">Gift Type <span>*</span></label>
                        <select name="farewellretirement_gift_type" onChange={farewellretirement_handlechange} id="gift type" required>
                            <option value="">Select Gift Type</option>
                            <option value="Useful">Useful</option>
                            <option value="Personalized">Personalized</option>
                            <option value="Handmade">Handmade</option>
                            <option value="Experience">Experience</option>

                        </select>

                        <label htmlFor="category">Category <span>*</span></label>
                        <select name="farewellretirement_category" onChange={farewellretirement_handlechange} id="category" required>
                            <option value="">Select Category</option>
                            <option value="Personalized Gifts">Personalized Gifts</option>
                            <option value="Office & Desk">Office & Desk</option>
                            <option value="Home & Decor">Home & Decor</option>
                            <option value="Hobbies & Lifestyle">Hobbies & Lifestyle</option>
                            <option value="Travel & Experiences">Travel & Experiences</option>
                        </select>

                        <label htmlFor="gift preferences">Gift Preferences <span>*</span></label>
                        <select name="farewellretirement_gift_preferences" onChange={farewellretirement_handlechange} id="gift preferences" required>
                            <option value="">Select Gift Preference</option>
                            <option value="Practical">Practical</option>
                            <option value="Emotional">Emotional</option>
                            <option value="Memorable">Memorable</option>
                            <option value="Creative">Creative</option>
                        </select>

                        <button> 👋 check for gift suggestions</button>

                    </form>
                </main>

                <footer>
                    <p>© 2026 Gift Suggestor. All rights reserved.</p>
                </footer>
            </div>



        </>
    )
}

export default FarewellRetirement