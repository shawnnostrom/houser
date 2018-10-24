import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeHouse} from '../../redux/actions';
import {getHouses} from '../../redux/actions';
import './dashboard.css'
import axios from 'axios'




class Dashboard extends Component {

  

  componentDidMount = () => {
    this.getList()
  }
  getList = () => {
    this.props.getHouses()
  }

  handleClick = () => {
    this.props.history.push('./wizard')
  }
  delete = (id) => {
    axios.delete(`http://localhost:8080/api/house/${id}`)
    .then( () => this.props.getHouses() )
    .catch(error => console.error(error))
  }
 
  
  showHomes = () => {
    const homes = this.props.houses.map(i => {
      return (
        <div className = 'itemBox'>
          <img src = {i.urladdress} alt = '' />
          <div className = 'house_info'> 
          <p>Property Name: {i.propertyname}</p>
          <p>Address: {i.homeaddress}</p>
          <p>City: {i.city}</p>
          <p>State: {i.state}</p>
          <p>Zip: {i.zip}</p>
          <p>Monthly Mortgage: {i.payment} </p>
          <p> Desired Rent: {i.rent} </p>
          <div className = 'delete_div' >
           <button onClick = {() => this.delete(i.id)} className = 'delete_button'>X</button>
          </div>
        </div>
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




export default connect(mapStateToProps,{removeHouse, getHouses})(Dashboard);