import React, { Component } from 'react'
import PropertyListing from './../../components/PropertyListing'
import Filter from './../../components/Filter'

export default class Indexs extends Component {
   
    render() {
        return (
            <div>
                <h1>Here is a listings you search for!</h1>
                <Filter />
                <PropertyListing />
                
            </div>
        )
    }
}
