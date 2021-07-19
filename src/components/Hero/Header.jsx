import React from 'react'
import './Hero.css'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {

    return (
        <div className="Header__line">
        <div className='header'>
            <div className="header__links">
                <span>All post(32)</span>
                <span>Posts(368)</span>
                <span>Article</span>
                <span>Event</span>
                <span>Education</span>
                <span>Jobs</span>
            </div>
            <div className="header__buttons"></div>
                <div className="header__drop">
                    <button>Write a Post<ArrowDropDownIcon/></button>
                    <button>Write a Post<ArrowDropDownIcon/></button>
                </div>

                <div className="header__joingrp">
                    <button><GroupAddIcon/>  Join group</button>
                </div>
                
        </div>

        <div className="Header__margin"></div>
        </div>
    )
}

export default Header
