import React from 'react'
import './Header.css'
import CallIcon from '@mui/icons-material/Call';
import navbarToggler from '../../Assets/Icons/Vector.png'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Navbar = () => {
    return (
        <header>
            <section className='black-box-wrapper'>
                <div className="container">
                    {/* justify content space between flex starts here (Black Rectangle) */}
                    <div className='header-wrapper'>
                        <div>
                            <p>Welcome to Our Store Hiscraves</p>
                        </div>
                        <div>
                            <div className='left-hand-side-wrapper'>
                                <CallIcon />
                                <p>Call Us: 1234567890</p>
                            </div>
                        </div>
                    </div>
                    {/* justify content space between flex ends here (Black Rectangle) */}
                </div>
            </section>
            {/* navbar component starts here */}
            {/* 1 of three col starts here */}
            <section className='navbar-wrapper'>
                <div className="container">
                    <div className='navbar-expand-wrapper-grid-row'>
                        <div>
                            <img src={navbarToggler} alt="" />
                        </div>
                        <div>
                            <img src="https://etimg.etb2bimg.com/photo/87203105.cms" alt="" />
                        </div>
                        <div>
                            <SearchIcon />
                            <FavoriteBorderIcon />
                            <ShoppingCartOutlinedIcon />
                            <Person2OutlinedIcon />
                        </div>
                    </div>
                </div>
            </section>
            {/* 1 of three col ends here */}
            {/* navbar component ends here */}
        </header>
    )
}

export default Navbar