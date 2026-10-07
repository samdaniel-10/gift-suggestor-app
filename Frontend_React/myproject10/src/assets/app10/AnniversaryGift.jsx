import React from 'react'
import '../app10_css/anniversarygift.css'
import { Link } from 'react-router-dom'
import AnniversaryBlock from './AnniversaryBlock'
import { useLocation } from 'react-router-dom'

const AnniversaryGift = (props) => {

    const location = useLocation();

    const gift1 = location.state?.gifts || [];

    console.log("Gifts:", gift1);

    return (
    <>

        <div className='anniversarygift-maindiv'>
            <header>
                <h1>🎁 Gift Suggestor</h1>
                 <div>
                    <Link to="/homepage">Home</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>About</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>Settings</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>My Profile</Link>
                </div>
            </header>

            <main className='anniversarygift-content'>
                <div>
                    <span><Link to='/homepage'>Occasions</Link></span> / <span>anniversary</span>
                    <h3>💐 Anniversary Gift Suggestions</h3>
                    <p>Here are some gift ideas curated to celebrate their special day together.</p>
                    <div className='anniversarygift-subdiv'>
                        {gift1.map((gift)=><AnniversaryBlock key={gift.id} gift={gift} />)}
                    </div>

                    <div className='anniversarygift-subdiv2'>
                        <h4>🎈 Tips for Choosing a anniversary Gift</h4>
                        <ul>
                            <li>Think about a milestone gift that matches the number of years — paper, silver, gold, and so on.</li>
                            <li>A shared experience, like a trip or a dinner recreating your first date, can mean more than an object.</li>
                            <li>Personalized items — engraved jewelry, photo albums, or custom art — add a sentimental touch.</li>
                            <li>Consider something for their shared home or future, like decor or a joint hobby kit.</li>
                            <li>A heartfelt card recalling a favorite memory adds meaning to any gift.</li>
                        </ul>
                    </div>

                    <div className='anniversarygift-subdiv3'>
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

                    <div className='anniversarygift-subdiv4'>
                        <h4>Looking for a different occasion?</h4>
                        <section>
                            <Link to='/birthday'>Birthday</Link>
                            <Link to='/wedding'>Wedding</Link>
                            <Link to='/housewarming'>Housewarming</Link>
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


export default AnniversaryGift