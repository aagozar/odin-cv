function PracticalExperience({ onDataChange }) {
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		onDataChange(data);
	}

	return (
		<div>
			<h2>Practical Experience</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="companyName"
					id="companyName"
					placeholder="Company Name"
				/>
				<input
					type="text"
					name="positionTitle"
					id="positionTitle"
					placeholder="Position Title"
				/>
				<textarea
					name="responsibilities"
					id="responsibilities"
					placeholder="Responsibilities"
				></textarea>
				<input
					type="date"
					name="startWork"
					id="startWork"
					placeholder="Start Date"
				/>
				<input
					type="date"
					name="endDate"
					id="endDate"
					placeholder="End Date"
				/>
				<button type="submit">Confirm</button>
			</form>
		</div>
	);
}

export default PracticalExperience;
