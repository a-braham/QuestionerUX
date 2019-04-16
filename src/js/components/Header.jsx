import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';
import '../../css/index.css';
import Login from './container/Login.jsx';

const Header = () => (
    <header className="navigation">
        <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to='/' className="navbar-brand">
                        <Img src="src/img/logo2.png" className="image"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseBar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="collapseBar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to='/' className="nav-link"><p className="link-item" data-toggle="modal" data-target="#myModal">Sign In</p></Link></li>
                        <li className="nav-item"><Link to='/signup' className="nav-link"> <p className="link-item">Sign Up</p></Link></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            
                <div className="modal-header">
                <h5 className="modal-title">Sign in to Ask questions on any meetup and post comment to any question</h5>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <Login />
                </div>
                
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                
            </div>
            </div>
        </div>
    </header>
);

export default Header;