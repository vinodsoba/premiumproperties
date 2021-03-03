import React, { Component } from 'react'
import {Navigation} from './../MenuItems'
import * as FaIcons from 'react-icons/fa'
import './styles.scss'

class Navbar extends Component {
   


render(){
   
   
    return (       
        <div className="nav">
            <div className="bars"><FaIcons.FaBars/></div>
           
    
            
        </div>
    )
}
    
    
}


export default Navbar;