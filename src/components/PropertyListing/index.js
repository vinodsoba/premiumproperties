import * as React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PropertyListingsProvider, PropertyListingsConsumer } from './../../components/Context/index'
import Filter from './../../components/Filter'

function Listing({ listing }) {
  if (!listing) {
    return null
  }

<PropertyListingsConsumer>
  {function(value) {
    const { propertyListings, updateFilter } = value
    return (
      <React.Fragment>
        <Filter updateFilter={updateFilter} />
        <div className="columns">
          {propertyListings.map(listing => (
            <Listing listing={listing} key={listing.address} />
          ))}
        </div>
      </React.Fragment>
    )
  }}
</PropertyListingsConsumer>

  const { id, image, title, address, description, price } = listing

  return (
    <div className="col-xs-3 col-sm-3 col-md-4 col-lg-3">
        <div className="card" style={{ margin: '1rem 0' }}>
            <img className="card-img-top" src={`/server/${image}`} alt={address} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-subtitle text-gray">{address}</div>
                    <h6 className="card-text">&pound; {price}</h6>
                    <div className="card-body">{description}</div> 
                    <Link className="btn btn-primary" to={`/details/${id}`}>
                        Go to property
                    </Link>
                </div>
        </div>
    </div>  
  )
}

export default Listing