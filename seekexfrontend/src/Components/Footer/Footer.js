import React from 'react'
import './Footer.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import facebook from '../../Assets/Icons/Group 230.png'
import Twitter from '../../Assets/Icons/Group 231.png'
import Instagram from '../../Assets/Icons/Group 232 (1).png'
import Linkedin from '../../Assets/Icons/Group 233.png'
import Pinterest from '../../Assets/Icons/Group 234.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className='footer-grid-row'>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....</p>
                            <a href="">
                                <LazyLoadImage src={facebook} />
                            </a>
                            <a href="">
                                <LazyLoadImage src={Twitter} />
                            </a>
                            <a href="">
                                <LazyLoadImage src={Instagram} />
                            </a>
                            <a href="">
                                <LazyLoadImage src={Linkedin} />
                            </a>
                            <a href="">
                                <LazyLoadImage src={Pinterest} />
                            </a>
                        </div>
                        <div>
                            <p>ONLINE SHOPPING</p>
                            <p><a href="">Men’s T-Shirts</a></p>
                            <p><a href="">Women’s Wear</a></p>
                            <p><a href="">Winter Collections</a></p>
                            <p><a href="">Hooded T-Shirts</a></p>
                            <p><a href="">Streetwear Collections</a></p>
                        </div>
                        <div>
                            <p>CUSTOMER POLICIES</p>
                            <p><a href="">About Us</a></p>
                            <p><a href="">Terms & Conditions</a></p>
                            <p><a href="">Shipping & Returns Policy</a></p>
                            <p><a href="">Cancellation & Refund Policy</a></p>
                            <p><a href="">Contact Us</a></p>
                        </div>
                        <div>
                            <p>STORE INFORMATION</p>
                            <ul className='location-col'>
                                <li><span>Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.</span></li>
                                <li><span>Call Us: 1234567890</span></li>
                                <li><span>Email Us: info@yourmail.com</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <p className='copyright'>©2022-23 Powered By dummy team</p>
        </>
    )
}

export default Footer