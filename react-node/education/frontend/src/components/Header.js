import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link to="">
                                    <img src="/logo192.png" height="90" width="150"/>
                                </Link>
                                <ul className="nav">
                                    <li><Link className="active" to="/course">Courses</Link></li>
                                    <li><Link to="/event">Events</Link></li>
                                    <li className="submenu">
                                        <Link className="dropdown-toggle">Admin</Link>
                                        <ul>
                                            <li><Link to="addCourse">Add courses</Link></li>
                                            <li><Link to="addEvent">Add events</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="signup">Signup</Link></li>
                                    <li><Link to="/">Login</Link></li>
                                    <li><Link to="/github">github</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Header;