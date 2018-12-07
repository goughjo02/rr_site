import React from "react";
// Material UI stuff
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// Images
import Countryside from "../assets/countryside.jpg";
import WhiteLogo from "../assets/white_logo.png";
import Impact_1 from "../assets/impact_1.png";
import Impact_2 from "../assets/impact_2.png";
import Impact_3 from "../assets/impact_3.png";
import Impact_4 from "../assets/impact_4.png";
import Impact_5 from "../assets/impact_5.png";
import Impact_6 from "../assets/impact_6.png";
import Blurb_1 from "../assets/blurb_1.png";

const styles = ({ theme }) => ({
	topImage: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100vw",
		height: "90vh",
		backgroundImage: `url(${Countryside})`,
		backgroundSize: "cover"
	},
	topLogoHolder: {
		flex: "0 1 300px"
	},
	topLogo: {
		width: "100%",
		height: "auto"
	},
	aboutUs: {
		paddingTop: "40px",
		paddingBottom: "40px"
	},
	impactImages: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: 'center',
		justifyContent: 'center'
	},
	impactImageHolder: {
		flex: "0 1 300px"
	},
	impactImage: {
		width: "100%",
		height: "auto"
	},
	blurbImageSection: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	blurbImageHolder: {
		flex: '0 1 300px'
	},
	blurbImage: {
		width: '100%',
		height: 'auto'
	}
});

const Home = props => {
	const { classes } = props;
	return (
		<div>
			<div className={classes.topImage}>
				<div className={classes.topLogoHolder}>
					<img
						className={classes.topLogo}
						src={WhiteLogo}
						alt="logo"
					/>
				</div>
			</div>
			<div className={classes.aboutUs}>
				<Typography variant="h4" align="center" gutterBottom={true}>
					ABOUT US
				</Typography>
				<Typography variant="body1" align="center" paragraph={true}>
					RISE Rwanda was set up to support the education of
					vulnerable children in Rwamagana, Rwanda. Rise is also
					providing economic opportunities to the mothers and female
					guardians of these children, to reduce financial stress and
					enable self-sufficiency. In doing so, RISE Rwanda hopes to
					instate female role models as community leaders to support
					gender equality in Rwanda. These initiatives are financed
					through fundraising efforts, such as #givingbackthroughyoga
					and the RTE One World Fund.
				</Typography>
			</div>
			<div>
				<Typography variant="h4" align="center">
					IMPACT
				</Typography>
				<div className={classes.impactImages}>
					<div className={classes.impactImageHolder}>
						<img
							src={Impact_1}
							className={classes.impactImage}
							alt="home"
						/>
					</div>
					<div className={classes.impactImageHolder}>
						<img
							src={Impact_2}
							className={classes.impactImage}
							alt="home"
						/>
					</div>
					<div className={classes.impactImageHolder}>
						<img
							src={Impact_3}
							className={classes.impactImage}
							alt="home"
						/>
					</div>
					<div className={classes.impactImageHolder}>
						<img
							src={Impact_4}
							className={classes.impactImage}
							alt="home"
						/>
					</div>
					<div className={classes.impactImageHolder}>
						<img
							src={Impact_5}
							className={classes.impactImage}
							alt="home"
						/>
					</div>
					<div className={classes.impactImageHolder}>
						<img
							src={Impact_6}
							className={classes.impactImage}
							alt="home"
						/>
					</div>
				</div>
			</div>
			<div className={classes.blurbImageSection}>
				<div className={classes.blurbImageHolder}>
					<img
						src={Blurb_1}
						className={classes.blurbImage}
						alt="home"
					/>
				</div>
			</div>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(Home);
