
import { Link } from "react-router-dom";
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import "./Footer.css";
import Newsletter from "./Newsletter.js";
const Footer = () => {
    
    return (
        
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h4>About us</h4>
                            <div className="first-item">
                                <ul>
                                    <li className="text-white">Adress : Rue Ain Sfax,Tunisie</li>
                                    <li className="text-white">Email : educationCenter@gmail.com</li>
                                    <li className="text-white">Phone number : +216 21 401 510</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3" >
                            <h4 className="ahmed">Useful Links</h4>
                            <ul>
                                <li><Link>Homepage</Link></li>
                                <li><Link to="#">About Us</Link></li>
                                <li><Link to="#">Help</Link></li>
                                <li><Link to="#">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Help &amp; Information</h4>
                            <ul>
                                <li><Link to="#">Help</Link></li>
                                <li><Link to="#">FAQ's</Link></li>
                                <li><Link to="#">Shipping</Link></li>
                                <li><Link to="#">Tracking ID</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <Newsletter></Newsletter>
                        </div>
                        <div className="col-lg-12">
                            <div className="first-item">
                                <p>Copyright © 2022 . All Rights Reserved.</p>
                                {/* icons */}
                                <ul>
                                    <li>
                                    <Link to=""><FaFacebookF size="1.5rem" color="white" className="me-3" /></Link>
                                    <Link to=""><GrInstagram size="1.5rem" color="white" className="me-3" /></Link>
                                    <Link to=""><FaLinkedinIn size="1.5rem" color="white" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
​
        </div>
    )
    
}

export default Footer;