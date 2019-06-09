import React from 'react';
import Card from './Card';

const CardList2 = ({ movies, requestIndiCard}) => {
	return(
		<div>
			{	
				movies.map((movie,i) => {
					return 	(
						<Card {...movie.contacts} requestIndiCard={requestIndiCard} key={i} itemNum={movie.contacts.id}/>
					);
				}) 
			}
		</div>
	);
}
export default CardList2;