import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';

//layouts
import HomepageLayout from './layouts/HomepageLayout'
import MainLayout from './layouts/MainLayout'

//pages
import Homepage from './pages/Homepage'
import Test from './pages/Test'
import Details from './pages/Detail'
import PropertyListing from './pages/PropertyListing'

function App() {
  return (
    <div className="App">
      <Route path='/property-search' render={() => (
        <MainLayout>
          <PropertyListing />
        </MainLayout>
      )}/>
      <Route exact path='/' render={() => (
        <HomepageLayout>
          <Homepage />
        </HomepageLayout>
      )} />
      <Route path='/test' render={() => (
        <HomepageLayout>
          <Test />
        </HomepageLayout>
      )} />
      <Route path='/details/:propertyId' render={() => (
        <HomepageLayout>
          <Details />
        </HomepageLayout>
      )} />
    </div>
  );
}

export default App;
