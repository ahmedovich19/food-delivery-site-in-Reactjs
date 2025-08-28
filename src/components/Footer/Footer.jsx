import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Foodie is a food delivery app that brings delicious meals from your favorite local restaurants right to your doorstep. With a wide variety of cuisines to choose from, Foodie makes it easy to satisfy your cravings anytime, anywhere.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>01234567890</li>
                <li>contact@foods.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">Copyright 2025 @ food.com - All right reserved</p>
    </div>
  )
}
export default Footer