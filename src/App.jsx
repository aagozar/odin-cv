import { useState, useRef } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/PracticalExperience";
import EducationalExperience from "./components/EducationalExperience";
import CurriculumPreview from "./components/CurriculumPreview";
import jsPDF from "jspdf";

function App() {
	const cvPreviewRef = useRef(null);
	// HTML to PDF converter

	function generatePDF() {
		const doc = new jsPDF();
		doc.html(cvPreviewRef.current, {
			async callback(doc) {
				await doc.save("cv");
			},
		});
	}

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
					positionTitle: "Super Senior Software Developer",
					responsibilities:
						"Developing software applications. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt aliquam. Nulla nisi elit Lorem laborum occaecat nisi mollit aliquip sint. Sint sunt cillum excepteur fugiat. Ullamco excepteur anim mollit excepteur dolor consequat non ad irure.Reprehenderit ut Lorem aliquip pariatur est est aliquip. Eiusmod magna non aliquip Lorem tempor ut velit aliquip non elit. Eiusmod duis laborum commodo ullamco duis. Amet reprehenderit qui pariatur exercitation sint excepteur aute adipisicing id Lorem irure. Cillum ut ea eiusmod est.",
					startWork: "2020-01-01",
					endDate: "2021-01-01",
				},
				{
					companyName: "Example Inc. #2",
					positionTitle: "Senior Software Developer",
					responsibilities:
						"Nulla id incididunt culpa ad ea occaecat. Laborum ipsum mollit nostrud cillum eiusmod excepteur eu elit. Aute aliqua enim officia velit velit qui commodo eiusmod pariatur reprehenderit et veniam tempor. Enim sit commodo nulla id dolore Lorem do sunt Lorem proident ipsum aliquip culpa. Incididunt exercitation aliqua officia pariatur culpa aute elit tempor esse Lorem ad exercitation aute irure. Labore duis cupidatat magna in consectetur pariatur magna labore officia id laboris commodo veniam. Id consequat duis nisi occaecat officia magna in aute exercitation elit esse.",
					startWork: "2020-01-01",
					endDate: "2021-01-01",
				},
				{
					companyName: "Example Inc. #2",
					positionTitle: "Junior Software Developer",
					responsibilities:
						"Fugiat non pariatur adipisicing et consectetur duis aliquip nostrud cillum. Ut laboris tempor exercitation culpa veniam mollit adipisicing ex sit est tempor ad. Anim laboris et fugiat minim ut in consequat.",
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
				{
					schoolName: "Example Highschool",
					titleStudy: "Computer Science",
					dateStudy: "2016-01-01",
				},
				{
					schoolName: "Random School",
					titleStudy: "Computer Science",
					dateStudy: "2016-01-01",
				},
			],
		});
	}

	return (
		<>
			<div
				id="main"
				className="w-screen h-screen flex justify-center my-10"
			>
				<div className="w-2/4">
					<h1 className="text-5xl font-bold">Odin CV</h1>
					<button onClick={loadExampleData} className="btn m-1">
						Generate Sample Data
					</button>
					<GeneralInfo onDataChange={handleGeneralInfoChange} />
					<PracticalExperience
						onDataChange={handlePracticalExperienceChange}
					/>
					<EducationalExperience
						onDataChange={handleEducationalExperienceChange}
					/>
				</div>
				<div ref={cvPreviewRef}>
					<CurriculumPreview cvData={cvData} id="cvPreview" />
				</div>
				<button onClick={generatePDF}>Download</button>
			</div>
		</>
	);
}

export default App;
