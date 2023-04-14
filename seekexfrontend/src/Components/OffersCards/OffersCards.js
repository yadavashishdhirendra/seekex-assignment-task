import React from 'react'
import './OffersCards.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Diamond from '../../Assets/Icons/diamond 1.png'
import Discount from '../../Assets/Icons/discount 1.png'

const OffersCards = () => {
    return (
        <>
            <div className="container">
                <div className='offers-cards'>
                    <div>
                        <LazyLoadImage src={Diamond} />
                        <p>Hurry Up!</p>
                        <p>85% OFF</p>
                        <p>Sale</p>
                        <button>shop now</button>
                    </div>
                    <div>
                        <LazyLoadImage src={Discount} />
                        <p>Hurry Up!</p>
                        <p>75% OFF</p>
                        <p>Sale</p>
                        <button>shop now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OffersCards