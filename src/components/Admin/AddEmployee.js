import React, {Component} from 'react';
import './AddEmployee.css';

//the following four words are not camelCased in this entire file:
//firstname, lastname, Firstname, Lastname.<== Use these
//to keep confusing from firstName, First name, First Name, etc. <== do not use these
class AddEmployee extends Component {           	
	constructor() {
		super();
		this.state = {
			lastnameText: '',
			firstnameText: '',
			phoneNumText: '',
			emailText: 'abc@gmail.com',
			roomNumText: '',
			departmentText: '',
			firstBlockText: '',
			secondBlockText: '',
			thirdBlockText: '',
			fourthBlockText: '',
      lunchNumText: '',
			showFirstnameError: false,
			showLastnameError: false,
      showPhoneError: false, //can only be true or false, NOT the same as phoneErrorMessage
      showFormError: false,
      phoneErrorMessage: ''//phone error will change based on input
		}
	}

  // the onChangeListener function attached to their corresponding input fields
  onLastnameChange = (event) => {this.setState({lastnameText: event.target.value})}
  onFirstnameChange = (event) => {this.setState({firstnameText: event.target.value})}
  onPhoneNumChange = (event) => {this.setState({phoneNumText: event.target.value})}
  onEmailChange = (event) => {this.setState({emailText: event.target.value})}
  onRoomNumChange = (event) => {this.setState({roomNumText: event.target.value})}
	onDepartmentChange = (event) => {this.setState({departmentText: event.target.value})}
	onFirstBlockChange = (event) => {this.setState({firstBlockText: event.target.value})}
	onSecondBlockChange = (event) => {this.setState({secondBlockText: event.target.value})}
	onThirdBlockChange = (event) => {this.setState({thirdBlockText: event.target.value})}
	onFourthBlockChange = (event) => {this.setState({fourthBlockText: event.target.value})}
	onLunchNumChange = (event) => {this.setState({lunchNumText: event.target.value})}

  //check if things are inputted as expected
  validateForm = () => {
    fetch(`http://localhost:3000/checkphone/${this.state.phoneNumText}`)
    // fetch('https://achsdirectory-api.herokuapp.com/')
      .then(response=>response.json())
      .then(answer => {
          if (answer==='not a number') {this.setState((state)=>({showPhoneError: true, phoneErrorMessage: 'Only numbers are allowed'}))}
        })
      .catch(error =>this.setState((state)=>({showPhoneError: true, phoneErrorMessage: 'Check phone input field again'})))
  }

  autoFillWithTBD = () => {
    // check to see if any fields are blank and set 'TBD' as their value if true
    if (this.state.phoneNumText===''){this.setState({phoneNumText: 'TBD'})}
    if (this.state.departmentText===''){this.setState({departmentText: 'TBD'})}
    if (this.state.firstBlockText===''){this.setState({firstBlockText: 'TBD'})}
    if (this.state.secondBlockText===''){this.setState({secondBlockText: 'TBD'})}
    if (this.state.thirdBlockText===''){this.setState({thirdBlockText: 'TBD'})}
    if (this.state.fourthBlockText===''){this.setState({fourthBlockText: 'TBD'})}
    if (this.state.lunchNumText===''){this.setState({lunchNumText: 'TBD'})}
    this.setState({
      showFirstnameError: false,
      showLastnameError: false,
      showPhoneError: false,
      showFormError: false,
    })
  }
  //the function below will reset all fields and state of the form
  resetForm = () => {
    this.setState({
      lastnameText: '',
      firstnameText: '',
      phoneNumText: '',
      emailFirstInitial: '',
      emailText: 'abc@gmail.com',
      roomNumText: '',
      departmentText: '',
      firstBlockText: '',
      secondBlockText: '',
      thirdBlockText: '',
      fourthBlockText: '',
      lunchNumText: '',
      showFirstnameError: false,
      showLastnameError: false,
      showPhoneError: false,
      showFormError: false,
      phoneErrorMessage: ''
    })
  }

	onAddEmployeeButton = () => {
   let valid = this.validateForm();
   if (valid==='all clear') {
     console.log('valid');
   }
    // const response = fetch('http://localhost:3000/addemployee', {
    //     // fetch('https://achsdirectory-api.herokuapp.com/admin', {
    //       method: 'post',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify({
    //         lastname: this.state.lastnameText,
    //         firstname: this.state.firstnameText,
    //         phone: this.state.phoneNumText,
    //         Room: this.state.roomNumText, 
    //         department: this.state.departmentText,
    //         firstblock: this.state.firstBlockText,
    //         secondblock: this.state.secondBlockText,
    //         thirdblock: this.state.thirdBlockText,
    //         fourthblock: this.state.fourthBlockText,
    //         lunch: this.state.lunchNumText,
    //       })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //        if (data==='success'){
    //          console.log(data)
    //        } else {
    //          console.log('error')
    //        }
    //     })
    // return response;
  }

render() {
	return (

	<div className="parentOfAll">
      <h4 style={{color: '#ff3232'}}>Add the new employee details below</h4>
      <div className="parentOfAddForm">
        <fieldset>
          <p style={{color: '#ff3232', marginTop: '0px'}}>Fields marked with a * are required.</p>
          <div className="addForm">
            <label htmlFor="lastname" className="lastnameLabel">Lastname*</label>
            <input 
              type="text" 
              name="lastname" 
              placeholder="Lastname" 
              required
              onChange={this.onLastnameChange}
            />
            {
            	!this.state.showLastnameError? null
            	: <p style={{color: '#ff3232', marginTop: '-10px'}}>Lastname is a required field.</p>
            }
            <label htmlFor="firstname">Firstname*</label>
            <input 
              type="text" 
              name="firstname" 
              placeholder="Firstname"
              required
              onChange={this.onFirstnameChange}
            />
            {
            	!this.state.showFirstnameError? null
            	: <p style={{color: '#ff3232', marginTop: '-10px'}}>Firstname is a required field.</p>
            }
            <label htmlFor="phone">Phone Extension (4-digits only)</label>
            <input 
              type="number" 
              name="phone" 
              placeholder="1234"
              pattern="[0-9]"
              maxLength="4"
              minLength="4"
              onChange={this.onPhoneNumChange}
            />
            {
              !this.state.showPhoneError? null
              : <p style={{color: '#ff3232', marginTop: '-10px'}}>{this.state.phoneErrorMessage}</p>
            }
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="abc@gmail.com"
              onChange={this.onEmailChange}
            />
            <label htmlFor="room">Room Number (main)</label>
            <input 
              type="text" 
              name="room" 
              placeholder="C01"
              onChange={this.onRoomNumChange}
            />
            <label htmlFor="department">Department</label>
            <input 
              type="text" 
              name="department" 
              placeholder="Math"
              onChange={this.onDepartmentChange}
            />
            <label htmlFor="firstblock">1st block</label>
            <input 
              type="text" 
              name="firstblock" 
              placeholder="C01"
              onChange={this.onFirstBlockChange}
            />
            <label htmlFor="secondblock">2nd block</label>
            <input 
              type="text" 
              name="secondblock" 
              placeholder="C01"
              onChange={this.onSecondBlockChange}
            />
            <label htmlFor="third">3rd block</label>
            <input 
              type="text" 
              name="thirdblock" 
              placeholder="C01"
              onChange={this.onThirdBlockChange}
            />
            <label htmlFor="fourthblock">4th block</label>
            <input 
              type="text" 
              name="fourthblock" 
              placeholder="C01"
              onChange={this.onFourthBlockChange}
            />
            <label htmlFor="lunch">Lunch</label>
            <input 
              type="text" 
              name="lunch" 
              placeholder="2nd"
              onChange={this.onLunchNumChange}
            />
            <input type="submit" onClick={this.onAddEmployeeButton}/>
            {
              !this.state.showFormError? null
              : <p style={{color: '#ff3232', marginTop: '-10px'}}>Check for errors above.</p>
            }
          </div>
        </fieldset>
      </div>
    </div>
    );
}
}
export default AddEmployee;