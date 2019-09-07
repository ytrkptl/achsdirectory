import React from 'react';
import './Card.css';

const Card  = ({ requestIndiCard, lastname, firstname, email, phone, url, itemNum}) => {
	let name = firstname + ' ' + lastname;
	return (
		<div className='CardDetails'>
			<div className='imgContainer'>
				{/* <div className='flip-card-inner'>
					<div className='flip-card-front'> */}
						<img className="imgRounded" alt='robots' src={`https://robohash.org/${firstname + lastname}?size=133x170&set=set2&bgset=bg1`} />
					{/* </div> */}
					{/* <div className='flip-card-back'>
						<img className="imgRounded" alt='robots' src={url} />
					</div> */}
				{/* </div> */}
			</div>
			<button onClick={()=>requestIndiCard(true, itemNum)} className="buttonStyle2">
				<div className="textContainer">
					<span className="divtry">Click here for schedule</span>
					<h3 className="subjectTitle">{name}</h3>
					<p className="phoneTitle">{phone}</p>
					<p className="emailTitle">{email}</p>
				</div>
			</button>
		</div>
	);
}

export default Card;