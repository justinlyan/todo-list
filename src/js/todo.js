class ToDo {
  constructor(id, title, description, dueDate = "", priority = "") {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    this.complete = false;
  }

  updateComplete() {
    this.complete = !this.complete;
  }

}

function createToDo(title, description, dueDate, priority) {
  return new ToDo(title, description, dueDate, priority);
}

class Project {
  constructor(id, title, description) {
    this.toDoList = [];
    this.id = id;
    this.title = title;
    this.description = description;
  }

  addToDo(toDo) {
    this.toDoList.push(toDo);
  }
}

function createProject(title, description) {
  return new Project(title, description);
} 

export { ToDo, createToDo, Project, createProject };