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
			<h1 className="text-xl font-bold">General Info</h1>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="fullName"
					id="fullName"
					placeholder="Fullname"
					className="input input-bordered m-1 w-auto"
					required
				/>{" "}
				<br />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="email@example.com"
					className="input input-bordered m-1"
					required
				/>{" "}
				<br />
				<input
					type="tel"
					name="phone"
					id="phone"
					placeholder="+39 123 456 7890"
					className="input input-bordered m-1"
					required
				/>{" "}
				<br />
				<button type="submit" className="btn m-1">
					Confirm
				</button>
			</form>
		</div>
	);
}

export default GeneralInfo;
