import React, { Component } from 'react';
import './EditEmployee.css';


class EditEmployee extends Component {
	constructor() {
		super();
		this.state = {
			message: '',
			details: [],
			lastname: '',
			firstname: ''
		}
	}
	componentDidMount() {
		// fetch('http://localhost:3000')
		// fetch('https://achsdirectory-api.herokuapp.com/')
		// .then(response=>response.json())
		// .then(users => this.setState({ allmovies: users, movies: users }));
	}


	onLastnameChange = (event) => {
		this.setState({ lastname: event.target.value })
	}
	onFirstnameChange = (event) => {
		this.setState({ firstname: event.target.value })
	}
	searchLastnames = (event) => {
		 fetch(`${process.env.REACT_APP_BACKEND_URL}/findemployeeid/${this.state.lastname}`)
		// fetch('https://achsdirectory-api.herokuapp.com/')
			.then(response=>response.json())
			.then(users => {
				this.setState({ message: users.message, details: users.arrayTwo})
			})
			.catch(error=>console.log(error))
	}
	searchFirstnames = (event) => {
		 fetch(`${process.env.REACT_APP_BACKEND_URL}/findemployeeid/none/${this.state.firstname}`)
		// fetch('https://achsdirectory-api.herokuapp.com/')
			.then(response=>response.json())
			.then(users => this.setState({ message: users.message, details: users.arrayTwo}))
			.catch(error=>console.log(error))
	}
	searchBothnames = (event) => {
		 fetch(`${process.env.REACT_APP_BACKEND_URL}/findemployeeid/${this.state.lastname}/${this.state.firstname}`)
		// fetch('https://achsdirectory-api.herokuapp.com/')
			.then(response=>response.json())
			.then(users => this.setState({ message: users.message, details: users.arrayTwo}))
			.catch(error=>console.log(error))
	}
	render() {
		return (
			<div id="parentOfEdit">
				<p>Type in the name of the employee you would like to update the details for:</p>
	            <div className="subDiv">
	            	<label htmlFor="lastname">Lastname*</label>
		            <input 
		              id="lastnameFind"
		              type="search" 
		              name="lastname" 
		              placeholder="Lastname" 
		              required
		              onChange={this.onLastnameChange}
		            />
		            <button id="lastnameFindBtn" onClick={(event)=>this.searchLastnames()}>Search by Lastname Only</button>
	            </div>
	            <div className="subDiv">
	            	<label htmlFor="firstname">Firstname*</label>
		            <input
		              id="firstnameFind" 
		              type="search" 
		              name="firstname" 
		              placeholder="Firstname"
		              required
		              onChange={this.onFirstnameChange}
		            />
		            <button id="firstnameFindBtn" onClick={(event)=>this.searchFirstnames()}>Search by Firstname Only</button>
	            </div>
	            <button id="bothFindBtn" onClick={(event)=>this.searchBothnames()}>Search by Lastname and Firstname</button>
	            <div>
	            	{this.state.message}
	            </div>
	            <div>
	            	{this.state.details.map((el, index)=>{
	            		return <div key={index}>{el.arrayTwo}</div>
	            	})}
	            </div>
			</div>
		);
	}
}

export default EditEmployee;