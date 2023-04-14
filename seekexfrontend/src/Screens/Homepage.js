import React from 'react'
import Banner from '../Components/Banner/Banner'
import Navbar from '../Components/Header/Navbar'
import CircleIcons from '../Components/ShowCase/CircleIcons'
import WallLayout from '../Components/WallLayout/WallLayout'
import BannerImage from '../Assets/Images/image 1.png'
import BannerImage2 from '../Assets/Images/banner1 2.png'
import BannerImage3 from '../Assets/Images/banner1 3.png'
import TrendingTshirts from '../Components/TrendingTshirts/TrendingTshirts'
import FourCards from '../Components/4Cards/FourCards'
import BlurCard from '../Components/BlurCard/BlurCard'
import OffersCards from '../Components/OffersCards/OffersCards'
import ShipmentCards from '../Components/ShipmentPolicy/ShipmentCards'
import SubscribeNewsletter from '../Components/SubscribeNewsLetter/SubscribeNewsletter'
import Footer from '../Components/Footer/Footer'

const Homepage = () => {
    return (
        <>
            <Navbar />
            {/* Passing Image as a props */}
            <Banner image={BannerImage} />
            <CircleIcons />
            <WallLayout />
            <TrendingTshirts />
            <Banner image={BannerImage2} />
            <div className="container">
                <h3>New Products</h3>
                <FourCards />
                <h3>Best Selling Products</h3>
                <FourCards />
            </div>
            <BlurCard />
            <Banner image={BannerImage3} />
            <OffersCards />
            <ShipmentCards />
            <SubscribeNewsletter />
            <Footer />
        </>
    )
}

export default Homepage