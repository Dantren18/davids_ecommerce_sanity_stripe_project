import React from "react";
import Cart from "../Cart/Cart";
// import useStateContext from "../../context/StateContext";
// import logo from "../../images/logo.png";
// import Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";

// const ScrollLink = Scroll.ScrollLink;

const Navbar = ({ toggle }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <>
      <nav className="Nav-Container">
        <div className="Nav-Container2">
          <img src="/images/logo.png" href="/" />
          {/* <NavLogo to="/">LouLoudi</NavLogo> */}
          <div className="mobile-icon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link
                activeClass="active"
                className="NavLinks"
                to="New!"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                New!
              </Link>
              {/* <NavLinks to="about">New!</NavLinks> */}
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="NavLinks"
                to="necklace"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Necklace
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="NavLinks"
                to="earring"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Earring
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="NavLinks"
                to="ring"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Ring
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="NavLinks"
                to="bracelet"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Bracelet
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="NavLinks"
                to="sale"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sale!
              </Link>
            </li>
            {/* <NavBtn>
              <NavBtnLink to="/about">About</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to="/contact">Contact</NavBtnLink>
            </NavBtn> */}
            {/* <nav className="cart-icon-container">
              <button
                type="button"
                className="cart-icon"
                onClick={() => setShowCart(true)}
              >
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
              </button>
              {showCart && <Cart />}
            </nav> */}
            {/* <NavBtn>
              <NavBtnLink to="/terms">Terms</NavBtnLink>
            </NavBtn> */}
          </ul>
          <ul className="nav-menu">
            <nav className="cart-icon-container">
              <button
                type="button"
                className="cart-icon"
                onClick={() => setShowCart(true)}
              >
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
              </button>
              {showCart && <Cart />}
            </nav>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
