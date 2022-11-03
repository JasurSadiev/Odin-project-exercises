import { format } from "date-fns";
import Project from "./Project";
import Storage from "./Storage";
import Task from "./Task";

export default class UI {
	// Loading Content

	static loadHomePage() {
		UI.loadProjects();
		UI.initProjectButtons();
		UI.openProject("Inbox", document.getElementById("button-inbox-projects"));
		document.addEventListener("keydown", UI.handleKeyboardInput);
	}

	static loadProjects() {
		Storage.getTodoList()
			.getProjects()
			.forEach((project) => {
				if (
					project.name !== "Inbox" &&
					project.name !== "Today" &&
					project.name !== "This week"
				) {
					UI.createProject(project.name);
				}
			});
		UI.initAddProjectButtons();
	}
}
