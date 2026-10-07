import React from 'react'
import '../app10_css/farewellretirementgift.css'
import { Link } from 'react-router-dom'
import FarewellRetirementBlock from './FarewellRetirementBlock'
import { useLocation } from 'react-router-dom'


const FarewellRetirementGift = (props) => {

    const location = useLocation();

    const gift1 = location.state?.gifts || [];

    console.log("Gifts:", gift1);

    return (
    <>

        <div className='farewellretirementgift-maindiv'>
            <header>
                <h1>🎁 Gift Suggestor</h1>
                <div>
                    <Link to="/homepage">Home</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>About</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>Settings</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>My Profile</Link>
                </div>
            </header>

            <main className='farewellretirementgift-content'>
                <div>
                    <span><Link to='/homepage'>Occasions</Link></span> / <span>Farewell - Retirement</span>
                    <h3>🍼 Farewell / Retirement Gift Suggestions</h3>
                    <p>Here are some gift ideas to celebrate their next chapter.</p>
                    <div className='farewellretirementgift-subdiv'>
                        {gift1.map((gift)=><FarewellRetirementBlock key={gift.id} gift={gift} />)}
                    </div>

                    <div className='farewellretirementgift-subdiv2'>
                        <h4>🎈 Tips for Choosing a farewellretirement Gift</h4>
                        <ul>
                            <li>Reflect on their journey — a memory book or a card signed by colleagues adds a personal touch.</li>
                            <li>For retirement, think about what comes next: travel gear, hobby kits, or something for relaxation.</li>
                            <li>A group gift often allows for a more meaningful, higher-value present than individual small gifts.</li>
                            <li>Practical items like a quality bag, watch, or planner suit a career transition well.</li>
                            <li>A heartfelt speech or note expressing gratitude can matter more than the gift itself.</li>
                        </ul>
                    </div>

                    <div className='farewellretirementgift-subdiv3'>
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

                    <div className='farewellretirementgift-subdiv4'>
                        <h4>Looking for a different occasion?</h4>
                        <section>
                            <Link to='/birthday'>Birthday</Link>
                            <Link to='/wedding'>Wedding</Link>
                            <Link to='/housewarming'>Housewarming</Link>
                            <Link to='/anniversary'>Anniversary</Link>
                            <Link to='/babyshower'>Babyshower</Link>
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


export default FarewellRetirementGift