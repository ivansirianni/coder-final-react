import React from "react"
import logo from "../Img/IvoDev.png";
import "./footer.css"

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
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        All rights reserved IvoDev
    </div>

</footer>

export default Footer