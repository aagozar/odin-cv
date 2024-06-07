import React, { useState } from "react";

function GeneralInfo({ onDataChange }) {
	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData);
		onDataChange(data);
	}

	return (
		<div>
			<h1>General Info</h1>

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
		</div>
	);
}

export default GeneralInfo;
