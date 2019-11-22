import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavTabs.css';

class NavTabs extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isActive: true, 
			bgHome: "#6c5ce7",
			isToggleOn: false,
			pebg: "#74b9ff",
			dropdownTabNames: ['pe', 'sped', 'office', 'assist', 'other', 'about', 'admin'],
			tabName: this.props.route
		}
	}

	componentDidMount() {
		if(this.props.route==='admin') {
			this.setTabColor('admin', false)
		}
	}

	setTabColor = (route, isActive) => {
		this.props.onRouteChange(route);
		if (!isActive) {
			this.setState({bgHome: "#74b9ff"})
		}
		let buttonGroup = document.getElementsByClassName('btn-group');
		for (var i = 0; i < buttonGroup[0].children.length; i++){
			buttonGroup[0].children[i].style.backgroundColor = "#74b9ff";
		}
		let dropgroup = document.getElementsByClassName('dropgroup');
		for (var j = 0; j < dropgroup[0].children.length; j++){
			dropgroup[0].children[j].style.backgroundColor = "#74b9ff"; 
		}
		if (!this.state.dropdownTabNames.includes(route)){
			let x = document.getElementById(route);
			x.style.backgroundColor = "#6c5ce7";
		} else {
			this.setState({isToggleOn: false, pebg: "#6c5ce7"})
		}
	}

	toggleDropdown = () => {
		if (!this.state.isToggleOn){
			this.setState({isToggleOn: true})
		} else {
			this.setState({isToggleOn: false})
		}
	}

	addBackgroundOnEnter = (num) => {
		document.getElementById(num).style.backgroundColor = "#6c5ce7"
	}

	removeBackgroundOnLeave = (num) => {
		if(this.props.route===num) {
			document.getElementById(num).style.backgroundColor = "#6c5ce7"
		} else {
			document.getElementById(num).style.backgroundColor = "#74b9ff"
		}
	}

	render() {
		return (
			<div className='btn-group'>
				<button style={{backgroundColor: this.state.bgHome}} id="home" onClick={()=>this.setTabColor('home', true)} onMouseEnter={()=>this.addBackgroundOnEnter("home")} onMouseLeave={()=>this.removeBackgroundOnLeave("home")} href="#home">ACHS</button>
				<button id="math" onClick={()=> this.setTabColor('math', false)} onMouseEnter={()=>this.addBackgroundOnEnter("math")} onMouseLeave={()=>this.removeBackgroundOnLeave("math")} href="#math">Math</button>
				<button id="science" onClick={() => this.setTabColor('science', false)} onMouseEnter={()=>this.addBackgroundOnEnter("science")} onMouseLeave={()=>this.removeBackgroundOnLeave("science")} href="#science">Science</button>
				<button id="socialstudies" onClick={() => this.setTabColor('socialstudies', false)} onMouseEnter={()=>this.addBackgroundOnEnter("socialstudies")} onMouseLeave={()=>this.removeBackgroundOnLeave("socialstudies")} href="#socialstudies">Social Studies</button>
				<button id="english"  onClick={() => this.setTabColor('english', false)} onMouseEnter={()=>this.addBackgroundOnEnter("english")} onMouseLeave={()=>this.removeBackgroundOnLeave("english")} href="#english">English</button>
				<button id="voc" onClick={() => this.setTabColor('voc', false)} onMouseEnter={()=>this.addBackgroundOnEnter("voc")} onMouseLeave={()=>this.removeBackgroundOnLeave("voc")} href="#voc">VOC</button>
				<button id="cougarcenter" onClick={() => this.setTabColor('cougarcenter', false)} onMouseEnter={()=>this.addBackgroundOnEnter("cougarcenter")} onMouseLeave={()=>this.removeBackgroundOnLeave("cougarcenter")} href="#cougarcenter">Cougar Center</button>
				{
					!this.state.isToggleOn?
					<div className="dropgroup">
						<button id="other" style={{backgroundColor: this.state.pebg}} className="dropbtn" onClick={()=>this.toggleDropdown()} onMouseEnter={() => this.toggleDropdown()} href="#other">Other <FontAwesomeIcon style={{marginLeft: "8px"}}icon="caret-down" /></button>
						<button id="hamburger" style={{backgroundColor: this.state.pebg}} className="dropbtn" onClick={()=>this.toggleDropdown()} onMouseEnter={() => this.toggleDropdown()} href="#other"><FontAwesomeIcon icon="bars" /></button>
					</div>
					:
					<div className="dropdown">
						<div className="dropdown-content" onMouseLeave={()=> this.toggleDropdown()}>
							<div className="dropgroup">
								<button id="other2" style={{backgroundColor: this.state.pebg}} className="dropbtninactive" onClick={()=>this.toggleDropdown()} onMouseEnter={()=> this.toggleDropdown()} href="#other">Other <FontAwesomeIcon style={{marginLeft: "8px"}}icon="caret-down" /></button>
								<button id="hamburger2" style={{backgroundColor: this.state.pebg}} className="dropbtninactive" onClick={()=>this.toggleDropdown()} onMouseEnter={()=> this.toggleDropdown()} href="#other"><FontAwesomeIcon icon="bars" /></button>
							</div>
							<button href="#pe" onClick={() => this.setTabColor('pe', false)}>PE</button>
						    <button href="#sped" onClick={() => this.setTabColor('sped', false)}>SPED</button>
						    <button href="#office" onClick={() => this.setTabColor('office', false)}>Office</button>
						    <button href="#assist" onClick={() => this.setTabColor('assist', false)}>Assist</button>
						    <button href="#other" onClick={() => this.setTabColor('other', false)}>Other</button>
						    <button href="#about" onClick={() => this.setTabColor('about', false)}>About</button>
							<button href="#admin" onClick={() => this.setTabColor('admin', false)}>Admin Portal</button>						
						</div>
					</div>
				}
			</div>
	);
	}
}

export default NavTabs;