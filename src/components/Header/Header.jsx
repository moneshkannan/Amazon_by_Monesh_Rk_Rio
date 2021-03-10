import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className = "header">
            <img className = "header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG6.png" />
            <div className = "header__search">
                <input className = "header__searchInput" type = "text"/>
                <SearchIcon className = "header__searchIcon"/>
            </div>
            <div className = "header__navbar">
                <div className = "header__option">
                    <span className = "header__optionLineOne"> Hello Guest </span>
                    <span className = "header__optionLineTwo"> Sign in </span>
                </div>
                <div className = "header__option">
                <span className = "header__optionLineOne"> Returns </span>
                    <span className = "header__optionLineTwo"> & orders </span>
                </div>
                <div className = "header__option">
                <span className = "header__optionLineOne"> Your </span>
                    <span className = "header__optionLineTwo"> Prime </span>
                </div>
                <div className = "header__optionBasket">
                    <ShoppingCartIcon/>
                    <span className = "header_optionLineTwo header__basketCount" >0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
