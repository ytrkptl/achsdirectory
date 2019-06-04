import React from 'react';
import './IndiCard.css';


const IndiCard  = ({requestIndiCard, lastname, firstname, email, phone, id, url, room, firstblock, secondblock, thirdblock, fourthblock, lunch}) => {
	let name = firstname + ' ' + lastname
	return (
		<div className="parentDivDisplay">
			<button className="buttonStyle" onClick={()=>requestIndiCard(false, id)}>Go Back</button>
			<div className='indiCardDetails' key={id}>
				<div className="gridItNow">
					<div className='subCardDetails growCard'>
						<div className='indiImgContainer'>
							<div className='indiFlip-card-inner'>
								<div className='indiFlip-card-front'>
									<img className="indiImgRounded" alt='robots' src={`https://robohash.org/${firstname + lastname}?size=133x170&set=set2&bgset=bg1`} />
								</div>
								<div className='indiFlip-card-back'>
									<img className="indiImgRounded" alt='robots' src={url} />
								</div>
							</div>
						</div>
						<div className="underTextContainer">
							<h3 className="subjectTitle">{name}</h3>
							<p className="phoneTitle">{phone}</p>
							<p className="emailTitle">{email}</p>
						</div>
					</div>
					<div className="indiTextContainer">
						<p className="indiEmailTitle">{`Email: ${email}`}</p>
						<p className="indiScheduleTitle">{'Schedule'}</p>
						<div className="subColumn">
							<p className="indiLeftCol">{'1st block: '}</p>
							<p className="indiRightCol">{firstblock}</p>
							<p className="indiLeftCol">{'2nd block: '}</p>
							<p className="indiRightCol">{secondblock}</p>
							<p className="indiLeftCol">{'3rd block: '}</p>
							<p className="indiRightCol">{thirdblock}</p>
							<p className="indiLeftCol">{'Lunch: '}</p>
							<p className="indiRightCol">{lunch}</p>
							<p className="indiLeftCol">{'4th block: '}</p>
							<p className="indiRightCol">{fourthblock}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IndiCard;