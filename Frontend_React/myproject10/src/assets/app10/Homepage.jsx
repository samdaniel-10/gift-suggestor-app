import React from 'react'
import '../app10_css/homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <>
            <div className='homepage-maindiv'>

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
                                    <a className="nav-link" href="#">Home</a>
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




                <main className='homepage-main'>

                    <h1 className='homepage-title'>Your Guide to Finding the Perfect Gift</h1>

                    <h1 className='homepage-occassions'>Occasions</h1>
                    <div className='homepage-occassion_fields'>
                        <div>
                            <div>
                                <h1>🎂</h1>
                            </div>
                            <Link to='/birthday'>Birthday</Link>
                        </div>
                        <div>
                            <div>
                                <h1>💍</h1>
                            </div>
                            <Link to='/wedding'>Wedding</Link>
                        </div>
                        <div>
                            <div>
                                <h1>🏠</h1>
                            </div>
                            <Link to="/housewarming">Housewarming</Link>
                        </div>
                        <div>
                            <div>
                                <h1>💐</h1>
                            </div>
                            <Link to="/anniversary">Anniversary</Link>
                        </div>
                        <div>
                            <div>
                                <h1>🍼</h1>
                            </div>
                            <Link to="/babyshower">Babyshower</Link>
                        </div>
                        <div>
                            <div>
                                <h1>👋</h1>
                            </div>
                            <Link to="/farewellretirement">Farewell</Link>
                        </div>
                    </div>
                    <h1 className='homepage-occassions' id='features'>How it works</h1>
                    <div className='homepage-box'>
                        <div>
                            <div>
                                <h5>1</h5>
                            </div>
                            <h3 className='homepage-h33'>Choose an Occasion</h3>
                            <p>Select the event you're shopping for, from birthdays to farewells.</p>
                        </div>
                        <div>
                            <div>
                                <h5>2</h5>
                            </div>
                            <h3 className='homepage-h33'>Share Preferences</h3>
                            <p>Tell us a bit about the recipient's interests and your budget.</p>
                        </div>
                        <div>
                            <div>
                                <h5>3</h5>
                            </div>
                            <h3 className='homepage-h33'>Get Suggestions</h3>
                            <p>Receive a curated list of gift ideas picked just for them.</p>
                        </div>
                    </div>
                </main>

                <footer>
                    <p>© 2026 Gift Suggestor. All rights reserved.</p>
                </footer>

            </div>
        </>
    )
}


export default Homepage