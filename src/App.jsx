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

	return (
		<>
			<h1>Odin CV</h1>
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
