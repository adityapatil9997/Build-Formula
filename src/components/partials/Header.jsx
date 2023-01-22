import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#A6DFBF" }}>
                <div className="container">
                    <Link className="navbar-brand" to="/">BUILD FORMULA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/task">TASK</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
