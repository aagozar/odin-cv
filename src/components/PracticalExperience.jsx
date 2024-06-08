function PracticalExperience({ onDataChange }) {
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		onDataChange(data);
	}

	return (
		<div>
			<h2 className="text-xl font-bold">Practical Experience</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="companyName"
					id="companyName"
					placeholder="Company Name"
					className="input input-bordered m-1 w-auto"
				/>{" "}
				<br />
				<input
					type="text"
					name="positionTitle"
					id="positionTitle"
					placeholder="Position Title"
					className="input input-bordered m-1 w-auto"
				/>{" "}
				<br />
				<textarea
					name="responsibilities"
					id="responsibilities"
					placeholder="Responsibilities"
					className="textarea textarea-bordered m-1 w-auto h-24"
				></textarea>{" "}
				<br />
				<input
					type="date"
					name="startWork"
					id="startWork"
					placeholder="Start Date"
					className="input input-bordered m-1 w-auto"
				/>{" "}
				<br />
				<input
					type="date"
					name="endDate"
					id="endDate"
					placeholder="End Date"
					className="input input-bordered m-1 w-auto"
				/>{" "}
				<br />
				<button type="submit" className="btn m-1">
					Confirm
				</button>
			</form>
		</div>
	);
}

export default PracticalExperience;
