import React from 'react';
import {withRouter} from 'react-router-dom';
import GetDrills from './getDrills'

class SearchDrills extends React.Component {
  render() {
  return <div>
            <GetDrills></GetDrills>
            <h1>{this.props.location.search.slice(2)}</h1>
        </div>
  }
}
 
export default withRouter(SearchDrills);