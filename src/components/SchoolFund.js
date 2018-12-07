import React from "react";
// Images
import SmilesSchool from "../assets/school_fund/smiles_in_school.jpg";
import TwoInSchool from "../assets/school_fund/two_school_boys.jpg";
import YellowRoad from "../assets/school_fund/yellow_road.jpg";
import YellowThankYou from "../assets/school_fund/yellow_thank_you.jpg";

const SchoolFund = props => {
	return (
		<div>
			<h3>School Fund</h3>
			<div>
				Since its inception, Rise Rwanda has been primarily focused on
				supporting education for vulnerable children in Rwamagana. We
				believe that education is the key to making lasting change in
				disadvantaged communities. It’s the way to change social
				attitudes, enable children to grow into well-equipped adults,
				and foster a growing economy.
			</div>
			<img src={SmilesSchool} alt="smiles in school" />
			<div>
				Numerous studies have shown that children who are sponsored are
				more likely to stay in school. They are more likely to find a
				job in the future and even become positive leaders in their
				communities. Importantly, girls who remain in education are far
				less likely to get married at a young age, become pregnant at a
				young age, or even turn to unsavory vocations as a means of
				survival.
			</div>
			<img src={TwoInSchool} alt="two in school" />
			<div>
				Rise Rwanda began with the sponsorship of just three children
				and is now supporting education for over 20. Sponsorship
				includes; 2 meals per school day, health insurance, school
				books, school uniforms, PE gear and transport to school.
			</div>
			<img src={YellowRoad} alt="yellow road" />
			<div>
				You can contribute to this sponsorship though this link. You can
				choose a nominal donation amount or yearly sponsorship. Yearly
				sponsorship is just €330 and if you sign up you will receive
				details of the child you’re sponsoring and their story so far.
				You will also receive regular updates and three school reports
				each year on how the child is getting on in school.
			</div>
			<img src={YellowThankYou} alt="yellow thank you" />
			<div>
				Even better you could contribute by attending one of Rise
				Rwanda’s #givingbackthroughyoga classes. These donation based
				yoga classes have snowballed in popularity and they offer mutual
				benefits for all involved. See our Yoga page for more details.
				This is a great opportunity to meet new people, reward yourself,
				and contribute to this amazing mission.
			</div>
		</div>
	);
};

export default SchoolFund;
