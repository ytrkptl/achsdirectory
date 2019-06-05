import React, { Component } from 'react';
import CardList2 from '../components/CardList2';
import NavTabs from '../components/NavTabs';
import Header from '../components/Header';
import IndiCard from '../components/IndiCard';
import ReactGA from 'react-ga';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretDown, faBars)

ReactGA.initialize('UA-139848771-3');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			route: 'home',
			searchfield: '',
			indiCard: false,
			cardNum: 0,
			scrollTabNames: ["home", "math", "science", "socialstudies", "english", "voc", "cougarcenter", "pe", "sped", "office", "assist", "other"],
			scrollPositions: [0,0,0,0,0,0,0,0,0,0,0,0]
		}
	}
	componentDidMount() {
		fetch('https://achsdirectory-api.herokuapp.com/')
		.then(response=>response.json())
		.then(users => this.setState({ movies: users }));
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capture the scroll position so we can adjust scroll later.
    if (prevState.route !== this.state.route) {
      	let elmnt = document.getElementById("myDIV");
      	let scrollPos = elmnt.scrollTop;
      	let arr = [prevState.route, scrollPos];
      	// this.trackScrollPositions(prevState.route, prevState.scrollPos)
      	// this.mapRouteToScrollPositions();
      	return arr;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
   if (snapshot !== null) {
      	this.trackScrollPositions(snapshot[0], snapshot[1])
      	this.mapRouteToScrollPositions();
    }
  }
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	requestIndiCard = (value, item) => {
		this.setState({indiCard: value, cardNum: item, route: this.state.route })
	}

	onRouteChange = (route) => {      	
		this.setState({route: route, searchfield: '', indiCard: false, cardNum: 0});
		fetch(`https://achsdirectory-api.herokuapp.com/${route}`)
		.then(response=>response.json())
		.then(users => this.setState({ movies: users }));
		var searchPlaceHolder = document.getElementById("searchBox");
		searchPlaceHolder.value = '';
	}

	trackScrollPositions(route, receivedScrollPos) {
		let c = this.state.scrollPositions;
		this.state.scrollTabNames.map((tabName, index)=>{
			if(tabName===route) {
				c[index] = receivedScrollPos;
				this.setState({scrollPositions: c});
			}
			return c;
		})
	}
	mapRouteToScrollPositions() {
		let elmnt = document.getElementById("myDIV");
		this.state.scrollTabNames.map((tabName, index)=>{
			if(tabName===this.state.route) {
				elmnt.scrollTop = this.state.scrollPositions[index];
			} 
			return elmnt;
		});
	}

	render() {
		const { searchfield, movies, indiCard, cardNum } = this.state;
		const filteredContacts = movies.filter(movie =>{
			return movie.contacts.lastname.toLowerCase().includes(searchfield.toLowerCase()) 
				|| movie.contacts.firstname.toLowerCase().includes(searchfield.toLowerCase())
				|| movie.contacts.email.toLowerCase().includes(searchfield.toLowerCase())
				|| movie.contacts.phone.includes(searchfield)
		});
		return (
			<div className='mainContainer'>
				<Header className='headerDiv' searchChange={this.onSearchChange}/>
				<NavTabs onRouteChange={this.onRouteChange} className='navDiv'/>
				<div id="myDIV" className='mainDiv'>
					{!movies.length ?
						<h1>Loading contacts...</h1>: 
						<div>
							{!filteredContacts.length?
								<h1>No matches found. Try searching again!</h1>:
								!indiCard 
								? <CardList2  movies={filteredContacts} requestIndiCard={this.requestIndiCard} />
								: <IndiCard {...movies[cardNum].contacts}
									id={cardNum} 
									requestIndiCard={this.requestIndiCard} />
							}
						</div>
					}
				</div>
				<div className='footerDiv'>
					<footer>Site created by: Yatrik Patel</footer>
					<footer>Published on: June 4, 2019</footer>
				</div>
			</div>
		);
	}
}

export default App;