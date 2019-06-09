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
			allmovies: [],
			movies: [],
			route: 'home',
			searchfield: '',
			indiCard: false,
			cardNum: 0
		}
	}
	componentDidMount() {
		fetch('https://achsdirectory-api.herokuapp.com/')
		.then(response=>response.json())
		.then(users => this.setState({ allmovies: users, movies: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	requestIndiCard = (value, item) => {
		if (value){
			this.setState({indiCard: value, cardNum: item, route: this.state.route })
			console.log(this.state.cardNum);
		} else {
			this.setState({indiCard: value, route: this.state.route })
			console.log(this.state.cardNum);
		}
	}

	onRouteChange = (route) => {  
		this.requestIndiCard(false,0);  
		var searchPlaceHolder = document.getElementById("searchBox");
		searchPlaceHolder.value = '';
		this.setState({searchfield: ''})
		if (route==='home') {
			this.setState({movies: this.state.allmovies}); 
		} else {
			const filteredRoute = this.state.allmovies.filter(movie =>{
				return movie.contacts.department.includes(route);
			});
			this.setState({movies: filteredRoute});
		}
		
		this.scrollUp();
	}

	scrollUp() {
		let element = document.getElementById("myDIV");
		element.scrollTop = 0;
	}

	render() {
		const { searchfield, movies, indiCard, cardNum, allmovies } = this.state;
		const filteredContacts = movies.filter(movie =>{
			return movie.contacts.lastname.toLowerCase().includes(searchfield.trim().toLowerCase()) 
				|| movie.contacts.firstname.toLowerCase().includes(searchfield.trim().toLowerCase())
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
								: <IndiCard {...allmovies[cardNum].contacts}
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