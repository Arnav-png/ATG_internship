import React from "react";
import { useState } from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import whole from "../../Images/whole.png";
import Backdrop from "../Login/Backdrop";
import LoginModal from'../Login/LoginModal'

const Navbar = () => {
    const [modalOpen,setmodalOpen] = useState(false)
    const modalOpener = () =>{
        setmodalOpen(true)
    };
    const modalCloser = () =>{
        setmodalOpen(false)
    }

  return (
    <>
      <nav className="nav__main">
        <div className="nav__logo">
          <img src={whole} alt="ATG_WORLD_LOGO" />
        </div>
        <div className="nav__search">
          <div className="nav__searchIcon">
            <SearchIcon />
          </div>
          <input
            placeholder="Search your Favourite Groups in ATG"
            className="nav__input"
            type="text"
          />
        </div>
        <div className="nav__login">
          <h5>
            Create account. <span onClick = {modalOpener}>It's free!</span>
          </h5>
          <div className="nav__dropicon">
            <ArrowDropDownIcon />
          </div>
        </div>
      </nav>
      <div className="hero__img">
        <div className="hero__content">
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
        
        {/* <img src={hero} alt="Hero section image" /> */}
      </div>
      {modalOpen? <LoginModal onCancel = {modalCloser}/> : null}
      {modalOpen? <Backdrop onClick = {modalCloser}/> : null}
    </>
  );
};

export default Navbar;
