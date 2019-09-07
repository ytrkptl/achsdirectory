import React from 'react';
import './Card.css';

const Card  = ({ requestIndiCard, lastname, firstname, email, phone, url, itemNum}) => {
	let name = firstname + ' ' + lastname;
	return (
		<div className='CardDetails growCard2' onClick={()=>requestIndiCard(true, itemNum)}>
			<div className='imgContainer'>
				<img className="imgRounded" alt='robots' src={`https://robohash.org/${firstname + lastname}?size=133x170&set=set2&bgset=bg1`} />
			</div>
			<div className="textContainer">
				<h3 className="subjectTitle">{name}</h3>
				<p className="phoneTitle">{phone}</p>
				<p className="emailTitle">{email}</p>
			</div>
		</div>
	);
}

export default Card;