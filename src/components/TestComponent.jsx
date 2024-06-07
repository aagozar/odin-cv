import React, { useState } from "react";

function TestComponent() {
	const [value, setValue] = useState("");
	const [cvData, setCvData] = useState({
		fullName: "",
		email: "",
		phone: "",
	});

	function handleChange(event) {
		setValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);
		console.log(data);
		setCvData(data);
	}

	return (
		<div>
			<h1>Test Component</h1>
			<input type="text" placeholder="test" onChange={handleChange} />
			<p>{value}</p>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="fullName"
					id="fullName"
					placeholder="Fullname"
				/>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="email@example.com"
				/>
				<input
					type="tel"
					name="phone"
					id="phone"
					placeholder="+39 123 456 7890"
				/>
				<button type="submit">Confirm</button>
			</form>

			<p>{cvData.fullName}</p>
			<p>{cvData.email}</p>
			<p>{cvData.phone}</p>
		</div>
	);
}

export default TestComponent;
