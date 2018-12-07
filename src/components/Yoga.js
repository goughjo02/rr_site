import React from "react";
// React Router stuff
import { Link } from "react-router-dom";
// Images
import Art1 from "../assets/yoga/art_mcart_2.jpg";
import Art2 from "../assets/yoga/art_mcart.jpg";
import _24 from "../assets/yoga/24.png";
import _20 from "../assets/yoga/20.png";

const Yoga = props => {
	return (
		<div>
			<img src={Art1} alt="art one" />
			<img src={_24} alt="24" />
			<p>
				Our mission is to bring together a global yoga community to
				empower vulnerable women and children. We want to enable them
				shape their future through education and economic opportunities.
				For the cost of one class, you can change a life.
			</p>
			<img src={_20} alt="20" />
			<p>
				In order to keep providing these wonderful yoga classes we need
				the generosity of instructors around the globe. We are extremely
				lucky to have connections with such wonderful yogi’s who have
				given their time to host classes in their studios/outdoors for
				RISE Rwanda. Not only do they host an amazing yoga class but
				participants get to help the women and children in Rwanda
				through their contribution.
			</p>
			<p>Want to host a class? Get in touch here</p>
			<img src={Art2} alt="art two" />
			<p>
				CLICK
				<Link to="/yoga-teachers/">HERE</Link> TO SEE THE WONDERFUL YOGA
				INSTRUCTORS THAT HAVE HOSTED CLASSES
			</p>
		</div>
	);
};

export default Yoga;
