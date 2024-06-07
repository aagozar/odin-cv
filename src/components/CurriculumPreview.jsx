function CurriculumPreview({ cvData }) {
	return (
		<div>
			<h1>Curriculum Preview</h1>
			<h2>General Info</h2>
			<p>{cvData.generalInfo.fullName}</p>
			<p>{cvData.generalInfo.email}</p>
			<p>{cvData.generalInfo.phone}</p>

			<h2>Practical Experience</h2>
			<ul>
				{cvData.practicalExperience.map((experience, index) => (
					<li key={index}>
						<h3>{experience.companyName}</h3>
						<p>{experience.positionTitle}</p>
						<p>{experience.responsibilities}</p>
						<p>
							{experience.startWork} - {experience.endDate}
						</p>
					</li>
				))}
			</ul>

			<h2>Educational Experience</h2>
			<ul>
				{cvData.educationalExperience.map((experience, index) => (
					<li key={index}>
						<h3>{experience.schoolName}</h3>
						<p>{experience.titleStudy}</p>
						<p>{experience.dateStudy}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CurriculumPreview;
