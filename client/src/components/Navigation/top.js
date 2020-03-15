import React from 'react'
import {Link} from 'react-router-dom'


function TopNav(props){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary mb-4">
                <Link className="navbar-brand" to="/">Sports-App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    {
                            (localStorage.getItem('userAuth'))?(
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/users/logout">Logout<span className="sr-only">(current)</span></Link>
                                </li>
                            ):(
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/users/login">Login<span className="sr-only">(current)</span></Link>
                                </li>
                            )
                    }
                    </ul>
                </div>
                </nav>
        </div>
    )
}

export default TopNav