import React from 'react'
import '../app10_css/weddinggift.css'
import { Link } from 'react-router-dom'
import WeddingBlock from './WeddingBlock'
import { useLocation } from 'react-router-dom'

const WeddingGift = (props) => {

    const location = useLocation();

    const gift1 = location.state?.gifts || [];

    console.log("Gifts:", gift1);

    return (
        <>

            <div className='weddinggift-maindiv'>
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

                <main className='weddinggift-content'>
                    <div>
                        <span><Link to='/homepage'>Occasions</Link></span> / <span>wedding</span>
                        <h3>💍 wedding Gift Suggestions</h3>
                        <p>Here are some gift ideas to celebrate the happy couple.</p>
                        <div className='weddinggift-subdiv'>
                            {gift1.map((gift) => <WeddingBlock key={gift.id} gift={gift} />)}
                        </div>

                        <div className='weddinggift-subdiv2'>
                            <h4>🎈 Tips for Choosing a wedding Gift</h4>
                            <ul>
                                <li>Check the couple's gift registry first — it's the easiest way to get something they truly need.</li>
                                <li>Practical home items, like cookware sets or quality bedding, suit couples starting a new home together.</li>
                                <li>Consider gifting an experience, such as a honeymoon activity or a couples' spa voucher.</li>
                                <li>Personalized keepsakes — engraved photo frames, custom art, or monogrammed items — carry lasting sentimental value.</li>
                                <li>If unsure of taste, cash or a gift card is a widely appreciated and practical choice at weddings.</li>
                            </ul>
                        </div>

                        <div className='weddinggift-subdiv3'>
                            <h4>💰 Shop by Budget</h4>
                            <section>
                                <div>
                                    <p className='bold'>Under ₹500</p>
                                    <p className='non-bold'>Thoughtful small gifts</p>
                                </div>
                                <div>
                                    <p className='bold'>₹500 – ₹1500</p>
                                    <p className='non-bold'>Mid-range favorites</p>
                                </div>
                                <div>
                                    <p className='bold'>₹1500 – ₹5000</p>
                                    <p className='non-bold'>Premium picks</p>
                                </div>
                                <div>
                                    <p className='bold'>₹5000+</p>
                                    <p className='non-bold'>Luxury gifting</p>
                                </div>
                            </section>
                        </div>

                        <div className='weddinggift-subdiv4'>
                            <h4>Looking for a different occasion?</h4>
                            <section>
                                <Link to='/birthday'>Birthday</Link>
                                <Link to='/housewarming'>Housewarming</Link>
                                <Link to='/anniversary'>Anniversary</Link>
                                <Link to='/babyshower'>Babyshower</Link>
                                <Link to='/farewellretirement'>Farewell</Link>
                            </section>
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


export default WeddingGift