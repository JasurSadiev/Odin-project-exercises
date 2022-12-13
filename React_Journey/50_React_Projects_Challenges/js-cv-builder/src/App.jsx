import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Interests from "./components/Interests";
import ProfessionalSkills from "./components/ProfessionalSkills";
import Profile from "./components/Profile";
import Languages from "./components/Languages";
import Education from "./components/Education";

function App() {
	return (
		<div className='App'>
			<div className='header'>
				<Header />
				<Contact />
				<Education />
				<Languages />
			</div>
			<div className='content'>
				<Profile />
				<Experience />
				<ProfessionalSkills />
				<Interests />
			</div>
		</div>
	);
}

export default App;
