function CurriculumPreview({ cvData }) {
	return (
		<div>
			<h1 className="text-xl font-bold">Curriculum Preview</h1>

			<div className="border p-5">
				<p className="text-5xl font-bold">
					{cvData.generalInfo.fullName}
				</p>
				<p>{cvData.generalInfo.email}</p>
				<p>{cvData.generalInfo.phone}</p>

				<h2 className="font-bold mb-2 mt-10 text-3xl">
					{cvData.practicalExperience.length > 0
						? "Practical Experience"
						: ""}
				</h2>
				<ul className="list-disc">
					{cvData.practicalExperience.map((experience, index) => (
						<li key={index} className="mb-5">
							<h3 className="text-xl font-bold mb-3">
								{experience.companyName} &nbsp; - &nbsp;
								{experience.positionTitle}
							</h3>
							<p className="text-xs mb-1">
								{experience.startWork} - {experience.endDate}
							</p>
							<p className="text-wrap">
								{experience.responsibilities}
							</p>
						</li>
					))}
				</ul>

				<h2 className="font-bold mt-10">
					{cvData.educationalExperience.length > 0
						? "Educational Experience"
						: ""}
				</h2>
				<ul className="list-disc">
					{cvData.educationalExperience.map((experience, index) => (
						<li key={index} className="mb-5">
							<h3 className="text-3xl font-bold">
								{experience.schoolName} &nbsp; - &nbsp;
								{experience.titleStudy}
							</h3>
							<p>{experience.dateStudy}</p>
							<p></p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default CurriculumPreview;
