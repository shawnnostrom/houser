import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {cancel} from '../../redux/actions';
import './wizard.css'

class WizardThree extends Component {
  state = {
    mortgage: '',
    rent: ''
  }

  clickPrevious = () => {
    this.props.history.push('./wizard2')
  }
  clickComplete = () => {
    const newHouse = {
      name: this.props.newHouse.name,
      address: this.props.newHouse.address,
      city: this.props.newHouse.city,
      state: this.props.newHouse.state,
      zip: this.props.newHouse.zip,
      url: this.props.url,
      mortgage: this.state.mortgage,
      rent: this.state.rent,
    }
    
    axios.post('/api/add',newHouse)
    .then(() => this.props.cancel())
    .then(() => this.props.history.push('./home'))
    .catch(error => console.error(error))
  }
  changeMortgage = (e) => {
    this.setState({ mortgage: e.target.value })
  }
  changeRent = (e) => {
    this.setState({ rent: e.target.value })
  }
  buttonTest = () => {
    console.log(this.props.url)
    console.log(this.props.newHouse)
  }
  handleCancel = () => {
    this.props.cancel()
    this.setState({rent:'',mortgage:''})
    this.props.history.push('./home')
  }


  render(){
    return (
      <div className = 'wizard-main'>
        <div className = 'wizard-top'>
          <h1> Add New Listing</h1>
          <button className = 'wizard-btn-cancel' onClick = {this.handleCancel}> Cancel </button>
        </div>
        <h2>Monthly Mortgage Amount</h2>
        <input value = {this.state.mortgage} onChange = {this.changeMortgage} />
        <h2>Desired Monthly Rent</h2>
        <input value = {this.state.rent} onChange = {this.changeRent} />
        <br />
        <div className = 'wiz3-btn'>
          <button onClick = {this.clickPrevious} className = 'wiz2-previous' >Previous</button>
          <button onClick = {this.clickComplete} className = 'wiz2-next'>Complete</button>
        </div>
      </div>  

    )
  }
}

const mapStateToProps = (state) => {
  return {
    newHouse: state.newHouse,
    url: state.url
  }
}

export default connect(mapStateToProps,{cancel})(WizardThree);