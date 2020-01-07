// import React from 'react';
import React, { Component } from 'react';

import { connect } from 'react-redux';
import CreateDrill from './components/CreateDrill';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Drills from './components/Drills'
import { fetchDrill } from './actions/drillActions'
import SearchDrills from './components/SearchDrills'

class App extends Component {   
  
  componentDidMount() {
    console.log(this.props)

    this.props.fetchDrill()
  }
  
  

  render() {
    return (
      <div className="App">
        <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateDrill} />
        <Route exact path="/drills" component={Drills} />
        <Route exact path="/searchdrills" component={SearchDrills}/>
      </div>
    </Router>
      </div>
    );
  }
}




const mapStateToProps = state => {
  return {
    drills: state.drills,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchDrill: () => dispatch(fetchDrill())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)