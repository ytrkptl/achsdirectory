import React from 'react';
import './Footer.css';

let date = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Footer = () => {
	return (
			<div className='footerDiv'>
				<p>Site created by: Yatrik Patel</p>
				<div className="footerChildDiv">
					<p>Published on: June 4, 2019</p>
					<p>{`Updated on: ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</p>
				</div>
			</div>
	);
}

export default Footer;