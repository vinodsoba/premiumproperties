import * as React from 'react'


const DefaultState = {
  propertyListings: [],
  filter: {}
}



const PropertyListingsContext = React.createContext(DefaultState)

export class PropertyListingsProvider extends React.Component {
    state = DefaultState
  
    componentDidMount() {
      fetch('/server/listings.json')
        .then(res => res.json())
        .then(res => {
          this.setState({ propertyListings: res })
        })
    }

    updateFilter = filter => {
      this.setState({
        filter
      })
    }
  
    render() {
      const { children } = this.props
      const { propertyListings } = this.state
  
      return (
        <PropertyListingsContext.Provider
          value={{
            propertyListings,
            updateFilter: this.updateFilter,
          }}
        >
          {children}
        </PropertyListingsContext.Provider>
      )
    }
  }

export const PropertyListingsConsumer = PropertyListingsContext.Consumer