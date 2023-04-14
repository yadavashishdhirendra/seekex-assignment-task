import React from 'react'
import './CircleIcons.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import showcaseData from '../DummyData/ShowCaseDummyData'

const CircleIcons = () => {
    return (
        <div className="container showcase-wrapper">
            <div className='showcase-grid-row'>
                {/* mapping the circle images component starts here */}
                {
                    showcaseData && showcaseData.map((i) => {
                        return (
                            <div key={i.id}>
                                {/* here image background color will be set according to the id */}
                                <div className={i.id === 1 || i.id === 5 ? 'bg-color1' : i.id === 2 ? 'bg-color2' : i.id === 3 ? 'bg-color3' : i.id === 4 ? 'bg-color4' : i.id === 6 ? 'bg-color6' : null}>
                                    <LazyLoadImage className='showcase-cards' src={i.image} alt="" />
                                </div>
                                <p className='title-showcase'>{i.title}</p>
                            </div>
                        )
                    })
                }
                {/* mapping the circle images component starts here */}
            </div>
        </div>
    )
}

export default CircleIcons