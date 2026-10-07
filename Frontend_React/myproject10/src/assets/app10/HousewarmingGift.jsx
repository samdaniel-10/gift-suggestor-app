import React from 'react'
import '../app10_css/housewarminggift.css'
import { Link } from 'react-router-dom'
import HousewarmingBlock from './HousewarmingBlock'
import { useLocation } from 'react-router-dom'

const HousewarmingGift = (props) => {

    const location = useLocation();

    const gift1 = location.state?.gifts || [];

    console.log("Gifts:", gift1);

    return (
    <>

        <div className='housewarminggift-maindiv'>
            <header>
                <h1>🎁 Gift Suggestor</h1>
                <div>
                    <Link to="/homepage">Home</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>About</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>Settings</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>My Profile</Link>
                </div>
            </header>

            <main className='housewarminggift-content'>
                <div>
                    <span><Link to='/homepage'>Occasions</Link></span> / <span>housewarming</span>
                    <h3>🏠 Housewarming Gift Suggestions</h3>
                    <p>Here are some gift ideas to help them settle into their new home.</p>
                    <div className='housewarminggift-subdiv'>
                        {gift1.map((gift)=><HousewarmingBlock key={gift.id} gift={gift} />)}
                    </div>

                    <div className='housewarminggift-subdiv2'>
                        <h4>🎈 Tips for Choosing a housewarming Gift</h4>
                        <ul>
                            <li>Practical home essentials — kitchenware, plants, or decor — are always welcome in a new space.</li>
                            <li>Avoid overly personal style choices unless you know their taste well; go for versatile pieces instead.</li>
                            <li>Consider gifting something for their first meal at home, like a cozy dinnerware set or a curated snack basket.</li>
                            <li>A scented candle or diffuser helps a new house feel warm and lived-in right away.</li>
                            <li>For close friends or family, a personalized doormat or house-shaped keepsake adds a thoughtful touch.</li>
                        </ul>
                    </div>

                    <div className='housewarminggift-subdiv3'>
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

                    <div className='housewarminggift-subdiv4'>
                        <h4>Looking for a different occasion?</h4>
                        <section>
                            <Link to='/birthday'>Birthday</Link>
                            <Link to='/wedding'>Wedding</Link>
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


export default HousewarmingGift