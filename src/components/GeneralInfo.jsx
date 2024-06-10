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
		<div className="w-screen m-10">
			<h1 className="text-3xl font-bold text-center">General Info</h1>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center align-middle"
			>
				<input
					type="text"
					name="fullName"
					id="fullName"
					placeholder="Your Name"
					className="input input-bordered m-1 w-full max-w-sm"
					required
				/>{" "}
				<br />
				<input
					type="email"
					name="email"
					id="email"
					placeholder="email@example.com"
					className="input input-bordered m-1 w-full max-w-sm"
					required
				/>{" "}
				<br />
				<input
					type="tel"
					name="phone"
					id="phone"
					placeholder="+39 123 456 7890"
					className="input input-bordered m-1 w-full max-w-sm"
					required
				/>{" "}
				<br />
				<button type="submit" className="btn btn-wide">
					Confirm
				</button>
			</form>
		</div>
	);
}

export default GeneralInfo;
