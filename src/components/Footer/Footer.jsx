import React from "react"
import logo from "../Img/IvoDev.png";
import "./footer.css"
import { Link } from "react-router-dom";
import facebook from "../Img/facebook.png"
import instagram  from "../Img/instagram.png"
import  youtube  from "../Img/youtube.png"
import  linkedin  from "../Img/linkedin.png"

const Footer = () => 
<footer className="page-footer font-small blue pt-4  text-light">
    <div className="container-fluid text-center text-md-left">
        <div className="row">            
            <div className="col-md-6 mt-md-0 mt-3">
                <img src={logo} alt="logo" className="footer-logo" />
                <h5 className="text-uppercase">IvoDev Gaming Store</h5>
                <p>Thanks for visiting our store. I hope you-ve got a really nice experience</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Shortcuts</h5>
                <ul className="list-unstyled">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/about" className="nav-link">About US</Link></li>
                    <li><Link to="/category/Gaming-PC" className="nav-link">Gaming PC</Link></li>
                    <li><Link to="/category/Accesories" className="nav-link">Accesories</Link></li>
                    <li><Link to="/Orders" className="nav-link">Check your Orders</Link></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 footer-div ">
                <h5 className="text-uppercase">Follow us</h5>
                <div className="container">
                <div class="social-container">
                    <Link><img src={facebook} className="social" alt="facebook"></img></Link>
                    <Link><img src={instagram} className="social" alt="facebook"></img></Link>
                    <Link><img src={youtube} className="social" alt="facebook"></img></Link>
                    <Link><img src={linkedin} className="social" alt="facebook"></img></Link>
	            </div>
                </div>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        All rights reserved IvoDev
    </div>

</footer>

export default Footer