import React, { Component } from "react";

class Contact extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<form
					class="gform pure-form pure-form-stacked"
					method="POST"
					data-email="example@email.net"
					action="https://script.google.com/macros/s/AKfycbwhgGe0DuvU-QcvQ_GLexSsaH1sDO6vLeZupIGF9McDypE46p6w/exec"
				>
					<div class="form-elements">
						<label for="test">Test: </label>
						<input id="test" name="test" placeholder="Test Field" />
						<label for="name">Name: </label>
						<input
							id="name"
							name="name"
							placeholder="What your Mom calls you"
						/>
						<label for="message">Message: </label>
						<textarea
							id="message"
							name="message"
							rows="10"
							placeholder="Tell us what's on your mind..."
						/>
						<label for="email">
							<em>Your</em> Email Address:
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							placeholder="your.name@email.com"
						/>

						<label for="color">Favourite Color: </label>
						<input id="color" name="color" placeholder="green" />

						<button class="button-success pure-button button-xlarge">
							<i class="fa fa-paper-plane" />
							&nbsp;Send
						</button>
					</div>
				</form>
{
				// <script
				// 	data-cfasync="false"
				// 	type="text/javascript"
				// 	src="form-submission-handler.js"
				// />
			}
			</div>
		);
	}
}

export default Contact;
