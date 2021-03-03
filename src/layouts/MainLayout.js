import React from 'react'
import  Header  from './../components/Header'

const Mainpage = props => {
    return (
        <div className="fullHeight">
            <Header {...props}/>
            {props.children}
        </div>
    )
}

export default Mainpage;

