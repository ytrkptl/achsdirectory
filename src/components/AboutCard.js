import React from 'react';
import './Card.css';

const AboutCard  = () => {
	return (
		<div style={{marginLeft: '10px', marginRight: '10px'}}>
			<p className="AboutCard">
				You might be wondering what ACHS stands for?
			</p>
			<p className="AboutCard"> 
				{`Well, it's just dummy
				initials for a school I would like to call 'Awesome County High School.'
				Here you can search for the wonderful faculty and staff that works here, 
				including the ability to see their schedule, email, phone extension 
				and a profile photo. Click on the robots to see the teacher's 
				actual photo (to be updated).`}
			</p>
			<p className="AboutCard">
				Admins can also add, view, edit, and delete employees.
			</p>

			<p className="AboutCard">
				Oh yeah, and don't forget to toggle animation on at the top
				right of this page and play with our school mascots that fly 
				around.
			</p>
			<p className="AboutCard" style={{color: "#74b9ff"}}>
				Is our mascot hippos or cows? I cannot tell, can you?
				Anyways, have fun.
			</p>
			<h4 className="AboutCard">
				"Go Hippos" or "Go Cows"??
			</h4>
			<p className="AboutCard" style={{color: "#74b9ff"}}>
				Okay 
			</p>
		</div>
	);
}

export default AboutCard;