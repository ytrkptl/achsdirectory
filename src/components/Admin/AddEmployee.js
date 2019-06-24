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
      showPhoneError: false, //can only be true or false, NOT the same as phoneErrorMessage
      showFormError: false,
      phoneErrorMessage: ''//phone error will change based on input
		}
	}
  //the onChangeListener function attached to the lastname input field
	onLastnameChange = (event) => {
		var lastname;
    if (event.target.value) {
      lastname = event.target.value.toLowerCase().trim();
    } else {
      lastname = 'bc';
    }
    this.setState((state)=>({lastnameText: lastname}));
    //call the email field to be auto updated below using entire lastname
		this.updateEmail();
	}
  //the onChangeListener function attached to the firstname input field
	onFirstnameChange = (event) => {
    let firstInitial, firstname;
    firstname = event.target.value.toLowerCase().trim();
    if (event.target.value) {
      firstInitial = firstname.charAt(0);
    } else {
      firstInitial = 'a';
    }
		this.setState((state)=>({firstnameText: firstname, emailFirstInitial: firstInitial}));
		//call the email field to be auto updated below using only first initial
    this.updateEmail();
	}
  //email field is readOnly. the following function updates the placeholder value of that field
	//the format to use for school email is `${firstInitial}${lastname}@gmail.com``
  updateEmail = () => {
		this.setState((state) => ({
		  emailText: `${state.emailFirstInitial}${state.lastnameText}@gmail.com`
		}));
	}
 //the onChangeListener function attached to the phone input field
	onPhoneNumChange = (event) => {
    let phoneNum = event.target.value;
    this.setState((state)=>({phoneNumText: phoneNum}));
  }
  ////the onChangeListener function attached to theire corresponding input fields
  onRoomNumChange = (event) => {this.setState({roomNumText: event.target.value})}
	onDepartmentChange = (event) => {this.setState({departmentText: event.target.value})}
	onFirstBlockChange = (event) => {this.setState({firstBlockText: event.target.value})}
	onSecondBlockChange = (event) => {this.setState({secondBlockText: event.target.value})}
	onThirdBlockChange = (event) => {this.setState({thirdBlockText: event.target.value})}
	onFourthBlockChange = (event) => {this.setState({fourthBlockText: event.target.value})}
	onLunchNumChange = (event) => {this.setState({lunchNumText: event.target.value})}

  //check if things are inputted as expected
  validateForm = () => {
    //show error messages if lastname is empty
    if(this.state.lastnameText===''){
      this.setState((state)=>({showFormError: true, showLastnameError: true}));
    }
    //show error messages if firstname is empty
    if(this.state.lastnameText===''){
      this.setState((state)=>({showFormError: true, showFirstnameError: true}));
    }
    //if phonenumber is filled, make sure it's exactly 4 digits and
    //contains no letters
    //a react bug accepts the letter 'e' when inputing into a number field
    //based on Stack Overflow. However, although it allows typing the letter 'e'
    //it return a value of '' due and ignores the entire input. 
    let phoneNumText = this.state.phoneNumText.toString().trim();
    if (phoneNumText.length!==0 && phoneNumText.length!==4) {
      this.setState((state)=>({
        showFormError: true,
        showPhoneError: true, 
        phoneErrorMessage: 'Phone extension should be exactly 4 digits long or leave the field blank.'
      }));
    }
    if(this.state.lastnameText!=='' && this.state.firstnameText!=='') {
      this.setState((state)=>({showFormError: false, showLastnameError: false, showFirstnameError: false}));
    }
    return; 
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

	onAddEmployeeButton = async () => {
    const step1 = await this.validateForm();
    this.autoFillWithTBD();
    fetch('http://localhost:3000/addemployee', {
    // fetch('https://achsdirectory-api.herokuapp.com/admin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
       	lastname: this.state.lastnameText,
       	firstname: this.state.firstnameText,
	      phone: this.state.phoneNumText,
		    Room: this.state.roomNumText, 
		    department: this.state.departmentText,
		    firstblock: this.state.firstBlockText,
		    secondblock: this.state.secondBlockText,
		    thirdblock: this.state.thirdBlockText,
		    fourthblock: this.state.fourthBlockText,
		    lunch: this.state.lunchNumText,
      })
    })
    .then(response => response.json())
    .then(data => {
       if (data==='success'){
         console.log(data)
       } else {
         console.log('error')
       }
    })
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
            	!this.state.showFirstnameError? null
            	: <p style={{color: '#ff3232', marginTop: '-10px'}}>Firstname is a required field.</p>
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
            	!this.state.showLastnameError? null
            	: <p style={{color: '#ff3232', marginTop: '-10px'}}>Lastname is a required field.</p>
            }
            <label htmlFor="phone">Phone Extension</label>
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
            <label htmlFor="email">Email (auto-gen/read-only)</label>
            <input 
              type="email" 
              name="email" 
              readOnly
              placeholder={this.state.emailText}
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