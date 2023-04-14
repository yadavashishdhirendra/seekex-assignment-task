import React from 'react'
import './WallLayout.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Baggy from '../../Assets/Images/image 2.png'
import Winter from '../../Assets/Images/image 3.png'
import Women from '../../Assets/Images/image 4.png'
import BestDeal from '../../Assets/Images/image 6.png'
import Trendy from '../../Assets/Images/image 5.png'

const WallLayout = () => {
    return (
        <>
            <div className="container baggy-wrapper">
                {/* 1 of 2 col starts here */}
                <div className='baggy-clothers-grid-row'>
                    <div>
                        <LazyLoadImage src={Baggy} />
                    </div>
                    <div>
                    <LazyLoadImage src={Winter} />
                    </div>
                </div>
                {/* 1 of 2 col ends here */}
                {/* 1 of 3 col starts here */}
                <div className="deals-grid-row">
                    <div>
                        <LazyLoadImage src={Women} />
                    </div>
                    <div>
                        <LazyLoadImage src={BestDeal} />
                    </div>
                    <div>
                        <LazyLoadImage src={Trendy} />
                    </div>
                </div>
                {/* 1 of 3 col ends here */}
            </div>
        </>
    )
}

export default WallLayout