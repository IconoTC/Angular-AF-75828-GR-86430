import { Component } from '@angular/core';
import { TasksList } from "./components/tasks-list/tasks-list";

@Component({
  selector: 'ind-todo-page',
  imports: [TasksList],
  template: `
    <h2>Tareas</h2>
    <ind-tasks-list />
  `,
  styles: ``,
})
class TodoPage {

}
export default TodoPage;
