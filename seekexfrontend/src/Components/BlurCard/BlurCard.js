import React from 'react'
import Popper from '../../Assets/Images/Rectangle 18.png'
import Popper1 from '../../Assets/Images/Rectangle 19.png'
import Popper2 from '../../Assets/Images/Rectangle 20.png'
import Popper3 from '../../Assets/Images/Rectangle 21.png'
import Popper4 from '../../Assets/Images/Rectangle 22.png'
import Popper5 from '../../Assets/Images/Rectangle 23.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './BlurCard.css'

const BlurCard = () => {
    return (
        <>
            <div className="container">
                <div className='blur-card-grid-row'>
                    <div>
                        <LazyLoadImage src={Popper} />
                        <div className='blur-bg'>
                            <p>Streetwear Collections</p>
                        </div>
                    </div>
                    <div>
                        <LazyLoadImage src={Popper1} />
                        <div className='blur-bg'>
                            <p>Striped T-Shirts</p>
                        </div>
                    </div>
                    <div>
                        <LazyLoadImage src={Popper2} />
                        <div className='blur-bg'>
                            <p>Round Neck T-Shirts</p>
                        </div>
                    </div>
                    <div>
                        <LazyLoadImage src={Popper3} />
                        <div className='blur-bg'>
                            <p>Printed T-Shirts</p>
                        </div>
                    </div>
                    <div>
                        <LazyLoadImage src={Popper4} />
                        <div className='blur-bg'>
                            <p>Oversized T-Shirts</p>
                        </div>
                    </div>
                    <div>
                        <LazyLoadImage src={Popper5} />
                        <div className='blur-bg'>
                            <p>Half Sleeves T-Shirts</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlurCard