import React from 'react'
import './ShipmentCard.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Return from '../../Assets/Icons/Group.png'
import Quality from '../../Assets/Icons/Group 196.png'
import Payment from '../../Assets/Icons/Group 197.png'
import HelpLine from '../../Assets/Icons/Group 198.png'
import ellipse from '../../Assets/Icons/Ellipse 27.png'
import ellipse2 from '../../Assets/Icons/Ellipse 39.png'

const ShipmentCards = () => {
    return (
        <>
            <div className='shipment-wrapper'>
                <img className='ellipse-sec' src={ellipse2} alt="" />
                <div className="container">
                    <div className='shipment-grid-card-row'>
                        <div>
                            <LazyLoadImage src={Return} />
                            <p>7 Days Return</p>
                        </div>
                        <div>
                            <LazyLoadImage src={Quality} />
                            <p>Quality Products</p>
                        </div>
                        <div>
                            <LazyLoadImage src={Payment} />
                            <p>Safe Payment</p>
                        </div>
                        <div>
                            <LazyLoadImage src={HelpLine} />
                            <p>24x7 Helpline</p>
                        </div>
                    </div>
                </div>
                <img className='ellipse' src={ellipse} alt="" />
            </div>
        </>
    )
}

export default ShipmentCards