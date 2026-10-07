import React from 'react'
import '../app10_css/birthdaygift.css'
import { Link } from 'react-router-dom'
import BirthdayBlock from './BirthdayBlock'
import { useLocation } from 'react-router-dom'

const BirthdayGift = (props) => {

    const location = useLocation();

    const gift1 = location.state?.gifts || [];

    console.log("Gifts:", gift1);

    return (
    <>

        <div className='birthdaygift-maindiv'>
            <header>
                <h1>🎁 Gift Suggestor</h1>
                <div>
                    <Link to="/homepage">Home</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>About</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>Settings</Link>
                    <Link to="#" onClick={(e) => e.preventDefault()}>My Profile</Link>
                </div>
            </header>

            <main className='birthdaygift-content'>
                <div>
                    <span><Link to='/homepage'>Occasions</Link></span> / <span>Birthday</span>
                    <h3>🎂 Birthday Gift Suggestions</h3>
                    <p>Here are some gift ideas curated for birthdays.</p>
                    <div className='birthdaygift-subdiv'>
                        {gift1.map((gift)=><BirthdayBlock key={gift.id} gift={gift} />)}
                    </div>

                    <div className='birthdaygift-subdiv2'>
                        <h4>🎈 Tips for Choosing a Birthday Gift</h4>
                        <ul>
                            <li>Think about their hobbies and interests rather than what's trending.</li>
                            <li>A thoughtful, personalized gift is often remembered longer than an expensive one.</li>
                            <li>Consider gifting an experience — a class, a day trip, or tickets to something they love.</li>
                            <li>If you're unsure of their taste, a versatile gift like a gift card still shows you cared enough to ask around.</li>
                            <li>Add a handwritten note — it costs nothing but means a lot.</li>
                        </ul>
                    </div>

                    <div className='birthdaygift-subdiv3'>
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

                    <div className='birthdaygift-subdiv4'>
                        <h4>Looking for a different occasion?</h4>
                        <section>
                            <Link to='/wedding'>Wedding</Link>
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


export default BirthdayGift