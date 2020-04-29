import React, { useState, useEffect } from 'react';

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

	const handleChange = e => setContact({ [e.target.name]: e.target.value });

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="hidden" name="form-name" value="contact" />
				<p>
					<label>
						Your Name:{' '}
						<input
							type="text"
							name="name"
							value={contact.name}
							onChange={handleChange}
						/>
					</label>
				</p>
				<p>
					<label>
						Your Email:{' '}
						<input
							type="email"
							name="email"
							value={contact.email}
							onChange={handleChange}
						/>
					</label>
				</p>
				<p>
					<label>
						Message:{' '}
						<textarea
							name="message"
							value={contact.message}
							onChange={handleChange}
						/>
					</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	);
};

export default Contact;
