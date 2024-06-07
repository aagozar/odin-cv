function EducationalExperience({ onDataChange }) {
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		onDataChange(data);
	}

	return (
		<div>
			<h1>Education</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="schoolName"
					id="schoolName"
					placeholder="School Name"
				/>
				<input
					type="text"
					name="titleStudy"
					id="titleStudy"
					placeholder="Title Study"
				/>
				<input
					type="date"
					name="dateStudy"
					id="dateStudy"
					placeholder="Date Study"
				/>
				<button type="submit">Confirm</button>
			</form>
		</div>
	);
}

export default EducationalExperience;
