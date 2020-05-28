import React, { useState } from 'react';

const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};

const Contact = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleSubmit = e => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...contact })
		})
			.then(() => alert('Success!'))
			.catch(error => alert(error));

		e.preventDefault();
	};

	const handleChange = e =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	return (
		<div className="contact">
			<div id="opener">If you'd like to connect, please send me a message!</div>
			<form onSubmit={handleSubmit}>
				<input type="hidden" name="form-name" value="contact" />
				<p id="nameEmail">
					<label className="inputLabel">
						<p>Name</p>
						<input
							type="text"
							name="name"
							// placeholder="Name"
							value={contact.name}
							onChange={handleChange}
							className="contactInput"
						/>
					</label>
					<label className="inputLabel">
						<p>Email</p>
						<input
							type="email"
							name="email"
							// placeholder="Email"
							value={contact.email}
							onChange={handleChange}
							className="contactInput"
						/>
					</label>
				</p>
				<p id="messageBox">
					<label className="inputLabelMessage">
						<p>Message</p>
						<textarea
							name="message"
							// placeholder="Message"
							value={contact.message}
							onChange={handleChange}
							className="contactInputMessage"
						/>
					</label>
				</p>
				<p className="submitBtn">
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	);
};

export default Contact;
