import React from 'react'
import '../app10_css/babyshowergift.css'
import { Link } from 'react-router-dom'
import BabyshowerBlock from './BabyshowerBlock'
import { useLocation } from 'react-router-dom'

const BabyshowerGift = (props) => {

    const location = useLocation();

    const gift1 = location.state?.gifts || [];

    console.log("Gifts:", gift1);

    return (
        <>

            <div className='babyshowergift-maindiv'>
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

                <main className='babyshowergift-content'>
                    <div>
                        <span><Link to='/homepage'>Occasions</Link></span> / <span>babyshower</span>
                        <h3>🍼 Babyshower Gift Suggestions</h3>
                        <p>Here are some gift ideas to welcome the new arrival.</p>
                        <div className='babyshowergift-subdiv'>
                            {gift1.map((gift) => <BabyshowerBlock key={gift.id} gift={gift} />)}
                        </div>

                        <div className='babyshowergift-subdiv2'>
                            <h4>🎈 Tips for Choosing a babyshower Gift</h4>
                            <ul>
                                <li>Practical essentials like diapers, onesies, and swaddles are always appreciated.</li>
                                <li>Check the parents' registry first, if they have one, to avoid duplicate gifts.</li>
                                <li>Consider gifts that grow with the baby, like a stroller upgrade or convertible crib bedding.</li>
                                <li>A keepsake item — a handprint kit, personalized blanket, or engraved nursery decor — becomes a lasting memory.</li>
                                <li>Don't forget the parents too — a self-care basket or meal-delivery gift card helps them as much as the baby gift.</li>
                            </ul>
                        </div>

                        <div className='babyshowergift-subdiv3'>
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

                        <div className='babyshowergift-subdiv4'>
                            <h4>Looking for a different occasion?</h4>
                            <section>
                                <Link to='/birthday'>Birthday</Link>
                                <Link to='/wedding'>Wedding</Link>
                                <Link to='/housewarming'>Housewarming</Link>
                                <Link to='/anniversary'>Anniversary</Link>
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


export default BabyshowerGift