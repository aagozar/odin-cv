import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/PracticalExperience";
import EducationalExperience from "./components/EducationalExperience";
import CurriculumPreview from "./components/CurriculumPreview";

function App() {
	const [cvData, setCvData] = useState({
		generalInfo: {
			fullName: "",
			email: "",
			phone: "",
		},
		practicalExperience: [],
		educationalExperience: [],
	});

	function handleGeneralInfoChange(data) {
		setCvData((prevData) => ({
			...prevData,
			generalInfo: {
				...prevData.generalInfo,
				...data,
			},
		}));
	}

	function handlePracticalExperienceChange(data) {
		setCvData((prevData) => ({
			...prevData,
			practicalExperience: [...prevData.practicalExperience, data],
		}));
	}

	function handleEducationalExperienceChange(data) {
		setCvData((prevData) => ({
			...prevData,
			educationalExperience: [...prevData.educationalExperience, data],
		}));
	}

	function loadExampleData() {
		setCvData({
			generalInfo: {
				fullName: "John Doe",
				email: "johndoe@example.com",
				phone: "+39 123 456 7890",
			},
			practicalExperience: [
				{
					companyName: "Example Inc.",
					positionTitle: "Software Developer",
					responsibilities: "Developing software",
					startWork: "2020-01-01",
					endDate: "2021-01-01",
				},
			],
			educationalExperience: [
				{
					schoolName: "Example University",
					titleStudy: "Computer Science",
					dateStudy: "2016-01-01",
				},
			],
		});
	}

	return (
		<>
			<h1>Odin CV</h1>
			<button onClick={loadExampleData}>Generate Sample Data</button>
			<GeneralInfo onDataChange={handleGeneralInfoChange} />
			<PracticalExperience
				onDataChange={handlePracticalExperienceChange}
			/>
			<EducationalExperience
				onDataChange={handleEducationalExperienceChange}
			/>

			<CurriculumPreview cvData={cvData} />
		</>
	);
}

export default App;
