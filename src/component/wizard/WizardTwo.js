import React, { Component } from 'react';
import {connect} from 'react-redux';
import {newUrl} from '../../redux/actions';
import {cancel} from '../../redux/actions';
import './wizard.css';

class WizardTwo extends Component {

  state = {
    url: ''
  }

  clickPrevious = () => {
    this.setState({url:''})
    this.props.history.push('./wizard')
    
  }
  clickNext = () => {
    this.props.newUrl(this.state.url)
    this.props.history.push('./wizard3')
  }

  handleChange = (e) => {
    this.setState({url: e.target.value })
  }
  handleCancel = () => {
    this.props.cancel()
    this.setState({url:''})
    this.props.history.push('./home')
  }

  render(){
    return (
      <div className = 'wizard-main'>
        <div className = 'wizard-top'>
          <h1> Add New Listing</h1>
          <button className = 'wizard-btn-cancel' onClick = {this.handleCancel}> Cancel </button>
        </div>
        <h2>Image URL</h2>
        <input value = {this.state.url} onChange = {this.handleChange} className = 'house_url'/>
        <br />
        <div className = 'wiz2-btn'>
        <button onClick = {this.clickPrevious} className = 'wiz2-previous'>Previous</button>
        <button onClick = {this.clickNext} className = 'wiz2-next' >Next</button>
        </div>
      </div>  
    )
  }
}

export default connect(null,{newUrl,cancel})(WizardTwo);