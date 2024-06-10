function PracticalExperience({ onDataChange }) {
	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		onDataChange(data);
	}

	return (
		<div className="w-screen mt-10">
			<h2 className="text-3xl font-bold text-center">
				Practical Experience
			</h2>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center"
			>
				<input
					type="text"
					name="companyName"
					id="companyName"
					placeholder="Company Name"
					className="input input-bordered m-1 w-full max-w-sm"
				/>{" "}
				<br />
				<input
					type="text"
					name="positionTitle"
					id="positionTitle"
					placeholder="Position Title"
					className="input input-bordered m-1 w-full max-w-sm"
				/>{" "}
				<br />
				<textarea
					name="responsibilities"
					id="responsibilities"
					placeholder="Responsibilities"
					className="textarea textarea-bordered m-1 h-10 w-full max-w-sm"
				></textarea>{" "}
				<br />
				<label htmlFor="startWork">Start Date</label>
				<input
					type="date"
					name="startWork"
					id="startWork"
					placeholder="Start Date"
					className="input input-bordered m-1 w-full max-w-sm"
				/>{" "}
				<br />
				<label htmlFor="endDate">End Date</label>
				<input
					type="date"
					name="endDate"
					id="endDate"
					placeholder="End Date"
					className="input input-bordered m-1 w-full max-w-sm"
				/>{" "}
				<br />
				<button type="submit" className="btn btn-wide">
					Confirm
				</button>
			</form>
		</div>
	);
}

export default PracticalExperience;
