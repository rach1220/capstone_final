import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render () {
        
        return (
            <>
                <footer className="footer">
                    <div className="information">
                        <h2>Gu-Pet</h2>
                        <span>+63 912 345 6789</span>
                        <span>+63 923 456 7890</span>
                    </div>
                    <div className="operating-hrs">
                        <h3>Operating Hours</h3>
                        <ul>
                            <li>Monday - Friday: 8AM to 8PM</li>
                            <li>Saturday & Sunday: 9AM - 9PM</li>
                        </ul>
                    </div>
                    <div className="quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/" className="footer-item">Home</Link></li>
                            <li><Link to="/about" className="footer-item">About Us</Link></li>
                            <li><Link to="/services" className="footer-item">Services</Link></li>
                            <li><Link to="/gallery" className="footer-item">Gallery</Link></li>
                        </ul>
                    </div>
                    <div className="socials">
                        <h3>Follow Us</h3>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-tiktok"></i>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;