import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './Trending.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FourCards from '../4Cards/FourCards';
import trendingTshirts from '../DummyData/DummyData';


const TrendingTshirts = () => {
    return (
        <>
            <div className="container trending-wrapper">
                <h1>Trending T-Shirts</h1>
                <div className='trending-tshirt-grid-row'>
                    {
                        trendingTshirts && trendingTshirts.map((i) => {
                            return (
                                <div key={i.id}>
                                    <figure class="trending-t-shirt">
                                        <LazyLoadImage style={{ width: "100%" }} src={i.image} />
                                        <ShoppingCartIcon />
                                        <FavoriteIcon />
                                        <ShareIcon />
                                        <a href="#"></a>
                                    </figure>
                                    <div className='product-description'>
                                        <p>{i.title}</p>
                                        <p className='price-value'>₹{i.newprice} <span>₹{i.oldprice}</span></p>
                                    </div>
                                    <div className='product-size'>
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                        <p>XL</p>
                                        <p>XXL</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='view-all-btn'>
                    <button>view all</button>
                </div>
                <h2>Featured Products</h2>
                <FourCards trendingTshirts={trendingTshirts} />
            </div>
        </>
    )
}

export default TrendingTshirts