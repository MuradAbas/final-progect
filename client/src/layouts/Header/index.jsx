import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import "./index.scss";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="top-inner">
            <div className="icons">
              <span>
                <a href="#">
                  <FaInstagram className="icon" />
                </a>
              </span>
              <span>
                <a href="#">
                  <FaFacebookF className="icon" />
                </a>
              </span>
              <span>
                <a href="#">
                  <FaTwitter className="icon" />
                </a>
              </span>
              <span>
                <a href="#">
                  <FaLinkedinIn className="icon" />
                </a>
              </span>
            </div>
            <div className="connect">
              <p>
                <FaPhoneAlt className="connect-icon" />
                <a href="tel:(+1) 234 5678 9101">(+1) 234 5678 9101</a>
              </p>
              <p>
                <IoMdMail className="connect-icon" />
                <a href="mailto:shop@gmail.com">shop@yourdomain.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="header-inner">
        <div className="container">
          <div className="navbar">
            <NavLink className="logo">Selling<span>.</span></NavLink>

            <nav>
              <ul>
                <li>
                  <NavLink>Home</NavLink>
                </li>
                <li>
                  <NavLink>Products</NavLink>
                </li>
                <li>
                  <NavLink>About Us</NavLink>
                </li>
                <li>
                  <NavLink>Special</NavLink>
                </li>
                <li>
                  <NavLink>Tesimonials</NavLink>
                </li>
                <li>
                  <NavLink>Blog</NavLink>
                </li>
                <li>
                  <NavLink>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;