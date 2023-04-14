import React from 'react'
import './Banner.css'
import {LazyLoadImage} from 'react-lazy-load-image-component'

// Fetching props making resuable component
const Banner = (props) => {
    console.log(props)
    return (
        <div className='banner-img-wrapper'>
            <LazyLoadImage className={props.image === '/static/media/image 1.60a9f3263be900cf92fa.png' ? 'img' : 'imgs'} src={props.image} alt="" />
        </div>
    )
}

export default Banner