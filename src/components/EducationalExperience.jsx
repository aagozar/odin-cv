function EducationalExperience({ onDataChange }) {
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		onDataChange(data);
	}

	return (
		<div>
			<h1 className="text-xl font-bold">Education</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="schoolName"
					id="schoolName"
					placeholder="School Name"
					className="input input-bordered m-1 w-auto"
				/>
				<input
					type="text"
					name="titleStudy"
					id="titleStudy"
					placeholder="Title Study"
					className="input input-bordered m-1 w-auto"
				/>
				<input
					type="date"
					name="dateStudy"
					id="dateStudy"
					placeholder="Date Study"
					className="input input-bordered m-1 w-auto"
				/>
				<button type="submit" className="btn m-1">
					Confirm
				</button>
			</form>
		</div>
	);
}

export default EducationalExperience;
