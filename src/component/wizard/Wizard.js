import React, { Component } from 'react';
import {connect} from 'react-redux';
import {newHouse} from '../../redux/actions'
import {cancel} from '../../redux/actions'
import './wizard.css';



class Wizard extends Component {
  state = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
    
  }

  handleClick = () => {
    const newHome = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    }
    this.props.newHouse(newHome)
    this.props.history.push('./wizard2')

  }
  handleCancel = () => {
    this.props.cancel()
    this.props.history.push('./home')
  }

  onChangeName = (e) => {
    this.setState({name: e.target.value})
  }
  onChangeAddress = (e) => {
    this.setState({address: e.target.value})
  }
  onChangeCity = (e) => {
    this.setState({city: e.target.value})
  }
  onChangeState = (e) => {
    this.setState({state: e.target.value})
  }
  onChangeZip = (e) => {
    this.setState({zip: e.target.value})
  }
  

  render(){
    return(
      <div className = 'wizard-main'>
        <div className = 'wizard-top'>
          <h1> Add New Listing</h1>
          <button className = 'wizard-btn-cancel' onClick = {this.handleCancel}> Cancel </button>
        </div>
        <div className = 'wizard-body'>
            <h2> Property Name</h2>
            <input value = {this.state.name} onChange = {this.onChangeName} />
            <h2> Address </h2>
            <input className = 'address-input' value = {this.state.address} onChange = {this.onChangeAddress} />
          <div className = 'location'>
            <h2 className = 'city'> City </h2>
            <h2 className = 'state'> State </h2>
            <h2 className = 'zip'> Zip </h2>
          </div>
          <div className = 'location-inputs'>
            <input className = 'city-input' value = {this.state.city} onChange = {this.onChangeCity} />
            <input className = 'state-input' value = {this.state.state} onChange = {this.onChangeState} />
            <input className = 'zip-input' value = {this.state.zip} onChange = {this.onChangeZip} /> 
          </div>
        </div>
        <div className = 'complete-btn'>
          <button className = 'wizard-btn-complete' onClick = {this.handleClick}> Next </button>
        </div>
      </div>
    );
  }

}

export default connect(null,{newHouse,cancel})(Wizard);