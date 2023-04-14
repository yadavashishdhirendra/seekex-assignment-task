import React from 'react'
import './SubscribeNewsLetter.css'
import Vector from '../../Assets/Icons/Vector (1).png'
import Vector2 from '../../Assets/Icons/Vector2.png'

const SubscribeNewsletter = () => {
    return (
        <div>
            <div className="container">
                <div className='newsletter-container'>
                    <img className='transparent-vector-left' src={Vector} alt="" />
                    <img className='transparent-vector-right' src={Vector2} alt="" />
                    <h4>Subscribe to get updates on exciting offers <br />
                        & deals</h4>
                        <div className='input-newsletter'>
                            <input type="text" name="" id="" placeholder='Enter Your Email' />
                            <button>Subscribe</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeNewsletter