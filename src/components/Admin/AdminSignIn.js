import React, { Component } from 'react';
import './AdminSignIn.css';
import AsyncComponent from './AsyncComponent';

class AdminSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      isAdmin: this.props.isAdmin,
      message: 'Please enter admin credentials above',
      adminRoute: this.props.adminRoute,
      component: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isAdmin !== this.props.isAdmin || prevProps.adminRoute !== this.props.adminRoute) {
      this.setState({isAdmin: this.props.isAdmin, adminRoute: this.props.adminRoute});
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    if(this.state.signInEmail==='' || this.state.signInPassword==='') {
      this.setState({message: 'Please enter valid email and password in the inputfiels above.'});
    } else {
      fetch('http://localhost:3000/signin', {
      // fetch('https://achsdirectory-api.herokuapp.com/admin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
        })
      })
      .then(response => response.json())
      .then(data => {
         if (data==='success'){
           this.props.onMenuChange();
         } else {
           this.setState({message: 'Incorrect credentials! Please try again.'})
         }
      })
    }    
  }

  render() {
    if (this.state.isAdmin===false){
      return <div>
              <h4 style={{color: '#ff3232'}}>This page is for admins only.</h4>
              <div className="parentOfSignInForm">
                <fieldset>
                  <div className="signInForm">
                    <label htmlFor="email" className="emailLabel">Email</label>
                    <input 
                      type="email" 
                      name="Email" 
                      placeholder="Email" 
                      onChange={this.onEmailChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      name="Password" 
                      placeholder="Password"
                      onChange={this.onPasswordChange}
                    />
                    <input type="submit" onClick={this.onSubmitSignIn}/>
                    <p id="message">{this.state.message}</p>
                  </div>
                </fieldset>
              </div>
            </div>
    } else {
        if (this.state.adminRoute==='adminHome'){
          return <h2 style={{color: '#ff3232'}}>Welcome to the admin page. 
                    <br/>Use the controls above to <br/>create, view, edit, or delete (CRUD) <br/>records
                    from the employee directory.</h2>
        } else if (this.state.adminRoute==='addEmployee') {
          const AsyncAdd = AsyncComponent(()=> import('./AddEmployee'))
          return <AsyncAdd />
        } else if (this.state.adminRoute==='viewEmployee') {
          const AsyncView = AsyncComponent(()=> import('./ViewEmployee'))
          return <AsyncView />
        } else if (this.state.adminRoute==='editEmployee') {
          const AsyncEdit = AsyncComponent(()=> import('./EditEmployee'))
          return <AsyncEdit />
        } else if (this.state.adminRoute==='deleteEmployee') {
          const AsyncDelete = AsyncComponent(()=> import('./DeleteEmployee'))
          return <AsyncDelete />
        } 
    }
  }
}

export default AdminSignIn;