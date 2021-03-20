import React, {Fragment} from 'react'
import Hero from './../../components/Hero'
import { PropertyListingsProvider, PropertyListingsConsumer } from './../../components/Context/index'
import PropertyListing from './../../components/PropertyListing'
import './styles.scss'
import SearchBar from '../../components/Search'
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {
        return (
            <Fragment>
                 <Hero />
                 <SearchBar />
                <div className="homepage">
                       <PropertyListingsProvider>
                         <PropertyListingsConsumer>
                            {function(value) {
                                const { propertyListings } = value
                                return (
                                    <div className="row columns">
                                    {propertyListings.map(listing => (
                                      <PropertyListing listing={listing} key={listing.id}/>
                                    ))}
                                  </div>
                                )
                            }}
                        </PropertyListingsConsumer>           
                      </PropertyListingsProvider> 
                </div>
            </Fragment>
            
        )
    
}

export default Home;