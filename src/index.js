import "./styles.css";
import { ToDo, Project } from "./js/todo.js";

const projectsSection = document.querySelector("#projects-section");

const projects = [];
const inbox = new Project(0, "Inbox", "Todos that don't belong to a project.");
projects.push(inbox);
let currentProjectIndex = 0;

function displayProjects() {
  projects.forEach(( { id, title }) => {
    projectsSection.innerHTML += 
      `
        <div class="project-tab" id="${id}">
          ${title}
        </div>
      `
  });

  projectsSection.innerHTML += 
    `
      <button id="add-project">Add Project</button>
      <dialog id="project-dialog">
        <div class="form-header">Add New Project</div>
        <form id="new-project-form">
          <div>
            <label for="project-title" id="project-title">Project Name: </label>
            <input type="text" name="project-title" id="new-project-title" required />
          </div>
          <div>
            <label for="project-desc" id="project-desc">Project Description: </label>
            <input type="textarea" name="project-desc" id="new-project-desc" />
          </div>
        </form>
        <button id="submit-new-project">Add</button>
      </dialog>
    `
  const addProjectBtn = document.querySelector("#add-project");
  const projectDialog = document.querySelector("#project-dialog");
  
  const submitNewProjectBtn = document.querySelector("#submit-new-project");
    addProjectBtn.addEventListener("click", () => {
    console.log('clicked');
    projectDialog.showModal();
  });
  
  submitNewProjectBtn.addEventListener("click", () => {
    const newProjectTitle = document.querySelector("#new-project-title").value;
    const newProjectDesc = document.querySelector("#new-project-desc").value;
    const newProject = new Project(projects.length, newProjectTitle, newProjectDesc);
    projects.push(newProject);
    currentProjectIndex = newProject.id;
    projectsSection.innerHTML = "";
    displayProjects();
    projectDialog.close();
  });
}

const toDoSection = document.querySelector("#to-do-section");

function displayToDoSection() {
  const currentProject = projects[currentProjectIndex];
  const toDoList = currentProject.toDoList;

  toDoSection.innerHTML += 
    `
      <div id="current-project-header">
        <div id="current-project-title">${currentProject.title}</div>
        <div id="current-project-desc">${currentProject.description}</div>
      </div>
    `;

  toDoList.forEach(() => {

  });
}

toDoSection.innerHTML += `
  <dialog id="to-do-dialog">
    <div class="form-header">Add New ToDo</div>
    <form id="to-do-form">
      <div>
        <label for="todo-title">Title: </label>
        <input type="text" name="title" id="new-todo-title" />
      </div>
      <div>
        <label for="todo-desc">Description: </label>
        <input type="textarea" name="new-todo-desc" />
      </div>
      <div>
        <label for="due-date">Due Date: </label>
        <input type="date" name="due-date" id="new-due-date" />
      </div>
      <div>
        <label for="priority">Priority: </label>
        <select id="new-priority">
          <option value="none">None</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div>
        <button id="close-dialog">Close</button>
        <button id="submit-new-todo">Add</buton>
      </div>
    </form>
  </dialog>
`;

toDoSection.innerHTML += `<button class="add-to-do-btn">Add ToDo</button>`;

const addToDoBtn = document.querySelector(".add-to-do-btn");
const toDoDialog = document.querySelector("#to-do-dialog");
const submitNewToDo = document.querySelector("#submit-new-todo");
const closeDialog = document.querySelector("#close-dialog");

addToDoBtn.addEventListener("click", () => {
  toDoDialog.showModal();
});

closeDialog.addEventListener("click", () => {
  toDoDialog.close();
})

submitNewToDo.addEventListener("click", () => {
  const title = document.querySelector("#")
  toDoDialog.close();
})


displayProjects();
displayToDoSection();