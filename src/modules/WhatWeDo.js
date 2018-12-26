import React from "react";
// Material UI stuff
import { withStyles } from "@material-ui/core/styles";
// Images
import WhatWeDoImage from "../assets/what_we_do.png";

const styles = ({ theme }) => ({
	root: {
		width: "100vw",
		display: "flex",
		justifyContent: "center"
	},
	imageHolder: {
		flex: "0 1 800px"
	},
	greenImage: {
		width: "100%",
		height: "auto"
	}
});

const WhatWeDo = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.imageHolder}>
				<img
					className={classes.greenImage}
					src={WhatWeDoImage}
					alt="what we do"
				/>
			</div>
		</div>
	);
};

export default withStyles(styles, { withTheme: true })(WhatWeDo);
