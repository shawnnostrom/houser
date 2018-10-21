import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeHouse} from '../../redux/actions';
import './dashboard.css'


class Dashboard extends Component {

  handleClick = () => {
    this.props.history.push('./wizard')
  }
  
  showHomes = (props) => {
    const homes = this.props.houses.map(i => {
      return (
        <div className = 'itemBox'>
          <p>Property Name: {i.name}</p>
          <p>Address: {i.address}</p>
          <p>City: {i.city}</p>
          <p>State: {i.state}</p>
          <p>Zip: {i.zip}</p>
          <button onClick = {() => this.props.removeHouse(i.id)}>delete</button>
        </div>
      )
    })
    return (
      <div>
         {homes}
      </div>
    )
  }

  render(){
    return(
      <div className = 'main'>
      <div className = 'dashboard-top'>
        <h1 >Dashboard</h1>
        <button className = 'dash-btn' onClick = {this.handleClick}>Add New Property</button>
        </div>
        <div className = 'dashboard-content'>
          <h2> Home Listing </h2>
        </div>
          {this.showHomes()}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  
  return {
    houses: state.houses,
    
  }
}




export default connect(mapStateToProps,{removeHouse})(Dashboard);