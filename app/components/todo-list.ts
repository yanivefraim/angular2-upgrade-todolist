import { Component, Input, Inject } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `<ul>
    <li *ngFor="let todo of todos">{{todo}}</li>
  </ul>`
})
export class TodoList {
  todos;

  constructor(@Inject('todosService') todosService) {
    this.todos = todosService.getTodos();
  }
}
