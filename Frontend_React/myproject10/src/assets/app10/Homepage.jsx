import React from 'react'
import '../app10_css/homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
        <div className='homepage-maindiv'>
            
            <header className="navbar navbar-expand-lg navbar-dark bg-dark gift-navbar">
                <div className="container-fluid px-4">

                    <Link className="navbar-brand fw-bold" to="/homepage">
                        🎁 Gift Suggestor
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#giftNavbar"
                        aria-controls="giftNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="giftNavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/homepage">Home</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about"
                                onClick={(e) => e.preventDefault()}>
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#settings"
                                onClick={(e) => e.preventDefault()}>
                                    Settings
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#profile"
                                onClick={(e) => e.preventDefault()}>
                                    My Profile
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </header>

            <main className='homepage-main'>
                <h1 style={{marginBottom:"40px", marginTop:"100px", fontWeight:"bold"}}>Your Guide to Finding the Perfect Gift</h1>
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
                        <a href="/housewarming">Housewarming</a>
                    </div>
                    <div>
                        <div>
                            <h1>💐</h1>
                        </div>
                        <a href="/anniversary">Anniversary</a>
                    </div>
                    <div>
                        <div>
                            <h1>🍼</h1>
                        </div>
                        <a href="/babyshower">Babyshower</a>
                    </div>
                    <div>
                        <div>
                            <h1>👋</h1>
                        </div>
                        <a href="/farewellretirement">Farewell</a>
                    </div>
                </div>
                <h1 className='homepage-occassions'>How it works</h1>
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