import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss';
import Navbar from './../../components/Navbar'
import Logo from './../../assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div className="container-fluid p-3 text-white header-wrapper">
       
            <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2 logo">
                    <img src={Logo} alt='Logo'  />                    
                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-12 py-4">
                    <Navbar />
                </div>             
            </div>                      
        </div>
    );
}
