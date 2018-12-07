import React from "react";
// Images
import Yogandha from "../assets/ambassador_programs/yogandha.jpg";
import JadeYogaLogo from "../assets/ambassador_programs/jadeyoga_logo.png";
import JadeYogaMats from "../assets/ambassador_programs/jadeyoga_mats.jpeg";

const AmbassadorPrograms = props => {
	return (
		<div>
			<h3>Ambassador Programs</h3>
			<div>
				<h4>YOGANDHA</h4>
				<p>
					Yogandha has a range of 100% natural, vegan and hand-made
					well-being oils made in Ireland with no artificial
					ingredients. As a special collaborative effort, if you
					purchase a product through the below link, 10% of sales
					proceeds will be contributed to RiseRwanda to support
					initiatives in line with our constitution.
					<img src={Yogandha} alt="yoghanda" />
					This purchase is } ideal for the environmentally conscious
					purchaser, as the products are never tested on animals and
					all packaging is post-recycled or recyclable. Yogandha is
					about a daily connection to mindfulness, to ourselves and to
					our planet. Use Yogandha products to bring some
					self-connection into your life every single day.{" "}
				</p>
			</div>
			<div>
				<h4>Jade Yoga</h4>
				<img src={JadeYogaLogo} alt="yoghanda" />
				<p>
					Jade Yoga is committed to providing environmentally friendly
					yoga products and giving back to the earth with every
					product sold.
					<img src={JadeYogaMats} alt="yoghanda" />
					Jade Yoga has generously provided a collection of their
					superb yoga mats to Rise Rwanda to support our Giving Back
					Through Yoga initiative. We are now in a position to provide
					a number of yoga mats at our yoga sessions, for yogis on the
					run, for curious new-comers, or even for those that are just
					down-right forgetful.
				</p>
			</div>
		</div>
	);
};

export default AmbassadorPrograms;
