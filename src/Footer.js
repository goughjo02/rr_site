import React, { Component } from "react";
// Third party instagram component
import InstagramEmbed from "react-instagram-embed";
// Material UI stuff
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
	appBar: {
		top: "auto",
		bottom: 0
	},
	toolbar: {
		padding: "24px",
		alignItems: "center",
		justifyContent: "space-between"
	}
});

class Footer extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<AppBar
					position="static"
					color="primary"
					className={classes.appBar}
				>
					<Toolbar className={classes.toolbar}>
						 {
							//<InstagramEmbed
						// 							url="https://www.instagram.com/p/Bg9cuGhHM2v/"
						// 							maxWidth={280}
						// 							hideCaption={true}
						// 							containerTagName="div"
						// 							injectScript
						// 							protocol=""
						// 							onLoading={() => {}}
						// 							onSuccess={() => {}}
						// 							onAfterRender={() => {}}
						// 							onFailure={() => {}}
						// 						/>
					}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Footer);
