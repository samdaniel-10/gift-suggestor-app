import React, { useState } from 'react'
import '../app10_css/birthday.css'
import { useNavigate } from 'react-router-dom'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'



const Birthday = () => {

    const navigate = useNavigate()
    const { gifts, error, getGiftSuggestions } = useFetch(navigate);

    const [birthdaydata, setBirthdayData] = useState({
        birthday_relationship: "",
        birthday_field_of_interest: "",
        birthday_budget: "",
        birthday_gift_type: ""
    })


    const birthday_handlechange = (event) => {
        setBirthdayData({
            ...birthdaydata,
            [event.target.name]: event.target.value
        });
    }

    const birthday_handlesubmit = (event) => {
        event.preventDefault();
        getGiftSuggestions(
            'https://sam1100.pythonanywhere.com/birthday_1/',
            birthdaydata,
            "/birthdaygift"
        );
    };

    return (
        <>
            <div className='birthday-maindiv'>
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
                    <h1>🎂 Birthday Gift Suggestor</h1>
                    <h4 className='birthday-para'>Enter your preferences below and we'll suggest suitable birthday gifts based on your choices.</h4>
                    <form className='birthday-subdiv' onSubmit={birthday_handlesubmit}>
                        <label htmlFor="relationship">Who is this gift for? <span>*</span></label>
                        <select name="birthday_relationship" onChange={birthday_handlechange} id="relationship" required>
                            <option value="">Select Relationship</option>
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Friend">Friend</option>
                            <option value="Brother">Brother</option>
                            <option value="Sister">Sister</option>
                            <option value="Partner">Partner</option>
                        </select>

                        <label htmlFor="field of interest">Field of Interest <span>*</span></label>
                        <select name="birthday_field_of_interest" onChange={birthday_handlechange} id="field_of_interest" required>
                            <option value="">Select Interest</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Sports">Sports</option>
                            <option value="Music">Music</option>
                            <option value="Movies">Movies</option>
                            <option value="Reading">Reading</option>
                            <option value="Cooking">Cooking</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Technology">Technology</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Travel">Travel</option>
                            <option value="Any">Any</option>
                        </select>

                        <label htmlFor="budget">Budget <span>*</span></label>
                        <select name="birthday_budget" onChange={birthday_handlechange} id="budget" required>
                            <option value="">Select Budget</option>
                            <option value="Below ₹500">Below &#8377;500</option>
                            <option value="₹500 to ₹1,000">&#8377;500 to &#8377;1,000</option>
                            <option value="₹1,000 to ₹2,500">&#8377;1,000 to &#8377;2,500</option>
                            <option value="₹2,500 to ₹5,000">&#8377;2,500 to &#8377;5,000</option>
                            <option value="Above ₹5,000">Above &#8377;5,000</option>
                        </select>

                        <label htmlFor="gift type">Gift Type <span>*</span></label>
                        <select name="birthday_gift_type" onChange={birthday_handlechange} id="gift_type" required>
                            <option value="">Select Gift Type</option>
                            <option value="Useful">Useful</option>
                            <option value="Personalized">Personalized</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Experience">Experience</option>
                            <option value="Luxury">Luxury</option>
                        </select>

                        <button>🎂 check for gift suggestions</button>

                    </form>
                </main>

                <footer>
                    <p>© 2026 Gift Suggestor. All rights reserved.</p>
                </footer>
            </div>



        </>
    )
}

export default Birthday